<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource;
use App\Http\Resources\UsersCollection;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UsersCollection::collection(User::all())->additional(['status' => 200
                ]);
    }


    public function search($user)
    {
        //
        $username = $user;
        $user = User::query()->where('username', 'LIKE', "%{$username}%")->get();
        if (count($user)) {
        	return UsersCollection::collection($user)->additional(['status' => 200
                ]);
        } else {

        	return response()->json( ['msg' => 'Nothing found', 'status' => 404], 404);

        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $userid)
    {
        //
        $rules = [
            'username' => 'required|max:255|string',
            'name' => 'required|max:225|string',
            'age' => 'required|integer|max:11|min:1',
            'email' => 'required|max:120|email',
        ];

        $messages = [

            'username.required' => '* This field is required',
            'username.max' => '* This Field is too long',
            'username.string' => '* This field is invalid',

            'name.required' => '* This field is required',
            'name.max' => '* This Field is too long',
            'name.string' => '* This field is invalid',

            'age.required' => '* This field is required',
            'age.max' => '* This Field is too long',
            'age.string' => '* This field is invalid',

            'email.required' => '* This field is required',
            'email.max' => '* This Field is too long',
            'email.string' => '* This field is invalid',
            'email.email' => '* Please enter a valid email, specifically with the "@ symbol"',
            
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {

            return response()->json( ['msg' => $validator->messages(), 'status' => 500], 500);
        }

        $user = (!empty($userid)) ? User::findorFail($userid) : new User;

        $user->name = $request->name;
        $user->username = $request->username;
        $user->age = $request->age;
        $user->email = $request->email;
        $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

        if ($user->save()) {
            return UserResource::make($user)->additional(['status' => 200
                ]);
        } else {
            return response()->json( ['msg' => 'Something went wrong, try again', 'status' => 500], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
        return UserResource::make($user)->additional(['status' => 200
                ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
        if($user->delete()){
            return response()->json([
                'message' => 'User deleted successfully',
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some error occured, try again later',
                'status_code' => 500
            ], 500);
        }
    }
}

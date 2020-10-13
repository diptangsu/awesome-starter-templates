<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{

    public function index()
    {
        //
        return view('user.index');
    }

    public function users()
    {
        //
        $data['users'] = User::get();
        return view('user.users', $data);
    }


    public function search(Request $request)
    {
        //
        $username = $request->query('s');

        $data['search_variable'] = $username;

        $data['users'] = User::query()->where('username', 'LIKE', "%{$username}%")->get();
        
        return view('user.users', $data);
    }


    public function store(Request $request)
    {
        //
        $rules = [
            'username' => 'required|max:255|string',
            'name' => 'required|max:225|string',
            'age' => 'required|integer|min:1',
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

            return redirect()->back()->withInput()->withErrors($validator);
        }

        $user = new User;

        $user->name = $request->name;
        $user->username = $request->username;
        $user->age = $request->age;
        $user->email = $request->email;
        $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

        if ($user->save()) {

            return redirect()->route('users')->with('success', 'User created successfully');

        } else {
            return redirect()->route('users')->with('error', 'Something went wrong');
        }
    }

    public function edit($user)
    {
        //
        $data['edituser'] = User::find($user);
        $data['users'] = User::get();
        return view('user.users', $data);
    }

  
    public function update(Request $request, $userid)
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

            return redirect()->back()->withInput()->withErrors($validator);
        }

        $user = User::findorFail($userid);

        $user->name = $request->name;
        $user->username = $request->username;
        $user->age = $request->age;
        $user->email = $request->email;
        $user->password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

        if ($user->save()) {
            return redirect()->route('users')->with('success', 'User editted successfully');
        } else {
           return redirect()->route('users')->with('error', 'Something went wrong');
        }
    }

    public function destroy(User $user)
    {
        //
        if($user->delete()){
            return redirect()->route('users')->with('success', 'User deleted successfully');
        } else {
            return redirect()->route('users')->with('error', 'Something wrong');
        }
    }
}

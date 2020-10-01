<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', 'Api\UserController@api');
Route::get('users', 'Api\UserController@index');
Route::get('users/{user}', 'Api\UserController@show');
Route::get('users/search/{user}', 'Api\UserController@search');
Route::post('users/{userid}', 'Api\UserController@store');
Route::delete('users/{user}', 'Api\UserController@destroy');

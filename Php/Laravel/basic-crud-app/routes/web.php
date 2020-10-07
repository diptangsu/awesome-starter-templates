<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'UserController@index');
Route::get('users', 'UserController@users')->name('users');
Route::get('users/{user}', 'UserController@edit')->name('user.edit');
Route::get('users/search', 'UserController@search')->name('user.search');
Route::post('users', 'UserController@store')->name('user.create');
Route::post('users/{userid}', 'UserController@update')->name('user.update');
Route::get('users/delete/{user}', 'UserController@destroy')->name('user.delete');

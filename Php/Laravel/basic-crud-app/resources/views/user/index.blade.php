@extends('app')

@section('content')

	<div class="jumbotron">
	  <h1 class="display-4">Basic Crud App</h1>
	  <p class="lead">Website is running</p>
	  <hr class="my-4">
	  <p>Basic Crud App that allows you to add users, delete users, fetch users and search users</p>
	  <a class="btn btn-primary btn-lg" href="{{ route('users') }}">Users</a>
	</div>

@endsection
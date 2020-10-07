@extends('app')

@section('content')
	<div class="jumbotron">
	  <h1 class="display-4">Basic Crud App</h1>
	  <hr class="my-4">
	  <p>Basic Crud App that allows you to add users, delete users, fetch users and search users</p>
	  <a class="btn btn-primary btn-lg" href="{{ route('users') }}">Users</a>
	</div>
	<div class="row">
		<div class="col-md-9">
			<div>
				<form method="get" action="{{ route('user.search') }}">
					<div class="row">
					  <div class="form-group col-md-9">
					    <input type="text" class="form-control" name="s" placeholder="Search user">
					  </div>
					  <div class="col-md-3">
					  	<button type="submit" class="btn btn-primary mb-2">Search</button>
					  </div>
					</div>
				</form>
			</div>
			@if(!empty($search_variable))

				<div class="alert alert-success alert-dismissible fade show" role="alert">
				  <strong>{{ $users->count() }} Founds for {{ $search_variable }}</strong>
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
				</div>

			@endif
			@if($users->count() > 0)
			<table class="table table-striped">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Username</th>
			      <th scope="col">Name</th>
			      <th scope="col">Age</th>
			      <th scope="col">Email</th>
			      <th scope="col">Action</th>
			    </tr>
			  </thead>
			  <tbody>
			  	@php
			  		$counter = 1;
			  	@endphp
			  	@foreach($users as $user)
			    <tr>
			      <th scope="row">{{ $counter }}</th>
			      <td>{{ $user->username }}</td>
			      <td>{{ $user->name }}</td>
			      <td>{{ $user->age }}</td>
			      <td>{{ $user->email }}</td>
			      <td>
			      	<a class="btn btn-danger" href="{{ route('user.delete', $user->id) }}">Delete</a>
			      	<a class="btn btn-primary" href="{{ route('user.edit', $user->id) }}">Edit</a>
			      </td>
			    </tr>
			    @php
			  		$counter++
			  	@endphp
			    @endforeach
			  </tbody>
			</table>
			@endif
		</div>
		<div class="col-md-3">

			@if(!isset($edituser))
				<h6>Create New User</h6>
				<form method="post" action="{{ route('user.create') }}">
					@csrf
				  <div class="form-row">
				    <div class="form-group col-md-6">
				      <label>Username</label>
				      <input type="text" class="form-control" name="username" value="{{ old('username') }}">
				      @if($errors->has('username'))
	                      <p style="color: red">
	                      	{!!  $errors->get('username')[0] !!}
	                      </p>
	                  @endif
				    </div>
				    <div class="form-group col-md-6">
				      <label>Age</label>
				      <input type="number" class="form-control" name="age" value="{{ old('age') }}">
				      @if($errors->has('age'))
	                      <p style="color: red">
	                      	{!!  $errors->get('age')[0] !!}
	                      </p>
	                  @endif
				    </div>
				  </div>
				  <div class="form-group">
				    <label>Name</label>
				    <input type="text" class="form-control" name="name" value="{{ old('name') }}">
				    @if($errors->has('name'))
	                      <p style="color: red">
	                      	{!!  $errors->get('name')[0] !!}
	                      </p>
	                  @endif
				  </div>
				  <div class="form-group">
				    <label>Email</label>
				    <input type="email" class="form-control" name="email" value="{{ old('email') }}">
				    @if($errors->has('email'))
	                      <p style="color: red">
	                      	{!!  $errors->get('email')[0] !!}
	                      </p>
	                  @endif
				  </div>
				  <button type="submit" class="btn btn-primary">Create</button>
				</form>
			@else
				<h6>Edit User</h6>
				<form method="post" action="{{ route('user.update', $edituser->id) }}">
					@csrf
				  <div class="form-row">
				    <div class="form-group col-md-6">
				      <label>Username</label>
				      <input type="text" class="form-control" name="username" value="{{ $edituser->username }}">
				      @if($errors->has('username'))
	                      <p style="color: red">
	                      	{!!  $errors->get('username')[0] !!}
	                      </p>
	                  @endif
				    </div>
				    <div class="form-group col-md-6">
				      <label>Age</label>
				      <input type="number" class="form-control" name="age" value="{{ $edituser->age }}">
				      @if($errors->has('age'))
	                      <p style="color: red">
	                      	{!!  $errors->get('age')[0] !!}
	                      </p>
	                  @endif
				    </div>
				  </div>
				  <div class="form-group">
				    <label>Name</label>
				    <input type="text" class="form-control" name="name" value="{{ $edituser->name }}">
				    @if($errors->has('name'))
	                      <p style="color: red">
	                      	{!!  $errors->get('name')[0] !!}
	                      </p>
	                  @endif
				  </div>
				  <div class="form-group">
				    <label>Email</label>
				    <input type="email" class="form-control" name="email" value="{{ $edituser->email }}">
				    @if($errors->has('email'))
	                      <p style="color: red">
	                      	{!!  $errors->get('email')[0] !!}
	                      </p>
	                  @endif
				  </div>
				  <button type="submit" class="btn btn-primary">Edit</button>
				</form>

			@endif
		</div>
	</div>

@endsection
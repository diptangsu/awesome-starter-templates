<!DOCTYPE html>
<html>
<head>
	<title>Basic Crud App</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

	<div class="container">
		<p></p>
		<p></p>
		@if (session('success'))
		    <div class="alert alert-success alert-dismissible fade show" role="alert">
			  <strong>{{ session('success') }}</strong>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>

		@endif

		@if (session('error'))
		    <div class="alert alert-danger alert-dismissible fade show" role="alert">
			  <strong>{{ session('error') }}</strong>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>

		@endif		
		@yield('content')
	</div>

	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
<!doctype html>
<html lang="en">

<head>
    <!-- Required Meta Tag    -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">

    <!-- Icon -->
    <link rel="icon" href="{{ asset('img/favicon.png') }}">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">

    <!-- Animate CSS -->
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">


    <title>HMTI | CJA</title>
</head>

<body class="bg-primary text-light">
    <div class="container">
        @yield('content')
    </div>
    <script src="{{ asset('js/jquery-3.3.1.slim.js') }}"></script>
    <script src="{{ asset('js/popper.js') }}"></script>
    <script src="{{ asset('js/bootstrap.js') }}"></script>
    <script src="{{ asset('js/custom.js') }}"></script>
</body>

</html>

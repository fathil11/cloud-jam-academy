@extends('layouts.master')
@section('content')
@if ($errors->any())
<br>
<div class="col-md-12">
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <div>
            @foreach ($errors->all() as $error)
            <li>
                <span class="alert-inner--text">{{ $error }}</span>
            </li>
            @endforeach
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</div>
@endif
<form action="{{ url('/') }}" method="POST" autocomplete="off">
    @csrf
    @include('part1')
    @include('part2')
    @include('part3')
    @include('part4')
    @include('part5')
    @include('part6')
    @include('part7')
</form>
@endsection

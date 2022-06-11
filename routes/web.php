<?php

use Illuminate\Support\Facades\Route;


Route::get('/{path?}', function () {
    return view('welcome');
});
Route::prefix('api')->group(function () {
    Route::get('/test', function () {
        return ["sassdasdas" => 'sas'];
    });
});

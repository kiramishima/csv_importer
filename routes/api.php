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


Route::prefix('v1')->group(function () {
    Route::get('/file/{filename}', 'CsvApiController@getFileData');
    Route::post('/file/{filename}/sample', 'CsvApiController@getSampleData');
    Route::post('/file/{filename}/save', 'CsvApiController@remapAndSave');
    Route::post('/upload_csv', 'CsvApiController@upload_csv_file');
});

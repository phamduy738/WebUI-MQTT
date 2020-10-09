<?php

Route::resource('api/v1/device', 'Dnc\Cnc24h\Controllers\API\DeviceAPIController', ['except' => ['destroy', 'create', 'edit']]);
Route::get('api/v1/device/{id}/delete', ['as' => 'api/v1/device.delete', 'uses' => 'Dnc\Cnc24h\Controllers\API\DeviceAPIController@destroy']);
Route::resource('api/v1/factory', 'Dnc\Cnc24h\Controllers\API\FactoryApiController', ['except' => ['destroy', 'create', 'edit']]);
Route::get('api/v1/factory/{id}/delete', ['as' => 'api/v1/factory.delete', 'uses' => 'Dnc\Cnc24h\Controllers\API\FactoryApiController@destroy']);
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('schedule',App\Http\Controllers\ScheduleController::class)->only(['index','store','show','update','destroy']);

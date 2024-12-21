<?php

use App\Http\Controllers\backend\AppointmentController as BackendAppointmentController;
use App\Http\Controllers\backend\DepartmentController;
use App\Http\Controllers\backend\DoctorController;
use App\Http\Controllers\backend\SpecialistController;
use App\Http\Controllers\frontend\AppointmentController;
use App\Http\Controllers\frontend\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('frontend.home');
// });

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');

Route::get('/appointment', [AppointmentController::class, 'create'])->name('frontappointment.create');
Route::post('/appointment', [AppointmentController::class, 'store'])->name('frontappointment.store');

// Route::get('/admin/dashboard', function () {
//     return view('backend.admin_dashboard');
// })->middleware(['auth:admin', 'verified'])->name('admin_dashboard');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
Route::middleware('guest:admin')->prefix('admin')->group(function () {

    Route::get('login', [App\Http\Controllers\Auth\Admin\LoginController::class, 'login'])->name('admin.login');
    Route::post('login', [App\Http\Controllers\Auth\Admin\LoginController::class, 'check_user']);

    //Route::get('register', [App\Http\Controllers\Auth\Admin\RegisterController::class, 'create'])->name('admin.register');
    //Route::post('register', [App\Http\Controllers\Auth\Admin\RegisterController::class, 'store']);

});

Route::middleware('auth:admin')->prefix('admin')->group(function () {

    Route::post('logout', [App\Http\Controllers\Auth\Admin\LoginController::class, 'logout'])->name('admin.logout');

    Route::view('/dashboard', 'backend.admin_dashboard');
    Route::resource('/specialist', SpecialistController::class);
    Route::resource('/doctor', DoctorController::class);
    Route::resource('/appointment', BackendAppointmentController::class);
    Route::get('/appointment/status/{id}', [BackendAppointmentController::class,'changeStatus'])->name('appointment.changeStatus');
    Route::resource('/department', DepartmentController::class);
});
Route::middleware('guest:doctor')->prefix('doctor')->group(function () {

    Route::get('login', [App\Http\Controllers\Auth\Doctor\loginController::class, 'login'])->name('doctor.login');
    Route::post('login', [App\Http\Controllers\Auth\Doctor\loginController::class, 'check_user']);

    //Route::get('register', [App\Http\Controllers\Auth\Admin\RegisterController::class, 'create'])->name('admin.register');
    //Route::post('register', [App\Http\Controllers\Auth\Admin\RegisterController::class, 'store']);

});

Route::middleware('auth:doctor')->prefix('doctor')->group(function () {

    Route::post('logout', [App\Http\Controllers\Auth\Doctor\loginController::class, 'logout'])->name('doctor.logout');

    Route::view('/dashboard', 'backend.doctor_dashboard');
});

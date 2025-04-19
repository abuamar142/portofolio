<?php

use App\Models\Event;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Certificate;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/events', function () {
    $events = Event::all();

    return Inertia::render('events', [
        'events' => $events,
    ]);
})->name('events');

Route::get('/certifications/{id}', function ($id) {
    $event = \App\Models\Event::findOrFail($id);

    return response()->json([
        'message' => "Certification for event: {$event->title}",
    ]);
})->name('certifications.show');

Route::get('/certificates', function () {
    $certificates = Certificate::orderBy('date', 'desc')->get();

    return Inertia::render('certificates', [
        'certificates' => $certificates,
    ]);
})->name('certificates');

Route::get('/certificates/{id}', function ($id) {
    $certificate = Certificate::findOrFail($id);

    return Inertia::render('certificateDetail', [
        'certificate' => $certificate,
    ]);
})->name('certificates.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

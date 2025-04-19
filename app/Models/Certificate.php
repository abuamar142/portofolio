<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'organizer',
        'date',
        'type',
        'drive_file_id',
        'certificate_number',
        'participant_as',
        'description',
        'valid_until',
    ];

    protected $casts = [
        'date' => 'date',
        'valid_until' => 'date',
    ];
}

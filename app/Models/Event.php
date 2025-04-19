<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';

    protected $fillable = [
        'organizer',
        'title',
        'tags',
        'location',
        'date_of_event',
        'certification',
        'certification_url',
        'event_status',
        'description',
        'speaker',
    ];
}

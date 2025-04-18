<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('organizer');
            $table->date('date');
            $table->enum('type', [
                'seminar',
                'certification',
                'certificate',
                'webinar',
                'organization',
                'bootcamp',
                'program',
                'other'
            ])->default('certificate');
            $table->string('drive_file_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};

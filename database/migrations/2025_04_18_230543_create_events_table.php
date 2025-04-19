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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('organizer');
            $table->string('title');
            $table->string('tags');
            $table->string('location');
            $table->date('date_of_event');
            $table->boolean('certification')->default(false);
            $table->string('event_status');
            $table->text('description')->nullable();
            $table->string('speaker')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};

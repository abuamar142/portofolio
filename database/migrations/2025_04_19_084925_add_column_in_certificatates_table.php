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
        Schema::table('certificates', function (Blueprint $table) {
            $table->string('certificate_number')->nullable()->after('type');
            $table->string('participant_as')->nullable()->after('certificate_number');
            $table->text('description')->nullable()->after('participant_as');
            $table->date('valid_until')->nullable()->after('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('certificates', function (Blueprint $table) {
            $table->dropColumn([
                'certificate_number',
                'participant_as',
                'description',
                'valid_until',
            ]);
        });
    }
};

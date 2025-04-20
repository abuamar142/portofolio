<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CertificateResource\Pages;
use App\Models\Certificate;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;

class CertificateResource extends Resource
{
    protected static ?string $model = Certificate::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-check';
    protected static ?string $navigationGroup = 'Data Management';

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('title')->required(),
            TextInput::make('organizer')->required(),
            DatePicker::make('date')->required(),
            Select::make('type')
                ->options([
                    'seminar' => 'Seminar',
                    'certification' => 'Certification',
                    'certificate' => 'Certificate',
                    'webinar' => 'Webinar',
                    'organization' => 'Organization',
                    'bootcamp' => 'Bootcamp',
                    'program' => 'Program',
                    'other' => 'Other',
                ])
                ->required(),
            TextInput::make('certificate_number'),
            TextInput::make('participant_as'),
            Textarea::make('description'),
            DatePicker::make('valid_until'),
            TextInput::make('drive_file_id')->label('Google Drive File ID'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->searchable()->sortable(),
                TextColumn::make('organizer')->searchable(),
                TextColumn::make('date')->dateTime()->sortable(),
                TextColumn::make('type')->sortable(),
                TextColumn::make('participant_as')->searchable(),
                TextColumn::make('certificate_number')->label('No')->searchable(),
                TextColumn::make('valid_until')->dateTime()->label('Valid Until')->sortable(),
                TextColumn::make('drive_file_id')->label('Google Drive File ID')->searchable(),
                TextColumn::make('description')->limit(50)->searchable(),
            ])
            ->defaultSort('updated_at', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ReplicateAction::make()
                    ->label('Duplicate')
                    ->icon('heroicon-o-document-duplicate')
                    ->successRedirectUrl(function (Model $replica) {
                        return static::getUrl('edit', ['record' => $replica->id]);
                    })
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCertificates::route('/'),
            'create' => Pages\CreateCertificate::route('/create'),
            'edit' => Pages\EditCertificate::route('/{record}/edit'),
        ];
    }
}

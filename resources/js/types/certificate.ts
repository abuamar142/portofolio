export interface Certificate {
    id: number;
    title: string;
    organizer: string;
    date: string;
    type: 'seminar' | 'certification' | 'certificate' | 'webinar' | 'organization' | 'bootcamp' | 'program' | 'other';
    drive_file_id?: string | null;
    certificate_number?: string | null;
    participant_as?: string | null;
    description?: string | null;
    valid_until?: string | null;
    created_at?: string;
    updated_at?: string;
}

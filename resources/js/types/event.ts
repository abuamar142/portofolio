export type Event = {
    id: number;
    organizer: string;
    title: string;
    tags: string;
    location: string;
    date_of_event: string;
    certification: boolean;
    certification_url: string;
    event_status: string;
    description?: string;
    speaker?: string;
};

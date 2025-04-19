import { Head, Link } from '@inertiajs/react';
import { Event } from '../types/event';

export default function Events({ events }: { readonly events: readonly Event[] }) {
    return (
        <>
            <Head title="Events"></Head>

            <div className="pb flex flex-col items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
                {/* 🔹 Header */}
                <header className="bg-opacity-90 fixed top-0 left-0 w-full py-4 shadow-md backdrop-blur-md">
                    <div className="container mx-auto flex items-center justify-between px-6">
                        <div className="text-xl font-bold">
                            <Link href="/" className="transition hover:text-blue-500">
                                Home
                            </Link>
                        </div>
                    </div>
                </header>

                {/* 🔹 Main Content */}
                <main className="flex min-h-screen w-full flex-col items-center justify-center px-2 pt-20 pb-6 text-center">
                    <h1 className="mb-6 text-5xl font-extrabold text-blue-500">Events</h1>
                    <div className="w-full overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead className="bg-gray-200 dark:bg-gray-800">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Organizer</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Title</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Date</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Location</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Tags</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Speaker</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center dark:border-gray-700">Certification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, index) => (
                                    <tr key={event.id} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'}>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">{event.organizer}</td>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">{event.title}</td>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
                                            {new Date(event.date_of_event).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">{event.location}</td>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">{event.tags}</td>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">{event.speaker ?? 'N/A'}</td>
                                        <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
                                            {event.certification_url ? (
                                                <iframe
                                                    src={`https://drive.google.com/file/d/${event.certification_url}/preview`}
                                                    className="h-32 w-full border-none"
                                                    allow="autoplay"
                                                    title={`Certification for ${event.title}`}
                                                />
                                            ) : (
                                                'No Certification'
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}

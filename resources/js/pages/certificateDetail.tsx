import { Head, Link } from '@inertiajs/react';
import { Certificate } from '../types/certificate';

export default function CertificateDetail({ certificate }: Readonly<{ certificate: Certificate }>) {
    return (
        <>
            <Head title={`Certificate - ${certificate.title}`} />

            <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
                {/* 🔹 Header */}
                <header className="bg-opacity-90 fixed top-0 left-0 w-full py-4 shadow-md backdrop-blur-md">
                    <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
                        <div className="text-lg font-bold sm:text-xl">
                            <Link href="/certificates" className="transition hover:text-blue-500">
                                Back to Certificates
                            </Link>
                        </div>
                    </div>
                </header>

                {/* 🔹 Main Content */}
                <main className="flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:pt-24">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-2 text-3xl font-extrabold text-blue-500 sm:text-5xl">{certificate.title}</h1>
                        <p className="text-base sm:text-lg">{certificate.organizer}</p>
                    </div>
                    <div className="mt-6 flex h-full w-full flex-1 items-center justify-center">
                        {certificate.drive_file_id ? (
                            <iframe
                                src={`https://drive.google.com/file/d/${certificate.drive_file_id}/preview`}
                                className="h-[50vh] w-full border-none sm:h-[60vh] sm:w-[80%]"
                                allow="autoplay"
                                title={`Certificate Preview for ${certificate.title}`}
                            />
                        ) : (
                            <p className="text-sm sm:text-base">No Preview Available</p>
                        )}
                    </div>
                </main>

                {/* 🔹 Footer */}
                <footer className="w-full bg-gray-200 px-4 py-4 text-center dark:bg-gray-800">
                    <p className="text-sm sm:text-base">
                        {[
                            certificate.date &&
                                `Date: ${new Date(certificate.date).toLocaleDateString('id-ID', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}`,
                            certificate.type && `Type: ${certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}`,
                            certificate.certificate_number && `Certificate Number: ${certificate.certificate_number}`,
                            certificate.participant_as && `Participant As: ${certificate.participant_as}`,
                            certificate.description && `Description: ${certificate.description}`,
                            certificate.valid_until &&
                                `Valid Until: ${new Date(certificate.valid_until).toLocaleDateString('id-ID', {
                                    weekday: 'long',
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}`,
                        ]
                            .filter(Boolean)
                            .join(' | ')}
                    </p>
                </footer>
            </div>
        </>
    );
}

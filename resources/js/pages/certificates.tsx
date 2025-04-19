import { Head, Link } from '@inertiajs/react';
import { Certificate } from '../types/certificate';

const Header = () => (
    <header className="bg-opacity-90 fixed top-0 left-0 w-full py-4 shadow-md backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
            <div className="text-lg font-bold sm:text-xl">
                <Link href="/" className="transition hover:text-blue-500">
                    Home
                </Link>
            </div>
        </div>
    </header>
);

const CertificateTable = ({ certificates }: { certificates: readonly Certificate[] }) => (
    <table className="hidden w-full border-collapse border border-gray-300 text-sm sm:text-base md:table dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
                {['Title', 'Organizer', 'Date', 'Type', 'Actions'].map((heading) => (
                    <th key={heading} className="border border-gray-300 px-2 py-2 text-center sm:px-4 dark:border-gray-700">
                        {heading}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {certificates.map((certificate, index) => (
                <tr key={certificate.id} className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'}>
                    <td className="border border-gray-300 px-2 py-2 sm:px-4 dark:border-gray-700">{certificate.title}</td>
                    <td className="border border-gray-300 px-2 py-2 sm:px-4 dark:border-gray-700">{certificate.organizer}</td>
                    <td className="border border-gray-300 px-2 py-2 sm:px-4 dark:border-gray-700">
                        {new Date(certificate.date).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 sm:px-4 dark:border-gray-700">
                        {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}
                    </td>
                    <td className="border border-gray-300 px-2 py-4 sm:px-4 dark:border-gray-700">
                        <Link
                            href={`/certificates/${certificate.id}`}
                            className="inline-block rounded-lg bg-blue-500 px-2 py-1 text-xs text-white shadow-lg transition hover:bg-blue-600 sm:px-4 sm:py-2 sm:text-sm"
                        >
                            View Details
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const CertificateCard = ({ certificate }: { certificate: Certificate }) => (
    <div className="rounded-lg border bg-white p-4 shadow-md dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-blue-500">{certificate.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Organizer:</strong> {certificate.organizer}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Date:</strong>{' '}
            {new Date(certificate.date).toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            })}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Type:</strong> {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}
        </p>
        <div className="mt-4">
            <Link
                href={`/certificates/${certificate.id}`}
                className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg transition hover:bg-blue-600"
            >
                View Details
            </Link>
        </div>
    </div>
);

const CertificateCards = ({ certificates }: { certificates: readonly Certificate[] }) => (
    <div className="block w-full space-y-4 md:hidden">
        {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
    </div>
);

export default function Certificates({ certificates }: { readonly certificates: readonly Certificate[] }) {
    return (
        <>
            <Head title="Certificates" />
            <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
                <Header />
                <main className="flex min-h-screen w-full flex-col items-center justify-start px-4 pt-20 pb-6 text-center sm:px-6">
                    <h1 className="mb-6 text-3xl font-extrabold text-blue-500 sm:text-5xl">Certificates</h1>
                    <div className="w-full overflow-x-auto">
                        <CertificateTable certificates={certificates} />
                        <CertificateCards certificates={certificates} />
                    </div>
                </main>
            </div>
        </>
    );
}

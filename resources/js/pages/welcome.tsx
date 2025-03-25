import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Abu Amar - Portfolio">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>
            <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
                <header className="sticky top-0 w-full bg-white py-6 shadow-md dark:bg-gray-800">
                    <div className="container mx-auto flex items-center justify-between px-6">
                        <div className="text-2xl font-bold text-gray-800 dark:text-white">Abu Amar</div>
                        <nav className="space-x-4">
                            <Link href="#about" className="text-gray-800 hover:underline dark:text-white">
                                About
                            </Link>
                            <Link href="#projects" className="text-gray-800 hover:underline dark:text-white">
                                Projects
                            </Link>
                            <Link href="#skills" className="text-gray-800 hover:underline dark:text-white">
                                Skills
                            </Link>
                            <Link href="#contact" className="text-gray-800 hover:underline dark:text-white">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </header>
                <main className="container mx-auto flex flex-col items-center px-6 py-12">
                    <section id="about" className="mb-12 flex min-h-screen w-full max-w-4xl flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">About Me</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Saya merupakan mahasiswa Informatika yang sekarang berfokus pada pengembangan aplikasi mobile dengan Flutter dan Kotlin,
                            saya memiliki minat yang tinggi untuk memperdalam pengetahuan di bidang Teknologi.
                        </p>
                    </section>
                    <section id="projects" className="mb-12 flex min-h-screen w-full max-w-4xl flex-col justify-center">
                        <h2 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">Projects</h2>
                        <ul className="space-y-4">
                            <li>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Project 1</h3>
                                <p className="text-gray-600 dark:text-gray-300">Description of project 1.</p>
                            </li>
                            <li>
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Project 2</h3>
                                <p className="text-gray-600 dark:text-gray-300">Description of project 2.</p>
                            </li>
                        </ul>
                    </section>
                    <section id="skills" className="mb-12 flex min-h-screen w-full max-w-4xl flex-col justify-center">
                        <h2 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">Skills</h2>
                        <ul className="space-y-2">
                            <li className="text-lg text-gray-600 dark:text-gray-300">Mobile Developer – Flutter and Kotlin</li>
                            <li className="text-lg text-gray-600 dark:text-gray-300">Spreadsheet atau Excel</li>
                            <li className="text-lg text-gray-600 dark:text-gray-300">Event, Task, and Time Management</li>
                        </ul>
                    </section>
                    <section id="contact" className="mb-12 flex min-h-screen w-full max-w-4xl flex-col justify-center">
                        <h2 className="mb-4 text-3xl font-semibold text-gray-800 dark:text-white">Contact</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            If you would like to get in touch, please email me at{' '}
                            <a href="mailto:abuamar.albadawi@gmail.com" className="text-blue-500">
                                abuamar.albadawi@gmail.com
                            </a>
                        </p>
                    </section>
                </main>
                <footer className="w-full bg-white py-6 shadow-md dark:bg-gray-800">
                    <div className="container mx-auto text-center text-gray-800 dark:text-white">
                        &copy; {new Date().getFullYear()} Abu Amar. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}

import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Welcome() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Menyesuaikan tema dark mode
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    return (
        <>
            <Head title="Abu Amar - Portfolio">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>

            <div className={`flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {/* 🔹 Navbar */}
                <header className="bg-opacity-90 fixed top-0 left-0 w-full py-4 shadow-md backdrop-blur-md">
                    <div className="container mx-auto flex items-center justify-between px-6">
                        <div className="text-xl font-bold">Abu Amar</div>
                        <nav className="hidden space-x-6 md:flex">
                            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <Link key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-blue-500">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </header>

                {/* 🔹 Hero Section */}
                <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-5xl leading-tight font-extrabold md:text-6xl">
                        Hi, I’m <span className="text-blue-500">Abu Amar</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        I’m a passionate Mobile Developer specializing in Flutter and Kotlin, with a strong interest in technology and innovation.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <a href="#contact" className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition hover:bg-blue-600">
                            Get in Touch
                        </a>
                        <a
                            href="#projects"
                            className="rounded-lg border border-blue-500 px-6 py-3 text-blue-500 shadow-lg transition hover:bg-blue-500 hover:text-white"
                        >
                            View Projects
                        </a>
                    </div>
                </main>

                {/* 🔹 About Section */}
                <section id="about" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">About Me</h2>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        Saya merupakan mahasiswa Informatika yang sekarang berfokus pada pengembangan aplikasi mobile dengan Flutter dan Kotlin. Saya
                        memiliki minat yang tinggi untuk memperdalam pengetahuan di bidang teknologi.
                    </p>
                </section>

                {/* 🔹 Projects Section */}
                <section id="projects" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">Projects</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {['Project 1', 'Project 2'].map((project, index) => (
                            <div key={index} className="rounded-lg bg-white p-6 shadow-lg transition hover:scale-105 dark:bg-gray-800">
                                <h3 className="text-2xl font-semibold">{project}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Description of {project.toLowerCase()}.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 🔹 Skills Section */}
                <section id="skills" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Flutter & Kotlin', 'Spreadsheet / Excel', 'Event & Time Management'].map((skill, index) => (
                            <div key={index} className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 🔹 Contact Section */}
                <section id="contact" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">Contact</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        If you would like to get in touch, please email me at{' '}
                        <a href="mailto:abuamar.albadawi@gmail.com" className="text-blue-500 underline">
                            abuamar.albadawi@gmail.com
                        </a>
                    </p>
                </section>

                {/* 🔹 Footer */}
                <footer className="bg-opacity-90 w-full py-6 text-center text-gray-800 backdrop-blur-md dark:text-white">
                    &copy; {new Date().getFullYear()} Abu Amar. All rights reserved.
                </footer>
            </div>
        </>
    );
}

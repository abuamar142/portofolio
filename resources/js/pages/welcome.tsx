import { Head, Link } from '@inertiajs/react';
import { contacts, name, projects, skills } from '../configs/portofolio';

export default function Welcome() {
    return (
        <>
            <Head title="Abu Amar">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>

            <div className={'flex flex-col items-center justify-center bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'}>
                {/* 🔹 Navbar */}
                <header className="bg-opacity-90 fixed top-0 left-0 w-full py-4 shadow-md backdrop-blur-md">
                    <div className="container mx-auto flex items-center justify-between px-6">
                        <div className="text-xl font-bold">
                            <Link href="#main" className="transition hover:text-blue-500">
                                {name}
                            </Link>
                        </div>
                        <nav className="hidden space-x-6 md:flex">
                            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <Link key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-blue-500">
                                    {item}
                                </Link>
                            ))}
                            <Link href="/events" className="transition hover:text-blue-500">
                                Events
                            </Link>
                        </nav>
                    </div>
                </header>

                {/* 🔹 Hero Section */}
                <main id="main" className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 text-center">
                    <h1 className="text-5xl leading-tight font-extrabold md:text-6xl">
                        Hi, I'm <span className="text-blue-500">{name}</span>
                    </h1>
                    <div>
                        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                            I’m a passionate <b>Full Stack Developer</b> specializing in <b>Flutter multi-platform</b>, dedicated to technology and
                            innovation. I adapt quickly to any required technology, delivering <b>high-quality, scalable solutions</b> tailored to
                            client needs. <b>Client satisfaction</b> is my priority. Let’s build something amazing together!
                        </p>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <a href="#contact" className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition hover:bg-blue-600">
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="rounded-lg border border-blue-500 px-6 py-3 text-blue-500 shadow-lg transition hover:bg-blue-500 hover:text-white"
                        >
                            View Projects
                        </a>
                        <Link href="/events" className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg transition hover:bg-blue-600">
                            View Events
                        </Link>
                    </div>
                </main>

                {/* 🔹 About Section */}
                <section id="about" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold text-blue-500">About Me</h2>
                    <div className="mx-auto max-w-3xl space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            I am an Informatics student currently focusing on multi-platform application development using Flutter. I have a strong
                            passion for expanding my knowledge in the field of technology.
                        </p>
                        <p>
                            I am currently in my 8th semester at Jenderal Achmad Yani University, Yogyakarta, majoring in Informatics, and working on
                            my thesis related to mobile application development.
                        </p>
                        <p>
                            In my 6th semester, I participated in the Bangkit program organized by MBKM. Now, in my 7th and 8th semesters, I am
                            interning at Refactory, a software house company, where I continue to enhance my skills in software development.
                        </p>
                    </div>
                </section>

                {/* 🔹 Projects Section */}
                <section id="projects" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">Projects</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {projects.map((project) => (
                            <a
                                href={project.link || '#projects'}
                                key={project.id}
                                target={project.link ? '_blank' : '_self'}
                                className="rounded-lg bg-white p-6 shadow-lg transition hover:scale-105 dark:bg-gray-800"
                            >
                                <h3 className="text-2xl font-semibold">{project.name}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}.</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 🔹 Skills Section */}
                <section id="skills" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill) => (
                            <div key={skill} className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-lg">
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 🔹 Contact Section */}
                <section id="contact" className="container mx-auto px-6 py-16 text-center">
                    <h2 className="mb-6 text-3xl font-semibold">Contact</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">If you want to contact me, please contact me here</p>
                    <div className="mt-6 flex justify-center space-x-4">
                        {contacts.map((contact) => (
                            <a key={contact.link} href={contact.link} className="text-blue-500 transition hover:text-blue-600">
                                <i className={`${contact.icon} fa-2x`}></i>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 🔹 Footer */}
                <footer className="bg-opacity-90 w-full py-6 text-center text-gray-800 backdrop-blur-md dark:text-white">
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </footer>
            </div>
        </>
    );
}

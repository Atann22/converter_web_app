import React from 'react';

export default function AboutPage() {
    const teamMembers = [
        { name: "Abhinaya Aghni Fadilla", role: "Product Manager" },
        { name: "Zahrah Syifa Zain", role: "Front-End" },
        { name: "Fadiyah Irbati", role: "Back-End" },
        { name: "Zaky Arkan Zidan", role: "Back-End Infra" }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 -mt-6 sm:-mt-15">
            {/* --- DESCRIPTION --- */}
            <section className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                <h1 className="text-2xl sm:text-4xl font-bold mb-7 text-slate-800 dark:text-slate-100">
                    About Us
                </h1>

                <div className="space-y-5 mx-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    <p>
                        ( Project Name ) is a web-based image tool designed to help users convert, compress, and resize images quickly and easily.
                    </p>
                    <p>
                        Our goal is to provide a simple, accessible, and efficient solution for everyday image processing needs without requiring complex software or technical expertise.
                    </p>
                    <p>
                        This project was developed by a team of aspiring software developers who are passionate about learning, collaborating, and building real-world applications. What started as a learning project has become an opportunity for us to apply modern development practices while creating a product that can be useful for many people.
                    </p>
                    <p>
                        As we continue to grow and improve our skills, we aim to enhance this platform with more features and deliver an even better experience for our users.
                    </p>
                </div>
            </section>

            {/* --- TEAM --- */}
            <section className="text-center">
                <h2 className="text-xl sm:text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100">
                    Meet The Team
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 justify-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 aspect-square shrink-0 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-4 text-slate-400 dark:text-slate-500">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                                {member.name}
                            </h3>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                                {member.role}
                            </p>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
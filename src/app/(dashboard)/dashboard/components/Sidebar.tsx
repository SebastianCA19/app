"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/dashboard/resume', label: 'Hojas de vida' },
        { href: '/dashboard/vacations', label: 'Vacaciones' },
        { href: '/dashboard/movimientos', label: 'Movimientos' },
        { href: '/dashboard/noticias', label: 'Noticias' },
        { href: '/dashboard/articulos', label: 'Articulos' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-4 right-0 z-50 p-2 bg-red-300 rounded-l-lg shadow-lg hover:bg-red-400 transition-colors duration-200"
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
  className={`
    fixed md:sticky md:top-0
    left-0
    flex flex-col justify-between
    w-64
    md:h-screen
    h-full
    bg-white shadow-xl rounded-r-3xl overflow-hidden
    z-40
    transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
  `}
>
                {/* Logo Section */}
                <div className="pt-6 px-6 flex justify-center">
                    <img
                        src="/logo.svg"
                        alt="Logo de Sucre que Queremos"
                        className="w-16 h-16 grayscale"
                    />
                </div>

                {/* Divider */}
                <div className="flex justify-center px-6 my-4">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2 py-2 space-y-1">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`
                                flex items-center gap-3 px-4 py-3 font-medium rounded-r-lg 
                                border-l-4 transition-all duration-200
                                ${isActive(item.href)
                                    ? 'border-l-red-600 bg-red-50 text-red-600'
                                    : 'border-l-transparent text-neutral-700 hover:border-l-red-600 hover:bg-red-50 hover:text-red-600'
                                }
                            `}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>


                {/* User Profile Section */}
                <div>
                    <div className="flex items-center gap-3 p-3">
                        {/* Avatar with Initials */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                            JD
                        </div>
                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-neutral-800 truncate">
                                John Doe
                            </p>
                            <p className="text-xs text-neutral-500 truncate">
                                john.doe@example.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center px-6 my-3">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                </div>

                {/* Logout Button */}
                <div className="pb-6 px-4">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 font-semibold rounded-r-lg border-l-4 border-l-red-400 hover:border-l-red-600 hover:bg-red-50 transition-all duration-200 group hover:cursor-pointer"
                    onClick={() => {
                          window.location.href = "/login";
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                            />
                        </svg>
                        <span className="text-sm">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
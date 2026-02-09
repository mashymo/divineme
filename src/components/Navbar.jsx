import {useState} from 'react';
import {Link} from 'react-router-dom';

import {NavLink} from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black text-white px-6 py-4 relative z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif tracking-wider hover:text-[#d2b48c] transition-colors">
                    DIVINE ME
                </Link>

                {/* Desktop Links */}
                <div className="hidden sm:flex gap-8">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `hover:text-[#d2b48c] transition-colors duration-300 ${isActive ? 'text-[#d2b48c]' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({isActive}) =>
                            `hover:text-[#d2b48c] transition-colors duration-300 ${isActive ? 'text-[#d2b48c]' : ''}`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/about-me"
                        className={({isActive}) =>
                            `hover:text-[#d2b48c] transition-colors duration-300 ${isActive ? 'text-[#d2b48c]' : ''}`
                        }
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/faq"
                        className={({isActive}) =>
                            `hover:text-[#d2b48c] transition-colors duration-300 ${isActive ? 'text-[#d2b48c]' : ''}`
                        }
                    >
                        FAQ
                    </NavLink>
                </div>

                {/* Hamburger Button */}
                <button
                    className="sm:hidden focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen ? "true" : "false"} // Updated for accessibility
                >
                    <svg
                        className="w-7 h-7 transition-transform duration-300 ease-in-out" // Smooth transition on icon change
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden absolute top-full left-0 w-full bg-black border-t border-neutral-800 transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="flex flex-col py-4">
                    <NavLink
                        to="/"
                        className="px-6 py-3 hover:bg-neutral-900 hover:text-[#d2b48c] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="px-6 py-3 hover:bg-neutral-900 hover:text-[#d2b48c] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/about-me"
                        className="px-6 py-3 hover:bg-neutral-900 hover:text-[#d2b48c] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/faq"
                        className="px-6 py-3 hover:bg-neutral-900 hover:text-[#d2b48c] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        FAQ
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

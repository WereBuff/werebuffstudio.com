import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaLinkedin, FaTiktok, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Layout = ({ children }) => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About us' },
        { path: '/kumarn', label: 'Games' },
        { path: '/news', label: 'News' },
        { path: '/career', label: 'Career' },
    ];

    const socialLinks = [
        { icon: FaXTwitter, url: 'https://x.com/werebuffstudio', label: 'X' },
        { icon: FaYoutube, url: 'https://www.youtube.com/@WEREBUFFSTUDIO', label: 'YouTube' },
        { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61579618732870', label: 'Facebook' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/company/werebuff-studio/', label: 'LinkedIn' },
        { icon: FaTiktok, url: 'https://www.tiktok.com/@werebuffstudio', label: 'TikTok' },
        { icon: FaDiscord, url: 'https://discord.com/invite/sfGVWFxQN8', label: 'Discord' },
    ];

    const legalLinks = [
        { path: '/privacy-policy', label: 'Privacy Policy' },
        { path: '/terms', label: 'Terms of Service' },
        { path: '/cookie-policy', label: 'Cookie Policy' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src="/assets/images/StudioLogo.png"
                                alt="Werebuff Studio"
                                className="h-8 md:h-10"
                            />
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`font-heading transition-colors duration-300 ${isActive(link.path)
                                        ? 'text-brand-red'
                                        : 'text-brand-white hover:text-brand-red'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-brand-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;

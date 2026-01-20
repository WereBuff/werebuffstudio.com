import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaLinkedin, FaTiktok, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Section from './Section';

const FooterSection = () => {
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
        <Section className="flex items-end justify-center bg-black px-6 py-20">
            <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 justify-items-center">
                    {/* Contact Info */}
                    <div className="text-center">
                        <h3 className="text-brand-red font-heading font-bold text-xl mb-4">Contact</h3>
                        <p className="text-brand-white mb-2">werebuff.hr@gmail.com</p>
                        <p className="text-brand-white text-sm">
                            333/3 Ratchadanivej Soi 19,<br />
                            Bangkok, Thailand 10310
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-brand-red font-heading font-bold text-xl mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-brand-white hover:text-brand-red transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="text-center">
                        <h3 className="text-brand-red font-heading font-bold text-xl mb-4">Legal</h3>
                        <div className="space-y-2">
                            {legalLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-brand-white hover:text-brand-red transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-white hover:text-brand-red transition-colors duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm">
                    <p>© 2025 Werebuff studio co., ltd. All rights reserved.</p>
                </div>
            </div>
        </Section>
    );
};

export default FooterSection;

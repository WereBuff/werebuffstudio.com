import { useState } from 'react';
import Section from '../components/Section';
import FooterSection from '../components/FooterSection';

const About = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (could send to backend or email service)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="snap-container">
            {/* Section 1: Studio Story with Background */}
            <Section className="relative flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src="/assets/game/show9.jpg"
                        alt="Werebuff Studio Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl px-6 text-center">
                    <h1 className="heading-red mb-8 text-shadow">WEREBUFF STUDIO</h1>
                    <div className="space-y-6 body-text text-shadow">
                        <p>
                            We are an independent game studio based in Thailand, creating original games with a strong
                            focus on experience, atmosphere, and creative identity. We are a small team of artists, designers,
                            and developers who believe that games should feel personal — not mass-produced.
                        </p>
                        <p>
                            We started Werebuff Studio because we wanted to make the kinds of games we love to play:
                            games with their own voice, their own world, and their own way of connecting with players
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 2: Contact Form & Map */}
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info & Form */}
                        <div>
                            {/* Contact Info */}
                            <div className="mb-8">
                                <h3 className="text-brand-red font-heading font-bold text-2xl mb-4">
                                    Contact Information
                                </h3>
                                <div className="space-y-2 text-brand-white">
                                    <p><strong>Tel:</strong> 02-275-4520</p>
                                    <p><strong>Email:</strong> werebuff.business@gmail.com</p>
                                    <p><strong>Address:</strong> 333/3 Ratchadanivej Soi 19, Bangkok, Thailand 10310</p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-brand-white mb-2">
                                        Full Name <span className="text-brand-red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 text-brand-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-brand-white mb-2">
                                        Email <span className="text-brand-red">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 text-brand-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-brand-white mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-800 text-brand-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-brand-white mb-2">
                                        Subject <span className="text-brand-red">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 text-brand-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-brand-white mb-2">
                                        Message <span className="text-brand-red">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="3"
                                        className="w-full px-4 py-3 bg-gray-800 text-brand-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Google Map */}
                        <div className="flex items-center">
                            <div className="w-full h-[500px] rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.3847!2d100.585476!3d13.774528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ2JzI4LjMiTiAxMDDCsDM1JzA3LjciRQ!5e0!3m2!1sen!2sth!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Werebuff Studio Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Footer Section */}
            <FooterSection />
        </div>
    );
};

export default About;

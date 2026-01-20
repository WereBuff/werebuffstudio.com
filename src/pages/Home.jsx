import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import FooterSection from '../components/FooterSection';
import NewsModal from '../components/NewsModal';
import { newsData } from '../data/newsData';

const Home = () => {
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openNewsModal = (news) => {
        setSelectedNews(news);
        setIsModalOpen(true);
    };

    const closeNewsModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedNews(null), 300);
    };

    return (
        <div className="snap-container">
            {/* Section 1: Hero with Video Background */}
            <Section className="relative flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <iframe
                        src="https://www.youtube.com/embed/b27SOnl8GkE?autoplay=1&mute=1&loop=1&playlist=b27SOnl8GkE&controls=0&showinfo=0&rel=0&modestbranding=1"
                        title="Kumarn Background Video"
                        className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
            </Section>

            {/* Section 2: Welcome Intro */}
            <Section className="flex items-center justify-center bg-black px-6">
                <div className="max-w-4xl text-center">
                    <h2 className="heading-red mb-8">WELCOME TO OUR STUDIO!</h2>
                    <p className="body-text">
                        Founded in 2023, Werebuff Studio is a creative game development company driven by passion,
                        innovation, and storytelling. We specialize in crafting immersive horror experiences that
                        blend Thai culture with atmospheric gameplay. Our mission is to create games that resonate
                        with players worldwide while celebrating our unique heritage.
                    </p>
                </div>
            </Section>


            {/* Section 3: Game Teaser */}
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-7xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Character Image */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/assets/game/KumarnRunFade.png"
                                alt="Kumarn Running Away"
                                className="w-3/4 lg:w-full max-w-md h-auto"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="text-center lg:text-left">
                            <p className="text-brand-white text-lg mb-4">A HAUNTING THAI HORROR ADVENTURE GAME</p>
                            <h2 className="heading-red mb-6">KUMARN : THE WANDERING SPIRIT</h2>
                            <div className="body-text mb-8 space-y-4">
                                <p>
                                    A dark and atmospheric horror adventure inspired by chilling Thai folklore.
                                    You play Kumarn, a childlike spirit once worshipped at a village shrine,
                                    now torn from his sacred home and cast into a haunted world of restless ghosts
                                    and cursed places.
                                </p>
                                <p>
                                    With your loyal zebra companion, journey through forgotten temples,
                                    haunted villages and forsaken graveyards to rediscover where you truly belong.
                                </p>
                            </div>
                            <Link to="/kumarn" className="btn-primary">
                                View game →
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 4: Latest News */}
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-7xl w-full">
                    <h2 className="heading-red text-center mb-12">LATEST NEWS</h2>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {newsData.slice(0, 3).map((news) => (
                            <div
                                key={news.id}
                                className="card"
                                onClick={() => openNewsModal(news)}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x300/000000/FF0000?text=Kumarn+News';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-brand-red font-heading font-bold text-xl mb-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-brand-white text-sm line-clamp-3">
                                        {news.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Go to News Page Link */}
                    <div className="text-center">
                        <Link to="/news" className="btn-primary">
                            GO TO NEWS PAGE
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Section 5: Careers Preview */}
            <Section className="flex items-center justify-center bg-black px-6">
                <div className="max-w-4xl text-center">
                    <h2 className="heading-red mb-8">CAREERS DEVELOPMENT</h2>
                    <p className="body-text mb-8">
                        Interested in joining us? Team up with Werebuff Studio and help us create
                        unforgettable gaming experiences. We're always looking for talented individuals
                        who share our passion for storytelling and innovation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/career" className="btn-primary">
                            Learn More
                        </Link>
                        <a href="mailto:werebuff.hr@gmail.com" className="btn-primary">
                            Apply Now
                        </a>
                    </div>
                </div>
            </Section>

            {/* Footer Section */}
            <FooterSection />

            {/* News Modal */}
            <NewsModal news={selectedNews} isOpen={isModalOpen} onClose={closeNewsModal} />
        </div>
    );
};

export default Home;

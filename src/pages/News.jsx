import Section from '../components/Section';
import FooterSection from '../components/FooterSection';
import { newsData } from '../data/newsData';

const News = () => {
    return (
        <div className="snap-container">
            <Section className="flex items-center justify-center bg-black px-6 py-20">
                <div className="max-w-7xl w-full">
                    <h1 className="heading-red text-center mb-12">NEWS</h1>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsData.map((news) => (
                            <a
                                key={news.id}
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x300/000000/FF0000?text=Kumarn+News';
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-brand-red font-heading font-bold text-2xl mb-3">
                                        {news.title}
                                    </h2>
                                    <p className="text-brand-white mb-4 line-clamp-3">
                                        {news.description}
                                    </p>
                                    {news.source && (
                                        <p className="text-gray-400 text-sm">Source: {news.source}</p>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Footer Section */}
            <FooterSection />
        </div>
    );
};

export default News;

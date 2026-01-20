import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const NewsModal = ({ news, isOpen, onClose }) => {
    if (!news) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-brand-white hover:text-brand-red transition-colors duration-300"
                        >
                            <IoClose size={32} />
                        </button>

                        {/* News Content */}
                        <div className="space-y-6">
                            {/* Image */}
                            {news.image && (
                                <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/800x400/000000/FF0000?text=Kumarn+News';
                                        }}
                                    />
                                </div>
                            )}

                            {/* Title */}
                            <h2 className="heading-red">{news.title}</h2>

                            {/* Description */}
                            <p className="body-text">{news.description}</p>

                            {/* Source */}
                            {news.source && (
                                <p className="text-gray-400 font-body">Source: {news.source}</p>
                            )}

                            {/* Read More Button */}
                            <a
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block"
                            >
                                Read Full Article
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NewsModal;

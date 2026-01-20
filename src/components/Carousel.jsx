import { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Carousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Use actual game screenshots
    const defaultImages = [
        '/assets/game/show4.png',
        '/assets/game/show5.png',
        '/assets/game/show6.png',
        '/assets/game/show7.jpg',
        '/assets/game/show8.jpg',
        '/assets/game/show9.jpg',
    ];

    const displayImages = images.length > 0 ? images : defaultImages;

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [displayImages.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-full group">
            {/* Main Image */}
            <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                    src={displayImages[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                />
            </div>

            {/* Previous Button */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-brand-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <IoChevronBack size={24} />
            </button>

            {/* Next Button */}
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-brand-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <IoChevronForward size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {displayImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-brand-red w-8'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

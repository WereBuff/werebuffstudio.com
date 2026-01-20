import { useState } from 'react';

const CharacterSwitcher = () => {
    const [selectedCharacter, setSelectedCharacter] = useState('kumarn');

    const characters = {
        kumarn: {
            name: 'KUMARN',
            subtitle: 'A CHILDLIKE SPIRIT',
            mainImage: '/assets/characters/Kumarn Character 1.png',
            sideImage: '/assets/characters/Zeb2.png',
            description: [
                'The spirit of a lost child who awakens in a haunting world between life and death. Kumarn must navigate through eerie landscapes, solve ancient puzzles, and confront malevolent forces to discover the truth about their past and find peace.',
                'Trapped in a realm where Thai folklore comes alive, Kumarn\'s journey is one of discovery, fear, and ultimately, redemption. Will you help this wandering spirit find their way home?'
            ]
        },
        zebra: {
            name: 'ZEBRA',
            subtitle: 'A TRUSTY COMPANION',
            mainImage: '/assets/characters/Zeb1.png',
            sideImage: '/assets/characters/Kumarn Character 2.png',
            description: [
                'A trusty spirit companion that Kumarn finds along his journey through this haunting world. Quiet but loyal, Zebra stays by Kumarn\'s side, helping him move forward through unknown and dangerous paths.',
                'In a place where everything feels lost, Zebra becomes the one presence Kumarn can truly rely on.'
            ]
        }
    };

    const currentChar = characters[selectedCharacter];
    const otherChar = selectedCharacter === 'kumarn' ? 'zebra' : 'kumarn';

    return (
        <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Character Images */}
                <div className="order-2 lg:order-1 relative flex items-center justify-center gap-8">
                    {/* Main Character Image */}
                    <img
                        src={currentChar.mainImage}
                        alt={`${currentChar.name} Character`}
                        className="w-2/5 h-auto rounded-lg shadow-2xl transition-all duration-500"
                    />

                    {/* Side Character Image (Clickable) */}
                    <img
                        src={currentChar.sideImage}
                        alt={`${characters[otherChar].name} Character`}
                        onClick={() => setSelectedCharacter(otherChar)}
                        className="w-2/5 h-auto rounded-lg shadow-2xl opacity-50 hover:opacity-70 cursor-pointer transition-all duration-500"
                    />
                </div>

                {/* Character Description */}
                <div className="order-1 lg:order-2">
                    <h2 className="heading-red mb-6">
                        {currentChar.name} | {currentChar.subtitle}
                    </h2>
                    {currentChar.description.map((paragraph, index) => (
                        <p key={index} className={`body-text ${index > 0 ? 'mt-6' : ''}`}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterSwitcher;

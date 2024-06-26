import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Icons = ({ person }) => {
    let iconsData = [];

    if (person === 'Carlos') {
        iconsData = [
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/carlos-mart%C3%ADnez-mart%C3%ADnez-967135239/',
                icon: <FaLinkedin className="h-8 w-8" />,
                alt: 'LinkedIn',
            },
            {
                name: 'GitHub',
                url: 'https://github.com/Carloxxz',
                icon: <FaGithub className="h-8 w-8" />,
                alt: 'GitHub',
            },
        ];
    } else if (person === 'Emmanuel') {
        iconsData = [
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/emmanuel-jr-4b20b5162/',
                icon: <FaLinkedin className="h-8 w-8" />,
                alt: 'LinkedIn',
            },
            {
                name: 'GitHub',
                url: 'https://github.com/BailonSSJ',
                icon: <FaGithub className="h-8 w-8" />,
                alt: 'GitHub',
            },
        ];
    }

    return (
        <div className="flex justify-center gap-4 mt-4">
            {iconsData.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.alt}>
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default Icons;

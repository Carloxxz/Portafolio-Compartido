import { FaLinkedin, FaGithub } from 'react-icons/fa';
import type { iconsData } from '../../types';

type IconsProps = {
    person: string
}

const iconsData: iconsData = {
    Carlos: [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/carlos-mart%C3%ADnez-mart%C3%ADnez-967135239/',
            icon: <FaLinkedin className="h-8 w-8 hover:text-indigo-400 transition-colors" />,
            alt: 'LinkedIn',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Carloxxz',
            icon: <FaGithub className="h-8 w-8 hover:text-indigo-400 transition-colors" />,
            alt: 'GitHub',
        }
    ],
    Emmanuel: [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/emmanuel-jr-4b20b5162/',
            icon: <FaLinkedin className="h-8 w-8 hover:text-indigo-400 transition-colors" />,
            alt: 'LinkedIn',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/BailonSSJ',
            icon: <FaGithub className="h-8 w-8 hover:text-indigo-400 transition-colors" />,
            alt: 'GitHub',
        },
    ]
};


const Icons = ({ person }: IconsProps) => {

    const iconData = iconsData[person]

    return (
        <div className="flex justify-center gap-4 mt-4">
            {iconData.map(item => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.alt}>
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default Icons;

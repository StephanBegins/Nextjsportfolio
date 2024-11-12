import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaGoogle } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/StephanBegins" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/stephantech/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/@TechxAI" },
    { icon: <FaGoogle />, path: "mailto:stephan1217at@gmail.com" },
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
};

export default Social;
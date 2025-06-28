import { meta,coal,food,eye, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    tensorflow,
    threads,
    typescript,
    c
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "ML framework",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Language",
    }
];

export const experiences = [
    {
        title: "CoalTrack",
        project_name: "SIH project",
        icon: coal,
        iconBg: "#accbe1",
        date: "August 2023",
        points: [
            "Developing a application to track coal shipment through various modes.",
            "Integrated model to maximize coal chain efficiency."
        ],
    },
    {
        title: "FoodDonor",
        project_name: "internal college hackathon",
        icon: food,
        iconBg: "#fbc3bc",
        date: "Feb 2024",
        points: [
            "Developing a web application where people can donate food and money.",
            "Integration of blockchain for donations in crypto."
            
        ],
    },
    {
        title: "God's eye",
        project_name: "SIH 2024",
        icon: eye,
        iconBg: "#b7e4c7",
        date: "August 2024",
        points: [
            "Developing a web application which monitors video from ip streams and detects violence against women",
            "Made for the safety of women",
            "Violence Alert system, A bot sends notifications with the picture of the frame ,location and time to the whatsapp and telegram ",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shivapaliwal',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shivang-paliwal-703069272',
    }
];

export const projects = [
    {
        iconUrl: coal,
        theme: 'btn-back-red',
        name: 'CoalTrack',
        description: 'Developing a application to track coal shipment through various modes. Integrated model to maximize coal chain efficiency.',
        link: '//',
    },
    {
        iconUrl: food,
        theme: 'btn-back-green',
        name: 'Food-Donor',
        description: 'Developing a web application where people can donate food and money with integration of blockchain for donations in crypto.',
        link: '//',
    },
    {
        iconUrl: eye,
        theme: 'btn-back-blue',
        name: "God's eye",
        description: 'Developing a web application which monitors video from ip streams and detects violence against women. Made for the safety of women. Violence Alert system, A bot sends notifications with the picture of the frame ,location and time to the whatsapp and telegram ',
        link: '//',
    }
];
const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Technical Artist", imgPath: "/images/ideas.svg" },
    { text: "Front-End Developer", imgPath: "/images/concepts.svg" },
    { text: "Back-End Developer", imgPath: "/images/designs.svg" },
    { text: "Gameplay Programmer", imgPath: "/images/code.svg" },
    { text: "UI Developer", imgPath: "/images/ideas.svg" },
    { text: "3D Artist", imgPath: "/images/concepts.svg" },
    { text: "Designer", imgPath: "/images/designs.svg" },
    { text: "Debugger", imgPath: "/images/code.svg" },

];

const counterItems = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 6, suffix: "+", label: "Programming Languages" },
    { value: 3, suffix: "+", label: "Game Engines" },
    { value: 5, suffix: "+", label: "3D Softwares" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/ecology.png",
        title: "Technical Art: Blending beauty with logic",
        desc: "I bridge the gap between art and code, crafting polished visuals with shaders, VFX, and efficient pipelines.",
        glowColor: "#00ff88"
    },
    {
        imgPath: "/brain.png",
        title: "Creative Problem Solving: A different way of seeing things",
        desc: "I approach challenges from unique angles, finding intuitive solutions that prioritize both player experience and technical clarity.",
        glowColor: "#c084fc"
    },
    {
        imgPath: "/arrow-cursor.png",
        title: "UX-Focused Development: Player-first design",
        desc: "I prioritize intuitive, accessible interfaces and gameplay experiences that make users feel empowered and engaged.",
        glowColor: "#60a5fa"
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Amanda has been instrumental in crafting immersive systems and gameplay experiences that resonate with our community. Her scripting and UI integration brought our vision to life.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logos/riftlogo.png",
        title: "Community Manager & Technical Artist/Script Writer",
        date: "May 2020 – Present",
        responsibilities: [
            "Designed and implemented gameplay features for a RedM server using Lua.",
            "Built complex systems like a Pet Shop, Horse Customization, and server-wide Dynamic Events.",
            "Created custom NUI for in-game interaction, blending design and functionality.",
            "Continuously optimized and iterated based on player feedback for a growing online community.",
        ],
    },
    {
        review:
            "Amanda's technical artistry and engineering brought innovation and polish to every UEFN project. Her balance of creative vision and code execution made a huge impact.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logos/oniLogo.png",
        title: "Freelance Technical Artist & Gameplay Engineer",
        date: "October 2023 – Present",
        responsibilities: [
            "Developed polished UEFN projects like Rocket Wars and Ultimate 1v1, combining custom mechanics with clean UI.",
            "Built backend systems and player-facing features for flying mounts, score systems, and dynamic gameplay.",
            "Scripted in Verse and worked with Unreal Engine tools to design effects, materials, and optimized meshes.",
            "Collaborated on content like SypherPK’s World Record video by designing custom maps and gameplay flows.",
        ],
    },
    {
        review:
            "Amanda was an excellent addition to the team, showing strong initiative and creativity in campaign research and digital media management.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logos/fhLogo.png",
        title: "Public Relations Intern",
        date: "February 2023 – August 2023",
        responsibilities: [
            "Researched client industries to support media strategies and campaign planning.",
            "Managed social media content and engagement for multiple clients.",
            "Assisted in content creation and communication deliverables across digital platforms.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
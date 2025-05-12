import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Elysee',
        description: "Elysee is a highly scalable, microservices-based e-commerce platform built with Node.js, Express, and MongoDB, leveraging Redis for caching and BullMQ for asynchronous, fault-tolerant order processing.",
        tools: ['Express', 'MongoDB', 'Nodejs', 'Javascript', 'Redis', 'BullMQ', 'Middleware'],
        role: 'Full-stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'NotesApp',
        description: 'Created Notes Web App using React and Javascript and hosted it using vercel. It contains basic operations like Create, Read, Update and Delete (CRUD). Used library Tailwind CSS for UI with framer motion.',
        tools: ['Tailwind CSS', "JavaScript", "React", "MongoDB"],
        role: 'Front-end Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Object-Detection',
        description: "Created an object detection system as a college project using Python and OpenCV. The project leveraged OpenCV's deep learning-based algorithms to detect and classify objects in images and video streams. This system efficiently processes real-time visual data, identifying objects with high accuracy.",
        tools: ['Python', 'OpenCV'],
        code: '',
        role: 'Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Face-Recognition',
        description: "Developed a facial recognition system using Python, OpenCV, Flask, and NumPy for my college project. The system detects and identifies faces in real time using advanced image processing techniques. Flask was utilized to build a web interface, while NumPy optimized the handling of large datasets and image arrays, providing efficient facial recognition capabilities.",
        tools: ["Python", "OpenCV", "Numpy", "Flask"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
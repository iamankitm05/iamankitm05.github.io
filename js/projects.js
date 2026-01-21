// Data for Projects
const defaultProjectImage = "assets/project-placeholder.png";

const projects = [
    {
        title: "E-Commerce Mobile App",
        description: "A full-featured shopping app with cart, payment gateway integration, and real-time order tracking. Built with Flutter and Firebase.",
        tags: ["Flutter", "Firebase", "Stripe API"],
        image: "https://images.unsplash.com/photo-1523474253046-8cd80509b933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        links: {
            view: "#",
            source: "https://github.com/iamankitm05",
            apk: "#",
            playStore: "#",
            appStore: "#",
            video: "#"
        }
    },
    {
        title: "Social Media Platform",
        description: "A realtime social networking app featuring stories, chat, and media sharing. Implemented complex backend logic using Supabase.",
        tags: ["iOS (Swift)", "Supabase", "WebSocket"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        links: {
            view: "#",
            source: "https://github.com/iamankitm05",
        }
    },
    {
        title: "Fitness Tracker",
        description: "Activity tracking application leveraging device sensors to monitor steps, calories, and workout progress with visual charts.",
        tags: ["Flutter", "HealthKit", "Charts"],
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        links: {
            view: "#"
        }
    },
    {
        title: "Task Management Tool",
        description: "Productivity app for teams to manage tasks and projects. Features offline support and realtime synchronization.",
        tags: ["React Native", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        links: {
            source: "https://github.com/iamankitm05",
        }
    },
    {
        title: "Music Streaming App",
        description: "Audio streaming application with playlist management, background playback, and custom audio equalization.",
        tags: ["iOS (SwiftUI)", "AVFoundation"],
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        links: {
            appStore: "#"
        }
    },
    {
        title: "Travel Companion",
        description: "AI-powered travel itinerary planner that suggests destinations and activities based on user preferences.",
        tags: ["Flutter", "OpenAI API", "Google Maps"],
        image: "", // Use fallback
        links: {
            view: "#",
            video: "#"
        }
    }
];

// Export to window for access
window.projects = projects;
window.defaultProjectImage = defaultProjectImage;

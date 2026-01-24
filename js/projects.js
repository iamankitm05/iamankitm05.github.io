/* 
Project Data Structure / Key Reference:
---------------------------------------
{
    title: "Project Name",
    description: "Brief project description",
    tags: ["Technology", "Used"],
    image: "URL or local path (if empty, default placeholder is used)",
    links: {
        view: "Live demo or generic store link",
        source: "GitHub repository link",
        apk: "Direct APK download link",
        playStore: "Google Play Store link",
        appStore: "Apple App Store link",
        video: "YouTube or demo video link"
    }
}
*/

const defaultProjectImage = "assets/project-placeholder.png";

const projects = [
    {
        title: "TeamVx Network",
        description: "A gig marketplace app built with Flutter & Firebase. Implemented role-based login (Phone, Google), event applications, and admin dashboards. Published on Play Store with 100+ active users.",
        tags: ["Flutter", "Firebase", "Gig Economy"],
        image: "https://play-lh.googleusercontent.com/QI8usY_K_TBPS0oRFWlvTpKg8Koi0zMCF3R4_r99zcdqusa4-vY6EwqqNzZGFClKNBrWdum_Ml0Tjaq9R1TFYA=w240-h480-rw",
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.teamvx.app&pcampaignid=web_share"
        }
    },
    {
        title: "My Notes App",
        description: "A feature-rich Flutter notes app with theming, date-based organization, note creation, editing, completion, deletion, and filtering options.",
        tags: ["Flutter", "Productivity", "Custom UI"],
        image: "https://raw.githubusercontent.com/iamankitm05/my_notes/main/demo.png",
        links: {
            view: "https://www.indusappstore.com/apps/productivity/my-notes/io.github.ankitdotdev.my_notes?page=details&id=io.github.ankitdotdev.my_notes"
        }
    },
    {
        title: "Music Player App",
        description: "A Flutter-based music player UI with local audio playback, dark/light themes, and customizable color options.",
        tags: ["Flutter", "Audio", "UI Design"],
        image: "/images/music_player_icon.png",
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.music_player.music_player&pcampaignid=web_share"
        }
    },
    {
        title: "Onespect - Learning & Service",
        description: "A full-featured Flutter learning app with email/password authentication, books, schools, quizzes, test series, profile management, and more.",
        tags: ["Flutter", "Education", "Auth"],
        image: "/images/onespect.png",
        links: {
            playStore: "https://play.google.com/store/apps/details?id=in.onespect.onespect_flutter_mobile_app&pcampaignid=web_share"
        }
    },
    {
        title: "Are You Colorblind",
        description: "A feature-rich Flutter app that uses the Ishihara test to help users check for color blindness with themed UI and smooth interactions.",
        tags: ["Flutter", "Health", "Testing"],
        image: "/images/are you color blind.png",
        links: {
            view: "https://www.indusappstore.com/apps/health-and-fitness/are-you-colorblind/com.ankitm05.are_you_colorblind/?page=details&id=com.ankitm05.are_you_colorblind"
        }
    },
    {
        title: "E-commerce App UI",
        description: "A stylish and responsive e-commerce app UI built with Flutter, showcasing product listings and shopping screens.",
        tags: ["Flutter", "E-commerce", "Mock UI"],
        image: "https://raw.githubusercontent.com/iamankitm05/ecommerce_app_flutter/main/demo.png",
        links: {
            source: "https://github.com/iamankitm05/ecommerce_app_flutter"
        }
    },
    {
        title: "WhatsApp Clone UI",
        description: "A clean and responsive WhatsApp-inspired user interface built with Flutter.",
        tags: ["Flutter", "Clone", "Messaging UI"],
        image: "https://raw.githubusercontent.com/iamankitm05/whatsapp_clone_flutter/main/demo.png",
        links: {
            source: "https://github.com/iamankitm05/whatsapp_clone_flutter",
            apk: "https://github.com/iamankitm05/whatsapp_clone_flutter/releases/download/v.0.1.1/app-release.apk"
        }
    },
    {
        title: "Animation Playground",
        description: "A simple Flutter animation project featuring bouncing balls and interactive controls to manipulate their movement.",
        tags: ["Flutter", "Animations", "Physics"],
        image: "",
        links: {
            source: "https://github.com/iamankitm05/animations_flutter",
            apk: "https://github.com/ankitdotdev/animations_flutter/releases/download/apk-v1.0.0/app-release.apk"
        }
    },
    {
        title: "Queezy App UI",
        description: "A sleek and modern quiz app user interface designed in Flutter.",
        tags: ["Flutter", "Quiz App", "UI/UX"],
        image: "",
        links: {
            source: "https://github.com/iamankitm05/queezy_flutter_app"
        }
    },
    {
        title: "EasyTest Flutter App",
        description: "A full-featured Flutter learning app with email/password authentication, teacher, mock test, profile management, and more.",
        tags: ["Flutter", "EdTech", "LMS"],
        image: "",
        links: {
            source: "https://github.com/iamankitm05/easy_tech_flutter"
        }
    }
];

// Export to window for access
window.projects = projects;
window.defaultProjectImage = defaultProjectImage;

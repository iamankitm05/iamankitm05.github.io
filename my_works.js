const myWorks = [
  {
    link: "https://www.indusappstore.com/apps/productivity/my-notes/io.github.ankitdotdev.my_notes?page=details&id=io.github.ankitdotdev.my_notes",
    name: "My Notes App",
    description: "A feature-rich Flutter notes app with theming, date-based organization, note creation, editing, completion, deletion, and filtering options.",
  },
  {
    link: "https://play.google.com/store/apps/details?id=com.music_player.music_player&pcampaignid=web_share",
    name: "Music Player App",
    description: "A Flutter-based music player UI with local audio playback, dark/light themes, and customizable color options.",
  },
  {
    link: "https://play.google.com/store/apps/details?id=in.onespect.onespect_flutter_mobile_app&pcampaignid=web_share",
    name: "Onespect - Learning & Service",
    description: "A full-featured Flutter learning app with email/password authentication, books, schools, quizzes, test series, profile management, and more.",
  },
  {
    link: "https://www.indusappstore.com/apps/health-and-fitness/are-you-colorblind/com.ankitm05.are_you_colorblind/?page=details&id=com.ankitm05.are_you_colorblind",
    name: "Are You Colorblind",
    description: "A feature-rich Flutter app that uses the Ishihara test to help users check for color blindness with themed UI and smooth interactions.",
  },
  {
    link: "https://github.com/iamankitm05/animations_flutter",
    name: "Animation Playground",
    description: "A simple Flutter animation project featuring bouncing balls and interactive controls to manipulate their movement.",
  },
  {
    link: "https://github.com/iamankitm05/whatsapp_clone_flutter",
    name: "WhatsApp Clone UI",
    description: "A clean and responsive WhatsApp-inspired user interface built with Flutter.",
  },
  {
    link: "https://github.com/iamankitm05/queezy_flutter_app",
    name: "Queezy App UI",
    description: "A sleek and modern quiz app user interface designed in Flutter.",
  },
  {
    link: "https://github.com/iamankitm05/ecommerce_app_flutter",
    name: "E-commerce App UI",
    description: "A stylish and responsive e-commerce app UI built with Flutter, showcasing product listings and shopping screens.",
  },
  {
    link: "https://github.com/iamankitm05/easy_tech_flutter",
    name: "EasyTest Flutter App",
    description: "A full-featured Flutter learning app with email/password authentication, teacher, mock test, profile management, and more.",
  },
];

window.onload = () => {
  document.querySelector('#portfolio .features').innerHTML = myWorks.map((e) => `
    <a target="blank" href="${e.link}">
      <div class="work-card">
        <h3>${e.name}</h3>
        <p>${e.description}</p>
      </div>
    </a>
  `).join('');
}
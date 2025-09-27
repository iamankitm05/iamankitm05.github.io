function toggleNav() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

window.onload = () => {
  document.querySelector('#portfolio .features').innerHTML = myWorks.map((e) => `
    <a target="blank" href="${e.link}">
      <div class="work-card">
      ${e.image != null ? `<img src="${e.image}" class="work-image" alt="">` : ''}
        <h3>${e.name}</h3>
        <p>${e.description}</p>
      </div>
    </a>
  `).join('');
}
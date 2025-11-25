document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  handleInitialLoad();
});

function initNavigation() {
  document.body.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    // Check if external link or anchor
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;

    e.preventDefault();
    navigateTo(href);
  });

  window.addEventListener('popstate', () => {
    loadPage(window.location.pathname, false);
  });
}

async function navigateTo(url) {
  history.pushState(null, null, url);
  await loadPage(url);
}

async function loadPage(url, scroll = true) {
  const main = document.querySelector('main');
  
  // Exit transition
  main.classList.add('page-exit-active');
  
  await new Promise(resolve => setTimeout(resolve, 220)); // Match CSS duration

  try {
    // Fetch new page
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Replace content
    const newMain = doc.querySelector('main');
    const newTitle = doc.querySelector('title');
    
    if (newMain) {
      main.innerHTML = newMain.innerHTML;
      document.title = newTitle ? newTitle.innerText : 'Werebuff Studio';
      
      // Update active nav state
      updateActiveNav(url);
      
      // Re-initialize scripts/handlers if needed
      // (For a simple static site, we might not need much, but this is where it goes)
      
      if (scroll) window.scrollTo(0, 0);
      
      // Enter transition
      main.classList.remove('page-exit-active');
      main.classList.add('page-enter');
      
      // Force reflow
      void main.offsetWidth;
      
      main.classList.add('page-enter-active');
      setTimeout(() => {
        main.classList.remove('page-enter', 'page-enter-active');
      }, 220);
    }
  } catch (error) {
    console.error('Failed to load page:', error);
    window.location.href = url; // Fallback to full reload
  }
}

function updateActiveNav(url) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    if (link.getAttribute('href') === url) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Close mobile menu if open
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active'); // Optional: animate hamburger
  }
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

function handleInitialLoad() {
  // Add any initial load logic here, e.g., removing a global loader
  updateActiveNav(window.location.pathname);
}

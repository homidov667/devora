const revealSelector = [
	'.It',
	'.about-us',
	'.main-title',
	'.ramki',
	'.hero-text',
	'.title-container',
	'.expertises',
	'.ramka',
	'.ramka h2',
	'.one',
	'.two',
	'.three',
	'.four',
	'.ramka-description',
	'.ramka li',
	'.process-section',
	'.process-step',
	'.project-start',
	'.project-metric',
	'.review-section',
	'.site-footer'
].join(', ');

const revealElements = document.querySelectorAll(revealSelector);

if ('IntersectionObserver' in window) {
	const revealObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			entry.target.classList.add('is-visible');
			observer.unobserve(entry.target);
		});
	}, {
		threshold: 0.15,
		rootMargin: '0px 0px -8% 0px'
	});

	revealElements.forEach((element, index) => {
		element.classList.add('reveal-on-scroll');
		element.style.setProperty('--reveal-delay', `${Math.min(index * 70, 420)}ms`);
		revealObserver.observe(element);
	});
} else {
	revealElements.forEach((element) => {
		element.classList.add('is-visible');
	});
}
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const header = document.querySelector('.header');

  if (!menuToggle || !navMenu) {
    return;
  }

  const setMenuOpen = (isOpen) => {
    menuToggle.classList.toggle('active', isOpen);
    navMenu.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(!navMenu.classList.contains('active'));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (navMenu.classList.contains('active') && header && !header.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  });
});
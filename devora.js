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

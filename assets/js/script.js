document.addEventListener('DOMContentLoaded', () => {

	/* -----------------------------------------------
	   Theme Toggle (Dark / Light Mode)
	----------------------------------------------- */
	const themeToggle = document.getElementById('theme-toggle');
	const moonIcon = document.getElementById('moon-icon');
	const sunIcon = document.getElementById('sun-icon');

	function applyTheme(theme) {
		document.documentElement.setAttribute('data-theme', theme);
		if (theme === 'light') {
			moonIcon.classList.add('hidden');
			sunIcon.classList.remove('hidden');
		} else {
			sunIcon.classList.add('hidden');
			moonIcon.classList.remove('hidden');
		}
	}

	// Load saved preference or fall back to system preference
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
		applyTheme(savedTheme);
	} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
		applyTheme('light');
	}

	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			const current = document.documentElement.getAttribute('data-theme');
			const next = current === 'dark' ? 'light' : 'dark';
			applyTheme(next);
			localStorage.setItem('theme', next);
		});
	}

	/* -----------------------------------------------
	   Navbar Scroll State & Shadow Elevation
	----------------------------------------------- */
	const navbar = document.getElementById('navbar');
	function handleNavbarScroll() {
		if (window.scrollY > 30) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	}
	window.addEventListener('scroll', handleNavbarScroll, { passive: true });
	handleNavbarScroll();

	/* -----------------------------------------------
	   Mobile Navigation
	----------------------------------------------- */
	const hamburger = document.getElementById('hamburger');
	const navLinks = document.getElementById('nav-links');

	function closeMenu() {
		if (hamburger && navLinks) {
			hamburger.classList.remove('active');
			navLinks.classList.remove('active');
			hamburger.setAttribute('aria-expanded', 'false');
		}
	}

	function openMenu() {
		if (hamburger && navLinks) {
			hamburger.classList.add('active');
			navLinks.classList.add('active');
			hamburger.setAttribute('aria-expanded', 'true');
		}
	}

	if (hamburger && navLinks) {
		hamburger.addEventListener('click', (e) => {
			e.stopPropagation();
			const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
			if (isOpen) {
				closeMenu();
			} else {
				openMenu();
			}
		});

		// Close mobile menu when clicking any link inside it
		navLinks.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				closeMenu();
			});
		});

		// Close menu when clicking outside navbar
		document.addEventListener('click', (e) => {
			if (hamburger.getAttribute('aria-expanded') === 'true' && !navbar.contains(e.target)) {
				closeMenu();
			}
		});

		// Close menu when pressing Escape key
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
				closeMenu();
				hamburger.focus();
			}
		});
	}

	/* -----------------------------------------------
	   Scrollspy (IntersectionObserver)
	----------------------------------------------- */
	const sections = document.querySelectorAll('section[id]');
	const navItems = document.querySelectorAll('.nav-links a');

	if (sections.length && navItems.length) {
		const observerOptions = {
			root: null,
			rootMargin: '-25% 0px -45% 0px',
			threshold: 0
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute('id');
					navItems.forEach(item => {
						const href = item.getAttribute('href');
						if (href === `#${id}`) {
							item.classList.add('active');
						} else {
							item.classList.remove('active');
						}
					});
				}
			});
		}, observerOptions);

		sections.forEach(section => observer.observe(section));
	}

	/* -----------------------------------------------
	   Smooth Scroll Support with Fallback
	----------------------------------------------- */
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const targetId = this.getAttribute('href');
			if (!targetId || targetId === '#') return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				e.preventDefault();
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});

	/* -----------------------------------------------
	   Back to Top Button
	----------------------------------------------- */
	const backToTopBtn = document.getElementById('back-to-top');
	if (backToTopBtn) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				backToTopBtn.classList.add('visible');
			} else {
				backToTopBtn.classList.remove('visible');
			}
		}, { passive: true });

		backToTopBtn.addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	}

	/* -----------------------------------------------
	   Contact Form — Direct Formspree Submission
	----------------------------------------------- */
	const contactForm = document.getElementById('contact-form');
	const formStatus = document.getElementById('form-status');
	const submitBtn = document.getElementById('submit-btn');

	if (contactForm && formStatus && submitBtn) {
		const nameInput = document.getElementById('name');
		const emailInput = document.getElementById('email');
		const subjectInput = document.getElementById('subject');
		const messageInput = document.getElementById('message');

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const fillAllError = 'Please fill out all fields (Name, Email, Subject, and Message) before sending.';

		function setFieldInvalid(input, invalid) {
			if (!input) return;
			if (invalid) {
				input.setAttribute('aria-invalid', 'true');
			} else {
				input.removeAttribute('aria-invalid');
			}
		}

		function showStatus(type, message) {
			formStatus.className = 'form-status';
			if (type) {
				formStatus.classList.add(type);
			}
			formStatus.textContent = message;
		}

		function clearStatus() {
			formStatus.className = 'form-status';
			formStatus.textContent = '';
		}

		function setLoading(isLoading) {
			if (isLoading) {
				contactForm.setAttribute('aria-busy', 'true');
			} else {
				contactForm.removeAttribute('aria-busy');
			}
			submitBtn.disabled = isLoading;

			const label = submitBtn.querySelector('.submit-btn-label');
			const icon = submitBtn.querySelector('.submit-btn-icon');
			const spinner = submitBtn.querySelector('.submit-spinner');

			if (label) label.textContent = isLoading ? 'Sending...' : 'Send Message';
			if (icon) icon.hidden = isLoading;
			if (spinner) spinner.hidden = !isLoading;
		}

		contactForm.addEventListener('submit', function (e) {
			e.preventDefault();

			// Prevent duplicate submissions while a request is in progress
			if (submitBtn.disabled) return;

			[nameInput, emailInput, subjectInput, messageInput].forEach(input => setFieldInvalid(input, false));

			const name = nameInput ? nameInput.value.trim() : '';
			const email = emailInput ? emailInput.value.trim() : '';
			const subject = subjectInput ? subjectInput.value.trim() : '';
			const message = messageInput ? messageInput.value.trim() : '';

			// Basic validation — check all required fields
			if (!name || !email || !subject || !message) {
				const firstEmpty = [nameInput, emailInput, subjectInput, messageInput]
					.find(input => input && !input.value.trim());
				if (firstEmpty) {
					setFieldInvalid(firstEmpty, true);
					firstEmpty.focus();
				}
				showStatus('error', fillAllError);
				return;
			}

			// Validate email format
			if (!emailRegex.test(email)) {
				setFieldInvalid(emailInput, true);
				emailInput.focus();
				showStatus('error', 'Please enter a valid email address.');
				return;
			}

			clearStatus();
			setLoading(true);

			const payload = { name, email, subject, message };

			fetch(contactForm.action, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify(payload)
			})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Form submission failed with status ${response.status}`);
					}
					return response.json();
				})
				.then(() => {
					showStatus('success', 'Your message has been sent successfully. Thank you!');
					contactForm.reset();
					[nameInput, emailInput, subjectInput, messageInput].forEach(input => setFieldInvalid(input, false));
				})
				.catch(() => {
					showStatus('error', 'Sorry, something went wrong while sending your message. Please try again or contact me directly by email.');
				})
				.finally(() => {
					setLoading(false);
				});
		});
	}

});

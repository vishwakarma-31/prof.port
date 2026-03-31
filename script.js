// Init Lucide Icons
    lucide.createIcons();

    // ===== CUSTOM CURSOR =====
    const cursor = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      });

      function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
      }
      animateRing();

      document.querySelectorAll('a, button, .project-card, .skill-tag, .tech-pill').forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hover-link'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover-link'));
      });
    }

    // ===== NAV SCROLL BEHAVIOR =====
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    let menuOpen = false;

    hamburger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      hamburger.classList.toggle('open', menuOpen);
      mobileMenu.classList.toggle('open', menuOpen);
      hamburger.setAttribute('aria-expanded', menuOpen);
      mobileMenu.setAttribute('aria-hidden', !menuOpen);
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-link, .mobile-menu .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        mobileMenu.setAttribute('aria-hidden', true);
        document.body.style.overflow = '';
      });
    });

    // ===== SCROLL REVEAL =====
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ===== PARALLAX HERO GRID =====
    const heroGrid = document.querySelector('.hero-grid');
    window.addEventListener('scroll', () => {
      if (heroGrid) {
        const scrollY = window.scrollY;
        heroGrid.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    }, { passive: true });

    // ===== CONTACT FORM =====
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        // Shake invalid fields
        [form.querySelector('#name'), form.querySelector('#email'), form.querySelector('#message')].forEach(field => {
          if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            setTimeout(() => field.style.borderColor = '', 2000);
          }
        });
        return;
      }

      // Simulate form submission
      const submitBtn = form.querySelector('.form-submit');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        form.style.display = 'none';
        formSuccess.style.display = 'block';
      }, 1200);
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id], #credibility');
    const navLinks = document.querySelectorAll('.nav-links a');

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === '#' + entry.target.id
              ? 'var(--text-primary)'
              : '';
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
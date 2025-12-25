document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Simple contact form handler (demo)
    var form = document.getElementById('contactForm');
    var status = document.getElementById('formStatus');
    if (form) {
        var submitBtn = form.querySelector('button[type=submit]');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = new FormData(form);
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }
            status.textContent = 'Sending...';
            // Simulated request - replace with fetch to your server endpoint
            setTimeout(function () {
                status.textContent = 'Message sent. We will contact you shortly.';
                if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
                form.reset();
            }, 900);
        });
    }

    // Highlight active nav item on scroll
    var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    var sections = Array.from(navLinks).map(function (link) { return document.querySelector(link.getAttribute('href')); });
    function onScroll() {
        var fromTop = window.scrollY + 120;
        navLinks.forEach(function (link, i) {
            var section = sections[i];
            if (!section) return;
            if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
});
// GVMI Website Main JavaScript File
// Handles all interactive functionality and animations

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    initializeInteractiveComponents();
    initializeScrollEffects();
    initializeContactForm();
    initializeFleetFilters();
    initializeInsightsSearch();
});

// Animation initialization
function initializeAnimations() {
    // Animate statistics counters
    animateCounters();

    // Initialize text animations
    initializeTextAnimations();

    // Initialize image carousels
    initializeCarousels();
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format number with appropriate suffix
            if (target >= 1000000000) {
                counter.textContent = (current / 1000000000).toFixed(1) + 'B+';
            } else if (target >= 1000000) {
                counter.textContent = (current / 1000000).toFixed(1) + 'M+';
            } else if (target >= 1000) {
                counter.textContent = (current / 1000).toFixed(0) + '+';
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 16);
    });
}

// Text animations using Typed.js (if available)
function initializeTextAnimations() {
    const heroTitle = document.querySelector('#hero-title');
    if (heroTitle && typeof Typed !== 'undefined') {
        // Get current language
        const currentLang = localStorage.getItem('gvmi-lang') || 'en';
        
        // Define bilingual strings
        const strings = {
            en: 'New Engine for Maritime Finance, New Journey for Value Growth',
            zh: '海运金融新引擎，价值增长新航程'
        };
        
        // Initialize Typed.js with current language
        const typed = new Typed('#hero-title', {
            strings: [strings[currentLang]],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
        
        // Store typed instance for language switching
        window.heroTyped = typed;
    }
}

// Initialize image carousels using Splide
function initializeCarousels() {
    const partnerCarousel = document.querySelector('#partner-carousel');
    if (partnerCarousel && typeof Splide !== 'undefined') {
        new Splide('#partner-carousel', {
            type: 'loop',
            perPage: 6,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            arrows: false,
            pagination: false,
            breakpoints: {
                768: { perPage: 3 },
                480: { perPage: 2 }
            }
        }).mount();
    }
}

// Scroll effects and reveal animations
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Interactive components initialization
function initializeInteractiveComponents() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        showNotification('Thank you for your inquiry. We will contact you soon.', 'success');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Fleet filtering system
function initializeFleetFilters() {
    const filterButtons = document.querySelectorAll('.fleet-filter');
    const fleetItems = document.querySelectorAll('.fleet-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter fleet items
            fleetItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.classList.add('animate-fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Insights search functionality
function initializeInsightsSearch() {
    const searchInput = document.querySelector('#insights-search');
    const insightItems = document.querySelectorAll('.insight-item');
    const categoryFilters = document.querySelectorAll('.category-filter');

    if (searchInput) {
        searchInput.addEventListener('input', filterInsights);
    }

    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const category = filter.getAttribute('data-category');
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            filterInsights();
        });
    });

    function filterInsights() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeCategory = document.querySelector('.category-filter.active')?.getAttribute('data-category') || 'all';

        insightItems.forEach(item => {
            const title = item.querySelector('.insight-title').textContent.toLowerCase();
            const category = item.getAttribute('data-category');

            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = activeCategory === 'all' || category === activeCategory;

            if (matchesSearch && matchesCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 ${type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 1000);
}

// Data visualization using ECharts
function initializeCharts() {
    // Fleet composition chart
    const fleetChart = document.querySelector('#fleet-composition-chart');
    if (fleetChart && typeof echarts !== 'undefined') {
        const chart = echarts.init(fleetChart);

        const option = {
            title: {
                text: 'Fleet Composition',
                textStyle: { color: '#1e3a8a' }
            },
            tooltip: { trigger: 'item' },
            series: [{
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 120, name: 'Container Ships' },
                    { value: 80, name: 'Bulk Carriers' },
                    { value: 60, name: 'Tankers' },
                    { value: 40, name: 'LNG Carriers' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        chart.setOption(option);
    }

    // Market trends chart
    const trendsChart = document.querySelector('#market-trends-chart');
    if (trendsChart && typeof echarts !== 'undefined') {
        const chart = echarts.init(trendsChart);

        const option = {
            title: {
                text: 'Market Trends',
                textStyle: { color: '#1e3a8a' }
            },
            tooltip: { trigger: 'axis' },
            xAxis: {
                type: 'category',
                data: ['2020', '2021', '2022', '2023', '2024']
            },
            yAxis: { type: 'value' },
            series: [{
                name: 'Freight Rates',
                type: 'line',
                data: [1200, 1800, 2400, 1600, 2000],
                smooth: true,
                lineStyle: { color: '#1e3a8a' }
            }]
        };

        chart.setOption(option);
    }
}

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(initializeCharts, 500); // Delay to ensure libraries are loaded
});

// Language switching functionality
function initializeLanguageSwitch() {
    const languageButtons = document.querySelectorAll('.language-btn');

    // Check for saved language preference
    const savedLang = localStorage.getItem('gvmi-lang') || 'en';
    switchLanguage(savedLang);

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.getAttribute('data-lang');
            switchLanguage(language);
        });
    });
}

function switchLanguage(language) {
    // Update active language button
    document.querySelectorAll('.language-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === language;
        btn.classList.toggle('active', isActive);
        // Toggle background color for active state
        if (isActive) {
            btn.classList.add('bg-amber-100');
            btn.classList.remove('hover:bg-amber-100');
        } else {
            btn.classList.remove('bg-amber-100');
            btn.classList.add('hover:bg-amber-100');
        }
    });

    // Update page language attribute
    document.documentElement.lang = language;

    // Save preference
    localStorage.setItem('gvmi-lang', language);

    // Apply translations
    if (typeof translations !== 'undefined' && translations[language]) {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const keys = key.split('.');

            let value = translations[language];
            for (const k of keys) {
                if (value && value[k]) {
                    value = value[k];
                } else {
                    value = null;
                    break;
                }
            }

            if (value) {
                // Preserve HTML if the translation contains HTML tags (like &copy;)
                if (value.includes('<') || value.includes('&')) {
                    element.innerHTML = value;
                } else {
                    element.textContent = value;
                }
            }
        });
    }

    // Update hero title animation if it exists
    if (window.heroTyped) {
        const strings = {
            en: 'New Engine for Maritime Finance, New Journey for Value Growth',
            zh: '海运金融新引擎，价值增长新航程'
        };
        
        // Destroy existing instance and create new one with updated language
        window.heroTyped.destroy();
        window.heroTyped = new Typed('#hero-title', {
            strings: [strings[language]],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Show notification
    const langName = language === 'en' ? 'English' : '中文';
    showNotification(`Language switched to ${langName}`, 'info');
}

// Initialize language switching
document.addEventListener('DOMContentLoaded', initializeLanguageSwitch);
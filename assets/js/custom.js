/**
 * Custom JavaScript for Aquainnis site
 * Extends functionality of the Academia theme
 */

(function() {
    'use strict';

    // Add custom classes to navigation items for styling
    document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.navbar-nav .nav-item');
        
        navItems.forEach(function(item) {
            const link = item.querySelector('.nav-link');
            if (link) {
                const href = link.getAttribute('href');
                
                // Add category-specific classes
                if (href === '/projects/') {
                    item.classList.add('projects');
                } else if (href === '/services/') {
                    item.classList.add('services');
                } else if (href === '/results/') {
                    item.classList.add('results');
                } else if (href === '/news/') {
                    item.classList.add('news');
                }
            }
        });
    });

    // Enhanced card interactions
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(function(card) {
            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            });
        });
    });

    // Smooth scrolling for anchor links
    document.addEventListener('DOMContentLoaded', function() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });

})();

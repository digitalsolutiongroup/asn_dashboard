// DOM loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('flex');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isMobile = window.innerWidth < 768;
        if (isMobile && sidebar && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('flex');
        }
    });
    
    // Notifications toggle
    const notificationBtn = document.getElementById('notification-btn');
    const notificationPanel = document.getElementById('notification-panel');
    
    if (notificationBtn && notificationPanel) {
        notificationBtn.addEventListener('click', function() {
            notificationPanel.classList.toggle('hidden');
            // Remove notification indicator
            const indicator = document.getElementById('notification-indicator');
            if (indicator) {
                indicator.classList.add('hidden');
            }
        });
        
        // Close notifications when clicking outside
        document.addEventListener('click', function(event) {
            if (notificationPanel && !notificationPanel.contains(event.target) && !notificationBtn.contains(event.target)) {
                notificationPanel.classList.add('hidden');
            }
        });
    }
    
    // Curriculum module toggle
    const moduleToggle = document.getElementById('module-toggle');
    const primaryModule = document.getElementById('primary-module');
    const secondaryModule = document.getElementById('secondary-module');
    
    if (moduleToggle && primaryModule && secondaryModule) {
        moduleToggle.addEventListener('change', function() {
            if (this.checked) {
                primaryModule.classList.add('hidden');
                secondaryModule.classList.remove('hidden');
            } else {
                primaryModule.classList.remove('hidden');
                secondaryModule.classList.add('hidden');
            }
        });
    }
    
    // Active link highlighting
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '/' && href === '/')) {
            link.classList.add('bg-blue-800', 'text-white');
            link.classList.remove('text-gray-300', 'hover:bg-gray-800');
        }
    });
});

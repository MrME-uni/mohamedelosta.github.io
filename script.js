// Function to switch between pages
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to filter blog posts by category
function filterBlog(category) {
    const posts = document.querySelectorAll('.blog-post');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show/hide posts based on category
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Function to scroll to specific blog post (for cross-linking from leadership)
function scrollToBlogPost(postId) {
    setTimeout(() => {
        const post = document.getElementById(postId);
        if (post) {
            post.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
}

// Mobile menu toggle (if you want to add hamburger menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

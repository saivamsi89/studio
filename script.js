// ============================================
// Navigation - Simple Brand Only
// ============================================
const navbar = document.getElementById('navbar');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Stats Animation (Removed counter - using text instead)
// ============================================

// ============================================
// Testimonials Data
// ============================================
const testimonials = [
    {
        author: "@ManojKumar-yc1hf",
        text: "One of the great talks I have watched in recent times. Thanks for bringing it to us Please keep doing more 😊",
        avatar: "https://via.placeholder.com/48/667eea/ffffff?text=M"
    },
    {
        author: "@naveen0005",
        text: "Great Podcast worth watching 2hrs.., good work Naveen keep going on..👍🏼Indians are the back bone of software era we see that all around the world 💪",
        avatar: "https://via.placeholder.com/48/764ba2/ffffff?text=N"
    },
    {
        author: "@jabi24",
        text: "For the first time ever, I have watched such long video completely! So much to take away from this real conversation. Spent quality hour listening to your thoughts😊",
        avatar: "https://via.placeholder.com/48/f093fb/ffffff?text=J"
    },
    {
        author: "@Mantriji..",
        text: "WE HUB -Telangana ❤ I have watched full video without break Bro ❤All Questions are perfect 👍 it's cool conversation with mam and you podcast Till now I don't know about WEHUB thank you for this Conversation 🙏🏻for this Hope to see more Vidoes form you 🎉😊",
        avatar: "https://via.placeholder.com/48/4facfe/ffffff?text=M"
    },
    {
        author: "@gaddamabhishek229",
        text: "I am happy ❤ to see this type of content in our telugu. When the time comes this channel will reach heights bro keep on doing.",
        avatar: "https://via.placeholder.com/48/00f2fe/ffffff?text=A"
    },
    {
        author: "@travel_life197",
        text: "This is the first video ,I had watched without skipping 🙏not only CBN garu ,Chowdary garu also one of the person for IT development in hyd, Tq so much Naveen bro for this great interview with Great person👍",
        avatar: "https://via.placeholder.com/48/667eea/ffffff?text=T"
    },
    {
        author: "Ramya Kollu",
        text: "Ranveer allahbadia podcast for telugu people 😂 but honestly good work ,we should support this guy he is making the world better by uploading good content in simple words",
        avatar: "https://via.placeholder.com/48/764ba2/ffffff?text=R"
    },
    {
        author: "@samuelvindula9777",
        text: "I have randomly got this video on timeline, and I feel this is one of the best telugu podcasts 🙌 Thanks for all the information.. Subscribed to not miss any future content 😊",
        avatar: "https://via.placeholder.com/48/f093fb/ffffff?text=S"
    },
    {
        author: "@yashwanthkalepalli585",
        text: "I started watching yesterday night at 11:30pm..watched full interview till midnight... ur efforts are really amazing... very few people will be in society like JAC sir.. real conversations adding more value to present generation...keep rocking team",
        avatar: "https://via.placeholder.com/48/4facfe/ffffff?text=Y"
    },
    {
        author: "@mrshelby8838",
        text: "I think this is the first telugu podcast which is bringing best people to the discussion. Thanks for doing it! I hope more podcasts like these should come up.",
        avatar: "https://via.placeholder.com/48/00f2fe/ffffff?text=M"
    },
    {
        author: "@KiranKumarKyasa",
        text: "I was looking for this kind of content in telugu for my parents, where Raj Shamani and Ranveer were in hindi and english. Thanks for this VK.",
        avatar: "https://via.placeholder.com/48/667eea/ffffff?text=K"
    },
    {
        author: "@koteswararao5591",
        text: "It's great to listen to this kind of podcast and I am very excited towards doing business apart from studies,get to know about great entrepreneurs who are live examples and who lives among us. Finally,thanks Naveen annna for this kind of podcasts.",
        avatar: "https://via.placeholder.com/48/764ba2/ffffff?text=K"
    },
    {
        author: "@muralimanohar2130",
        text: "Good to see many great telugu people appearing in this podcast. Great content getting delivered, tremendous value getting created. Hope this channel grows to an extent where it can scale this up to a point with which this team frames up a platform that holds all the tools and weapons used to kickstart an idea and is accesible to everyone.",
        avatar: "https://via.placeholder.com/48/f093fb/ffffff?text=M"
    }
];

// ============================================
// Testimonials removed
// ============================================

// ============================================
// Contact Form Handler
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            reason: document.getElementById('reason').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// Intersection Observer for Animations
// ============================================
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all sections and cards
document.querySelectorAll('section, .about-card, .feature-item, .timeline-item').forEach(element => {
    fadeObserver.observe(element);
});

// Add staggered animation for cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }, 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe cards for staggered animation
document.querySelectorAll('.about-card, .feature-item, .timeline-item').forEach(card => {
    cardObserver.observe(card);
});

// Hero stats now use text instead of numbers

// ============================================
// Smooth Scroll for Contact Links
// ============================================
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById('contact');
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Parallax Effect
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.animation = `fadeInUp 0.8s ease-out forwards`;
            el.style.animationDelay = `${index * 0.15}s`;
        }, 100);
    });
});

// ============================================
// Add fade-in animation CSS dynamically
// ============================================
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

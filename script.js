document.addEventListener('DOMContentLoaded', function() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#008dcf"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#008dcf",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});

const moduleCards = document.querySelectorAll('.module-card');

moduleCards.forEach(card => {
    card.addEventListener('click', () => {
        const description = card.querySelector('p');
        const isExpanded = card.classList.contains('expanded');

        // Reset all cards
        moduleCards.forEach(c => {
            c.classList.remove('expanded', 'md:col-span-2');
            c.querySelector('p').classList.add('hidden');
        });

        if (!isExpanded) {
            card.classList.add('expanded', 'md:col-span-2');
            description.classList.remove('hidden');
            
            // Animate the card
            card.animate([
                { transform: 'scale(1)', opacity: '1' },
                { transform: 'scale(1.05)', opacity: '0.8' },
                { transform: 'scale(1)', opacity: '1' }
            ], {
                duration: 300,
                easing: 'ease-in-out'
            });

            // Animate the description
            description.animate([
                { opacity: '0', transform: 'translateY(-20px)' },
                { opacity: '1', transform: 'translateY(0)' }
            ], {
                duration: 300,
                easing: 'ease-out'
            });
        }
    });
});

const carousel = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;

function showItem(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
});

document.querySelectorAll('.learn-more').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.flip-card');
        card.classList.toggle('flipped');
    });
});

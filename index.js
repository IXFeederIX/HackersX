const containerText = document.querySelector('.container-text');
const texts = ['Are you Ready to be a Hacker?', 'Learn to code like a pro!', 'Join our community of Hackers!', 'Discover new ways to hack!'];

let currentIndex = 0;

setInterval(() => {
  containerText.style.opacity = 0;
  setTimeout(() => {
    containerText.textContent = texts[currentIndex];
    containerText.style.opacity = 1;
    currentIndex = (currentIndex + 1) % texts.length;
  }, 500);
}, 5000);
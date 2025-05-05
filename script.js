// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Function for slider navigation
  function scrollSlider(button, direction) {
    const slider = button.parentElement.querySelector('.card-slider');
    const scrollAmount = 300;
    slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
  
  // Autoplay the card slider
  document.querySelectorAll('.card-slider').forEach(slider => {
    setInterval(() => {
      slider.scrollBy({ left: 250, behavior: 'smooth' });
    }, 4000);  // 4 seconds autoplay
  });
  function changeAboutMe() {
    const aboutContent = document.getElementById("about-content");
    aboutContent.innerHTML = "I have developed a passion for technology and innovation, aiming to create impactful solutions in the field of robotics and artificial intelligence.Beyond academics, I enjoy playing throwball and chess , which help me stay creative and balanced. I believe in lifelong learning, and I am committed to continuously improving my knowledge and abilities. My goal is to build a strong foundation during my studies and gradually shape my career through internships, projects, and networking opportunities.";
}

function toggleSkills() {
    const skillsDetails = document.getElementById("skills-details");
    if (skillsDetails.style.display === "none") {
        skillsDetails.style.display = "block";
    } else {
        skillsDetails.style.display = "none";
    }
}
// Scroll to section with smooth behavior
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

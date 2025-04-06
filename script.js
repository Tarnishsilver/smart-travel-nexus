
document.addEventListener('DOMContentLoaded', function() {
  // Background animation
  createBackgroundAnimation();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Initialize features that need JS
  initializeAllFeatures();
});

function createBackgroundAnimation() {
  const backgroundAnimation = document.getElementById('backgroundAnimation');
  if (!backgroundAnimation) return;
  
  const icons = [
    { icon: createSvgIcon('plane', 45), left: '10%', delay: '0s' },
    { icon: createSvgIcon('map-pin'), left: '20%', delay: '2s' },
    { icon: createSvgIcon('calendar'), left: '30%', delay: '4s' },
    { icon: createSvgIcon('plane', -45), left: '45%', delay: '1s' },
    { icon: createSvgIcon('map-pin'), left: '55%', delay: '5s' },
    { icon: createSvgIcon('search'), left: '65%', delay: '2.5s' },
    { icon: createSvgIcon('calendar'), left: '80%', delay: '3.5s' },
    { icon: createSvgIcon('plane', 12), left: '90%', delay: '1.5s' },
  ];
  
  icons.forEach(item => {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'travel-icon';
    iconDiv.style.left = item.left;
    iconDiv.style.bottom = '-100px';
    iconDiv.style.animationDelay = item.delay;
    iconDiv.appendChild(item.icon);
    backgroundAnimation.appendChild(iconDiv);
  });
}

function createSvgIcon(iconName, rotation = 0) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("xmlns", svgNS);
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  if (rotation !== 0) {
    svg.style.transform = `rotate(${rotation}deg)`;
  }
  
  const path = document.createElementNS(svgNS, "path");
  
  switch (iconName) {
    case 'plane':
      path.setAttribute("d", "M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0 0-3 2.1 2.1 0 0 0-3 0L13 8l-8.2-1.8a.8.8 0 0 0-.9 1.2L6 10.5l-3.1 3.1a.8.8 0 0 0 0 1.2l.7.7.9-.3 3-1.2a5.5 5.5 0 0 0 .8.8l-1.2 3-.3.9.7.7a.8.8 0 0 0 1.2 0l3.1-3.1 3.1 2.1a.8.8 0 0 0 1.2-.9Z");
      break;
    case 'map-pin':
      path.setAttribute("d", "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z");
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", "12");
      circle.setAttribute("cy", "10");
      circle.setAttribute("r", "3");
      svg.appendChild(circle);
      break;
    case 'calendar':
      const rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("width", "18");
      rect.setAttribute("height", "18");
      rect.setAttribute("x", "3");
      rect.setAttribute("y", "4");
      rect.setAttribute("rx", "2");
      rect.setAttribute("ry", "2");
      svg.appendChild(rect);
      
      const line1 = document.createElementNS(svgNS, "line");
      line1.setAttribute("x1", "16");
      line1.setAttribute("x2", "16");
      line1.setAttribute("y1", "2");
      line1.setAttribute("y2", "6");
      svg.appendChild(line1);
      
      const line2 = document.createElementNS(svgNS, "line");
      line2.setAttribute("x1", "8");
      line2.setAttribute("x2", "8");
      line2.setAttribute("y1", "2");
      line2.setAttribute("y2", "6");
      svg.appendChild(line2);
      
      const line3 = document.createElementNS(svgNS, "line");
      line3.setAttribute("x1", "3");
      line3.setAttribute("x2", "21");
      line3.setAttribute("y1", "10");
      line3.setAttribute("y2", "10");
      svg.appendChild(line3);
      return svg;
    case 'search':
      const circle2 = document.createElementNS(svgNS, "circle");
      circle2.setAttribute("cx", "11");
      circle2.setAttribute("cy", "11");
      circle2.setAttribute("r", "8");
      svg.appendChild(circle2);
      
      const path2 = document.createElementNS(svgNS, "path");
      path2.setAttribute("d", "m21 21-4.3-4.3");
      svg.appendChild(path2);
      return svg;
  }
  
  if (iconName !== 'calendar' && iconName !== 'search') {
    svg.appendChild(path);
  }
  
  return svg;
}

function initializeAllFeatures() {
  // Mobile menu toggle if we had one
  // const mobileMenuButton = document.getElementById('mobile-menu-button');
  // if (mobileMenuButton) {
  //   mobileMenuButton.addEventListener('click', toggleMobileMenu);
  // }
  
  // Map points hover effect
  const mapPoints = document.querySelectorAll('.map-point');
  mapPoints.forEach(point => {
    point.addEventListener('mouseover', () => {
      const city = point.getAttribute('data-city');
      const rating = point.getAttribute('data-rating');
      console.log(`Exploring ${city} - Rated ${rating}/5`);
    });
  });
}

// function toggleMobileMenu() {
//   const mobileMenu = document.getElementById('mobile-menu');
//   if (mobileMenu) {
//     mobileMenu.classList.toggle('hidden');
//   }
// }

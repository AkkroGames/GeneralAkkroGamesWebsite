function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Visitor Counter - Count only once
if (!localStorage.getItem('visited')) {
  let visits = parseInt(localStorage.getItem('visitCount')) || 0;
  visits++;
  localStorage.setItem('visitCount', visits);
  localStorage.setItem('visited', 'true'); // Mark the visit

  // Set visitor count to the displayed square
  const visitorSquare = document.getElementById('visitorSquare');
  visitorSquare.textContent = visits;
}

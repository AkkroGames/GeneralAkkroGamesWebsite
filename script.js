function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Visitor Counter - Count only once
if (!localStorage.getItem('visited')) {
  let visits = parseInt(localStorage.getItem('visitCount')) || 0;
  visits++;
  localStorage.setItem('visitCount', visits);
  localStorage.setItem('visited', 'true');

  const visitorSquare = document.getElementById('visitorSquare');
  if (visitorSquare) {
    visitorSquare.textContent = visits;
  }
} else {
  const visitorSquare = document.getElementById('visitorSquare');
  if (visitorSquare) {
    const visits = localStorage.getItem('visitCount');
    visitorSquare.textContent = visits;
  }
}

// Optional: Add like/dislike rating logic (if needed)
function rateGame(type) {
  const likeCount = document.getElementById('likeCount');
  const dislikeCount = document.getElementById('dislikeCount');

  if (type === 'like') {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else if (type === 'dislike') {
    dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Visitor Counter - Count only once
if (!localStorage.getItem('visited')) {
  let visits = parseInt(localStorage.getItem('visitCount')) || 0;
  visits++;
  localStorage.setItem('visitCount', visits);
  localStorage.setItem('visited', 'true');
  document.getElementById('visitorSquare').textContent = visits;
} else {
  const visits = localStorage.getItem('visitCount');
  document.getElementById('visitorSquare').textContent = visits;
}

// Simple like/dislike system (can be expanded later)
function rateGame(type) {
  let countKey = type === 'like' ? 'likeCount' : 'dislikeCount';
  let count = parseInt(localStorage.getItem(countKey)) || 0;
  count++;
  localStorage.setItem(countKey, count);
  document.getElementById(countKey).textContent = count;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Visitor Counter - Count only once
if (!localStorage.getItem('visited')) {
  let visits = parseInt(localStorage.getItem('visitCount')) || 0;
  visits++;
  localStorage.setItem('visitCount', visits);
  localStorage.setItem('visited', true);
  document.getElementById("visitorSquare").innerText = visits;
}

// Game Rating System
let likeCount = 1;
let dislikeCount = 0;

function rateGame(type) {
  if (type === 'like') {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount;
  } else if (type === 'dislike') {
    dislikeCount++;
    document.getElementById("dislikeCount").innerText = dislikeCount;
  }
}

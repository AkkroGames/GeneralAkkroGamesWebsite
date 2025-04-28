function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');
const likeCount = document.getElementById('likeCount');
const dislikeCount = document.getElementById('dislikeCount');

likeButton.addEventListener('click', () => {
  likeCount.textContent = parseInt(likeCount.textContent) + 1;
});

dislikeButton.addEventListener('click', () => {
  dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
});

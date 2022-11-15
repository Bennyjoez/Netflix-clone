const learnMore = document.querySelector('#learn-more');
const learnMoreText = document.querySelector('p.more');


learnMore.addEventListener('click', hideMore)
learnMoreText.addEventListener('click', hideMore)

function hideMore(e) {
    learnMoreText.classList.toggle('hidden');
    learnMore.classList.toggle('hidden')
}

//Likes

const like = document.querySelector('.uil-thumbs-up');
const dislike = document.querySelector('.uil-thumbs-down');
const countLike = document.getElementById('count-like');
const postReviews = document.getElementById('post-reviews');
const addComment = document.getElementById('add-connent');
const description = document.querySelector('.description');
const reviewsContainer = document.querySelector('.reviews-container');


const discriptionTab = document.getElementById('dis-tab');
const reviewTab = document.getElementById('rev-tab');


discriptionTab.addEventListener('click', ()=>{
    const openTab = description.getAttribute('data-tab');
    description.setAttribute('data-tab', false)
    reviewsContainer.setAttribute('data-tab', false)
    reviewTab.classList.remove('active-tab')
        discriptionTab.classList.add('active-tab')

        
})

reviewTab.addEventListener('click', ()=>{
    const openTab = description.getAttribute('data-tab');

    if(openTab === 'false'){
        description.setAttribute('data-tab', true)
        reviewsContainer.setAttribute('data-tab', true)
        reviewTab.classList.add('active-tab')
        discriptionTab.classList.remove('active-tab')
    }
})


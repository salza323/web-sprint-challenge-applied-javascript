// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(function(response){
    console.log(response)
    cardMaker(response.data)
})

const cards = document.querySelector('.cards-container')

function cardMaker(data){

    data.articles.forEach((item) =>{

    const card = document.querySelector('div')
    card.classList.add('card')
    cards.appendChild(card)

    const headline = document.querySelector('div')
    headline.classList.add('headline')
    headline.textContent = headline

    const author = document.querySelector('div')
    author.classList.add('author')

    const imgContainer = document.querySelector('div')
    imgContainer.classList.add('img-container')

    const img = document.querySelector('img')
    img.src = authorPhoto

    const credit = document.querySelector('span')
    credit.textContent = authorName

    card.addEventListener('click', function(event){
        event.target.console.log(headline)
    })

})

    return cards
}
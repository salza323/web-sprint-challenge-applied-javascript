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
    cardMaker(response.data.articles.bootstrap)
    cardMaker(response.data.articles.javascript)
    cardMaker(response.data.articles.jquery)
    cardMaker(response.data.articles.node)
    cardMaker(response.data.articles.technology)
    

})

const cards = document.querySelector('.cards-container')

function cardMaker(data){

    data.forEach((item) =>{

        console.log(item)

    const card = document.createElement('div')
    card.classList.add('card')
    cards.appendChild(card)

    const hline = document.createElement('div')
    hline.classList.add('headline')
    hline.textContent = item.headline
    card.appendChild(hline)

    const author = document.createElement('div')
    author.classList.add('author')
    card.appendChild(author)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    const img = document.createElement('img')
    img.src = item.authorPhoto
    imgContainer.appendChild(img)

    const credit = document.createElement('span')
    credit.textContent = item.authorName
    author.appendChild(credit)

    card.addEventListener('click', function(event){
        console.log(item.headline)
    })

})

    return cards
}
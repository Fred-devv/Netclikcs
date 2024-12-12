const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const films = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Vartian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: 'film.html',
        images: './images/Картинка фильма.png'
    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Vartian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: 'film.html',
        images: './images/Картинка фильма.png'
    },
    {
        id: 2,
        title: 'Марсианин 3',
        original: 'The Vartian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: 'film.html',
        images: './images/Картинка фильма.png'
    }
]

const render = (array) => {
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards_items">
                <div class="content-cards_items-img">
                    <img src="${item.images}" />
                </div>

                <div class="content-cards_items-title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards_items-description">
                ${item.category}
                </p>
                    <p class="content-cards_items-rating">
                    ${item.rating}
                </p>
            </a>
        `)
    })
}

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)))
})

render(films)

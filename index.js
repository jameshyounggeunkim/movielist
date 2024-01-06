const message = document.querySelector('#message');


const addMovie = function (evt) {
    evt.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('il');
    const movieTitle = document.createElement('span');

    movieTitle.addEventListener('click', crossOffMovie);

    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    inputField.value = '';
}

document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = function (evt) {
    evt.target.parentNode.remove();
    message.textContent = 'Movie deleted!';
}

const crossOffMovie = function (evt) {
    evt.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched!';
    } else {
        message.textContent = 'Movie added back!';
    }
}
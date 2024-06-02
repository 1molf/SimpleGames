const searchBar = document.getElementById('searchBar');
const autocompleteList = document.getElementById('autocomplete-list');
const games = [
    { name: 'Sokoban', url: 'Sokoban.html', img: 'images/sokoban.png' },
    { name: 'Four In A Row', url: 'FourInARow.html', img: 'images/fourinarow.png' },
    { name: 'TicTacToe', url: 'TicTacToe.html', img: 'images/tictactoe.png' }
];

searchBar.addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    autocompleteList.innerHTML = '';

    if (!searchTerm) {
        return;
    }

    games.forEach(function(game) {
        if (game.name.toLowerCase().includes(searchTerm)) {
            const item = document.createElement('div');
            item.classList.add('autocomplete-item');
            item.innerHTML = `<a href="${game.url}"><img src="${game.img}" height="30px"> ${game.name}</a>`;
            autocompleteList.appendChild(item);
        }
    });

    if (autocompleteList.children.length === 0) {
        autocompleteList.innerHTML = '<div class="no-result">No matches found</div>';
    }
});

document.addEventListener('click', function(e) {
    if (!searchBar.contains(e.target) && !autocompleteList.contains(e.target)) {
        autocompleteList.innerHTML = '';
    }
});

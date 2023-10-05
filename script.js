let dishes = document.getElementById('dishes');

let desserts = document.getElementById('desserts');

let drinks = document.getElementById('drinks');

let logo = document.getElementById('logo');

let dishes_board = document.getElementById('dishes_board');

let desserts_board = document.getElementById('desserts_board');

let drinks_board = document.getElementById('drinks_board');

let body = document.getElementById('body');

logo.onclick = function () {
    desserts.style.display = "block";
    dishes.style.display = "block";
    drinks.style.display = "block";

    dishes_board.style.display = "none";
    desserts_board.style.display = "none";
    drinks_board.style.display = "none";
};

dishes.onclick = function () {
    dishes.style.display = "none";
    desserts.style.display = "none";
    drinks.style.display = "none";

    dishes_board.style.display = "block";
    desserts_board.style.display = "none";
    drinks_board.style.display = "none";
};

desserts.onclick = function () {
    desserts.style.display = "none";
    dishes.style.display = "none";
    drinks.style.display = "none";

    dishes_board.style.display = "none";
    desserts_board.style.display = "block";
    drinks_board.style.display = "none";
};

drinks.onclick = function () {
    desserts.style.display = "none";
    dishes.style.display = "none";
    drinks.style.display = "none";

    dishes_board.style.display = "none";
    desserts_board.style.display = "none";
    drinks_board.style.display = "block";
};

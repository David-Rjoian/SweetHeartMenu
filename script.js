let dishesEng = document.getElementById('dishesEng');

let dessertsEng = document.getElementById('dessertsEng');

let drinksEng = document.getElementById('drinksEng');

let dishesGeo = document.getElementById('dishesGeo');

let dessertsGeo = document.getElementById('dessertsGeo');

let drinksGeo = document.getElementById('drinksGeo');

let logoEng = document.getElementById('logoEng');

let logoGeo = document.getElementById('logoGeo');

let dishes_boardEng = document.getElementById('dishes_boardEng');

let desserts_boardEng = document.getElementById('desserts_boardEng');

let drinks_boardEng = document.getElementById('drinks_boardEng');

let dishes_boardGeo = document.getElementById('dishes_boardGeo');

let desserts_boardGeo = document.getElementById('desserts_boardGeo');

let drinks_boardGeo = document.getElementById('drinks_boardGeo');

let english = document.getElementById('English');

let georgian = document.getElementById('Georgian');

let languageMenu = document.getElementById('languageMenu');


english.onclick = function () {
    logoEng.style.display = "block";
    dessertsEng.style.display = "block";
    dishesEng.style.display = "block";
    drinksEng.style.display = "block";
    languageMenu.style.display = "none";
};

georgian.onclick = function () {
    logoGeo.style.display = "block";
    dessertsGeo.style.display = "block";
    dishesGeo.style.display = "block";
    drinksGeo.style.display = "block";
    languageMenu.style.display = "none";
};

logoEng.onclick = function () {
    dessertsEng.style.display = "block";
    dishesEng.style.display = "block";
    drinksEng.style.display = "block";

    dishes_boardEng.style.display = "none";
    desserts_boardEng.style.display = "none";
    drinks_boardEng.style.display = "none";
};

logoGeo.onclick = function () {
    dessertsGeo.style.display = "block";
    dishesGeo.style.display = "block";
    drinksGeo.style.display = "block";

    dishes_boardGeo.style.display = "none";
    desserts_boardGeo.style.display = "none";
    drinks_boardGeo.style.display = "none";
};

dishesEng.onclick = function () {
    dishesEng.style.display = "none";
    dessertsEng.style.display = "none";
    drinksEng.style.display = "none";

    dishes_boardEng.style.display = "block";
};

dessertsEng.onclick = function () {
    dessertsEng.style.display = "none";
    dishesEng.style.display = "none";
    drinksEng.style.display = "none";

    desserts_boardEng.style.display = "block";
};

drinksEng.onclick = function () {
    dessertsEng.style.display = "none";
    dishesEng.style.display = "none";
    drinksEng.style.display = "none";

    drinks_boardEng.style.display = "block";
};

//-----------------------------------------

dishesGeo.onclick = function () {
    dishesGeo.style.display = "none";
    dessertsGeo.style.display = "none";
    drinksGeo.style.display = "none";

    dishes_boardGeo.style.display = "block";
};

dessertsGeo.onclick = function () {
    dessertsGeo.style.display = "none";
    dishesGeo.style.display = "none";
    drinksGeo.style.display = "none";

    desserts_boardGeo.style.display = "block";
};

drinksGeo.onclick = function () {
    dessertsGeo.style.display = "none";
    dishesGeo.style.display = "none";
    drinksGeo.style.display = "none";

    drinks_boardGeo.style.display = "block";
};

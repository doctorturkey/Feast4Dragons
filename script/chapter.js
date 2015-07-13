'use strict';

var chapterList = [
  'Dance 1 - Prologue',
  'Feast 1 - Prologue',
  'Feast 2 - The Prophet',
  'Feast 3 - The Captain of Guards',
  'Feast 4 - Cersei I',
  'Dance 2 - Tyrion I',
  'Dance 3 - Daenerys I',
  'Feast 5 - Brienne I',
  'Dance 4 - Jon I',
  'Dance 5 - Bran I',
  'Dance 6 - Tyrion II',
  'Feast 6 - Samwell I',
  'Dance 8 - Jon II',
  'Feast 7 - Arya I',
  'Feast 8 - Cersei II',
  'Feast 9 - Jamie I',
  'Feast 10 - Brienne II',
  'Feast 11 - Sansa I',
  'Feast 12 - The Kraken\'s Daughter',
  'Dance 9 - Tyrion III',
  'Dance 10 - Davos I',
  'Dance 11 - Jon III',
  'Dance 12 - Daenerys II',
  'Dance 13 - Reek I',
  'Feast 13 - Cersei III',
  'Feast 14 - The Soiled Knight',
  'Dance 14 - Bran II',
  'Dance 15 - Tyrion IV',
  'Dance 16 - Davos II',
  'Feast 15 - Breinne III',
  'Feast 16 - Samwell II',
  'Dance 17 - Daenerys III',
  'Dance 18 - Jon IV',
  'Dance 19 - Tyrion V',
  'Feast 17 - Jaime II',
  'Feast 18 - Cersei IV',
  'Dance 20 - Davos III',
  'Feast 19 - The Iron Captain',
  'Feast 20 - The Drowned Man',
  'Feast 21 - Brienne IV',
  'Feast 22 - The Queenmaker',
  'Feast 23 - Arya II',
  'Feast 24 - Alayne I',
  'Feast 41 - The Princess in the Tower',
  'Dance 7 - The Merchant\'s Man',
  'Feast 25 - Cersei V',
  'Dance 21 - Reek II',
  'Dance 22 - Jon V',
  'Dance 23 - Tyrion VI',
  'Dance 24 - Daenerys IV',
  'Dance 25 - The Lost Lord',
  'Dance 26 - The Windblown',
  'Dance 27 - The Wayward Bride',
  'Feast 26 - Brienne V',
  'Feast 27 - Samwell III',
  'Feast 28 - Jaime III',
  'Dance 28 - Tyrion VII',
  'Dance 29 - Jon VI',
  'Dance 30 - Davos IV',
  'Feast 29 - Cersei VI',
  'Feast 30 - The Reaver',
  'Dance 31 - Daenerys V',
  'Dance 32 - Melisandre I',
  'Feast 31 - Jaime IV',
  'Feast 32 - Brienne VI',
  'Dance 33 - Reek III',
  'Dance 34 - Tyrion VIII',
  'Feast 33 - Cersei VII',
  'Feast 34 - Jaime V',
  'Feast 35 - Cat of the Canals',
  'Feast 36 - Samwell IV',
  'Feast 37 - Cersei VIII',
  'Feast 38 - Brienne VII',
  'Feast 39 - Jaime VI',
  'Feast 40 - Cersei IX',
  'Dance 35 - Bran III',
  'Dance 36 - Jon VII',
  'Dance 37 - Daenerys VI',
  'Dance 38 - The Prince of Winterfell',
  'Dance 39 - The Watcher',
  'Dance 40 - Jon VIII',
  'Dance 41 - Tyrion IX',
  'Dance 42 - The Turncloak',
  'Dance 43 - The King\'s Prize',
  'Dance 44 - Daenerys VII',
  'Feast 42 - Alayne II',
  'Dance 45 - Jon IX',
  'Feast 43 - Brienne VIII',
  'Feast 44 - Cersei X',
  'Feast 45 - Jaime VII',
  'Feast 46 - Samwell V',
  'Dance 46 - The Blind Girl',
  'Continue reading Dance as normal!'
];

var spot;

document.getElementById('back').addEventListener("click", goBack(), false);
document.getElementById('forward').addEventListener("click", goForward, false);

function goBack () {
    //This needs fixin'
    document.getElementById('chapter').innerHTML = "Don't go back, idiot.";
}

function goForward () {
  
}

/*
$(document).ready(function () {         Should we use jQuery?
  $('#back').click(goBack());
  $('#forward').click(goForward());
});
*/
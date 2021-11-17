'use strict'

let hryvna = document.querySelector('.input');
let zloty = document.querySelector('#zloty');
let euro = document.querySelector('#euro');
let dolar = document.querySelector('#dolar');
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        areaNum.oninput = function () {
            let val = document.getElementById('areaNum').value;
            zloty.onclick = function () {
                let res = val / data[33].rate;
                document.getElementById('ZlotyVal').innerText = res.toFixed(2) + 'Zł';
                document.getElementById('ZlotyVal').style.opacity = 1;
            };
            euro.onclick = function () {
                let res = val / data[32].rate;
                document.getElementById('EuroVal').innerText = res.toFixed(2) + '€';
                document.getElementById('EuroVal').style.opacity = 1;
            };
            dolar.onclick = function () {
                let res = val / data[26].rate;
                document.getElementById('DolarVal').innerText = res.toFixed(2) + '$';
                document.getElementById('DolarVal').style.opacity = 1;
            };
        }
    })
    .catch(console.error);

function time() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');;
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let seconds = today.getSeconds();

    today = mm + ':' + dd + ':' + yyyy;
    let time = hours + ':' + mins + ':' + seconds;

    document.getElementById('tod').innerText = 'Today is ' + today + " " + time;
}
setInterval(time, 1000);
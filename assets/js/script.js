const btnNo = document.getElementById('btn_no')
const btnYes = document.getElementById('btn_yes')

if (!localStorage.getItem('days',)) {
    localStorage.setItem('days', 0);
}

if (!localStorage.getItem('timer')) {
    localStorage.setItem('timer', true);
}

const currentDate = new Date();

console.log(currentDate.toLocaleDateString()) 
const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));

// const tomorrow = new Date('Feb 24, 2023 17:55:30')
// console.log(tomorrow) 

let results = document.getElementById('turn_off_results');

let days = parseInt(localStorage.getItem('days'));
results.innerHTML = `Estamos há ${days} dia(s) sem o PC do Pingu desligar.`;

// Botão que adiciona +1 dia no contador.
const clique = btnNo.addEventListener('click', () => {
    days++;
    localStorage.setItem('days', days);
    // localStorage.setItem('btn_add', true)
    results.innerHTML = `Estamos há ${days} dia(s) sem o PC do Pingu desligar.`;
    document.getElementById("btn_no").disabled = localStorage.getItem('btn_add');

    const timer = setInterval(function () {
        
        var countDown = tomorrow.getTime();
        var now = new Date().getTime();
        var distance = countDown - now
        console.log(distance)

        localStorage.setItem('current_date', now)
        localStorage.setItem('remaining', distance)

        if (distance < 0){

            clearInterval(timer);
            localStorage.setItem('btn_add', false);
            document.getElementById("btn_no").disabled = localStorage.getItem('btn_add');
        }
    }, 1000) 
})

const btn_off = function(){

    var countDown = tomorrow.getTime();
        var now = new Date().getTime();
        var distance = countDown - now

        localStorage.setItem('current_date', now);
        localStorage.setItem('remaining', distance);

    if (distance < now){
        document.getElementById("btn_no").disabled = localStorage.getItem('btn_add');
    }
}

// Botão que reseta o contador instântaneamente e no localStorage.
btnYes.addEventListener('click', () => {
    days = 0;
    results.innerHTML = `Estamos há ${days} dia(s) sem o PC do Pingu desligar.`;
    localStorage.removeItem('days');

    document.getElementById("btn_no").disabled = false;
    
    localStorage.setItem('btn_add', true)
})
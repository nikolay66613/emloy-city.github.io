// const btnOpenMenu = document.getElementById('open_mob_menu');
// const btnCloseMenu = document.getElementById('close_mob_menu');

// function openMenu =


const btnOpenMenu = document.getElementById('open_mob_menu');
const btnCloseMenu = document.getElementById('close_menu');
const mobileMenu = document.getElementById('mobile_menu');

btnOpenMenu.onclick = function(){
    
    btnCloseMenu.classList.toggle('active_menu'),
    btnOpenMenu.style.display = 'none';
    btnCloseMenu.style.display = 'block';
    mobileMenu.classList.toggle('active_menu');
    console.log('click1')
};

btnCloseMenu.onclick = function(){

    btnCloseMenu.classList.toggle('active_menu'),
    btnOpenMenu.style.display = 'block';
    btnCloseMenu.style.display = 'none';
    mobileMenu.classList.toggle('active_menu');
    console.log('click2');
};

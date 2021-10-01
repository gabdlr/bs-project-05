//Smoothscroll vanilla JS
document.querySelectorAll('.navbar .nav-link').forEach((element)=>{
    element.addEventListener('click', event =>{
        event.preventDefault();
        document.querySelector(element.getAttribute('href')).scrollIntoView({
            behavior: "smooth",
            block: 'start',
            inline: 'start'
        });
    })
});

//Cambia color del scrollbar
window.onscroll = e => {
    const header = document.querySelector('#navegacion-principal');
    const scroll = window.scrollY;
    if (scroll > 300) 
    {
        header.classList.add('bg-success');
    }    else
    {
        header.classList.remove('bg-success');
    }
}

//Countdown
$(document).ready(function () {
  $("#fecha").countdown("2021/11/23", function (e) {
    $(this).html(
      e.strftime(
        "<span>%D</span> Dias <span>%H</span> Horas <span>%M</span> Minutos <span>%S</span> Segundos"
      )
    );
  });
});

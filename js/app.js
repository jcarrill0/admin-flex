const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {

     const claseMenu = e.target.classList;

     // Crear variables que seleccionen las flechas y la pagina
     const contenedor = document.querySelector('.pagina');
     const flechaIzq = document.querySelector('.fa-arrow-left');
     const flechaDer = document.querySelector('.fa-arrow-right');

     if(claseMenu.contains('fa-arrow-left')) {
          e.target.style.display = 'none';
          flechaDer.style.display = 'block';
          contenedor.classList.add('no-menu');
     } else if(claseMenu.contains('fa-arrow-right')) {
          e.target.style.display = 'none';
          flechaIzq.style.display = 'block';
          contenedor.classList.remove('no-menu');
     }
});


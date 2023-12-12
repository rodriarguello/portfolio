document.addEventListener('DOMContentLoaded',()=>{
    
    const menu = document.getElementById('menu');
    const itemsMenu = document.querySelectorAll("#menu a");
    const wrapper = document.getElementById('wrapper');
    const btnMenu = document.getElementById('btn-menu');

    
    
    btnMenu.addEventListener('click',()=>{
        
        if (menu.classList.contains('menu-mobile')){
            menu.classList.remove('menu-mobile');
            wrapper.classList.remove('mostrar-wrapper');
        }else{
            
            menu.classList.add('menu-mobile');
            wrapper.classList.add('mostrar-wrapper');
        }
    });

    itemsMenu.forEach(el => el.addEventListener('click', ()=>{
        
        if (menu.classList.contains('menu-mobile')) {
            menu.classList.remove('menu-mobile');
            wrapper.classList.remove('mostrar-wrapper');
        }

    }));

    wrapper.addEventListener('click',()=>{
        menu.classList.remove('menu-mobile');
        wrapper.classList.remove('mostrar-wrapper');
    });

});
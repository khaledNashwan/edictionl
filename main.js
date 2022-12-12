// change navbar color if scroll
window.addEventListener(`scroll`, () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
});

const answe = document.querySelectorAll('.card_faqs');

answe.forEach(card_faqs => {
    card_faqs.addEventListener('click', () => {
        card_faqs.classList.toggle('show');

        const icon = card_faqs.querySelector('.faq_icone i');
        if (icon.className === 'uil uil-plus') {
                
            icon.className = 'uil uil-minus';
            
            } else {
                icon.className =  'uil uil-plus'
            }
     })
       
}); 
 

const menu = document.querySelector('.nav_menu');
const menuBtn =  document.querySelector('#open_menu');
const closeBtn =  document.querySelector('#close_menu');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"
})


closeBtn.addEventListener('click' ,  () => {
      menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
} )


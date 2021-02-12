
let as = document.querySelector('.er');
document.body.addEventListener('mousedown', function(event){
         as.style.left = event.clientY - 20 + 'px';
        as.style.top = event.clientX - 20 + 'px';
 });
   
const scrollElement = document.querySelector('#js-slide');

isDown = false;

scrollElement.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scrollElement.offsetLeft;
    scrollLeft = scrollElement.scrollLeft;

  });

  scrollElement.addEventListener('mouseleave', () => {
    isDown = false;
  });
  scrollElement.addEventListener('mouseup', () => {
    isDown = false;

  });
  scrollElement.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollElement.offsetLeft;
    const speed = (x - startX) * 1; 
    scrollElement.scrollLeft = scrollLeft - speed;
  });

  window.addEventListener("scroll", (e) => {
    
    if(window.scrollY <= 1700){
        document.querySelector('.axe').classList.add('disableAxe')
        document.querySelector('.axe').classList.remove('activeAxe')
     

    }
    else{
        document.querySelector('.axe').classList.add('activeAxe')
        document.querySelector('.axe').classList.remove('disableAxe')

    }


  })


//   if(window.scrollY)
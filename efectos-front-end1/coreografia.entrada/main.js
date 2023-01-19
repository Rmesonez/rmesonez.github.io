const container = document.querySelector('.row');
const cards = document.querySelectorAll('.card');
let styles = window.getComputedStyle(cards[0]);


cards.forEach((el => el.style.opacity = 0));

function setDelay() {
    let itemWidth = cards[0].offsetWidth + parseInt(styles.marginLeft) + parseInt(styles.marginRight);
    let itemsPerRow = Math.floor(container.offsetWidth / itemWidth);
    
  for (let i = 0; i < cards.length; i+= itemsPerRow){
    for (let j = i; j < (i + itemsPerRow); j++){
      let xPosition = parseInt(i / itemsPerRow);
      let yPosition = j - i;

      let positionSum = xPosition + yPosition;

        cards[i+(j-i)].style.transitionDelay = (positionSum * 50) + 'ms';

    }
    cards.forEach(el => el.classList.add("zoomIn"));


    }
}

setDelay();




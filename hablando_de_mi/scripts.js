let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question .more')
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer div');


for ( let i = 0; i < btnDropdown.length; i ++ ) {
    
    let altoParrafo = parrafo[i].clientHeight;
    let switchs = 0;
    
    btnDropdown[i].addEventListener('click', (e) => {
        
         e.preventDefault();
        if ( switchs  == 0) {

            // switchs = 0;
            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<button>Cerrar</button>';
            switchs ++;

        }

        else if ( switchs == 1 ) {

            // switchs = 1;
            answer[i].style.height = `0`;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<button>Informacion</button>';
            switchs --;

        }



    })
    
}
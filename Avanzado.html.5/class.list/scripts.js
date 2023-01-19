window.addEventListener('load', init); 
    function init() {
        var el = document.querySelector('#elemento');
        el.onclick = function() {
            el.classList.toggle('rojo');
        }
        //     if (!el.classList.contains('rojo')) {
        //         el.classList.add('rojo');
                
        //     } else {
        //         el.classList.remove('rojo');
                
        //     }
        // }
        
    }




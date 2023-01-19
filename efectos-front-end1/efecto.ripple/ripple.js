var ripple = {
    init: function(selector) {
      document.querySelectorAll(selector).forEach(el => this.transform(el));
    },
    transform: function(element) {
        element.addEventListener('click', function(e) {

        element.style.position = 'relative';

            let coords = {
                x: e.x,
                y: e.y
            };
           let rect = element.getBoundingClientRect();

           let clickPosition = {
                x: coords.x - rect.left,
                y: coords.y - rect.top
            };
           
              let ripple = document.createElement('span');
              let styles = `
                width: ${rect.width * 2}px;
                height: ${rect.width * 2}px;
                border-radius: 50%;
                background-color: white;
                opcity: 0.56;
                position: absolute;
                top: ${clickPosition.y - rect.width}px;
                left: ${clickPosition.x - rect.width}px;
                transform: scale(0);
                transition: all 0.3s cubic-bezier(0.3, 0, 0.2, 1);
                `;
                ripple.style.cssText = styles;

                setTimeout(() => {
                    ripple.style.transform = 'scale(1)';
                    ripple.style.opacity = '0';
                }, 50);

                setTimeout(() => {
                    ripple.remove ();
                    }, 350);

                element.appendChild(ripple);
        });
    }
}
window.addEventListener('load', init);
        function init(){
            document.querySelector('#form').addEventListener('submit',sendForm, false);
        }
        function sendForm(e){
            e.preventDefault();
            var form = this;
            var fD = new FormData(form);
           

            var ajax = new XMLHttpRequest();
            ajax.open('POST', 'target.php', true);
            ajax.responseType = 'text';
            ajax.addEventListener('load', function(e){
                if (this.status = 200){
                    console.log(this.response);
                }
            },false);
            ajax.send(fD);
            return false;
         }
(function(){
    document.querySelector("#file__uploader")
        .addEventListener("change", function(e){
            var files = e.target.files;

            var image = files[0];

            let imageUrl = URL.createObjectURL(image);

            document.querySelector(".profile .img")
                .style.backgroundImage = `url(${imageUrl})`;
         
});
})();

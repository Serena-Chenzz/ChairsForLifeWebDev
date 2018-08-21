jQuery(document).ready(function($) {
        $('#myCarousel').carousel({
                interval: false
        });
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
});

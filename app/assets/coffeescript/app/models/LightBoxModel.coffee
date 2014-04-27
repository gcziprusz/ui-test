define ["jquery"], ($) ->

  LightBoxModel = (parent =         $("body"), 
                   imgCont =        $(".images-container"), 
                   clazz =          "lightbox", 
                   lightboxImage =  "lightboxImage", 
                   keycodes =       [13,27]) ->
                   
    @parent =         parent
    @imageContainer = imgCont 
    @imageClass =     clazz
    @lightboxImage =  lightboxImage
    @keycodes =       keycodes
    return
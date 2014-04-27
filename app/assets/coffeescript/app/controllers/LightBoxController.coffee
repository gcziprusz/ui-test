define ["./BaseController"], (Base) ->

  Controller = new Base("LightBoxController")

  Controller.start = (dis) ->
    img = @createImgWithClass(@getSrc dis, 
                              @model.lightboxImage)    
    lightbox = @createElementWithClass("div", 
                                       @model.imageClass)
    lightbox.append img    
    @model.parent.append lightbox
   
   Controller.close = (e) ->
     $(".#{@model.imageClass}")
        .remove() unless Controller.keyPressed(
                                       @model.keycodes,e)
        return

  lightBoxController
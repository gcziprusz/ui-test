define ["jquery","c/LightBoxController","m/LightBoxModel"], 
  ($,Controller,Model) ->
  
  model = new Model($("body"), 
                    $(".images-container"), 
                    "lightbox", 
                    "lightboxImage", 
                    [13,27])
                    
  Controller.setModel model

  $ ->
    model.imageContainer.on "click", "img", ->
      lb = Controller.start(this)
      
      $(lb).on "keyup", (e) ->
      	Controller.close e

      return

    return

  return
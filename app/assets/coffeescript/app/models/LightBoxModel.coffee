define ["jquery"], ($) ->
  LightBoxModel = (parent, imgCont, clazz, lightboxImage, keycodes) ->
    @parent = parent or $("body")
    @imageContainer = imgCont or $(".images-container")
    @imageClass = clazz or "lightbox"
    @lightboxImage = lightboxImage or "lightboxImage"
    @keycodes = keycodes or [
      13
      27
    ]
    return
  LightBoxModel
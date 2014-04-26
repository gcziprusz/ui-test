define ["./BaseController"], (BaseController) ->
  lightBoxController = new BaseController("LightBoxController")
  lightBoxController.start = (dis) ->
    img = @createImgWithClass($(dis).attr("src"), @model.lightboxImage)
    lightbox = @createElementWithClass("div", @model.imageClass)
    lightbox.append img
    @model.parent.append lightbox

  lightBoxController
define ["./BaseController"], (BaseController) ->
  readMoreController = new BaseController("ReadMoreController")
  readMoreController.start = (dis) ->
    isViewExpanded = @isElementTaller(@model.container, @model.initialHeight)
    @animateHeight @model.container, @toggleHeight(isViewExpanded, @model.container), @model.animateDuration
    lblRead = @getReadMoreLabel(isViewExpanded)
    @setText $(dis), lblRead
    return

  readMoreController
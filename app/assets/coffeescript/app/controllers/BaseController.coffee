define ->
  BaseController = (id) ->
    @id = id
    return
  BaseController:: =
    setModel: (model) ->
      @model = model
      return

    animateHeight: (el, h, duration) ->
      el.animate
        height: h
      , duration
      return

    setText: (el, txt) ->
      el.text txt
      return

    isElementTaller: (el, h) ->
      el.height() > h

    createImgWithClass: (src, className) ->
      $("<img/>").addClass(className).attr "src", src

    createElementWithClass: (eltype, clss) ->
      $(document.createElement(eltype)).addClass clss

    toggleHeight: (expanded, container) ->
      (if expanded then @model.initialHeight else @model.maximumHeight)

    getReadMoreLabel: (viewExpanded) ->
      (if viewExpanded then @model.txtReadMore else @model.txtReadLess)

    keyPressed:(keyz,event) ->
      keyz.indexOf(event.keyCode) is -1
  
  BaseController

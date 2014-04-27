define ->
  BaseController = (id) ->
    @id = id
    return
  BaseController:: =
    setModel: (model) ->
      @model = model
      return
    
    setDefaultState:(m) ->
      @setDefaultHeight m.container,
                        m.initialHeight
      @addClass m.container,
                m.collapsedClassName
   
    setDefaultHeight:(c,h) ->
      $(c).height(h)
    
    getSrc:(el) ->
    	$(el).attr "src"
    	
    animateHeight: (el,h,d) ->
      el.animate
        height:h
      , d
      return

    setText: (el, txt) ->
      el.text txt
      return

    hasClass: (el, c) ->
      el.hasClass c
      
    removeClass: (el,c) ->
      el.removeClass c
   
    addClass: (el,c) ->
      el.addClass c
      
    createImgWithClass: (src, className) ->
      $("<img/>").addClass(className).attr "src", src

    createElementWithClass: (eltype, clss) ->
      $(document.createElement(eltype)).addClass clss

    keyPressed:(keyz,event) ->
      keyz.indexOf(event.keyCode) is -1
  
  BaseController
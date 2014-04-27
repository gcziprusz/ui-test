define ["./BaseController"], (Base) ->
  
  Controller = new Base("ReadMoreController")

  Controller.start = (dis) ->
    
    isCollapsed = @hasClass @model.container, 
                            @model.collapsedClassName
    
    if isCollapsed
      @animateHeight @model.container, 
                     @model.maximumHeight, 
                     @model.animateDuration
      
      @setText $(dis), 
               @model.txtReadLess
      
      @removeClass @model.container, 
                   @model.collapsedClassName
    else
      @animateHeight @model.container, 
                     @model.initialHeight, 
                     @model.animateDuration
      
      @setText $(dis), 
               @model.txtReadMore

      @addClass @model.container, 
                @model.collapsedClassName
    
    return

  Controller
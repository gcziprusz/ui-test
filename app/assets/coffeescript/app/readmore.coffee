define ["jquery", "c/ReadMoreController", "m/ReadMoreModel"], 
  ($,Controller,Model) ->
  
  model = new Model(400, 
                    1600, 
                    500, 
                    $(".read-more-container"), 
                    "Read More", 
                    "Read Less",
      	           "collapsed")
  
  Controller.setModel model
  Controller.setDefaultState model
  
  $ ->
    $(".button").on "click", (e) ->
      e.preventDefault()
      Controller.start this
      return
    return
  return
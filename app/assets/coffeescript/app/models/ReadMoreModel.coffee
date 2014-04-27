define ["jquery"], ($) ->

  ReadMoreModel = (initH =              400, 
                   maxH =               1600, 
                   duration =           500, 
                   cont =               $(".read-more-container"), 
                   readMore =           "Read More", 
                   readLess =           "Read Less",
                   collapsedClassName = "collapsed") ->
                   
    @initialHeight =      initH
    @maximumHeight =      maxH
    @animateDuration =    duration
    @container =          cont
    @txtReadmore =        readMore
    @txtReadLess =        readLess
    @collapsedClassName = collapsedClassName 
    return
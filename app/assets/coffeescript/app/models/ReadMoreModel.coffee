define ["jquery"], ($) ->
  ReadMoreModel = (initH, maxH, duration, cont, readMore, readLess) ->
    @initialHeight = initH or 400
    @maximumHeight = maxH or 1600
    @animateDuration = duration or 500
    @container = cont or $(".read-more-container")
    @txtReadmore = readMore or "Read More"
    @txtReadLess = readLess or "Read Less"
    return
  ReadMoreModel

(function() {
  define(["jquery"], function($) {
    var ReadMoreModel;

    return ReadMoreModel = function(initH, maxH, duration, cont, readMore, readLess, collapsedClassName) {
      if (initH == null) {
        initH = 400;
      }
      if (maxH == null) {
        maxH = 1600;
      }
      if (duration == null) {
        duration = 500;
      }
      if (cont == null) {
        cont = $(".read-more-container");
      }
      if (readMore == null) {
        readMore = "Read More";
      }
      if (readLess == null) {
        readLess = "Read Less";
      }
      if (collapsedClassName == null) {
        collapsedClassName = "collapsed";
      }
      this.initialHeight = initH;
      this.maximumHeight = maxH;
      this.animateDuration = duration;
      this.container = cont;
      this.txtReadmore = readMore;
      this.txtReadLess = readLess;
      this.collapsedClassName = collapsedClassName;
    };
  });

}).call(this);

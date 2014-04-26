(function() {
  define(["jquery"], function($) {
    var ReadMoreModel;

    ReadMoreModel = function(initH, maxH, duration, cont, readMore, readLess) {
      this.initialHeight = initH || 400;
      this.maximumHeight = maxH || 1600;
      this.animateDuration = duration || 500;
      this.container = cont || $(".read-more-container");
      this.txtReadmore = readMore || "Read More";
      this.txtReadLess = readLess || "Read Less";
    };
    return ReadMoreModel;
  });

}).call(this);

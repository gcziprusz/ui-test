(function() {
  define(["jquery"], function($) {
    var LightBoxModel;

    LightBoxModel = function(parent, imgCont, clazz, lightboxImage, keycodes) {
      this.parent = parent || $("body");
      this.imageContainer = imgCont || $(".images-container");
      this.imageClass = clazz || "lightbox";
      this.lightboxImage = lightboxImage || "lightboxImage";
      this.keycodes = keycodes || [13, 27];
    };
    return LightBoxModel;
  });

}).call(this);

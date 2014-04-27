(function() {
  define(["jquery"], function($) {
    var LightBoxModel;

    return LightBoxModel = function(parent, imgCont, clazz, lightboxImage, keycodes) {
      if (parent == null) {
        parent = $("body");
      }
      if (imgCont == null) {
        imgCont = $(".images-container");
      }
      if (clazz == null) {
        clazz = "lightbox";
      }
      if (lightboxImage == null) {
        lightboxImage = "lightboxImage";
      }
      if (keycodes == null) {
        keycodes = [13, 27];
      }
      this.parent = parent;
      this.imageContainer = imgCont;
      this.imageClass = clazz;
      this.lightboxImage = lightboxImage;
      this.keycodes = keycodes;
    };
  });

}).call(this);

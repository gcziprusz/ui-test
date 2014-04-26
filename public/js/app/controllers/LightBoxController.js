(function() {
  define(["./BaseController"], function(BaseController) {
    var lightBoxController;

    lightBoxController = new BaseController("LightBoxController");
    lightBoxController.start = function(dis) {
      var img, lightbox;

      img = this.createImgWithClass($(dis).attr("src"), this.model.lightboxImage);
      lightbox = this.createElementWithClass("div", this.model.imageClass);
      lightbox.append(img);
      return this.model.parent.append(lightbox);
    };
    return lightBoxController;
  });

}).call(this);

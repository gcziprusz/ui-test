(function() {
  define(["./BaseController"], function(Base) {
    var Controller;

    Controller = new Base("LightBoxController");
    Controller.start = function(dis) {
      var img, lightbox;

      img = this.createImgWithClass(this.getSrc(dis), this.model.lightboxImage);
      lightbox = this.createElementWithClass("div", this.model.imageClass);
      lightbox.append(img);
      return this.model.parent.append(lightbox);
    };
    Controller.close = function(e) {
      if (!Controller.keyPressed(this.model.keycodes, e)) {
        $("." + this.model.imageClass).remove();
      }
    };
    return Controller;
  });

}).call(this);

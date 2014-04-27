(function() {
  define(["jquery", "c/LightBoxController", "m/LightBoxModel"], function($, Controller, Model) {
    var model;

    model = new Model($("body"), $(".images-container"), "lightbox", "lightboxImage", [13, 27]);
    Controller.setModel(model);
    $(function() {
      model.imageContainer.on("click", "img", function() {
        var lb;

        lb = Controller.start(this);
        $(lb).on("keyup", function(e) {
          return Controller.close(e);
        });
      });
    });
  });

}).call(this);

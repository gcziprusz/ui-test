(function() {
  define(["jquery", "./controllers/LightBoxController", "./models/LightBoxModel"], function($, LightBoxController, LightBoxModel) {
    var model;

    model = new LightBoxModel($("body"), $(".images-container"), "lightbox", "lightboxImage", [13, 27]);
    LightBoxController.setModel(model);
    $(function() {
      model.imageContainer.on("click", "img", function() {
        var lb;

        lb = LightBoxController.start(this);
        $(lb).on("keyup", function(e) {
          if (!LightBoxController.keyPressed(LightBoxController.model.keycodes, e)) {
            $("." + LightBoxController.model.imageClass).remove();
          }
        });
      });
    });
  });

}).call(this);

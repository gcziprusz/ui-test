(function() {
  define(["jquery", "./controllers/ReadMoreController", "./models/ReadMoreModel"], function($, ReadMoreController, ReadMoreModel) {
    var model;

    model = new ReadMoreModel(400, 1600, 500, $(".read-more-container"), "Read More", "Read Less");
    ReadMoreController.setModel(model);
    $(function() {
      $(".button").on("click", function(e) {
        e.preventDefault();
        ReadMoreController.start(this);
      });
    });
  });

}).call(this);

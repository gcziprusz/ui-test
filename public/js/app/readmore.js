(function() {
  define(["jquery", "c/ReadMoreController", "m/ReadMoreModel"], function($, Controller, Model) {
    var model;

    model = new Model(400, 1600, 500, $(".read-more-container"), "Read More", "Read Less", "collapsed");
    Controller.setModel(model);
    Controller.setDefaultState(model);
    $(function() {
      $(".button").on("click", function(e) {
        e.preventDefault();
        Controller.start(this);
      });
    });
  });

}).call(this);

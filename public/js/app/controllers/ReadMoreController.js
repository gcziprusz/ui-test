(function() {
  define(["./BaseController"], function(BaseController) {
    var readMoreController;

    readMoreController = new BaseController("ReadMoreController");
    readMoreController.start = function(dis) {
      var isViewExpanded, lblRead;

      isViewExpanded = this.isElementTaller(this.model.container, this.model.initialHeight);
      this.animateHeight(this.model.container, this.toggleHeight(isViewExpanded, this.model.container), this.model.animateDuration);
      lblRead = this.getReadMoreLabel(isViewExpanded);
      this.setText($(dis), lblRead);
    };
    return readMoreController;
  });

}).call(this);

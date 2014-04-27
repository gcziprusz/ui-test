(function() {
  define(["./BaseController"], function(Base) {
    var Controller;

    Controller = new Base("ReadMoreController");
    Controller.start = function(dis) {
      var isCollapsed;

      isCollapsed = this.hasClass(this.model.container, this.model.collapsedClassName);
      if (isCollapsed) {
        this.animateHeight(this.model.container, this.model.maximumHeight, this.model.animateDuration);
        this.setText($(dis), this.model.txtReadLess);
        this.removeClass(this.model.container, this.model.collapsedClassName);
      } else {
        this.animateHeight(this.model.container, this.model.initialHeight, this.model.animateDuration);
        this.setText($(dis), this.model.txtReadMore);
        this.addClass(this.model.container, this.model.collapsedClassName);
      }
    };
    return Controller;
  });

}).call(this);

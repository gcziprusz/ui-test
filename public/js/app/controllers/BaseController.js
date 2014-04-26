(function() {
  define(function() {
    var BaseController;

    BaseController = function(id) {
      this.id = id;
    };
    BaseController.prototype = {
      setModel: function(model) {
        this.model = model;
      },
      animateHeight: function(el, h, duration) {
        el.animate({
          height: h
        }, duration);
      },
      setText: function(el, txt) {
        el.text(txt);
      },
      isElementTaller: function(el, h) {
        return el.height() > h;
      },
      createImgWithClass: function(src, className) {
        return $("<img/>").addClass(className).attr("src", src);
      },
      createElementWithClass: function(eltype, clss) {
        return $(document.createElement(eltype)).addClass(clss);
      },
      toggleHeight: function(expanded, container) {
        if (expanded) {
          return this.model.initialHeight;
        } else {
          return this.model.maximumHeight;
        }
      },
      getReadMoreLabel: function(viewExpanded) {
        if (viewExpanded) {
          return this.model.txtReadMore;
        } else {
          return this.model.txtReadLess;
        }
      },
      keyPressed: function(keyz, event) {
        return keyz.indexOf(event.keyCode) === -1;
      }
    };
    return BaseController;
  });

}).call(this);

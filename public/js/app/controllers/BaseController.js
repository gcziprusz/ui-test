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
      setDefaultState: function(m) {
        this.setDefaultHeight(m.container, m.initialHeight);
        return this.addClass(m.container, m.collapsedClassName);
      },
      setDefaultHeight: function(c, h) {
        return $(c).height(h);
      },
      getSrc: function(el) {
        return $(el).attr("src");
      },
      animateHeight: function(el, h, d) {
        el.animate({
          height: h
        }, d);
      },
      setText: function(el, txt) {
        el.text(txt);
      },
      hasClass: function(el, c) {
        return el.hasClass(c);
      },
      removeClass: function(el, c) {
        return el.removeClass(c);
      },
      addClass: function(el, c) {
        return el.addClass(c);
      },
      createImgWithClass: function(src, className) {
        return $("<img/>").addClass(className).attr("src", src);
      },
      createElementWithClass: function(eltype, clss) {
        return $(document.createElement(eltype)).addClass(clss);
      },
      keyPressed: function(keyz, event) {
        return keyz.indexOf(event.keyCode) === -1;
      }
    };
    return BaseController;
  });

}).call(this);

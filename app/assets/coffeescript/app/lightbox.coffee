define [
  "jquery"
  "./controllers/LightBoxController"
  "./models/LightBoxModel"
], ($, LightBoxController, LightBoxModel) ->
  model = new LightBoxModel($("body"), $(".images-container"), "lightbox", "lightboxImage", [
    13
    27
  ])
  LightBoxController.setModel model
  $ ->
    model.imageContainer.on "click", "img", ->
      lb = LightBoxController.start(this)
      $(lb).on "keyup", (e) ->
        $("." + LightBoxController.model.imageClass).remove()  unless LightBoxController.keyPressed(LightBoxController.model.keycodes,e)
        return

      return

    return

  return
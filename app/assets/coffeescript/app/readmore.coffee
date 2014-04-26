define [
  "jquery"
  "./controllers/ReadMoreController"
  "./models/ReadMoreModel"
], ($, ReadMoreController, ReadMoreModel) ->
  model = new ReadMoreModel(400, 1600, 500, $(".read-more-container"), "Read More", "Read Less")
  ReadMoreController.setModel model
  $ ->
    $(".button").on "click", (e) ->
      e.preventDefault()
      ReadMoreController.start this
      return
    return
  return
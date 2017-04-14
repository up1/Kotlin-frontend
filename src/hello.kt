import kotlin.browser.document

@JsName("say")
fun say(name: String) {
  val div = document.getElementById("message")
  div?.innerHTML = "Hello " + name
}

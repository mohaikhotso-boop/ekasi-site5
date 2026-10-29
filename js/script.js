const form = document.getElementById("quote-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const number = document.getElementById("contact-number").value;

  const text =
    "Hi eKasi Site 5, my name is" +
    name +
    ". Service : " +
    service +
    ". " +
    message;

  const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
  console.log("form caught", number);

  window.open(url, "_blank");
});

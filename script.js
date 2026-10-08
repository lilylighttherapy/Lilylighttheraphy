const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  }));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const whatsappNumber = "60102152195";

    const message = [
      "Hello Jenefa, I would like to make an enquiry.",
      "",
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `WhatsApp: ${data.get("whatsapp") || "Not provided"}`,
      `Preferred session: ${data.get("enquiry") || ""}`,
      `Preferred mode: ${data.get("mode") || ""}`,
      `Preferred day / time: ${data.get("preferred_time") || "Not specified"}`,
      "",
      `Message:\n${data.get("message") || "No additional message provided."}`,
      "",
      "Please note: this enquiry form is not intended for emergency or crisis support."
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    if (formNote) {
      formNote.textContent = "Opening WhatsApp…";
    }

    window.open(whatsappUrl, "_blank", "noopener");
  });
}

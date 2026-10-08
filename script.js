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
    const recipient = "YOUR_EMAIL@example.com"; // Replace with Lily & Light's real email before publishing.
    if (recipient.startsWith("YOUR_EMAIL")) {
      formNote.textContent = "Please add the Lily & Light email address to script.js before publishing the enquiry form.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Counselling enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nWhatsApp: ${data.get("whatsapp") || "Not provided"}\nPreferred session: ${data.get("enquiry")}\nPreferred mode: ${data.get("mode")}\nPreferred day / time: ${data.get("preferred_time") || "Not specified"}\n\nMessage:\n${data.get("message") || "No additional message provided."}\n\nPlease note: this enquiry form is not intended for emergency or crisis support.`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    formNote.textContent = "Opening your email app…";
  });
}

//Navbar

document.querySelector(".toggleBtn").addEventListener("click", function () {
  const centerMenu = document.querySelector(".center");
  centerMenu.classList.toggle("active");
});

//smooth scroll navlinks

document.querySelectorAll(".centerList li").forEach((item) => {
  item.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// /send email

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form data
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // Construct mailto URL
      var mailtoLink =
        "mailto:tilman@dietrich.ai" +
        "?subject=" +
        encodeURIComponent("Contact Form Submission") +
        "&body=" +
        encodeURIComponent(
          "Name: " +
            name +
            "\n" +
            "Email: " +
            email +
            "\n" +
            "Message: " +
            message
        );

      // Open the default mail client with the mailto URL
      window.location.href = mailtoLink;
    });
});

//For draggablke

document.addEventListener("DOMContentLoaded", () => {
  const testimonialCardBox = document.getElementById("TestimonialCardBox");
  let isDown = false;
  let startX;
  let scrollLeft;

  testimonialCardBox.addEventListener("mousedown", (e) => {
    isDown = true;
    testimonialCardBox.classList.add("active");
    startX = e.pageX - testimonialCardBox.offsetLeft;
    scrollLeft = testimonialCardBox.scrollLeft;
  });

  testimonialCardBox.addEventListener("mouseleave", () => {
    isDown = false;
    testimonialCardBox.classList.remove("active");
  });

  testimonialCardBox.addEventListener("mouseup", () => {
    isDown = false;
    testimonialCardBox.classList.remove("active");
  });

  testimonialCardBox.addEventListener("mousemove", (e) => {
    if (!isDown) return; // Stop if not dragging
    e.preventDefault(); // Prevent text selection
    const x = e.pageX - testimonialCardBox.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    testimonialCardBox.scrollLeft = scrollLeft - walk;
  });
});

// Navbar smooth animations


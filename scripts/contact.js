document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("contact-name").value
      const email = document.getElementById("contact-email").value
      const subject = document.getElementById("contact-subject").value

      // Simulate form submission
      formMessage.textContent = "Sending your message..."
      formMessage.style.color = "#666"

      setTimeout(() => {
        formMessage.innerHTML = `
                    <div style="color: #4CAF50; margin-bottom: 10px;">
                        <strong>Thank you for contacting us, ${name}!</strong>
                    </div>
                    <p>We've received your message and will get back to you at ${email} as soon as possible.</p>
                `
        contactForm.reset()
      }, 1500)
    })
  }
})

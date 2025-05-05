document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    if (mobileMenuToggle && navMenu) {
      mobileMenuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        const spans = mobileMenuToggle.querySelectorAll("span")
        spans[0].classList.toggle("rotate-45")
        spans[1].classList.toggle("opacity-0")
        spans[2].classList.toggle("rotate-negative-45")
      })
    }
  
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll(".testimonial-slide")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".prev-btn")
    const nextBtn = document.querySelector(".next-btn")
  
    if (testimonialSlides.length > 0 && dots.length > 0) {
      let currentSlide = 0
  
      function showSlide(index) {
        testimonialSlides.forEach((slide) => slide.classList.remove("active"))
        dots.forEach((dot) => dot.classList.remove("active"))
  
        testimonialSlides[index].classList.add("active")
        dots[index].classList.add("active")
        currentSlide = index
      }
  
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
          let newIndex = currentSlide - 1
          if (newIndex < 0) newIndex = testimonialSlides.length - 1
          showSlide(newIndex)
        })
  
        nextBtn.addEventListener("click", () => {
          let newIndex = currentSlide + 1
          if (newIndex >= testimonialSlides.length) newIndex = 0
          showSlide(newIndex)
        })
      }
  
      dots.forEach((dot) => {
        dot.addEventListener("click", function () {
          const slideIndex = Number.parseInt(this.getAttribute("data-index"))
          showSlide(slideIndex)
        })
      })
  
      // Auto slide every 5 seconds
      setInterval(() => {
        let newIndex = currentSlide + 1
        if (newIndex >= testimonialSlides.length) newIndex = 0
        showSlide(newIndex)
      }, 5000)
    }
  
    // Newsletter form
    const newsletterForm = document.getElementById("newsletter-form")
    const newsletterMessage = document.getElementById("newsletter-message")
  
    if (newsletterForm && newsletterMessage) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.getElementById("email").value
  
        // Simulate form submission
        newsletterMessage.textContent = "Subscribing..."
        newsletterMessage.style.color = "#666"
  
        setTimeout(() => {
          newsletterMessage.textContent = "Thank you for subscribing!"
          newsletterMessage.style.color = "#4CAF50"
          newsletterForm.reset()
        }, 1500)
      })
    }
  
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll(".accordion-header")
  
    if (accordionHeaders.length > 0) {
      accordionHeaders.forEach((header) => {
        header.addEventListener("click", function () {
          this.classList.toggle("active")
          const content = this.nextElementSibling
          content.classList.toggle("active")
        })
      })
    }
  
    // Resource category tabs
    const tabBtns = document.querySelectorAll(".tab-btn")
    const resourceCards = document.querySelectorAll(".resource-card")
  
    if (tabBtns.length > 0 && resourceCards.length > 0) {
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const category = this.getAttribute("data-category")
  
          tabBtns.forEach((btn) => btn.classList.remove("active"))
          this.classList.add("active")
  
          resourceCards.forEach((card) => {
            if (category === "all" || card.getAttribute("data-category") === category) {
              card.style.display = "block"
            } else {
              card.style.display = "none"
            }
          })
        })
      })
    }
  
    // Animate stats on scroll
    const statNumbers = document.querySelectorAll(".stat-number")
  
    if (statNumbers.length > 0) {
      const stats = [
        { id: "cleanup-count", target: 120 },
        { id: "volunteer-count", target: 3500 },
        { id: "trash-count", target: 75 },
      ]
  
      function animateStats() {
        stats.forEach((stat) => {
          const element = document.getElementById(stat.id)
          if (element) {
            let current = 0
            const increment = Math.ceil(stat.target / 50)
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.target) {
                current = stat.target
                clearInterval(timer)
              }
              element.textContent = current
            }, 30)
          }
        })
      }
  
      // Check if element is in viewport
      function isInViewport(element) {
        const rect = element.getBoundingClientRect()
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
      }
  
      // Animate stats when they come into view
      let animated = false
      window.addEventListener("scroll", () => {
        if (!animated && statNumbers.length > 0 && isInViewport(statNumbers[0])) {
          animateStats()
          animated = true
        }
      })
  
      // Check on page load as well
      if (!animated && statNumbers.length > 0 && isInViewport(statNumbers[0])) {
        animateStats()
        animated = true
      }
    }
  
    // Load upcoming events on homepage
    const eventsPreview = document.getElementById("events-preview")
  
    if (eventsPreview) {
      const upcomingEvents = [
        {
          title: "Beach Cleanup Day",
          date: "May 15, 2025",
          time: "9:00 AM - 12:00 PM",
          location: "Sunset Beach",
          type: "cleanup",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Sustainable Living Workshop",
          date: "May 22, 2025",
          time: "6:00 PM - 8:00 PM",
          location: "Community Center",
          type: "workshop",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "River Cleanup Project",
          date: "June 5, 2025",
          time: "10:00 AM - 2:00 PM",
          location: "Green River Park",
          type: "cleanup",
          image: "/placeholder.svg?height=200&width=300",
        },
      ]
  
      let eventsHTML = ""
  
      upcomingEvents.forEach((event) => {
        eventsHTML += `
                  <div class="event-card">
                      <div class="event-image">
                          <img src="${event.image}" alt="${event.title}">
                      </div>
                      <div class="event-content">
                          <span class="event-type ${event.type}">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                          <h3>${event.title}</h3>
                          <p class="event-date">${event.date} • ${event.time}</p>
                          <p>${event.location}</p>
                          <a href="events.html" class="btn btn-secondary">Learn More</a>
                      </div>
                  </div>
              `
      })
  
      eventsPreview.innerHTML = eventsHTML
    }
  })
  
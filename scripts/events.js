document.addEventListener("DOMContentLoaded", () => {
    // Sample events data
    const events = [
      {
        id: 1,
        title: "Beach Cleanup Day",
        date: "May 15, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "Sunset Beach",
        type: "cleanup",
        description:
          "Join us for our monthly beach cleanup! We'll be collecting trash and debris from the shoreline to protect marine life and keep our beaches beautiful. All cleaning supplies will be provided. Please wear comfortable clothes and bring sunscreen and water.",
        image: "https://www.cityofsolanabeach.org/sites/default/files/styles/listing_style/public/2022-09/coastalcleanupday.jpg?itok=QnD-vgrH",
        coordinates: { lat: 34.024212, lng: -118.5069 },
      },
      {
        id: 2,
        title: "Sustainable Living Workshop",
        date: "May 22, 2025",
        time: "6:00 PM - 8:00 PM",
        location: "Community Center",
        type: "workshop",
        description:
          "Learn practical tips and techniques for reducing waste in your daily life. This workshop will cover composting basics, plastic alternatives, energy conservation, and more. Each participant will receive a starter kit with reusable items.",
        image: "https://www.innovationtraining.org/wp-content/uploads/2023/03/Sustainability-Workshops-and-Programs.jpeg",
        coordinates: { lat: 34.052235, lng: -118.2437 },
      },
      {
        id: 3,
        title: "River Cleanup Project",
        date: "June 5, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Green River Park",
        type: "cleanup",
        description:
          "Help us clean up our local river! We'll be removing trash from the riverbanks and surrounding areas. This is a family-friendly event, and children are welcome when accompanied by an adult. Lunch will be provided for all volunteers.",
        image: "https://sunburyrevitalization.org/wp-content/uploads/2022/01/River-Clean-up.jpg",
        coordinates: { lat: 34.090009, lng: -118.3617 },
      },
      {
        id: 4,
        title: "Environmental Film Screening",
        date: "June 12, 2025",
        time: "7:00 PM - 9:30 PM",
        location: "City Library Auditorium",
        type: "seminar",
        description:
          "Join us for a screening of an award-winning documentary about ocean conservation, followed by a panel discussion with local environmental experts. Light refreshments will be served.",
        image: "https://images.squarespace-cdn.com/content/v1/577d0df337c58194f7d239da/1513616457353-V1Q9Z4ND6XGBMZXNFFEG/INHABIT+-+Poster.jpg",
        coordinates: { lat: 34.019454, lng: -118.4912 },
      },
      {
        id: 5,
        title: "Park Restoration Day",
        date: "June 19, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Oakwood Park",
        type: "cleanup",
        description:
          "Help us restore our local park by removing invasive plant species, planting native trees and flowers, and cleaning up litter. This event is suitable for all ages and experience levels. Tools and gloves will be provided.",
        image: "https://i0.wp.com/conservancy.bc.ca/wp-content/uploads/2024/08/Blenkinsop-Valley-Restoration-Day-2.png?fit=1200%2C677&ssl=1",
        coordinates: { lat: 34.062115, lng: -118.4522 },
      },
      {
        id: 6,
        title: "Recycling Workshop",
        date: "June 26, 2025",
        time: "6:30 PM - 8:30 PM",
        location: "Community Center",
        type: "workshop",
        description:
          "Learn about proper recycling practices and how to reduce contamination in recycling bins. We'll cover what can and cannot be recycled in our local area, and how to prepare items for recycling. Each participant will receive a recycling guide.",
        image: "https://i.ytimg.com/vi/bEdD-uSQbjw/maxresdefault.jpg",
        coordinates: { lat: 34.052235, lng: -118.2437 },
      },
    ]
  
    // Event list
    const eventsList = document.getElementById("events-preview");

  
    if (eventsList) {
      renderEvents(events)
  
      // Event search and filtering
      const eventSearch = document.getElementById("event-search")
      const eventType = document.getElementById("event-type")
      const eventLocation = document.getElementById("event-location")
  
      function filterEvents() {
        const searchTerm = eventSearch.value.toLowerCase()
        const typeFilter = eventType.value
        const locationFilter = eventLocation.value
  
        const filteredEvents = events.filter((event) => {
          const matchesSearch =
            event.title.toLowerCase().includes(searchTerm) || event.location.toLowerCase().includes(searchTerm)
          const matchesType = typeFilter === "all" || event.type === typeFilter
          const matchesLocation =
            locationFilter === "all" || event.location.toLowerCase().includes(locationFilter.toLowerCase())
  
          return matchesSearch && matchesType && matchesLocation
        })
  
        renderEvents(filteredEvents)
      }
  
      if (eventSearch) eventSearch.addEventListener("input", filterEvents)
      if (eventType) eventType.addEventListener("change", filterEvents)
      if (eventLocation) eventLocation.addEventListener("change", filterEvents)
    }
  
    function renderEvents(eventsToRender) {
      let eventsHTML = "";

      if (eventsToRender.length === 0) {
        eventsHTML = '<p class="no-events">No events match your search criteria. Please try different filters.</p>';
      } else {
        eventsToRender.forEach((event) => {
          eventsHTML += `
            <div class="event-card" data-event-id="${event.id}">
              <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
              </div>
              <div class="event-content">
                <span class="event-type ${event.type}">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                <h3>${event.title}</h3>
                <p class="event-date">${event.date} • ${event.time}</p>
                <p class="event-location">${event.location}</p>
                <button class="btn btn-secondary view-event-btn" data-event-id="${event.id}">View Details</button>
              </div>
            </div>
          `;
        });
      }

      eventsList.innerHTML = eventsHTML;
  
      // Add event listeners to the view details buttons
      const viewEventBtns = document.querySelectorAll(".view-event-btn")
      viewEventBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const eventId = Number.parseInt(this.getAttribute("data-event-id"))
          openEventModal(eventId)
        })
      })
    }
  
    // Calendar functionality
    const calendarGrid = document.getElementById("calendar-grid")
    const currentMonthElement = document.getElementById("current-month")
    const prevMonthBtn = document.getElementById("prev-month")
    const nextMonthBtn = document.getElementById("next-month")
  
    if (calendarGrid && currentMonthElement) {
      const currentDate = new Date()
      let currentMonth = currentDate.getMonth()
      let currentYear = currentDate.getFullYear()
  
      function renderCalendar(month, year) {
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const daysInMonth = lastDay.getDate()
        const startingDay = firstDay.getDay() // 0 = Sunday, 1 = Monday, etc.
  
        currentMonthElement.textContent = `${firstDay.toLocaleString("default", { month: "long" })} ${year}`
  
        let calendarHTML = ""
  
        // Add day headers
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        days.forEach((day) => {
          calendarHTML += `<div class="calendar-day-header">${day}</div>`
        })
  
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
          calendarHTML += `<div class="calendar-day other-month"></div>`
        }
  
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(year, month, day)
          const dateString = `${date.toLocaleString("default", { month: "long" })} ${day}, ${year}`
  
          // Check if there's an event on this day
          const hasEvent = events.some((event) => event.date === dateString)
  
          calendarHTML += `
                      <div class="calendar-day ${hasEvent ? "has-event" : ""}" data-date="${dateString}">
                          <div class="day-number">${day}</div>
                          ${hasEvent ? '<div class="day-event-indicator"></div>' : ""}
                      </div>
                  `
        }
  
        // Add empty cells for days after the last day of the month
        const totalCells = 42 // 6 rows of 7 days
        const remainingCells = totalCells - (startingDay + daysInMonth)
        for (let i = 0; i < remainingCells; i++) {
          calendarHTML += `<div class="calendar-day other-month"></div>`
        }
  
        calendarGrid.innerHTML = calendarHTML
  
        // Add event listeners to calendar days with events
        const eventDays = document.querySelectorAll(".calendar-day.has-event")
        eventDays.forEach((day) => {
          day.addEventListener("click", function () {
            const dateString = this.getAttribute("data-date")
            const dayEvents = events.filter((event) => event.date === dateString)
            if (dayEvents.length > 0) {
              openEventModal(dayEvents[0].id)
            }
          })
        })
      }
  
      renderCalendar(currentMonth, currentYear)
  
      if (prevMonthBtn && nextMonthBtn) {
        prevMonthBtn.addEventListener("click", () => {
          currentMonth--
          if (currentMonth < 0) {
            currentMonth = 11
            currentYear--
          }
          renderCalendar(currentMonth, currentYear)
        })
  
        nextMonthBtn.addEventListener("click", () => {
          currentMonth++
          if (currentMonth > 11) {
            currentMonth = 0
            currentYear++
          }
          renderCalendar(currentMonth, currentYear)
        })
      }
    }
  
    // Event modal functionality
    const eventModal = document.getElementById("event-modal")
    const closeModal = document.querySelector(".close-modal")
    const modalTitle = document.getElementById("modal-title")
    const modalDate = document.getElementById("modal-date")
    const modalTime = document.getElementById("modal-time")
    const modalLocation = document.getElementById("modal-location")
    const modalType = document.getElementById("modal-type")
    const modalDescription = document.getElementById("modal-description")
    const signupForm = document.getElementById("signup-form")
    const signupMessage = document.getElementById("signup-message")
  
    function openEventModal(eventId) {
      const event = events.find((e) => e.id === eventId)
  
      if (event && eventModal) {
        modalTitle.textContent = event.title
        modalDate.textContent = event.date
        modalTime.textContent = event.time
        modalLocation.textContent = event.location
        modalType.textContent = event.type.charAt(0).toUpperCase() + event.type.slice(1)
        modalDescription.textContent = event.description
  
        eventModal.style.display = "block"
        document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
      }
    }
  
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        eventModal.style.display = "none"
        document.body.style.overflow = "auto" // Re-enable scrolling
      })
    }
  
    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === eventModal) {
        eventModal.style.display = "none"
        document.body.style.overflow = "auto"
      }
    })
  
    // Event signup form
    if (signupForm) {
      signupForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        const name = document.getElementById("name").value
        const email = document.getElementById("signup-email").value
  
        // Simulate form submission
        signupMessage.textContent = "Processing your registration..."
        signupMessage.style.color = "#666"
  
        setTimeout(() => {
          signupMessage.innerHTML = `
                      <div style="color: #4CAF50; margin-bottom: 10px;">
                          <strong>Thank you for signing up, ${name}!</strong>
                      </div>
                      <p>We've sent a confirmation email to ${email} with all the details you'll need for the event.</p>
                  `
          signupForm.reset()
        }, 1500)
      })
    }
  })
  
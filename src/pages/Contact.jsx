export default function Contact() {
    return (
      <section className="contact-container">
        <div className="contact">
          <form>
            <h2>Contact</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.1699683670413!2d-73.97592513162843!3d40.754547491967486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d4bd76d48f%3A0x1d3e446dfb91c5bc!2sDiso%E2%80%99s%20Sandwich!5e0!3m2!1sen!2sus!4v1746385052531!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    )
  }
  
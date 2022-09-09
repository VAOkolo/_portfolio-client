import React from 'react'
import '../../Styles/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactForm() {
  return (
        <section id="contact">
          <section className="contact__info">
            <h5>Get In Touch</h5>
            <div className="contact__title--container">
            </div>
    
            <div className="container contact__container">
              <div className="contact__options">
                <article className="contact__option">
                  <h4>Socials:</h4>
                  <div className="socials">
                  <FontAwesomeIcon icon="github" />
                  </div>
                </article>
              </div>
              <form className="contact-form"
                // ref={form}
                // onSubmit={sendEmail}
                // className="email__form"
                // onFocus={focusFormFunc}
                // onBlur={blurFormFunc}
                // onKeyDown={keyDownFunc}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit" className="send__email-btn">
                  Send Message
                </button>
              </form>
              <div className="email__lottie hidden"></div>
            </div>
          </section>
        </section>
      );
}

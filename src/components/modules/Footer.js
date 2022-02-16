import emailjs from "emailjs-com";
import React from "react";
import "./Footer.css";
import { init } from "emailjs-com";
import marekImage from "../../resources/photos/Marek_Kawalski.webp";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function footer() {
  init("user_ecpDO06hQbCynnyDZmne3");

  var sendResult = " result";

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t57hpsk",
        "template_qdb6wxs",
        e.target,
        "user_ecpDO06hQbCynnyDZmne3"
      )
      .then(
        (result) => {
          sendResult = "message sent!";
          document.getElementById("popupSend").textContent = sendResult;
        },
        (error) => {
          sendResult = "FAILED...";
          document.getElementById("popupSend").textContent = sendResult;
        }
      );

    e.target.reset();
  }
  return (
    <>
      <section id="Footer" className="sectionSpace2">
        <h2>Contact</h2>

        <div className="container">
          <div className="wrapper">
            <div className="company-info">
              <img src={marekImage} alt="Marek Kawalski" id="my-image"></img>
              <h3 id="h3_Marek">Marek Kawalski</h3>
              <ul>
                <li>
                  <i className="fa fa-university"></i> IT student at SUT
                </li>
                <li>
                  <i className="fas fa-external-link-square-alt"> </i>
                  <a
                    className="noLinkLight"
                    href="https://github.com/marekkawalski/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span> </span> Github Profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact">
              <h3>E-mail me</h3>

              <form id="contact-form" onSubmit={sendEmail}>
                <p>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" required />
                </p>

                <p>
                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" id="company" />
                </p>

                <p>
                  <label htmlFor="email">E-mail Address</label>
                  <input type="email" name="email" id="email" required />
                </p>

                <p>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" name="phone" id="phone" />
                </p>

                <p className="full">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" rows="5" id="message"></textarea>
                </p>

                <p className="full">
                  <Popup
                    className="popup-content"
                    trigger={<button type="submit">Submit</button>}
                    position="bottom"
                  >
                    <div id="popupSend">sending...</div>
                  </Popup>
                </p>
              </form>
            </div>
          </div>
          <div className="contentBottomSpace"></div>
          <div className="contributors">
            <p className="contributor">
              <strong>Other Websites:</strong>{" "}
              <a
                className="noLinkLight"
                href="https://poradniazerniki.pl/"
                target="_blank"
                rel="noreferrer"
              >
                NZOZ Poradnia Lekarza Rodzinnego Żerniki
              </a>
            </p>
          </div>
        </div>
        <p className="Copyright">
          Copyright &copy; {new Date().getFullYear()} Marek Kawalski
        </p>
      </section>
    </>
  );
}

export default footer;

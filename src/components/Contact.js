import React from "react";
import "../contact.css";

const Contact = () => {
  return (
    <div id="section-4">
        <div className="contact_form">
          <div className="formulario">
            <h1>Contact us</h1>

            <form action="" method="post">
              <p>
                <label className="colocar_nome">
                  Name
                  <span className="obrigatorio">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="nome"
                  required="obligatory"
                  placeholder="Enter your name"
                />
              </p>

              <p>
                <label className="colocar_email">
                  Email
                  <span className="obrigatorio">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required="obligatory"
                  placeholder="Enter your email"
                />
              </p>
              <p>
                <label className="colocar_mensagem">
                  Message
                  <span className="obligatory">*</span>
                </label>
                <textarea
                  name="message"
                  className="message"
                  id="message"
                  required="obligatory"
                  placeholder="Text"
                />
              </p>

              <button type="submit" name="enviar_formulario" id="enviar">
                <p>Submit</p>
              </button>

              <p className="advice">
                <span className="obligatory"> * </span>
                Please make sure you fill all required fields
              </p>
            </form>
          </div>
        </div>
        <div className="contactImg right" />
    </div>
  );
};

export default Contact;

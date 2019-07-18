import React from "react";
import "../contact.css";

const Contact = () => {
  return (
    <div id="section-4">
        <div class="contact_form">
          <div class="formulario">
            <h1>Contact us</h1>

            <form action="submeter-formulario.php" method="post">
              <p>
                <label for="nome" class="colocar_nome">
                  Name
                  <span class="obrigatorio">*</span>
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
                <label for="email" class="colocar_email">
                  Email
                  <span class="obrigatorio">*</span>
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
                <label for="telefone" class="colocar_telefone">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="telefone"
                  placeholder="Enter your phone number"
                />
              </p>
              <p>
                <label for="message" class="colocar_mensagem">
                  Message
                  <span class="obligatory">*</span>
                </label>
                <textarea
                  name="message"
                  class="message"
                  id="message"
                  required="obligatory"
                  placeholder="Text"
                />
              </p>

              <button type="submit" name="enviar_formulario" id="enviar">
                <p>Submit</p>
              </button>

              <p class="advice">
                <span class="obligatory"> * </span>
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

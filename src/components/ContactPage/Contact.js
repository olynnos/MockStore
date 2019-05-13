import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/sonnylo@hotmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="Email"
                className="form-control"
                placeholder="Jsmith@gmail.com"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Subject"
                className="form-control"
                placeholder="important!!"
              />
            </div>
            <div className="form-group">
              <textarea
                name="Message"
                className="form-control"
                rows="10"
                placeholder="hello there buddy"
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

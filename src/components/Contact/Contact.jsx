
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Frm.css";

const Contact = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "f2998056-c591-46ed-bb1e-cf881e43d56d");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();
      console.log("API Response:", res);

      if (res.success) {
        setIsSuccess(true);
        setToastMessage("Form submitted successfully!");
        event.target.reset();
      } else {
        setIsSuccess(false);
        setToastMessage(`Error: ${res.message}`);
      }
    } catch (error) {
      setIsSuccess(false);
      setToastMessage("Something went wrong. Please try again.");
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="bg">
      <div className="container contact-container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="contact-title">Contact us</h2>
            <p className="contact-text">
              Need to get in touch with us? Either fill out the form with your inquiry or find the
              <a href="#" className="contact-link"> department email</a> you'd like to contact below.
            </p>
          </div>

          <div className="col-md-6">
            <div className="contact-form">
              <form onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <label className="contact-label">First name*</label>
                    <input type="text" className="form-control" name="first_name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="contact-label">Last name</label>
                    <input type="text" className="form-control" name="last_name" />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="contact-label">Email*</label>
                  <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mt-3">
                  <label className="contact-label">What can we help you with?</label>
                  <textarea className="form-control" name="message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn contact-button mt-3 bg-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <div className={`toast-container position-fixed top-0 end-0 p-3`}>
          <div className={`toast show ${isSuccess ? "bg-success" : "bg-danger"} text-white`}>
            <div className="toast-body">{toastMessage}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
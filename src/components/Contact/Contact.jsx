// import React from 'react';
// import { motion } from 'framer-motion';

// const Contact = () => {

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     // Replace with your actual Web3Forms access key
//     formData.append("access_key", "6feb8ce7-c4ce-4efc-b270-987e7741aeef");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       });
      
//       const result = await response.json();
      
//       if (result.success) {
//         alert("Message sent successfully!");
//         event.target.reset();
//       } else {
//         alert("Failed to send message: " + result.message);
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <motion.div 
//       className='bg py-5'
//       initial={{ opacity: 0, y: 0 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="container contact-container">
//         <div className="row align-items-center">
          
//           {/* Left Section: Text Content */}
//           <motion.div 
//             className="col-md-6"
//             initial={{ opacity: 0, x: 0 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h2 className="contact-title text-primary fw-bold">Contact Us</h2>
//             <p className="contact-text">
//               Need to get in touch with us? Either fill out the form with your inquiry or find the
//               <a href="#" className="contact-link text-decoration-underline ms-1">department email</a> you'd like to contact below.
//             </p>
//           </motion.div>

//           {/* Right Section: Contact Form */}
//           <motion.div 
//             className="col-md-6"
//             initial={{ opacity: 0, x: 0 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="contact-form bg-light p-4 rounded shadow">
//               <form onSubmit={onSubmit}>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <label className="contact-label fw-bold">First Name*</label>
//                     <input type="text" name="first_name" className="form-control" required />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="contact-label fw-bold">Last Name</label>
//                     <input type="text" name="last_name" className="form-control" />
//                   </div>
//                 </div>
//                 <div className="mt-3">
//                   <label className="contact-label fw-bold">Email*</label>
//                   <input type="email" name="email" className="form-control" required />
//                 </div>
//                 <div className="mt-3">
//                   <label className="contact-label fw-bold">What can we help you with?</label>
//                   <textarea name="message" className="form-control" rows="3" required></textarea>
//                 </div>

//                 {/* Animated Submit Button */}
//                 <motion.button 
//                   type="submit" 
//                   className="btn btn-primary mt-3 w-100"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   Submit
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Contact;


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
    formData.append("access_key", "79246650-672a-468a-bd3c-f349c3bcbc29");

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
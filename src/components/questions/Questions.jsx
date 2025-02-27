import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import "bootstrap/dist/css/bootstrap.min.css";
import questionsPageImg from "../../assets/images/questionsPageImg.png"

const Questions = () => {
  return (
    <div className="container py-5 h-50 w-100">
      <motion.div
        className="row align-items-center"
        initial={{ opacity: 0, y: 0 }} // Initial hidden state
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of it is in view
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        
        {/* Image on the Left */}
        <motion.div
          className="col-md-6 text-center mb-5"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <img
            src={questionsPageImg}
            className="img-fluid animated-image h-auto w-50"
            alt="Question Illustration"
          />
        </motion.div>

        {/* Content on the Right */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <h2 className="fw-bold mb-3">
            Dive into Our Comprehensive <br /> Question Bank
          </h2>

          <motion.div
            className="p-3 mt-4 bg-light rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4>Enhance Your Skills</h4>
            <p className="text-muted">
              From fundamental concepts to advanced topics, everything you need is here.
            </p>
            <br />
            <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/subjects" className="btn btn-danger mt-2 position-relative z-5">
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Questions;


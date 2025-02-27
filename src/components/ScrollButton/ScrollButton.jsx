// import React from 'react'
// import "./ScrollButton.css"
// import { FaArrowCircleUp } from "react-icons/fa";
// const ScrollButton = () => {
//     const scrollToFirstQuestion = () => {
//       const firstQuestion = document.querySelector(".question-box");
//       if (firstQuestion) {
//         firstQuestion.scrollIntoView({ behavior: "smooth" });
//       }
//     };
    
//   return (
//      <div className="btn1">
//       <button  type='submit' onClick={scrollToFirstQuestion}><FaArrowCircleUp /></button>
//       </div> 
//   )
// }

// export default ScrollButton

import { FaArrowCircleUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function ScrollToTopButton() {
  const scrollToFirstQuestion = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="position-fixed bottom-0 end-0 m-3">
      <button
        type="button"
        className="btn btn-primary rounded-circle p-2 shadow"
        onClick={scrollToFirstQuestion}
      >
        <FaArrowCircleUp className="animate__flash "  size={24} />
      </button>
    </div>
  );
}

export default ScrollToTopButton;

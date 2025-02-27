import React from 'react';
import  './HtmlQuestion.css'
import ScrollButton from '../../ScrollButton/ScrollButton';

const HtmlQuestion = () => {
  const questions = [
      {
        Qno: 1,
        Ques: " What is HTML?",
        Ans: "HTML stands for Hypertext Markup Language, the language of the Internet. It is the standard text formatting language used for creating and displaying pages on the Internet.HTML documents comprise the elements and the tags that format it for proper page display.",
      },
      {
        Qno: 2,
       Ques: "What are HTML tags?",
        Ans: "HTML (HyperText Markup Language) tags are elements used to structure and format content on a webpage. Tags are enclosed in angle brackets (< >) and usually come in pairs: Opening tag: <tagname> Closing tag: </tagname> Self-closing tag: <tagname /> (for elements that don’t require a closing tag, e.g., <img>, <br>)",
      },
      {
        Qno: 3,
        Ques: "What are the basic building blocks of HTML?",
        Ans: "The basic building blocks of HTML are tags, which are used to structure and define the content of a web page.",
      },
      {
        Qno: 4,
        Ques: "What is the DOCTYPE declaration in HTML?",
        Ans: "The DOCTYPE declaration is used to specify the version of HTML that the web page is written in. It helps the browser render the page correctly.",
      },
      {
        Qno: 5,
        Ques: "What are some common HTML tags?",
        Ans: "Some common HTML tags include <h1> to <h6> for headings, <p> for paragraphs,<a> for links, <img> for images, <ul> and <li> for unordered lists, and <table> for tables.",
      },
      {
        Qno: 6,
        Ques: "How to create a Hyperlink in HTML?",
    
        Ans: 'The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways: Unvisited link – It is displayed, underlined and blue.Visited link – It is displayed, underlined and purple.Active link – It is displayed, underlined and red. The syntax of Hyperlink in HTML is: <a href = "..........."> Link Text </a>',
      },
    
      {
        Qno: 7,
        Ques: " Name some common lists that are used when designing a page?",
    
        Ans: "There are many common lists used for design a page. You can choose any or a combination of the following list types: Ordered list – The ordered list displays elements in a numbered format. It is represented by <ol> tag. Unordered list – The unordered list displays elements in a bulleted format. It is represented by <ul> tag.Definition list – The definition list displays elements in definition form like in a dictionary. The <dl>, <dt> and <dd> tags are used to define description list.",
      },
    
      {
        Qno: 8,
        Ques: " What is semantic HTML?",
    
        Ans: "Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.",
      },
    
      {
        Qno: 9,
        Ques: " What is the purpose of the <head> tag in HTML?",
    
        Ans: "The <head> tag is used to contain meta-information about the HTML document,such as the title, character encoding, and linked stylesheets or scripts.",
      },
    
      {
        Qno: 10,
        Ques: " What is the difference between block-level elements and inline elements?",
    
        Ans: "Block-level elements start on a new line and take up the full width available, while inline elements do not start on a new line and only take up the necessary width to display the content.",
      },
    
      {
        Qno: 11,
        Ques: "What is the purpose of the <body> tag in HTML?",
    
        Ans: "The <body> tag is used to define the main content of the HTML document that is displayed in the browser.",
      },

      {
        Qno: 12,
        Ques: "What is the purpose of the <div> tag in HTML?",
    
        Ans: "The <div> tag is a container used to group and style HTML elements. It is commonly used for layout and organization purposes",
      },
      {
        Qno: 13,
        Ques: "What is the purpose of the <span> tag in HTML?",
    
        Ans: "The <span> tag is an inline container used to apply styles or manipulate specific portions of text within a larger block of content.",
      },
    
      {
        Qno: 14,
        Ques: "What is the purpose of the href attribute in the <a> tag?",
    
        Ans: " The href attribute specifies the URL or destination of the hyperlink.",
      },
    
      {
        Qno: 15,
        Ques: "What is the purpose of the <a> tag in HTML?",
    
        Ans: " The <a> tag is used to create hyperlinks to other web pages, files, or locations within the same page.",
      },
    
      {
        Qno: 16,
        Ques: "What is the purpose of the <img> tag in HTML?",
    
        Ans: " The <img> tag is used to display images on a web page.",
      },
    
      {
        Qno: 17,
        Ques: " What is the purpose of the src attribute in the <img> tag?",
        Ans: " The src attribute specifies the source file or URL of the image",
      },
    
      {
        Qno: 18,
        Ques: " What is the purpose of the <table> tag in HTML?",
        Ans: " The <table> tag is used to create tabular data with rows and columns.",
      },
    
      {
        Qno: 19,
        Ques: " What are the <thead>, <tbody>, and <tfoot> tags used for?",
        Ans: " The <thead> tag is used to group the header content in a table. The <tbody> tag is used to group the body content, and the <tfoot> tag is used to group the footer content.",
      },
    
      {
        Qno: 20,
        Ques: "  What is the purpose of the <tr> tag in HTML?",
        Ans: "The <tr> tag is used to define a row in a table",
      },
      {
        Qno: 21,
        Ques: "What is the purpose of the <th> and <td> tags in HTML?",
        Ans: "The <th> tag is used to define a header cell in a table, while the <td> tag is used to define a data cell.",
      },
    
      {
        Qno: 22,
        Ques: "What is the purpose of the colspan and rowspan attributes in the <td> and <th> tags?",
        Ans: "The colspan attribute specifies the number of columns a cell should span, and the rowspan attribute specifies the number of rows a cell should span",
      },
    
      {
        Qno: 23,
        Ques: "What is the purpose of the <form> tag in HTML?",
        Ans: "The <form> tag is used to create an interactive form on a web page to collect user input.",
      },
    
      {
        Qno: 24,
        Ques: "What are some commonly used form elements in HTML?",
        Ans: "Some commonly used form elements include <input> for text input, checkboxes, and radio buttons, <select> for dropdown lists, and <textarea> for multiline text input.",
      },
    
      {
        Qno: 25,
        Ques: "What is the purpose of the name attribute in form elements?",
        Ans: " The name attribute is used to identify form elements and is used to retrieve their values on the server side",
      },
      {
        Qno: 26,
        Ques: "What is the purpose of the method attribute in the <form> tag?",
        Ans: "The method attribute specifies the HTTP method used to send form data to the server. The most common values are GET and POST",
      },
      {
        Qno: 27,
        Ques: "What is the purpose of the action attribute in the <form> tag?",
        Ans: "The action attribute specifies the URL or destination where the form data should be sent.",
      },
    
      {
        Qno: 28,
        Ques: "What is the purpose of the <input> tag in HTML?",
        Ans: "The <input> tag is used to create various types of form input fields, such as text fields, checkboxes, radio buttons, and submit buttons.",
      },
    
      {
        Qno: 29,
        Ques: "What is the purpose of the type attribute in the <input> tag?",
        Ans: "The type attribute specifies the type of input field to be created, such as text,checkbox, radio, submit, etc.",
      },
    
      {
        Qno: 30,
        Ques: "What is the purpose of the type attribute in the <input> tag?",
        Ans: "The type attribute specifies the type of input field to be created, such as text,checkbox, radio, submit, etc.",
      },
      {
        Qno: 31,
        Ques: "What is the purpose of the <label> tag in HTML?",
        Ans: "The <label> tag is used to associate a text label with a form element. It improves accessibility and allows users to click on the label to activate the associated form element.",
      },
      {
        Qno: 32,
        Ques: "What is the purpose of the <select> tag in HTML?",
        Ans: "The <select> tag is used to create a dropdown list of options for users to choose from",
      },
      {
        Qno: 33,
        Ques: " What is the purpose of the <option> tag in the <select> tag?",
        Ans: "The <option> tag is used to define an option within a dropdown list",
      },
      {
        Qno: 34,
        Ques: "What is the purpose of the value attribute in the <option> tag?",
        Ans: " The value attribute specifies the value associated with an option. It is sent to the server when the form is submitted.",
      },
      {
        Qno: 35,
        Ques: " What is the purpose of the <textarea> tag in HTML?",
        Ans: "The <textarea> tag is used to create a multiline text input field where users can enter larger blocks of text.",
      },
      {
        Qno: 36,
        Ques: " What is the purpose of the <iframe> tag in HTML?",
        Ans: "The <iframe> tag is used to embed another web page or document within the current HTML document",
      },
      {
        Qno: 37,
        Ques: "What is the purpose of the <div> tag in HTML?",
        Ans: " The <div> tag is a container used to group and style HTML elements. Itis commonly used for layout and organization purposes.",
      },
      {
        Qno: 38,
        Ques: "What is the purpose of the <span> tag in HTML?",
        Ans: "The <span> tag is an inline container used to apply styles or manipulate specific portions of text within a larger block of content.",
      },
      {
        Qno: 39,
        Ques: " What is the purpose of the <audio> and <video> tags in HTML?",
        Ans: "The <audio> tag is used to embed audio content on a web page, and the <video>tag is used to embed video content. They provide built-in controls for playing and pausing the media.",
      },
      {
        Qno: 40,
        Ques: "What is the purpose of the <canvas> tag in HTML?",
        Ans: "The <canvas> tag is used to draw graphics, animations, and other visualizations on a web page using JavaScript.",
      },
      {
        Qno: 41,
        Ques: "What is the purpose of the <header>, <main>, <footer>, and <nav> tags in HTML?",
        Ans: "The <header> tag is used to define the header section of a web page. The <main> tag is used to define the main content area. The <footer> tag is used to define the footer section, and the <nav> tag is used to define the navigation section.",
      },
      {
        Qno: 42,
        Ques: "What is the purpose of the <article> and <section> tags in HTML?",
        Ans: "The <article> tag is used to define an independent, self-contained content section that can be distributed and reused. The <section> tag is used to define a section of related content within an HTML document.",
      },
      {
        Qno: 43,
        Ques: "What is the purpose of the <aside> tag in HTML?",
        Ans: "The <aside> tag is used to define content that is related to the main content but can be considered separate from it, such as sidebars or pull-out quotes.",
      },
      {
        Qno: 44,
        Ques: "What is the purpose of the <figure> and <figcaption> tags in HTML?",
        Ans: "The <figure> tag is used to encapsulate self-contained content, such as images,diagrams, or videos, along with an optional caption defined using the <figcaption> tag.",
      },
      {
        Qno: 45,
        Ques: "What is semantic HTML?",
        Ans: "Semantic HTML is the practice of using HTML elements that accurately describe the meaning or purpose of the content they contain. It improves accessibility, search engine optimization, and code readability.",
      },
      {
        Qno: 46,
        Ques: "What are the advantages of using external CSS stylesheets?",
        Ans: "Some advantages of using external CSS stylesheets include easier maintenance, consistent styling across multiple pages, better separation of concerns (HTML for structure, CSS for presentation), and faster page loading times due to browser caching.",
      },
      {
        Qno: 47,
        Ques: "What is the purpose of the class attribute in HTML?",
        Ans: "The class attribute is used to assign one or more class names to an HTML element.It allows for targeted styling and JavaScript manipulation.",
      },
      {
        Qno: 48,
        Ques: "What is the purpose of the id attribute in HTML?",
        Ans: "The id attribute is used to assign a unique identifier to an HTML element. It is used for targeting specific elements with CSS or JavaScript.",
      },
      {
        Qno: 49,
        Ques: "What is the purpose of the <meta> tag in HTML?",
        Ans: "The <meta> tag is used to provide metadata about an HTML document, such as the character encoding, viewport settings, or author information.",
      },
      {
        Qno: 50,
        Ques: "What is the purpose of the viewport meta tag in HTML?",
        Ans: "The viewport meta tag is used to control the width and scaling of the viewport on mobile devices. It ensures that web pages are displayed correctly and responsively on different screen sizes.",
      },
      {
        Qno: 51,
        Ques: "What is the purpose of the alt attribute in the <img> tag?",
        Ans: "The alt attribute is used to provide alternative text for an image. It is displayed if the image cannot be loaded or for accessibility purposes.",
      },
      {
        Qno: 52,
        Ques: "What is the purpose of the title attribute in HTML?",
        Ans: " The title attribute is used to provide additional information or a tooltip text for an element. It is displayed when the user hovers over the element.",
      },
      {
        Qno: 53,
        Ques: "What is the purpose of the <fieldset> and <legend> tags in HTML?",
        Ans: "The <fieldset> tag is used to group related form elements together, and the <legend> tag is used to provide a caption or description for the <fieldset>.",
      },
      {
        Qno: 54,
        Ques: "What is the purpose of the <datalist> tag in HTML?",
        Ans: "The <datalist> tag is used to provide a list of predefined options for an <input> field. It provides suggestions as the user types",
      },
      {
        Qno: 55,
        Ques: "What is the purpose of the <meter> tag in HTML?",
        Ans: "The <meter> tag is used to represent a scalar measurement within a known range, such as a progress bar, disk usage, or temperature.",
      },
      {
        Qno: 56,
        Ques: "What is the purpose of the <time> tag in HTML?",
        Ans: "The <time> tag is used to represent a specific time or date. It can be used for machine-readable dates, event schedules, or time-related content",
      },
      {
        Qno: 57,
        Ques: "What is the purpose of the required attribute in form elements?",
        Ans: "The required attribute is used to specify that a form input field must be filled out before submitting the form.",
      },
      {
        Qno: 58,
        Ques: "What is the purpose of the autocomplete attribute in form elements?",
        Ans: "The autocomplete attribute is used to control whether a form input field should have autocomplete suggestions or not.",
      },
      {
        Qno: 59,
        Ques: "What is the purpose of the <nav> tag in HTML?",
        Ans: "The <nav> tag is used to define a section of a web page that contains navigation links",
      },
      {
        Qno: 60,
        Ques: "What is the purpose of the <abbr> tag in HTML?",
        Ans: " The <abbr> tag is used to define an abbreviation or acronym. It can provide additional information when the user hovers over it.",
      },
      {
        Qno: 61,
        Ques: "What is the purpose of the <pre> tag in HTML?",
        Ans: "The <pre> tag is used to display preformatted text, preserving both spaces and line breaks as they appear in the HTML code",
      },
      {
        Qno: 62,
        Ques: "What is the purpose of the disabled attribute in form elements?",
        Ans: "The disabled attribute is used to make a form input field or button non-editable or non clickable. It prevents user interaction with the element.",
      },
      {
        Qno: 63,
        Ques: "What is the purpose of the readonly attribute in form elements?",
        Ans: "The readonly attribute is used to make a form input field non-editable. It allows the user to view the value but not modify it.",
      },
      {
        Qno: 64,
        Ques: "What is the purpose of the <progress> tag in HTML?",
        Ans: "The <progress> tag is used to represent the progress of a task or the completion of a process, such as a file upload or a download.",
      },
      {
        Qno: 65,
        Ques: "What is the purpose of the placeholder attribute in form elements?",
        Ans: "The placeholder attribute is used to provide a hint or example value for a form input field. It is displayed in the field until the user enters their own value",
      },
      {
        Qno: 66,
        Ques: "What is the purpose of the <ruby> and <rt> tags in HTML?",
        Ans: "The <ruby> tag is used to annotate or provide pronunciation guidance for characters in East Asian typography. The <rt> tag is used to define the pronunciation of the characters.",
      },
      {
        Qno: 67,
        Ques: "What is the purpose of the <bdi> tag in HTML?",
        Ans: "The <bdi> tag is used to isolate a section of text that is to be formatted in a different direction from its surrounding text. It is often used for multilingual content.",
      },
      {
        Qno: 68,
        Ques: "What is the purpose of the <details> and <summary> tags in HTML?",
        Ans: "The <details> tag is used to create a collapsible section that can be toggled open or closed. The <summary> tag is used to provide a summary or heading for the collapsible section",
      },
      {
        Qno: 69,
        Ques: "What is the purpose of the <wbr> tag in HTML?",
        Ans: "The <wbr> tag is used to suggest a line break opportunity within a word. It is used to control word wrapping in long URLs or strings without adding unnecessary spaces.",
      },
    
      {
        Qno: 70,
        Ques: "What is the purpose of the contenteditable attribute in HTML?",
        Ans: "The contenteditable attribute is used to make an element editable by the user. It allows the user to modify the content directly in the browser.",
      },
      {
        Qno: 71,
        Ques: "What is the purpose of the spellcheck attribute in form elements?",
        Ans: "The spellcheck attribute is used to enable or disable spell checking for a form input field.",
      },
      {
        Qno: 72,
        Ques: "What is the purpose of the <cite> tag in HTML?",
        Ans: "The <cite> tag is used to mark a reference to a creative work, such as a book, article, or movie title",
      },
      {
        Qno: 73,
        Ques: "What is the purpose of the download attribute in the <a> tag?",
        Ans: "The download attribute is used to specify that a hyperlink should be downloaded instead of navigated to when clicked. It specifies the filename of the downloaded file.",
      },
      {
        Qno: 74,
        Ques: "What is the purpose of the <script> tag in HTML?",
        Ans: "The <script> tag is used to embed or reference JavaScript code within an HTML document",
      },
      {
        Qno: 75,
        Ques: "What is the purpose of the defer attribute in the <script> tag?",
        Ans: "The defer attribute is used to indicate that the script should be executed after the document has been parsed, allowing it to not block rendering.",
      },
      {
        Qno: 76,
        Ques: "What is the purpose of the <noscript> tag in HTML?",
        Ans: "The <noscript> tag is used to provide an alternative content that should be displayed if a web browser does not support or has disabled JavaScript",
      },
      {
        Qno: 77,
        Ques: "What is the purpose of the async attribute in the <script> tag?",
        Ans: "The async attribute is used to indicate that the script can be executed asynchronously, without blocking the rendering of the page.",
      },
      {
        Qno: 78,
        Ques: "What is the purpose of the <iframe> tag in HTML?",
        Ans: "The <iframe> tag is used to embed another web page or document within the current HTML document.",
      },
      {
        Qno: 79,
        Ques: "What is the purpose of the sandbox attribute in the <iframe> tag?",
        Ans: "The sandbox attribute is used to restrict the capabilities of the content within the <iframe>, providing a secure and isolated environment.",
      },
      {
        Qno: 80,
        Ques: "What is the purpose of the autocomplete attribute in form elements?",
        Ans: "The autocomplete attribute is used to control whether a form input field should have autocomplete suggestions or not.",
      },
      {
        Qno: 81,
        Ques: "What is the purpose of the <datalist> tag in HTML?",
        Ans: "The <datalist> tag is used to provide a list of predefined options for an <input> field. It provides suggestions as the user types.",
      },
      {
        Qno: 82,
        Ques: "What is the purpose of the <figure> and <figcaption> tags in HTML?",
        Ans: "The <figure> tag is used to encapsulate self-contained content, such as images,diagrams, or videos, along with an optional caption defined using the <figcaption> tag ",
      },
      {
        Qno: 83,
        Ques: "What is the purpose of the required attribute in form elements?",
        Ans: "The required attribute is used to specify that a form input field must be filled out before submitting the form.",
      },
      {
        Qno: 84,
        Ques: "What is the purpose of the <wbr> tag in HTML?",
        Ans: "The <wbr> tag is used to suggest a line break opportunity within a word. It is used to control word wrapping in long URLs or strings without adding unnecessary spaces.",
      },
    ];

    // const scrollToFirstQuestion = () => {
    //   const firstQuestion = document.querySelector(".question-box");
    //   if (firstQuestion) {
    //     firstQuestion.scrollIntoView({ behavior: "smooth" });
    //   }
    // };

  return (
    <div className="container" id='questions'>
      <h1>HTML Interview Questions</h1>
      <div className="questions-wrapper">
        {questions.map((item, index) => (
          <div key={index} className="question-box">
               <h4 style={{ color: "#007bff", fontWeight: "bold" }}>{index + 1}. {item.Ques}</h4>
            {/* <image>{item.image}</image> */}
            {/* <img>{item.image}</img> */}
            {/* {item.image && <img src={item.image} alt={Image for ${item.question}} className="question-image" />} */}
            <h5>{item.Ans}</h5>
            {item.image && <img src={item.image} alt="{Image for `${item.question}`}" className="question-image" />}
          </div>
        ))}
      </div>

      {/* <div className="btn1">
      <button  type='submit' onClick={scrollToFirstQuestion}>➕</button>
      </div> */}
      <ScrollButton/>

      </div>
  );
};

export default HtmlQuestion;
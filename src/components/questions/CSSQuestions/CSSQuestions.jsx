import React from 'react'
import Questions from '../Questions'
import Subjects from '../Subjects'
import ScrollButton from '../../ScrollButton/ScrollButton';

const CSSQuestions = () => {
  const questions = [
    {
      Qno: 1,
      Ques: "What is CSS, and why is it important?",
      Ans: "CSS, or Cascading Style Sheets, is a language used to style the look and feel of a website..."
    },
    {
      Qno: 2,
      Ques: "What are the different types of CSS?",
      Ans: (
        <>
          <div>🔹 <b>Inline CSS:</b> Applied directly within an HTML tag using the <code>style</code> attribute.</div>
          <div>🔹 <b>Internal CSS:</b> Written inside the <code>&lt;style&gt;</code> tag within the <code>&lt;head&gt;</code> section of the HTML file.</div>
          <div>🔹 <b>External CSS:</b> Stored in a separate <code>.css</code> file and linked using <code>&lt;link&gt;</code> in the HTML file.</div>
        </>
      )
    },
    {
      Qno: 3,
      Ques: "Explain the box model in CSS.",
      Ans: (
        <>
          <div>
            <b>The CSS box model</b> is a way to understand how elements are sized and spaced on a webpage. Every element is like a rectangular box, and it consists of four main parts:
          </div>
          <ul>
            <li><b>Content:</b> The actual content, like text or an image.</li>
            <li><b>Padding:</b> Space between the content and the border.</li>
            <li><b>Border:</b> The outline around the element.</li>
            <li><b>Margin:</b> The space between this element and others around it.</li>
          </ul>
          <div>
            Think of it as a gift box:
            <ul>
              <li>The <b>content</b> is the gift.</li>
              <li>The <b>padding</b> is bubble wrap.</li>
              <li>The <b>border</b> is the box itself.</li>
              <li>The <b>margin</b> is the space between this box and others.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      Qno: 4,
      Ques: "What are pseudo-classes in CSS?",
      Ans: (
        <>
          <div>
            A <b>pseudo-class</b> allows you to style an element based on its state or position. For example, you can style a link differently when someone hovers over it.
          </div>
          <div><b>Common pseudo-classes:</b></div>
          <ul>
            <li><b>:hover</b> – Styles an element when the user hovers over it.</li>
            <li><b>:first-child</b> – Styles the first child of a parent.</li>
            <li><b>:nth-child(n)</b> – Styles specific children in a group.</li>
          </ul>
          <div><b>Example:</b></div>
          <div style={{ backgroundColor: "black", padding: "10px", borderRadius: "5px" }}>
            <pre style={{ color: "white" }}>
              <code>{`a:hover {
        color: red;
    }`}</code>
            </pre>
          </div>
          <div>
            This changes the color of a link to red when the mouse is over it.
          </div>
        </>
      ),
    },
    
    {
      Qno: 5,
      Ques: "What’s the difference between id and class in CSS?",
      Ans: (
        <>
          <div>
            <b>id</b>: Used to style a single, specific element. It’s unique.
          </div>
          <div><b>Example:</b></div>
          <div style={{ backgroundColor: "black", padding: "10px", borderRadius: "5px" }}>
            <pre style={{ color: "white" }}>
              <code>{`#header {
        color: blue;
    }`}</code>
            </pre>
          </div>
          <div>
            <b>class</b>: Used to style multiple elements. It can be reused across different elements.
          </div>
          <div><b>Example:</b></div>
          <div style={{ backgroundColor: "black", padding: "10px", borderRadius: "5px" }}>
            <pre style={{ color: "white" }}>
              <code>{`.button {
        background-color: green;
    }`}</code>
            </pre>
          </div>
        </>
      ),
    },
     
    {
      Qno: 6,
      Ques: "What are the advantages of CSS?",
      Ans: (
        <>
          <b>Advantages of CSS:</b>
          <ul>
            <li><b>Bandwidth:</b> Reduces file size and improves loading speed.</li>
            <li><b>Site-wide consistency:</b> Ensures a uniform look across all pages.</li>
            <li><b>Page reformatting:</b> Allows easy layout adjustments.</li>
            <li><b>Accessibility:</b> Enhances user experience for all users.</li>
            <li><b>Content separated from presentation:</b> Improves maintainability.</li>
          </ul>
        </>
      ),
    },
    
    {
      Qno: 7,
      Ques: "What are the limitations of CSS?",
      Ans: (
        <>
          <b>Limitations of CSS:</b>
          <ul>
            <li>Ascending by selectors is not possible.</li>
            <li>Limited vertical control.</li>
            <li>No expressions (calculations in CSS).</li>
            <li>No column declarations.</li>
            <li>Pseudo-classes can't be controlled dynamically.</li>
            <li>Limited control over targeting specific text styles.</li>
          </ul>
        </>
      ),
    },
    
    {
      Qno: 8,
      Ques: "What are CSS frameworks?",
      Ans: (
        <>
          <div>
            <p>
              <b>CSS frameworks</b> are pre-designed libraries that provide reusable styles and
              components, allowing for faster and more consistent web development.
            </p>
          </div>
          <div><b>Popular CSS Frameworks:</b></div>
          <div style={{ backgroundColor: "black", padding: "10px", borderRadius: "5px", color: "white" }}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Foundation</li>
              <li>Bulma</li>
            </ul>
          </div>
        </>
      ),
    }, 
    {
      Qno: 9,
      Ques: "What benefits and demerits do External Style Sheets have?",
      Ans: (
        <>
          <b>Benefits:</b>
          <ul>
            <li>One file can control multiple web pages.</li>
            <li>Enables reusability and easier maintenance.</li>
            <li>Allows grouping styles using selectors and classes.</li>
          </ul>
          <b>Demerits:</b>
          <ul>
            <li>Requires extra download for the external CSS file.</li>
            <li>Page rendering depends on the CSS file loading.</li>
            <li>Not ideal for small style modifications.</li>
          </ul>
        </>
      ),
    },
    
    {
      Qno: 10,
      Ques: "Discuss the merits and demerits of Embedded Style Sheets.",
      Ans: (
        <>
          <b>Merits:</b>
          <ul>
            <li>Allows multiple tag types within a single document.</li>
            <li>Useful for defining styles in complex scenarios.</li>
            <li>No extra downloads required.</li>
          </ul>
          <b>Demerits:</b>
          <ul>
            <li>🔗 Cannot be reused across multiple documents.</li>
          </ul>
        </>
      ),
    },
    
    {
      Qno: 11,
      Ques: "What does CSS selector mean?",
      Ans: "A CSS selector is a string equivalent of HTML elements by which declarations or a set of them are declared. It is a link that connects HTML and the Style Sheet.",
    },
    {
      Qno: 12,
      Ques: "Enlist the media types CSS allows.",
      Ans: "CSS allows control over document design and customization using media types. By applying media control over external style sheets, they can be retrieved and used by loading them from the network.",
    },
    {
      Qno: 13,
      Ques: "Differentiate logical tags from physical tags.",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div style={{ 
            width: "90%", 
            maxWidth: "500px", 
            padding: "10px", 
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            backgroundColor: "#fff",
            textAlign: "left" ,
            textWrap:"wrap"
          }}>
            <h4>Logical Tags</h4>
            <ul>
              <li>Focus on the meaning of content.</li>
              <li>Do not define appearance.</li>
              <li className="text-wrap">Examples: <br/> <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;cite&gt;</code></li>
            </ul>
          </div>
    
          <div style={{ 
            width: "90%", 
            maxWidth: "500px", 
            padding: "15px", 
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            backgroundColor: "#fff",
            textAlign: "left" 
          }}>
            <h4>Physical Tags</h4>
            <ul>
              <li>Define the appearance of text.</li>
              <li>Used for styling purposes.</li>
              <li>Examples:<br/> <code>&lt;b&gt;</code>
              , <code>&lt;i&gt;</code>, 
              <code>&lt;u&gt;</code></li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      Qno: 14,
      Ques: "Differentiate logical tags from physical tags.",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <div style={{ 
            width: "90%", 
            maxWidth: "500px", 
            padding: "15px", 
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            backgroundColor: "#fff",
            textAlign: "left" 
          }}>
            <h4>Logical Tags</h4>
            <ul>
              <li>Focus on the meaning of content.</li>
              <li>Do not define appearance.</li>
              <li>Examples:<br/>
                 <code>&lt;em&gt;</code>, <code>&lt;strong&gt;</code></li>
            </ul>
          </div>
    
          <div style={{ 
            width: "90%", 
            maxWidth: "500px", 
            padding: "15px", 
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            backgroundColor: "#fff",
            textAlign: "left" 
          }}>
            <h4>Physical Tags</h4>
            <ul>
              <li>Define the appearance of text.</li>
              <li>Used for styling purposes.</li>
              <li>Examples: <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code></li>
            </ul>
          </div>
        </div>
      ),
    }
    ,
    
    {
      Qno: 15,
      Ques: "Describe ‘ruleset’?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            A <b>ruleset</b> in CSS defines how selectors should be styled. It consists of two main parts:
          </p>
          <div>
            <h4>Parts of a Ruleset:</h4>
            <ul>
              <li><b>Selector:</b> Identifies the elements to be styled.</li>
              <li><b>Declaration Block:</b> Contains CSS properties and values.</li>
            </ul>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`p { 
        text-indent: 11pt; 
    }`}
            </pre>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 16,
      Ques: "Comment on the case-sensitivity of CSS.",
      Ans: "CSS itself is not case-sensitive, but certain elements are, such as font families and image URLs. However, when using XML declarations with XHTML DOCTYPE, CSS becomes case-sensitive.",
    },
    {
      Qno: 17,
      Ques: "Define Declaration Block.",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            A <b>declaration block</b> is a set of CSS property-value pairs enclosed within curly braces <code>{`{}`}</code>.
            It defines the styling rules for the selected elements.
          </p>
          <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h4>Structure of a Declaration Block:</h4>
            <ul>
              <li>Each property is followed by a colon <code>:</code> and a value.</li>
              <li>Multiple properties are separated by semicolons <code>;</code>.</li>
              <li>It is enclosed within curly braces <code>{`{}`}</code>.</li>
            </ul>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`h1 { 
        color: blue; 
        font-size: 20px; 
    }`}
            </pre>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 18,
      Ques: "Enlist the various font attributes in CSS.",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            CSS provides several font attributes that control the appearance of text on a webpage.
          </p>
          <div >
            <h4>Various Font Attributes:</h4>
            <ul>
              <li><b>Font-style</b> – Defines whether the text is normal, italic, or oblique.</li>
              <li><b>Font-variant</b> – Controls the text's small caps effect.</li>
              <li><b>Font-weight</b> – Specifies the thickness of characters (e.g., bold, normal, lighter).</li>
              <li><b>Font-size / Line-height</b> – Controls the text size and spacing between lines.</li>
              <li><b>Font-family</b> – Defines the typeface for the text (e.g., Arial, Times New Roman).</li>
              <li><b>Caption</b> – Used for user interface elements like buttons and captions.</li>
              <li><b>Icon</b> – Specifies font styles specifically for icon sets.</li>
            </ul>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`p {
        font-style: italic;
        font-weight: bold;
        font-size: 16px;
        font-family: Arial, sans-serif;
    }`}
            </pre>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 19,
      Ques: "Why is it easy to insert a file by importing it?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            Importing CSS files allows for **better modularity and reusability** by combining external style sheets into a single file. This makes managing and organizing styles easier across multiple files.
          </p>
    
          {/* Advantages Section */}
          <div>
            <h4>🔹 Advantages of Importing CSS:</h4>
            <ul>
              <li>Enhances **code organization** by keeping styles separate.</li>
              <li>Allows **reusability** across multiple pages.</li>
              <li>Reduces code duplication, making updates more efficient.</li>
              <li>Supports **conditional styling** by importing different files based on media queries.</li>
            </ul>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Syntax:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`@import url('styles.css');`}
            </pre>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#eef", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <p>Importing an external stylesheet in a CSS file:</p>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`/* main.css */
    @import url('theme.css');
    @import url('layout.css');
    
    body {
        font-family: Arial, sans-serif;
    }`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      Qno: 20,
      Ques: "What is the usage of a Class Selector?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            A class selector is used to apply styles to multiple elements that share the same class. It helps in maintaining **consistency** across elements and reduces redundancy in CSS code.
          </p>
          <div style={{ padding: "10px" }}>
            <h4>Advantages of Class Selector:</h4>
            <ul>
              <li>Allows **reusability**, as multiple elements can share the same class.</li>
              <li>Enhances **maintainability** by keeping styles modular.</li>
              <li>Provides **greater control** over individual element styling.</li>
            </ul>
          </div>
    
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Syntax:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`.classname { property: value; }`}
            </pre>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#eef", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <p>Using a class selector to style elements:</p>
    
            <h5>CSS:</h5>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`.highlight {
      color: white;
      background-color: blue;
      padding: 10px;
    }`}
            </pre>
    
            <h5>HTML:</h5>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`<p class="highlight">This paragraph is styled using the "highlight" class.</p>`}
            </pre>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 21,
      Ques: "Differentiate Class Selector from ID Selector?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            In CSS, class selectors and ID selectors are used to target HTML elements, but they differ in scope and usage.
          </p>
          <div style={{ padding: "10px" }}>
            <h4> Class Selector (`.`)</h4>
            <ul>
              <li>Used to style **multiple elements** with the same class.</li>
              <li>Defined using a `.` (dot) before the class name.</li>
              <li>More flexible and reusable across the document.</li>
            </ul>
          </div>
          <div style={{ padding: "10px"}}>
            <h4>ID Selector (`#`)</h4>
            <ul>
              <li>Used to style **a single, unique element**.</li>
              <li>Defined using a `#` (hash) before the ID name.</li>
              <li>IDs should be **unique** within a document (no duplicates).</li>
            </ul>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Syntax:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`.classname { property: value; }  /* Class Selector */
    #idname { property: value; }   /* ID Selector */`}
            </pre>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#eef", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <h5>CSS:</h5>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`.highlight { color: blue; }
    #unique { color: red; }`}
            </pre>
    
            <h5>HTML:</h5>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`<p class="highlight">This is styled using a class.</p>
    <p id="unique">This is styled using an ID.</p>`}
            </pre>
          </div>
        </div>
      ),
    },    
    {
      Qno: 22,
      Ques: "What is a Pseudo-element?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            A **pseudo-element** in CSS allows you to style specific **parts of an element** 
            without modifying the HTML structure.
          </p>
          <div style={{ padding: "10px"}}>
            <h4>Common Pseudo-elements:</h4>
            <ul>
              <li>
                `::first-letter`– Styles the first letter of a block element.
              </li>
              <li>
                `::first-line` – Styles the first line of a block element.
              </li>
              <li>
                `::before` – Inserts content before an element.
              </li>
              <li>
                `::after` – Inserts content after an element.
              </li>
              <li>
                `::selection` – Styles the text selected by the user.
              </li>
            </ul>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Syntax:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`selector::pseudo-element { property: value; }`}
            </pre>
          </div>
          <div style={{ padding: "10px", backgroundColor: "#eef", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <h5>CSS:</h5>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`p::first-letter { font-size: 2em; color: red; }
    p::first-line { font-weight: bold; }`}
            </pre>
            <h5>HTML:</h5>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`<p>This is a sample paragraph demonstrating pseudo-elements.</p>`}
            </pre>
          </div>
        </div>
      ),
    },    
    {
      Qno: 23,
      Ques: "What happens if 100% width is used along with floats all across the page?",
      Ans: "When `float` is applied with `width: 100%`, additional pixels may be added due to borders, padding, or margins, potentially causing layout issues.",
    },
    {
      Qno: 24,
      Ques: "Can the default property value be restored through CSS? If yes, how?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            CSS provides three ways to reset properties to their default state:
          </p>
    
          <div style={{ padding: "10px" }}>
            <h4>Methods to Reset Properties:</h4>
            <ul>
              <li>
                `initial` – Resets to the default CSS-defined value.
              </li>
              <li>
                `inherit` – Inherits the value from the parent element.
              </li>
              <li>
                `unset` – Acts as `inherit` for inherited properties and `initial` otherwise.
              </li>
            </ul>
          </div>
    
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`div { color: initial; }`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      Qno: 25,
      Ques: "Compare RGB values with Hexadecimal color codes.",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <p>
            Colors in CSS can be represented using RGB (Red, Green, Blue) values or Hexadecimal (#RRGGBB) codes.
          </p>
    
          <div style={{ 
            width: "90%", 
            maxWidth: "500px", 
            padding: "15px", 
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            backgroundColor: "#fff",
            textAlign: "left" 
          }}>
            <h4>RGB Color Model:</h4>
            <ul>
              <li>Uses three values ranging from <strong>0 to 255</strong>.</li>
              <li>Supports percentages (e.g., <code>rgb(100%, 0%, 0%)</code>).</li>
              <li>Example: <code>rgb(255, 0, 0)</code> (Red)</li>
            </ul>
          </div>
    
          <div style={{ 
            width: "90%", 
            maxWidth: "500px", 
            padding: "15px", 
            border: "2px solid #ccc", 
            borderRadius: "8px", 
            backgroundColor: "#fff",
            textAlign: "left" 
          }}>
            <h4>Hexadecimal Color Model:</h4>
            <ul>
              <li>Uses a 6-character format (<code>#RRGGBB</code>).</li>
              <li>More compact but less human-readable.</li>
              <li>Example: <code>#FF0000</code> (Red)</li>
            </ul>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 26,
      Ques: "How can the dimension be defined for an element?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>Dimensions of an element can be controlled using the following CSS properties:</p>
    
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Dimension Properties:</h4>
            <ul>
              <li>width – Defines the width.</li>
              <li>min-width – Sets the minimum width.</li>
              <li>max-width – Sets the maximum width.</li>
              <li>height – Defines the height.</li>
              <li>min-height – Sets the minimum height.</li>
              <li>max-height – Sets the maximum height.</li>
            </ul>
          </div>
    
          <div style={{ padding: "10px", backgroundColor: "#eef", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`div { width: 200px; height: 100px; max-width: 400px; }`}
            </pre>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 27,
      Ques: "Define float property of CSS?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            The `float` property allows an element (such as images or text blocks) 
            to be positioned to the left or right, allowing text or other elements to wrap around it.
          </p>
    
          <div style={{ padding: "10px",  }}>
            <h4>Float Values:</h4>
            <ul>
              <li>left – Moves the element to the left.</li>
              <li>right – Moves the element to the right.</li>
              <li>none – Default, keeps the element in normal flow.</li>
              <li>inherit – Inherits the float value from the parent.</li>
            </ul>
          </div>
    
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`img { float: right; }`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      Qno: 28,
      Ques: "How does Z-index function?",
      Ans: (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p>
            The z-index property controls the stack order of overlapping elements. 
            Elements with a higher `z-index` value appear in front of those with a lower value.
          </p>
    
          <div style={{ padding: "10p" }}>
            <h4> Key Points:</h4>
            <ul>
              <li>Works only on elements with a position (absolute, relative, fixed).</li>
              <li>A higher `z-index` value means the element appears in front.</li>
              <li>Negative values push elements behind other content.</li>
            </ul>
          </div>
    
          <div style={{ padding: "10px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
            <h4>Example:</h4>
            <pre style={{ backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px" }}>
              {`div { position: absolute; z-index: 10; }`}
            </pre>
          </div>
        </div>
      ),
    },
    
    {
      Qno: 29,
      Ques: "Why is @import only at the top?",
      Ans: "The `@import` rule is placed at the top to prevent overriding rules and maintain the correct CSS cascading order.",
    },
    {
      Qno: 30,
      Ques: "Which among the following is more precedent: CSS properties or HTML procedures?",
      Ans: "CSS properties take precedence over HTML attributes. However, if a browser does not support CSS, it will display elements based on their HTML attributes.",
    },
    {
      Qno: 31,
      Ques: "What is Inline style?",
      Ans: (
        <>
          <p>
            An <b>inline style</b> is a CSS rule applied directly within an HTML element using the 
            <b>style</b> attribute.
          </p>
          <div style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "5px" }}>
            <b>Example:</b>
            <pre>
              {`<p style="color: red;">This is red text</p>`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 32,
      Ques: "How can comments be added in CSS?",
      Ans: (
        <>
          <p>
            CSS comments are used to add notes or explanations within stylesheets, and they are ignored by browsers.
          </p>
          <div style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "5px" }}>
            <b>Example:</b>
            <pre>
              {`/* This is a CSS comment */`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 33,
      Ques: "Define Attribute Selector?",
      Ans: (
        <>
          <p>
            An <b>attribute selector</b> targets elements based on the presence or value of an attribute.
          </p>
          <div style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "5px" }}>
            <b>Example:</b>
            <pre>
              {`input[type="text"] {
        background-color: lightgray;
    }`}
            </pre>
          </div>
        </>
      ),
    },
    
    
    {
      Qno: 34,
      Ques: "Define property?",
      Ans: "A  property in CSS defines an aspect of how an element should be styled. Example properties include `color`, `font-size`, and `margin`.",
    },
    {
      Qno: 35,
      Ques: "What is an Alternate Style Sheet?",
      Ans: "An alternate style sheet allows users to switch between different styles using the browser’s View > Page Style menu.",
    },
    {
      Qno: 36,
      Ques: "Are quotes mandatory in URLs?",
      Ans: (
        <>
          <div>
            <p>
              No, quotes around URLs in CSS are optional, but they can be single (<b>'</b>) or double (<b>"</b>).
            </p>
            <b>Example:</b>
            <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
              <pre>
                {`background-image: url(image.jpg);`}
              </pre>
            </div>
          </div>
        </>
      ),
    },
    {
      Qno: 37,
      Ques: "What is an at-rule?",
      Ans: (
        <>
          <div>
            <p>
              An <b>at-rule</b> applies to the entire stylesheet and starts with <b>@</b>, followed by an identifier.
            </p>
            <b>Example:</b>
            <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
              <pre>
                {`@media (max-width: 600px) {
        body { background-color: lightblue; }
    }`}
              </pre>
            </div>
          </div>
        </>
      ),
    },
    
    {
      Qno: 38,
      Ques: "How can CSS be cascaded to mix with the user’s personal stylesheet?",
      Ans: "Users can apply their personal stylesheets in the browser settings, which are merged with or override the website’s CSS.",
    },
  
    {
      Qno: 39,
      Ques: "How do you apply multiple CSS styles to one element?",
      Ans: (
        <>
          <div>
            <p>You can combine multiple styles by separating them with a semicolon (<b>;</b>).</p>
            <b>Example:</b>
            <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
              <pre>
                {`p {
        color: black;
        font-size: 16px;
        line-height: 1.5;
    }`}
              </pre>
            </div>
          </div>
        </>
      ),
    },
    {
      Qno: 40,
      Ques: "What’s the difference between relative, absolute, and fixed positioning in CSS?",
      Ans: (
        <>
          <div>
            <p><b>Relative:</b> The element is positioned relative to its normal place.</p>
            <p><b>Absolute:</b> The element is positioned relative to its nearest positioned ancestor.</p>
            <p><b>Fixed:</b> The element is positioned relative to the viewport and doesn’t move when you scroll.</p>
          </div>
        </>
      ),
    },
    {
      Qno: 41,
      Ques: "What are media queries?",
      Ans: (
        <>
          <div>
            <p>Media queries let you apply styles based on the size or type of the screen.</p>
            <b>Example:</b>
            <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
              <pre>
                {`@media (max-width: 600px) {
        body {
            background-color: lightblue;
        }
    }`}
              </pre>
            </div>
            <p>This changes the background to light blue on screens smaller than 600px.</p>
          </div>
        </>
      ),
    },
    {
      Qno: 42,
      Ques: "What is the difference between inline, block, and inline-block elements in CSS?",
      Ans: (
        <>
          <div>
            <p><b>Inline:</b> Elements don’t break the line (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</p>
            <p><b>Block:</b> Elements take up the full width of the line (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>).</p>
            <p><b>Inline-block:</b> Acts like an inline element but can have block-level styling.</p>
          </div>
        </>
      ),
    },
    {
      Qno: 43,
      Ques: "What is the difference between em and rem units in CSS?",
      Ans: (
        <>
          <div>
            <p><b>em:</b> Size is relative to the parent element.</p>
            <b>Example:</b>
            <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
              <pre>
                {`p {
        font-size: 1.5em; /* 1.5 times the parent’s size */
    }`}
              </pre>
            </div>
    
            <p><b>rem:</b> Size is relative to the root element (<code>html</code>).</p>
            <b>Example:</b>
            <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
              <pre>
                {`body {
        font-size: 16px;
    }
    h1 {
        font-size: 2rem; /* 2 times the root size */
    }`}
              </pre>
            </div>
          </div>
        </>
      ),
    },
    
    {
      Qno: 44,
      Ques: "What is a CSS preprocessor?",
      Ans: "A CSS preprocessor is a tool that extends CSS with additional features like variables, functions, mixins, and nesting. You write your styles in the preprocessor’s language (e.g., Sass or LESS), and the preprocessor compiles it into standard CSS that browsers can understand.\n\nWhy use preprocessors?\n- They make your code more organized and reusable.\n- They save time when working on large projects.",
    },
    {
      Qno: 45,
      Ques: "Flexbox vs. CSS Grid: When to use each?",
      Ans: "Flexbox is best for one-dimensional layouts (row-wise or column-wise), while CSS Grid is best for two-dimensional layouts (both rows and columns).\n\n| Flexbox | CSS Grid |\n|---------|---------|\n| Best for 1D layouts | Best for 2D layouts |\n| Works row-wise or column-wise | Works with rows and columns |\n| Simple, flexible alignment | More control over layout structure |\n| Example: Navbars, buttons | Example: Complex page layouts |",
    },
    {
      Qno: 46,
      Ques: "How do you center a div using Flexbox?",
      Ans: (
        <>
          <p>Flexbox makes centering easy.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.parent {
        display: flex;
        justify-content: center; /* Horizontal centering */
        align-items: center;    /* Vertical centering */
        height: 100vh;
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 47,
      Ques: "Explain the concept of grid-template-areas.",
      Ans: (
        <>
          <p>
            <b>grid-template-areas</b> let you name sections of your grid for easy layout
            management.
          </p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
        display: grid;
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
        grid-template-columns: 1fr 3fr;
        grid-template-rows: auto 1fr auto;
    }
    
    .header { grid-area: header; }
    .sidebar { grid-area: sidebar; }
    .main { grid-area: main; }
    .footer { grid-area: footer; }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 48,
      Ques: "How do you create equal-width columns in CSS Grid?",
      Ans: (
        <>
          <p>You can use <b>grid-template-columns</b> with <b>repeat</b> to create equal-width columns.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 49,
      Ques: "How do you make a Flexbox container wrap its children?",
      Ans: (
        <>
          <p>Use <b>flex-wrap: wrap;</b> to allow child elements to wrap when needed.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
        display: flex;
        flex-wrap: wrap;
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 50,
      Ques: "How do you align items in Flexbox?",
      Ans: (
        <>
          <p>
            Use <b>align-items</b> for vertical alignment and <b>justify-content</b> for horizontal alignment.
          </p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
        display: flex;
        align-items: center; /* Vertical alignment */
        justify-content: center; /* Horizontal alignment */
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 51,
      Ques: "What is the difference between minmax() and repeat() in CSS Grid?",
      Ans: (
        <>
          <p>
            <b>minmax()</b> sets a range for grid track sizes (e.g., <code>minmax(100px, 1fr)</code>).
          </p>
          <p>
            <b>repeat()</b> simplifies repetitive track definitions (e.g., <code>repeat(3, 1fr)</code>).
          </p>
        </>
      ),
    },
    {
      Qno: 52,
      Ques: "How do you define grid gaps?",
      Ans: (
        <>
          <p>Use the <b>gap</b> property to create space between grid items.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
        display: grid;
        gap: 20px;
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 63,
      Ques: "What is the purpose of place-items in Grid?",
      Ans: (
        <>
          <p>
            <b>place-items</b> combines <b>align-items</b> and <b>justify-items</b> to center grid items both horizontally and vertically.
          </p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
        display: grid;
        place-items: center;
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 54,
      Ques: "How do you span a grid item across multiple rows or columns?",
      Ans: (
        <>
          <p>Use <b>grid-column</b> and <b>grid-row</b> properties to span across multiple rows or columns.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.item {
        grid-column: 1 / 3; /* Spans from column 1 to 3 */
        grid-row: 2 / 4;    /* Spans from row 2 to 4 */
    }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 55,
      Ques: "What is responsive design, and why is it important?",
      Ans: (
        <>
          <p>
            Responsive design makes websites adapt to different screen sizes and devices (like phones, tablets, and desktops).
          </p>
          <b>Why is it important?</b>
          <ul>
            <li>It improves user experience on all devices.</li>
            <li>Google ranks mobile-friendly sites higher.</li>
          </ul>
          <b>Key Features:</b>
          <ul>
            <li>Flexible layouts.</li>
            <li>Media queries.</li>
            <li>Scalable images and fonts.</li>
          </ul>
        </>
      ),
    },    
    {
      Qno: 56,
      Ques: "Explain the syntax of a media query.",
      Ans: (
        <>
          <p>A media query targets specific device characteristics, like screen size or resolution.</p>
          <b>Syntax:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`@media (max-width: 768px) {
    body {
      background-color: lightblue;
    }
  }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 57,
      Ques: "How do you implement a mobile-first approach?",
      Ans: (
        <>
          <p>A mobile-first approach means you write styles for smaller screens first and use media queries for larger screens.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`/* Default for mobile */
  body {
    font-size: 16px;
  }
  
  /* Styles for larger screens */
  @media (min-width: 768px) {
    body {
      font-size: 20px;
    }
  }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 58,
      Ques: "How do you target specific devices with media queries?",
      Ans: (
        <>
          <p>You can target devices using width, height, resolution, or orientation.</p>
          <b>Examples:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`/* Portrait mode */
  @media (orientation: portrait) {
    body {
      background-color: pink;
    }
  }
  
  /* High-resolution screens */
  @media (min-resolution: 2dppx) {
    body {
      font-size: 18px;
    }
  }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 59,
      Ques: "What is the difference between max-width and min-width in media queries?",
      Ans: (
        <>
          <p><b>max-width:</b> Targets screens smaller than or equal to the specified width.</p>
          <p><b>min-width:</b> Targets screens larger than or equal to the specified width.</p>
        </>
      ),
    },
    {
      Qno: 60,
      Ques: "How do you hide elements on smaller screens?",
      Ans: (
        <>
          <p>Use <b>display: none</b> inside a media query.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`@media (max-width: 600px) {
    .sidebar {
      display: none;
    }
  }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 61,
      Ques: "What is a breakpoint in responsive design?",
      Ans: (
        <>
          <p>A breakpoint is a specific screen width where your layout changes to fit the device.</p>
          <b>Common breakpoints:</b>
          <ul>
            <li><b>Mobile:</b> max-width: 600px</li>
            <li><b>Tablet:</b> min-width: 601px and max-width: 1024px</li>
            <li><b>Desktop:</b> min-width: 1025px</li>
          </ul>
        </>
      ),
    },
    {
      Qno: 62,
      Ques: "How do you make images responsive?",
      Ans: (
        <>
          <p>Set the image’s width to 100% and adjust its height automatically.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`img {
    max-width: 100%;
    height: auto;
  }`}
            </pre>
          </div>
        </>
      ),
    },
    {
      Qno: 63,
      Ques: "How do you create a responsive grid with media queries?",
      Ans: (
        <>
          <p>Define different column layouts for different screen sizes.</p>
          <b>Example:</b>
          <div style={{ backgroundColor: "black", padding: "10px", color: "white" }}>
            <pre>
              {`.container {
    display: grid;
    grid-template-columns: 1fr; /* Mobile default */
  }
  
  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for larger screens */
    }
  }`}
            </pre>
          </div>
        </>
      ),
    },
  
    {
      Qno: 64,
      Ques: "How do you use viewport meta tags in responsive design?",
      Ans: (
        <>
          <div>Add this to your HTML <code>&lt;head&gt;</code> to control how your site scales on mobile devices:</div>
          <pre>
            <code>
              {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </code>
          </pre>
        </>
      ),
    },
    {
      Qno: 65,
      Ques: "What is the difference between blocking and non-blocking CSS?",
      Ans: (
        <>
          <div><b>Blocking CSS:</b> Prevents the page from rendering until the CSS is fully loaded.</div>
          <div><b>Non-blocking CSS:</b> Uses techniques like media attributes or deferred loading to allow the page to load faster.</div>
        </>
      ),
    },
    {
      Qno: 66,
      Ques: "What are keyframes in CSS?",
      Ans: (
        <>
          <div>Keyframes define the steps in an animation. They specify the start, end, and any intermediate states of the animation.</div>
          <b>Example:</b>
          <pre>
            <code>
              {`@keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }`}
            </code>
          </pre>
          <div>Here, the animation moves an element from off-screen (-100%) to its final position (0).</div>
        </>
      ),
    },
    {
      Qno: 67,
      Ques: "How do you prevent margin collapse?",
      Ans: (
        <>
          <div>Use <b>padding</b> or <b>borders</b> instead of margins. Alternatively, add <code>overflow: hidden;</code> to the parent container.</div>
        </>
      ),
    },
    {
      Qno: 68,
      Ques: "How do you prioritize visible content with CSS?",
      Ans: (
        <>
          <div>Use <b>critical CSS</b> to load styles for above-the-fold content first.</div>
          <div>Defer or asynchronously load non-critical CSS using:</div>
          <pre>
            <code>
              {`<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">`}
            </code>
          </pre>
        </>
      ),
    },
  
  
    {
      Qno: 69,
      Ques: "What is the difference between animation and transition?",
      Ans: (
        <>
          <div><b>Animation:</b> Creates complex, multi-step movements using keyframes.</div>
          <div><b>Transition:</b> Adds smooth effects to changes in CSS properties (e.g., hover effects).</div>
        </>
      ),
    },
    {
      Qno: 70,
      Ques: "How do you stop an animation from repeating?",
      Ans: (
        <>
          <div>Set the <code>animation-iteration-count</code> to <code>1</code>.</div>
          <pre>
            <code>{`div {
    animation: bounce 1s ease-in-out;
    animation-iteration-count: 1; /* Animation runs only once */
}`}</code>
          </pre>
        </>
      ),
    },
    {
      Qno: 71,
      Ques: "What does animation-fill-mode do?",
      Ans: (
        <>
          <div>It defines what happens before and after an animation.</div>
          <ul>
            <li><b>forwards:</b> Keeps the final animation state.</li>
            <li><b>backwards:</b> Applies the starting state before the animation begins.</li>
          </ul>
          <pre>
            <code>{`div {
    animation: fadeIn 1s forwards;
}`}</code>
          </pre>
        </>
      ),
    },
    {
      Qno: 72,
      Ques: "What are the differences between adaptive design and responsive design?",
      Ans: (
        <>
          <b>Adaptive Design:</b>
          <ul>
            <li>Uses multiple fixed layout sizes.</li>
            <li>Offers better control over design variations for different screens.</li>
            <li>Time-consuming as it requires multiple designs for different screen sizes.</li>
            <li>Common breakpoints: 320px, 480px, 760px, 960px, 1200px, and 1600px.</li>
          </ul>
          <b>Responsive Design:</b>
          <ul>
            <li>Uses flexible layouts based on browser space.</li>
            <li>Offers less control but adapts fluidly to all screen sizes.</li>
            <li>Faster to implement as it requires only one flexible design.</li>
            <li>Uses CSS media queries for screen adaptation.</li>
          </ul>
        </>
      ),
    },
    {
      Qno: 73,
      Ques: "How is the border-box different from the content box?",
      Ans: (
        <>
          <b>Border-box:</b>
          <ul>
            <li>Includes content, padding, and border within the defined height and width.</li>
          </ul>
          <b>Content-box (default):</b>
          <ul>
            <li>Only includes content in height and width, requiring additional space for padding and border.</li>
          </ul>
        </>
      ),
    },
    {
      Qno: 74,
      Ques: "How is opacity specified in CSS3?",
      Ans: (
        <>
          <div>Opacity controls the transparency of elements with values from 0 (fully transparent) to 1 (fully opaque).</div>
          <pre>
            <code>{`div {
    opacity: 0.6; /* 60% visible */
}`}</code>
          </pre>
          <div>For older browsers, use:</div>
          <pre>
            <code>{`div {
    filter: alpha(opacity=60); /* IE support */
}`}</code>
          </pre>
        </>
      ),
    },
    {
      Qno: 75,
      Ques: "What is cascading in CSS?",
      Ans: "Cascading refers to how CSS applies multiple style rules to an element. The browser prioritizes rules based on specificity, importance (`!important`), and source order.",
    },
    {
      Qno: 76,
      Ques: "What is the grid system?",
      Ans: (
        <>
          <div>The CSS grid system is a two-dimensional layout system used to create responsive web designs with rows and columns.</div>
          <pre>
            <code>{`.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}`}</code>
          </pre>
        </>
      ),
    },
    {
      Qno: 77,
      Ques: "What are the different ways to hide an element using CSS?",
      Ans: (
        <ul>
          <li><code>display: none;</code> → Removes the element from the document flow.</li>
          <li><code>visibility: hidden;</code> → Hides the element but keeps its space.</li>
          <li><code>position: absolute; left: -9999px;</code> → Moves the element off-screen.</li>
        </ul>
      ),
    },
    {
      Qno: 78,
      Ques: "Difference between CSS Grid and Flexbox?",
      Ans: (
        <>
          <b>CSS Grid:</b>
          <ul>
            <li>Two-dimensional (rows and columns).</li>
            <li>Best for large-scale layouts.</li>
          </ul>
          <b>Flexbox:</b>
          <ul>
            <li>One-dimensional (either row or column).</li>
            <li>Best for small components inside a container.</li>
          </ul>
        </>
      ),
    },
    {
      Qno: 79,
      Ques: "What does `* { box-sizing: border-box; }` do? What are its advantages?",
      Ans: (
        <>
          <div>The <code>box-sizing: border-box;</code> rule ensures that padding and border are included in an element’s total width and height.</div>
          <b>Advantages:</b>
          <ul>
            <li>Prevents layout shifts due to padding/border.</li>
            <li>Helps create consistent layouts.</li>
          </ul>
        </>
      ),
    },
    {
      Qno: 80,
      Ques: "What does !important mean in CSS?",
      Ans: (
        <>
          <div>The <code>!important</code> rule forces a style to override any other conflicting rules, including inline styles and styles with higher specificity.</div>
          <pre>
            <code>{`p {
    color: red !important; /* This will override all other color rules */
}`}</code>
          </pre>
        </>
      ),
    },

    {
      Qno: 81,
      Ques: "Name different ways to position elements in CSS.",
      Ans: (
        <>
          <div><b>CSS provides five position values:</b></div>
          <ul>
            <li><code>static</code> – Default, follows the normal document flow.</li>
            <li><code>relative</code> – Positioned relative to its normal position.</li>
            <li><code>absolute</code> – Positioned relative to the nearest positioned ancestor.</li>
            <li><code>fixed</code> – Positioned relative to the viewport.</li>
            <li><code>sticky</code> – Switches between relative and fixed depending on scroll position.</li>
          </ul>
        </>
      ),
    },
    
    {
      Qno: 82,
      Ques: "What are mixins?",
      Ans: (
        <>
          <div>
            Mixins in CSS preprocessors like Sass allow reusing code snippets to keep styles modular and maintainable.
          </div>
          <div>
            <b>Example in Sass:</b>
          </div>
          <pre>
            <code>
              {`@mixin button-style {
        background-color: blue;
        color: white;
        padding: 10px;
    }
    
    button {
        @include button-style;
    }`}
            </code>
          </pre>
        </>
      ),
    }
    
  ];
  
      
  return (
    <div className="container overflow-hidden" id='questions'>
    <h1>CSS Interview Questions</h1>
    <div className="questions-wrapper overflow-hidden">
      {questions.map((item, index) => (
        <div key={index} className="question-box overflow-hidden">
         <h4 style={{ color: "#007bff", fontWeight: "bold" }}>{index + 1}. {item.Ques}</h4>
          {/* <image>{item.image}</image> */}
          {/* <img>{item.image}</img> */}
          {/* {item.image && <img src={item.image} alt={`Image for ${item.question}`} className="question-image" />} */}
          <h6>{item.Ans}</h6>
          {item.image && <img src={item.image} alt={`Image for ${item.question}`} className="question-image" />}
        </div>
      ))}
    </div>
    <ScrollButton/>
  </div>
  )
}

export default CSSQuestions;
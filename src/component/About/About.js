import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = (props) => {
  return (
    <>
    <div class="container mt-4">
        <h1  style={{color:props.mode=='light'?'black':'white'}}>About TextWant</h1>
        <p  style={{color:props.mode=='light'?'black':'white'}}>TextWant is a user-friendly online word counter designed to make your text analysis tasks easier. Whether you're a student, writer, or professional, our word counter provides a straightforward way to count words, characters, and more in your text.</p>
    </div>

    <div class="container mt-4">
        <h2  style={{color:props.mode=='light'?'black':'white'}}>Key Features</h2>
        <ul  style={{color:props.mode=='light'?'black':'white'}}>
            <li>Quickly determine the number of words in your text or document.</li>
            <li>Find out the total characters, including spaces, in your content.</li>
            <li>Get detailed statistics on your text's structure, including paragraph and line counts.</li>
            <li>Our tool is fast and user-friendly, saving you time.</li>
            <li>TextWant is completely free, and you don't need to register or download anything.</li>
        </ul>
    </div>

    <div class="container mt-4">
        <h2  style={{color:props.mode=='light'?'black':'white'}}>How to Use TextWant</h2>
        <p  style={{color:props.mode=='light'?'black':'white'}}>Using TextWant is as simple as 1-2-3:</p>
        <ol style={{color:props.mode=='light'?'black':'white'}} >
            <li>Paste your text or type directly into the text area.</li>
            <li>Click the "Count" button.</li>
            <li>Instantly see word, character, and other statistics.</li>
        </ol>
    </div>

    <div class="container mt-4">
        <h2  style={{color:props.mode=='light'?'black':'white'}}>Get Started</h2>
        <p  style={{color:props.mode=='light'?'black':'white'}}>Ready to start counting words and characters? Head over to our homepage and try TextWant for yourself. It's completely free, and there's no need to install anything.</p>
    </div>

    <div class="container mt-4">
        <h2  style={{color:props.mode=='light'?'black':'white'}}>Contact Us</h2>
        <p  style={{color:props.mode=='light'?'black':'white'}}>If you have any questions, feedback, or suggestions, we'd love to hear from you. Please feel free to contact us at <a href="mailto:support@textwant.com">support@textwant.com</a>.</p>
    </div>
    
    
    
    
    </>
  );
};

export default About;

import './FAQ.css';
import { useState } from 'react';
import {useRef} from 'react';
import faqData from './FaqData';
import Chevron from './Chevron';
function FAQ(props){
  const[active,setActive] = useState("");
  const[height,setHeight] = useState("0px");
  const content = useRef(null);
  function toggleFaq(){
    setActive(active === "" ? "active": "");
    setHeight(active ==="active" ? "0px":`${content.current.scrollHeight}px`);

  }
  const list = faqData.map((faq) =>{
    return (
        <li key={faq.id}> 
          <button 
          className ={`faq ${active}`}
          onClick ={toggleFaq}
          >
            <p className="faq__question">{faq.question}</p>
          <Chevron className="faq__icon" width ={20} fill="#111"/>
          </button>
          <div ref={content} style ={{maxHeight :`${height}`}}className="faq__content">
            <div className="faq__answer">{faq.answer}</div>
          </div>
        </li>
    );
});
    return(
        <div className="faq__section">
            <ul className="faq__list">
                {list}
            </ul>
        </div>
    );
}

export default FAQ;
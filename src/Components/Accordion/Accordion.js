import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./accordion.css";
function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const contentRef = useRef(null);
  useEffect(() => {
    contentRef.current.style.maxHeight = activeIndex
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, activeIndex]);
  return (
    <div className="acc-div">
      <h2 className="acc-heading">Frequently asked questions</h2>
      {items.map((item, index) => (
        <div key={item.question}>
          <button onClick={() => handleClick(index)} className={`question-section ${activeIndex}`}>
            <div>
              <div className="question-align">
                <h4 className="question-style">{item.question}</h4>
                <FiPlus
                  className={
                    index == activeIndex
                      ? `question-icon rotate`
                      : `question-icon`
                  }
                />
              </div>
              <div
                ref={contentRef}
                style={{ display: index == activeIndex ? "" : "none" }}
                //  className={
                //    index == activeIndex ? `answer answer-divider` : `answer`
                //  }
              >
                <p>{item.answer}</p>
              </div>
            </div>
          </button>
          {/* {index === activeIndex && <p>{item.answer}</p>} */}
        </div>
      ))}
    </div>
  );
}
export default Accordion;

// import React, { useState, useRef, useEffect } from "react";
// import "./faq.css";
// import { FiPlus } from "react-icons/fi";
// import { faqData } from "../../faq-data";

// export default function FAQ() {
//   const [active, setActive] = useState(false);

//   const contentRef = useRef(null);

//   useEffect(() => {
//     contentRef.current.style.maxHeight = active
//       ? `${contentRef.current.scrollHeight}px`
//       : "0px";
//   }, [contentRef, active]);

//   const toggleAccordion = () => {
//     setActive(!active);
//   };
//   return (
//     <>
//       <div>
//         {faqData.map((faq) => {
//           return (
//             <div>
//               <button
//                 className={`question-section ${active}`}
//                 onClick={toggleAccordion}
//               >
//                 <div>
//                   <div className="question-align">
//                     <h4 className="question-style">
//                       {faq.question}
//                     </h4>
//                     <FiPlus
//                       className={
//                         active ? `question-icon rotate` : `question-icon`
//                       }
//                     />
//                   </div>
//                   <div
//                     ref={contentRef}
//                     className={active ? `answer answer-divider` : `answer`}
//                   >
//                     <p>{faq.answer}</p>
//                   </div>
//                 </div>
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

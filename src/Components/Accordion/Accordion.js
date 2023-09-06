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
                    index === activeIndex
                      ? `question-icon rotate`
                      : `question-icon`
                  }
                />
              </div>
              <div
                ref={contentRef}
                style={{ display: index === activeIndex ? "" : "none" }}
              >
                <p className="ans-div">{item.answer}</p>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
export default Accordion;
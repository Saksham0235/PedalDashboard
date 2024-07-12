
import React, { useState } from "react";
import "./accord.css"; 

const Accordion = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How do I apply for PedalCircle?",
      answer: "Lorem",
    },
    {
      id: 2,
      question: "Who can apply for PedalCircle?",
      answer: "Lorm",
    },
    {
      id: 3,
      question: "How long is the PedalCircle program?",
      answer: "Basic",
    },
    {
      id: 4,
      question: "What is the innovation hub?",
      answer: "But,you also save up to 40% on Car Service compared to what is charged at other service centres",
    },
    {
      id: 5,
      question: "How can PedalCircle help my startup grow?",
      answer: "Lorem",
    },
    {
      id: 6,
      question: "Is there a specific industry focus for PedalCircle?",
      answer:
        "Yes, we have expertise in mentorships .",
    },
    {
      id: 7,
      question: "What happens after the program ends?",
      answer:
        "Generally, a basic service can take around 1-2 hours, while more extensive repairs or diagnostics may require additional time. Our team will provide you with an estimated timeframe based on the specific services required for your car.",
    },

  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="faq-question">{question.question}</div>
            <div className="faq-answer">{question.answer}</div> 
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Accordion;
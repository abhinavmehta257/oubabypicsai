import React from "react";
import Accordian from "./blocks/Accordian";
let FAQs = [
  {
    question: "What do I get?",
    answer: "You will receive your HD baby photos via email.",
  },
  {
    question: "What type of photos should I upload?",
    answer: "High-quality photos work best with our image generation AI.",
  },
  {
    question: "What do you do with my photos?",
    answer:
      "We train our AI model with your photos, render baby photos, then delete them from our servers after delivery.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Data is stored securely on servers in the United States, by vetted, highly secure, third party partners of us.",
  },
  {
    question: "Can I use the photos anywhere?",
    answer:
      "Yes, you can use the baby photos anywhere you want. You can use them on your social media profiles and your website.",
  },
  {
    question: "Is my privacy protected?",
    answer:
      "Yes, your email is used htmlFor the delivery of baby photos only. We will not sell your email nor send you promotional content from other brands.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, we will refund your purchase if we deem your uploaded photos unsuitable htmlFor AI training. However, it is no longer eligible htmlFor a refund after delivery of baby photos.",
  },
  {
    question: "Is payment secure?",
    answer:
      "Yes, we use Stripe htmlFor payment and do not store any of your credit card information.",
  },
];

function Section6() {
  return (
    <div className="section section-6">
      <h2 className="heading">Frequently Asked Questions</h2>
      <div>
        Don't see what you want to ask here? Say <a>hey@ourbabypicai.com</a> to
        ask us!
      </div>
      <div className="accordion">
        {FAQs.map((faq, index) => (
          <Accordian
            question={faq.question}
            answer={faq.answer}
            index={index}
            key={index}
          ></Accordian>
        ))}
      </div>
    </div>
  );
}

export default Section6;

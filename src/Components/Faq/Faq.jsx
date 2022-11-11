import "./Faq.css";

const Faq = ( { faqRef }) => {
  return (
    <div className="container faq py-3" id="faq" ref={faqRef}>
      <h1 className="faq_heading">
        FREQUENTLY ASKED <br /> <span className="faq_head">QUESTIONS?</span>
      </h1>
      <div className="row">
        <Question question="Who can participate in the event?" />
        <Answer
          answer="If you want to be a budding entrepreneur? then you ended up in the right place.
There are no certain criteria, those who are interested in entrepreneurship can participate."
        />
        <Answer answer="Yes, there is an option only for individual enrollment. But once after enrolling you can participate individually or as a group as per your choice. We have provided the details of the registration fee packages declared." />
        <Question right question="Can I individually register for the event?" />

        <Question question="Will I be refunded if I decide to cancel my registration?" />
        <Answer answer="Oopsy! There is no provision for a refund. But you'll avail the benefit of a refund in case you have registered yourself twice by some technical issues. The technical issues must be informed to the Upscale'22 team as soon as possible." />
        <Answer answer="From the introduction, webinar sessions and mock presentations will be online. The event will be conducted offline on the last day." />
        <Question right question="Is it an offline or online event?" />
      </div>
      <div className="faq_blob1"></div>
      <div className="faq_blob2"></div>
      <div className="faq_blob3"></div>
    </div>
  );
};

const Question = ({ question, right }) => {
  return (
    <div className={`faq_question col-6 ${right ? "d-flex align-items-end flex-column" : ""}`}>
      <h2 className="mt-4">Question</h2>
      <p>{question}</p>
    </div>
  );
};

const Answer = ({ answer }) => {
  return (
    <div className='faq_answer py-4 px-3 col-6'>
      {answer}
    </div>
  );
};

export default Faq;

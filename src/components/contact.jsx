import data from "../data/contact.json";

function Contact() {
  return (
    <div className="contact">
      <div className="fpContact">
        <h1 className="contactTitle">{data.contacts.title}</h1>
        <p className="contactsubt">{data.contacts.desc}</p>
      </div>
      <div className="contactFormSubmit">
        <form name="contactForm" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contactForm"/>
          <input type="email" name="email" placeholder={data.contacts.input} />
          <button type="submit" className="btn2">{data.contacts.btn}</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

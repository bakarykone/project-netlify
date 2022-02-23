import data from '../data/contact.json'

function Contact() {
  return (
    <div className="contact">
      <div className="fpContact">
        <h1 className="contactTitle">{data.contacts.title}</h1>
        <p className="contactsubt">{data.contacts.desc}</p>
      </div>
      <div className="contactFormSubmit">
        <input type="email" className="" placeholder={data.contacts.input}></input>
        <button className="btn2">{data.contacts.btn}</button>
      </div>
    </div>
  );
}

export default Contact;

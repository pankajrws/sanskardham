import React, {useState} from "react";

function ContactUsForm(props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  function submitHandler(event) {
    props.onSubmitHandler({
      event: event,
      name: name,
      mobile: mobile,
      message: message
    });
  }

  function nameHandler(e){
    setName(e.target.value);
  }

  function mobileHandler(e){
    setMobile(e.target.value);
  }

  function messageHandler(e){
    setMessage(e.target.value);
  }

  return (
    <form className="w-100" onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="name" name="name" onChange={nameHandler}/>
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">
          Mobile
        </label>
        <input type="number" className="form-control" id="mobile" name="mobile" onChange={mobileHandler}/>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea className="form-control" rows="5" id="message" name="message" onChange={messageHandler}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactUsForm;

import React, { useState, useCallback } from "react";
import ContactUsForm from "./ContactUsForm";
function ContactUs(props) {
  const [error, setError] = useState(false);

  const submitHandler = useCallback(async (e) => {
    try {
      var formData = new FormData();
      formData.append("name", e.name);
      formData.append("mobile", e.mobile);
      formData.append("message", e.message);
      console.log(e);
      e.event.preventDefault();
      const response = await fetch(props.contact_us_url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });
      if (!response.ok) {
        throw new Error("Something went wrong!. Cannot load data");
      }

      const data = await response.json();
      console.log(data)
    } catch (err) {
      setError(true);
    }
  }, []);

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-25">
        <div className="my-5 text-center fs-1">Contact Us</div>
        <div className="mb-3">{props.contact_us_form_mobile}</div>
        <ContactUsForm onSubmitHandler={submitHandler}/>
        {error && <p>Some Error Occured!</p>}
      </div>
    </div>
  );
}

export default ContactUs;

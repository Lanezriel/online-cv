import { useState } from "react";
import ContactForm from "../parts/ContactForm";

import ContactMiniGame from "../parts/ContactMiniGame";

function Contact(props) {
  const [formVisible, setFormVisible] = useState(false);

  function handleFoundClick() {
    setFormVisible(true);
  }

  return(
    <div className="main-container mt-3">
      <h1 className="general-title">Contact</h1>

      {!formVisible &&
        <ContactMiniGame handleFoundClick={handleFoundClick} />
      }

      {formVisible &&
        <ContactForm />
      }
    </div>
  );
}

export default Contact;
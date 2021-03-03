import { useState } from "react";

import ContactMiniGame from "../parts/ContactMiniGame";

function Contact(props) {
  const [formVisible, setFormVisible] = useState(false);

  function handleFoundClick() {
    setFormVisible(true);
  }

  return(
    <div className="main-container mt-3">
      <h1 className="general-title">Contact</h1>

      { !formVisible &&
        <ContactMiniGame handleFoundClick={handleFoundClick} />
      }

      {formVisible &&
        <h2 className="general-sub-title">Fantastic! You found the form!</h2>
      }
    </div>
  );
}

export default Contact;
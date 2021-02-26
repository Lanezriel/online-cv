import React, { Component } from 'react';
import Experiences from '../pages/Experiences';

import './ExperienceModal.scss';

class ExperienceModal extends Component {
  render() {
    const { active, toggleModal } = this.props;

    return (
      <div className={`modal ${active && "is-active"}`}>
        <div className="modal-background" onClick={() => toggleModal()}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">To be implemented</p>
            <button className="delete" aria-label="close" onClick={() => toggleModal()}></button>
          </header>
          <section className="modal-card-body">
            <p>Also to be implemented</p>
          </section>
        </div>
      </div>
    )
  }
}

export default ExperienceModal;
import React, { Component } from 'react';

import logo from '../assets/images/logo.svg';
import './PreGameModal.scss';

class PreGameModal extends Component {
  modalEnd = () => {
    this.props.launchGameCallback();
  }

  render() {
    const { startModal } = this.props;

    return (
      <div className={`modal ${startModal && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card modal-card-anim">
          <header className="modal-card-head modal-card-head-anim" onAnimationEnd={() => (this.modalEnd())}>
            <p className="modal-card-title has-text-centered">Launching the game</p>
            {/* <button className="delete" aria-label="close"></button> */}
          </header>
          <div className="modal-card-body is-flex is-justify-content-center">
            <img src={logo} alt="logo" className="modal-logo" />
          </div>
          <div className="modal-card-body is-flex is-justify-content-center">
            <div className="progress has-background-light">
              <div className="progress__bar has-background-primary"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreGameModal;
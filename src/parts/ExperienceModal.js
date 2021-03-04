import React, { Component } from 'react';

import './ExperienceModal.scss';

class ExperienceModal extends Component {
  render() {
    const { active, toggleModal, data, checkedList, handleCheckboxChange } = this.props;

    return (
      <div className={`modal ${active && "is-active"}`}>
        <div className="modal-background" onClick={() => toggleModal()}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{data.title}</p>
            <button className="delete" aria-label="close" onClick={() => toggleModal()}></button>
          </header>
          <section className="modal-card-body">
            { data.roles &&
              data.roles.map((role, index) => {
                return(
                  <div key={index} className="acc">
                    <input type="checkbox" checked={checkedList[index]} id={`acc-${index}`} className="invisible-input" onChange={() => handleCheckboxChange(index)} />
                    <label className="acc-title" htmlFor={`acc-${index}`}>{role.role}</label>
                    <div className="acc-content">
                      <ul>
                        {role.activities.map((activity, index) => {
                          return <li key={index}>{activity}</li>
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })
            }
          </section>
        </div>
      </div>
    )
  }
}

export default ExperienceModal;
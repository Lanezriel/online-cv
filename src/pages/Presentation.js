import React, { Component } from 'react';

import firebase from '../services/Firestore';

import PresentationFrame from '../parts/PresentationFrame';
import PresentationSection from '../parts/PresentationSection';

import './Presentation.scss';
import PresentationChipSection from '../parts/PresentationChipSection';

class Presentation extends Component {
  state = {
    infos: [],
    intro: [],
  }

  componentDidMount = () => {
    const db = firebase.firestore();

    db.collection("presentation").get()
      .then((resp) => {
        resp.docs.forEach(doc => {
          this.setState({infos: doc.data().infos});
          this.setState({intro: doc.data().intro});
        })
      });
  }

  render() {
    const { infos, intro } = this.state;

    return(
      <div className="presentation-bg">
        <PresentationFrame quote={'Everything can be learned'} sub={['If there is a will,', 'there is always a way']} />

        <PresentationSection title={'Main informations'}>
          <div className="is-flex is-flex-wrap-wrap is-justify-content-center w-60-desktop">
            {infos.map((info, index) => {
              return <PresentationChipSection key={index} info={info} />
            })}
          </div>
        </PresentationSection>

        <PresentationFrame />

        <PresentationSection title={'Introduction'}>
          {intro.map((item, index) => {
            return(
              <div key={index} className="presentation-bg__section__text-content">
                <h3>{item.title}</h3>
                {item.content.map((elem, index) => {
                  return(
                    <p key={index}>{elem}</p>
                  )
                })}
              </div>
            )
          })}
        </PresentationSection>

        <PresentationFrame />
      </div>
    )
  }
}

export default Presentation
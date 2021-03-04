import React, { Component } from 'react';

import firebase from '../services/Firestore';

import ChipGroup from '../components/ChipGroup';
import PresentationFrame from '../parts/PresentationFrame';
import PresentationSection from '../parts/PresentationSection';

import './Presentation.scss';
import PresentationChipSection from '../parts/PresentationChipSection';

class Presentation extends Component {
  state = {
    infos: [],
  }

  componentDidMount = () => {
    const db = firebase.firestore();

    db.collection("presentation").get()
      .then((resp) => {
        resp.docs.forEach(doc => {
          this.setState({infos: doc.data().infos});
        })
      });
  }

  render() {
    const { infos } = this.state;

    return(
      <div className="presentation-bg">
        <PresentationFrame quote={'Everything can be learned'} sub={['If there is a will,', 'there is always a way']} />

        <PresentationSection title={'Main informations'}>
          <div className="is-flex is-flex-wrap-wrap is-justify-content-center w-60-desktop">
            {infos.map((info, index) => {
              return <PresentationChipSection info={info} />
            })}
          </div>
        </PresentationSection>

        <PresentationFrame />

        <PresentationSection title={'Introduction'}>
          <div className="presentation-bg__section__text-content">
            <p>Haec igitur Epicuri non probo, inquam. De cetero vellem equidem aut ipse doctrinis fuisset instructior est enim,
              quod tibi ita videri necesse est, non satis politus iis artibus, quas qui tenent, eruditi appellantur aut ne deterruisset alios a studiis.
              quamquam te quidem video minime esse deterritum.</p>

            <p>Postremo ad id indignitatis est ventum, ut cum peregrini ob formidatam haut ita dudum alimentorum inopiam pellerentur ab urbe praecipites,
              sectatoribus disciplinarum liberalium inpendio paucis sine respiratione ulla extrusis, tenerentur minimarum adseclae veri,
              quique id simularunt ad tempus, et tria milia saltatricum ne interpellata quidem cum choris totidemque remanerent magistris.</p>

            <p>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit.
              ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi,
              eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit
              exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam,
              ubi quondam peremptum Constantini filium accepimus Crispum.</p>

            <p>Procedente igitur mox tempore cum adventicium nihil inveniretur,
              relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.</p>

            <p>Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem
              nec dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret,
              Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator,
              cum quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.</p>
          </div>
        </PresentationSection>

        <PresentationFrame />
      </div>
    )
  }
}

export default Presentation
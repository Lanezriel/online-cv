import { Chip } from '@material-ui/core';
import React, { Component } from 'react';

import './Presentation.scss';

class Presentation extends Component {
  state = {
    generals: [
      'Belgian',
      '1989',
      'Married',
      'Father',
      'Driving License (on progress)',
    ],
    languages: ['French', 'English', 'Japanese'],
    papers: [
      'Scrum Master Accredited Certification',
      'ISTQB Foundation',
      'Multilingual Digital Treatment - Japanese License',
    ],
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'Django Channels',
      'Pandas',
      'xlWings',
      'Angular 2+',
      'Angular Material',
      'RxJS Websocket',
      'ReactJS',
      'TypeScript',
      'JavaScript',
      'jQuery',
      'VBA',
      'VBScript',
      'HTML 5',
      'CSS 3',
      'SASS',
      'C',
      'C++',
      'Selenium',
    ],
    knowledges: [
      'Tools development',
      'Automation',
      'Web development',
      'Software testing',
      'Communication',
      'VS Code',
      'Oracle',
      'MySQL',
      'SQLite',
      'Quality Center',
      'Unified Functional Testing',
      'Jenkins',
      'Android Studio',
      'Eclipse',
      'Network',
    ],
  }

  render() {
    const { generals, languages, papers, skills, knowledges } = this.state;

    return(
      <div className="presentation-bg">
        <div className="presentation-bg__frame">
          <p className="presentation-bg__frame__quote">Everything can be learned</p>
          <p className="presentation-bg__frame__sub">If there is a will,<br/>there is always a way</p>
        </div>
        <div className="presentation-bg__section">
          <h1 className="presentation-bg__section__title">Main informations</h1>
          <div className="columns is-multiline w-60-desktop">
            <div className="column is-4">
              <h2 className="presentation-bg__section__subtitle">General</h2>
              <div className="presentation-bg__section__chip-content">
                {generals.map((item, index) => (
                  <Chip key={index} label={item} className="has-text-weight-medium has-background-primary" />
                ))}
              </div>
            </div>
            <div className="column is-3">
              <h2 className="presentation-bg__section__subtitle">Languages</h2>
              <div className="presentation-bg__section__chip-content">
                {languages.map((item, index) => (
                  <Chip key={index} label={item} className="has-text-weight-medium has-background-warning" />
                ))}
              </div>
            </div>
            <div className="column is-5">
              <h2 className="presentation-bg__section__subtitle">Diplomas &amp; Certifications</h2>
              <div className="presentation-bg__section__chip-content">
                {papers.map((item, index) => (
                  <Chip key={index} label={item} className="has-text-weight-medium has-background-danger" />
                ))}
              </div>
            </div>
            <div className="column is-6">
              <h2 className="presentation-bg__section__subtitle">Skills</h2>
              <div className="presentation-bg__section__chip-content">
                {skills.map((item, index) => (
                  <Chip key={index} label={item} className="has-text-weight-medium has-background-success" />
                ))}
              </div>
            </div>
            <div className="column is-6">
              <h2 className="presentation-bg__section__subtitle">Knowledges</h2>
              <div className="presentation-bg__section__chip-content">
                {knowledges.map((item, index) => (
                  <Chip key={index} label={item} className="has-text-weight-medium has-background-grey-light" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="presentation-bg__frame"></div>
        <div className="presentation-bg__section">
          <h1 className="presentation-bg__section__title">Introduction</h1>
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
        </div>
        <div className="presentation-bg__frame"></div>
      </div>
    )
  }
}

export default Presentation
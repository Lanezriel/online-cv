import React, { Component } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FullScreen } from 'react-full-screen';

// import logo from './images/logo.svg';

import { fullScreenEnable } from '../utils/FullScreenEnable';
import './Home.scss';
import PresentationGame from '../components/PresentationGame';
import PreGameModal from '../parts/PreGameModal';
import HomeMessage from '../parts/HomeMessage';

class Home extends Component {
  state = {
    startModal: false,
    startGame: false,
  }
  
  detectWebGLContext() {
    var canvas = document.createElement("canvas");
    var gl = canvas.getContext("webgl") || canvas.getContext("webgl2")

    if(gl && (gl instanceof WebGLRenderingContext || gl instanceof WebGL2RenderingContext)) {
      return true;
    } else {
      return false;
    }
  }

  launchModal = () => {
    const { startModal } = this.state;
    this.setState({startModal: !startModal});
  }

  // Arrow fx for binding to this
  launchGame = () => {
    const { startModal, startGame } = this.state;
    this.setState({startModal: !startModal, startGame: !startGame});
  }

  render() {
    return(
      <div className="main-container is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <PreGameModal launchGameCallback={this.launchGame} startModal={this.state.startModal} />

        {
          (this.state.startGame ? (
            <div className="flex-col-centered">
              { !this.detectWebGLContext() &&
                <Accordion className="m-3">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="has-background-danger message-header"
                  >
                    <p>"WebGL not available" error</p>
                  </AccordionSummary>
                  <AccordionDetails className="has-background-danger-light">
                    <div>
                      <p>If you encounter the <strong><i>WebGL not available</i></strong> text, follow these instructions for Chrome :</p>
                      <ul>
                        <li className="message-body__li">In the address bar, type <strong>chrome://flags/</strong>, and <strong>press Enter</strong></li>
                        <li className="message-body__li">Scroll to (or search for) <strong>Disable WebGL</strong> – Enabling this option prevents web applications from accessing the WebGL API, and <strong>click Enable</strong></li>
                        <li className="message-body__li">Click <strong>Relaunch Now</strong>. Google Chrome will restart and the game should work</li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              }

              <div className="columns mt-3 is-centered">
                <div className="column">
                  <div className="mr-3 dropdown is-right is-hoverable">
                    <div className="dropdown-trigger">
                      <button className="button" aria-haspopup="true" aria-controls="game-controls">
                        <span>Game controls</span>
                        <span className="icon is-small">
                          <ExpandMoreIcon />
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="game-controls" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <p>If the game doesn't respond to your inputs, just click inside to give it focus.</p>
                          <hr className="dropdown-divider" />
                          <ul>
                            <li className="message-body__li"><strong>Movements :</strong> Use the arrows</li>
                            <li className="message-body__li"><strong>Validate :</strong> Use Enter</li>
                            <li className="message-body__li"><strong>Attack :</strong> Use X</li>
                            <li className="message-body__li"><strong>Roll :</strong> Use C</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <button className="button is-rounded is-primary" onClick={this.props.fsHandle.enter}>Fullscreen Game</button>
                </div>
              </div>
              <div className="game-container">
                <FullScreen handle={this.props.fsHandle}>
                  <PresentationGame />
                </FullScreen>
              </div>
            </div>
          ) : (
            (!this.state.startModal &&
              <HomeMessage handleClick={this.launchModal} />
            )
          ))
        }
      </div>
    )
  }
}

export default fullScreenEnable(Home);
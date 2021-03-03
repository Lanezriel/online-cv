import { makeStyles } from "@material-ui/core";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

import ninja from "../assets/images/ninja.png";
import battleMap from "../assets/images/battle_map.jpg";

const useStyles = makeStyles(theme => ({
  map: {
    width: '420px',
    height: '800px',
    margin: '1rem auto 0 auto',
    backgroundImage: `url(${battleMap})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  drag: {
    height: '50px',
    width: '50px',
    backgroundImage: `url(${ninja})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  bubble: {
    width: '200px',
    height: '100px',
    position: 'relative',
    top: '-110px',
    left: '-30px',
    background: '#fafafa',
    boxShadow: '0 0 5px black',
    padding: '.3rem .7rem',
    fontSize: '.8rem',
    borderRadius: '25px',
  },
  bubbleButton: {
    cursor: 'pointer',
  },
}));

function Contact(props) {
  const classes = useStyles();

  const [formVisible, setFormVisible] = useState(false);
  const [found, setFound] = useState(false);
  const [dragAxis, setDragAxis] = useState('both');
  const [defaultPosition, setDefaultPosition] = useState({x: 187, y: 109});
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleText, setBubbleText] = useState('');

  // Used to counter the findDOMNode deprecation of React (because Draggable needs it)
  const nodeRef = useRef(null);

  function handleDrag(event, info) {
    // console.log(event, info);

    if(!found) {
      var visible = false;
      var text = '';

      if(info.x >= 85 && info.x <= 90 && info.y >= 600 && info.y <= 605) {
        setDefaultPosition({x: info.x, y: info.y});
        setDragAxis('none');
        visible = true;
        text = 'We found it!';
        setFound(true);
      } else if(info.x >= 210 && info.x <= 240 && info.y >= 350 && info.y <= 385) {
        visible = true;
        text = 'Did you really think a contact form could be hidden in a little wet place like this?';
      }

      setBubbleText(text);
      setBubbleVisible(visible);
    }
  }

  function handleFoundClick() {
    setFormVisible(true);
  }

  return(
    <div className="main-container mt-3">
      <h1 className="general-title">Contact</h1>

      { !formVisible &&
        <>
          <h2 className="general-sub-title">Want to contact me? Find the "contact form" by dragging the Ninja on the map!</h2>
          <div className={classes.map}>
            <Draggable
              nodeRef={nodeRef}
              axis={dragAxis}
              defaultPosition={defaultPosition}
              grid={[24.7, 24.7]}
              onDrag={handleDrag}
            >
              <div ref={nodeRef} className={classes.drag}>
                {bubbleVisible &&
                  <div className={classes.bubble}>
                    <p>{bubbleText}</p>
                    {found &&
                      <button
                        className={classes.bubbleButton}
                        onClick={handleFoundClick}
                        onTouchStart={handleFoundClick} // Because, strangely, onClick wouldn't fire on mobile devices
                      >
                        Open the form
                      </button>
                    }
                  </div>
                }
              </div>
            </Draggable>
          </div>
        </>
      }

      {formVisible &&
        <h2 className="general-sub-title">Fantastic! You found the form!</h2>
      }
    </div>
  );
}

export default Contact;
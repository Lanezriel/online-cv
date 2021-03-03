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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
    top: '-110px',
    // left: '-30px',
    background: 'rgba(230, 230, 230, .85)',
    boxShadow: '0 0 5px black',
    padding: '.3rem .7rem',
    fontSize: '.8rem',
    fontWeight: '600',
    borderRadius: '25px',
  },
  bubbleButton: {
    display: 'block',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '15px',
    backgroundColor: '#15dea5cc',
    padding: '.5rem',
    margin: '0 auto',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#0ad49acc',
    },
  },
}));

function ContactMiniGame(props) {
  const classes = useStyles();
  
  const [found, setFound] = useState(false);
  const [dragAxis, setDragAxis] = useState('both');
  const [defaultPosition, setDefaultPosition] = useState({x: 187, y: 109});
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [bubbleText, setBubbleText] = useState('');
  const [bubblePositionLeft, setBubblePositionLeft] = useState('-30px');

  // Used to counter the findDOMNode deprecation of React (because Draggable needs it)
  const nodeRef = useRef(null);

  // As the the Draggable grid is float number, the position modifications are not perfectly equal to that number
  // I had to use ranges of possible values tu ensure we are in the right spot
  function handleDrag(event, info) {
    // console.log(info.x, info.y);

    if(!found) {
      var visible = false;
      var text = '';

      if(info.x >= 85 && info.x <= 90 && info.y >= 600 && info.y <= 605) {
        setDefaultPosition({x: info.x, y: info.y});
        setDragAxis('none');
        visible = true;
        text = 'We found it! Let\'s contact the guy, I had fun with you.';
        setFound(true);
      } else if(info.x >= 210 && info.x <= 240 && info.y >= 350 && info.y <= 385) {
        visible = true;
        text = 'Did you really think a contact form could be hidden in a little wet place like this?';
      } else if(info.x >= 185 && info.x <= 190 && info.y >= 30 && info.y <= 85) {
        visible = true;
        text = 'Oh come on! We\'re coming from here!';
      } else if(info.x >= 160 && info.x <= 265 && info.y >= 600 && info.y <= 605) {
        visible = true;
        text = 'What a nice view! Unfortunately, the form is not hidden here...';
      } else if(info.x >= 335 && info.x <= 340 && info.y >= 500 && info.y <= 505) {
        visible = true;
        text = 'Nice try but it\'s not here.';
      } else if(info.x >= 355 && info.x <= 385 && info.y >= 675 && info.y <= 705) {
        visible = true;
        text = 'Hum ... This thing doesn\'t even exist. Why here ?';
      } else if(info.x >= 160 && info.x <= 190 && info.y >= 305 && info.y <= 385) {
        visible = true;
        text = 'A stair doesn\'t always mean that something is there. There is water everywhere!';
      } else if(info.x >= 210 && info.x <= 240 && info.y >= 180 && info.y <= 185) {
        visible = true;
        text = 'Stairs? Why the ...? Please no, I hate stairs!';
      } else if(info.x >= 210 && info.x <= 240 && info.y >= 205 && info.y <= 210) {
        visible = true;
        text = 'Haha! I was joking! I prefer stairs, it\'s healthier than escalator.';
      } else if(info.x >= 110 && info.x <= 115 && info.y >= 475 && info.y <= 480) {
        visible = true;
        text = 'Hmmm ... Interesting.';
      }

      if (info.x > 355) {
        setBubblePositionLeft('-180px');
      } else if(info.x > 240) {
        setBubblePositionLeft('-130px');
      } else {
        setBubblePositionLeft('-30px');
      }

      setBubbleText(text);
      setBubbleVisible(visible);
    }
  }

  return(
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
              <div className={classes.bubble} style={{left: bubblePositionLeft}}>
                <p>{bubbleText}</p>
                {found &&
                  <button
                    className={classes.bubbleButton}
                    onClick={props.handleFoundClick}
                    onTouchStart={props.handleFoundClick} // Because, strangely, onClick wouldn't fire on mobile devices
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
  );
}

export default ContactMiniGame;
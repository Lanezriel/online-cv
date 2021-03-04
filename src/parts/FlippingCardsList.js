import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import firebase from '../services/Firestore';

import FlippingCard from "../components/FlippingCard";
import { SwapHoriz } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '2rem auto',
    perspective: '1000px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down(1024)]: {
      width: '100%',
    },
  },
}));

function FlippingCardsList(props) {
  const classes = useStyles();
  const [cardsList, setCardsList] = useState([0,1,2]);

  // = componentDidMount (only): see the [] argument
  useEffect(() => {
    const db = firebase.firestore();

    db.collection("achievements").get()
      .then((resp) => {
        resp.docs.forEach(doc => {
          setCardsList(doc.data().achievements);
        })
      });
  }, []);

  return(
    <div className={classes.root}>
      {cardsList.map((card, index) => {
        return (
          <FlippingCard key={index}>
            <>
              <h3>{card.title}</h3>
              <img src={card.image} alt={card.title} />
              <p>
                {card.sub}
              </p>
              <SwapHoriz />
            </>
            <>
              {card.details &&
                <ul>
                  {card.details.map((detail, index) => {
                    return <li key={index}>{detail}</li>
                  })}
                </ul>
              }
              {card.info &&
                <p>
                  {card.info.includes('$$LINK$$') ?
                    <a href={card.info.split('$$LINK$$')[1]} rel="noreferrer" target="_blank">{card.info.split('$$LINK$$')[0]}</a> :
                    card.info}
                </p>
              }
            </>
          </FlippingCard>
        )
      })}
    </div>
  );
}

export default FlippingCardsList;
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, makeStyles } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import Slider from 'react-slick';
import firebase from '../services/Firestore';
// import axios from 'axios';

import './Experiences.scss';
import ExperienceModal from '../parts/ExperienceModal';
import { useWindowSize } from '../utils/UseWindowSize';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: 'contain',
  },
  cardHeaderTitle: {
    fontSize: '1.5rem',
    // [theme.breakpoints.down(1024)]: {
    //   fontSize: '1rem',
    // }
  },
  cardHeaderSub: {
    fontSize: '1rem',
    // [theme.breakpoints.down(1024)]: {
    //   fontSize: '.6rem',
    // }
  },
  cardContent: {
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    // [theme.breakpoints.down(1024)]: {
    //   fontSize: '.8rem',
    // }
  },
}));

const Experiences = () => {
  const classes = useStyles();
  const [cards, setCards] = React.useState(undefined);
  const [modalActive, setModalActive] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const windowSize = useWindowSize();

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <NavigateNext />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <NavigateBefore />
      </div>
    )
  }

  const [cardIndex, setCardIndex] = useState(0);

  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: windowSize.width >= 1024 ? 3 : 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCardIndex(next)
  };

  // = componentDidMount (don't forget the [] argument at the end)
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("experiences").get()
      .then((resp) => {
        resp.docs.forEach(doc => {
          // console.log(doc.data().cards);
          setCards(doc.data().cards);
        })
      })
  }, []);

  const toggleModal = (value, data) => {
    if(cardIndex === value) {
      setModalActive(true);
      setModalData(data);
    } else {
      setModalActive(false);
      setModalData({});
    }
  }

  return(
    <div className="carousel-container">
      <ExperienceModal active={modalActive} toggleModal={toggleModal} data={modalData} />
      { cards &&
        <Slider {...settings}>
          {cards.map((card, index) => {
            return (
              <div key={index} className={`slide ${index === cardIndex ? "activeSlide" : (index < cardIndex ? "prevSlide" : "nextSlide")}`} onClick={() => toggleModal(index, card)}>
                <Card className={classes.root}>
                  <CardHeader
                    classes={{
                      title: classes.cardHeaderTitle,
                      subheader: classes.cardHeaderSub,
                    }}
                    title={card.title}
                    subheader={card.subheader}
                  />
                  <CardMedia image={card.image} className={classes.media} />
                  <CardContent classes={{root: classes.cardContent}}>
                    <p>{card.content}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </Slider>
      }
    </div>
  )
}

export default Experiences
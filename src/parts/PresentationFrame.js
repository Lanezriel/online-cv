import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '300px',
    padding: '3.5rem',
    color: 'white',
    fontWeight: '500',
    textShadow: '0.15em 0 3px black,\
      0 0.15em 3px black,\
      -0.15em 0 3px black,\
      0 -0.15em 3px black,\
      -0.15em -0.15em 3px black,\
      -0.15em 0.15em 3px black,\
      0.15em -0.15em 3px black,\
      0.15em 0.15em 3px black',
    [theme.breakpoints.down(1024)]: {
      minHeight: '200px',
    },
  },
  quote: {
    fontFamily: 'QuoteFont',
    fontSize: '3.5rem',
    [theme.breakpoints.down(1024)]: {
      fontSize: '2rem',
    },
  },
  sub: {
    fontSize: '2rem',
    paddingLeft: '2rem',
    [theme.breakpoints.down(1024)]: {
      fontSize: '1.25rem',
    },
  },
}));

function PresentationFrame(props) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      {props.quote && <p className={classes.quote}>{props.quote}</p>}

      {props.sub && Array.isArray(props.sub) ?
        (
          props.sub.map((sub, index) => {
            return <p className={classes.sub} key={index}>{sub}</p>
          })
        ) : (
          <p className={classes.sub}>{props.sub}</p>
        )
      }
    </div>
  );
}

export default PresentationFrame;
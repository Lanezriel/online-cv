import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#eee',
    boxShadow: 'black 0 0 15px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '900',
    marginBottom: '.5rem',
  },
}));

function PresentationSection(props) {
  const classes = useStyles();
  
  return(
    <div className={classes.root}>
      <h1 className={classes.title}>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default PresentationSection;
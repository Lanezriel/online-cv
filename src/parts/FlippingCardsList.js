import { makeStyles } from "@material-ui/core";
import FlippingCard from "../components/FlippingCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: '2rem auto',
    perspective: '1000px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
}));

function FlippingCardsList(props) {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <FlippingCard />
    </div>
  );
}

export default FlippingCardsList;
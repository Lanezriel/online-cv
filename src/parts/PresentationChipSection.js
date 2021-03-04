import { makeStyles } from "@material-ui/core";
import ChipGroup from "../components/ChipGroup";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    width: (props) => props.info.width,
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
}));

function PresentationChipSection(props) {
  const classes = useStyles(props);

  return(
    <div className={classes.root}>
      <h2 className={classes.title}>{props.info.section}</h2>
      <ChipGroup chipList={props.info.items} bgColor={props.info.bgColor}/>
    </div>
  );
}

export default PresentationChipSection;
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '.7rem',
  },
  chip: {
    fontWeight: '500',
    backgroundColor: props => props.bgColor,
    margin: '.5rem',
  },
}));

function ChipGroup(props) {
  const classes = useStyles(props);

  return(
    <div className={classes.root}>
      {props.chipList.map((chip, index) => {
        return <Chip key={index} label={chip} className={classes.chip} />
      })}
    </div>
  );
}

export default ChipGroup;
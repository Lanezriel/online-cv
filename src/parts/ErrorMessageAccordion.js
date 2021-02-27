import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ErrorMessageAccordion(props) {
  return(
    <Accordion className="m-3">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="has-background-danger message-header"
      >
        <p>{ props.title }</p>
      </AccordionSummary>
      <AccordionDetails className="has-background-danger-light">
        { props.children }
      </AccordionDetails>
    </Accordion>
  );
}

export default ErrorMessageAccordion;
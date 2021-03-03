import { Alert, makeStyles, Snackbar, TextField } from "@material-ui/core";
import { useState } from "react";
import emailjs from 'emailjs-com';

import emailjsInfo from "../services/EmailJS";

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    fontSize: '1.75rem',
    fontWeight: '700',
  },
  formContainer: {
    width: '60%',
    margin: '1rem auto',
    [theme.breakpoints.down(1024)]: {
      width: '100%',
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  halfRow: {
    width: '50%',
    padding: '1rem',
    [theme.breakpoints.down(1024)]: {
      width: '100%',
    },
  },
  fullRow: {
    width: '100%',
    padding: '1rem',
  },
  formInput: {
    width: '100%',
    minHeight: '1rem',
  },
  sendButton: {
    marginLeft: 'auto',
    marginRight: '1rem',
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#15dea5',
    cursor: 'pointer',
    padding: '.5rem 1rem',
    fontSize: '1rem',
    fontWeight: '600',
    '&:focus': {
      outline: 'none',
    },
    '&:disabled': {
      backgroundColor: '#ccc',
      cursor: 'unset',
    },
  },
  alert: {
    width: '100%',
  },
}));

function ContactForm(props) {
  const classes = useStyles(props);

  // snackbar states
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('info');

  // 'name' states and validators
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const nameError = (nameTouched && (name === '' || name.length < 3));

  // 'email' states and validators
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const emailError = (emailTouched && (email === '' || email.length < 5 || !email.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')))

  // 'subject' states and validators
  const [subject, setSubject] = useState('');
  const [subjectTouched, setSubjectTouched] = useState(false);
  const subjectError = (subjectTouched && (subject === '' || subject.length < 3));

  // 'message' states
  const [message, setMessage] = useState('');

  const errors = (!nameTouched || nameError || !emailTouched || emailError || !subjectTouched || subjectError);

  const resetForm = () => {
    setName('');
    setNameTouched(false);

    setEmail('');
    setEmailTouched(false);

    setSubject('');
    setSubjectTouched(false);

    setMessage('');
  }

  const handleChange = (event) => {
    switch(event.target.id) {
      case 'name':
        setName(event.target.value);
        setNameTouched(true);
        break;
      case 'email':
        setEmail(event.target.value);
        setEmailTouched(true);
        break;
      case 'subject':
        setSubject(event.target.value);
        setSubjectTouched(true);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSend = () => {
    console.log(name, email, subject, message);
    try {
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send(
        emailjsInfo.serviceID,
        emailjsInfo.templateID,
        templateParams,
        emailjsInfo.userID
      ).then(
        (resp) => {
          setSnackMessage('Message sent');
          setSnackSeverity('success');
          setSnackOpen(true);

          resetForm();
        }, (error) => {
          console.log(error);
          setSnackMessage('An error occured');
          setSnackSeverity('error');
          setSnackOpen(true);
        }
      )
    } catch(error) {
      console.log(error);
    };
  };
  
  const handleSnackClose = () => {
    setSnackOpen(false);
    setSnackMessage('');
    setSnackSeverity('info');
  }

  return(
    <>
      <h2 className={classes.title}>Fantastic! You found the form!</h2>

      <div className={classes.formContainer}>
        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackOpen} onClose={handleSnackClose} autoHideDuration={5000}>
          <Alert severity={snackSeverity} className={classes.alert}>{snackMessage}</Alert>
        </Snackbar>
        <form id='contact-form' className={classes.form} noValidate>
          <div className={classes.halfRow}>
            <TextField
              error={nameError}
              required id="name"
              label="Name"
              placeholder="Name"
              variant="outlined"
              className={classes.formInput}
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className={classes.halfRow}>
            <TextField
              error={emailError}
              required
              id="email"
              label="Email address"
              placeholder="Email address"
              variant="outlined"
              className={classes.formInput}
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className={classes.fullRow}>
            <TextField
              error={subjectError}
              required
              id="subject"
              label="Subject"
              placeholder="Subject"
              variant="outlined"
              className={classes.formInput}
              value={subject}
              onChange={handleChange}
            />
          </div>
          <div className={classes.fullRow}>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={5}
              placeholder="Write your message here ..."
              variant="outlined"
              className={classes.formInput}
              value={message}
              onChange={handleChange}
            />
          </div>
          <button type="button" className={classes.sendButton} disabled={errors} onClick={handleSend}>Send message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
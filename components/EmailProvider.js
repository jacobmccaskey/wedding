import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useState, Fragment } from "react";
import { TextareaAutosize } from "@mui/base";
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';

const EmailProvider = () => {
  const [showTextArea, setShowTextArea] = useState(false);
  const [showSuccessMessage, setShowSucessMessage] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState('');
  const showTextBlock = () => {
    setShowTextArea(!showTextArea);
  };
  const handleSend = async () => {
    setSpinner(true);
    console.log('handleSend');
    setShowTextArea(!showTextArea);
    setShowSucessMessage(true);
    setSpinner(false);
  }
  return (
    <div
      style={{
        color: "black",
        maxWidth: "600px",
        margin: "auto",
        marginBottom: "2rem",
        fontSize: "18px",
      }}
    >
      <p>
        If you would like to send us a personalized message, we are providing
        the option to send us one here! Just type one up here and hit submit,
        and your message will appear in our inbox :)
      </p>
      <Grow in={showSuccessMessage}>
        <h3>Thank you, your message has been sent!</h3>
      </Grow>
      <Button
        variant="outlined"
        size="small"
        style={{
          borderColor: "darkgrey",
          color: "darkgrey",
          width: "170px",
          margin: "auto",
          display: showTextArea || showSuccessMessage ? "none" : "block",
        }}
        onClick={showTextBlock}
      >
        write us a message
      </Button>
      <Collapse in={showTextArea}>
        <TextareaAutosize
          minRows={12}
          style={{ width: "100%" }}
          aria-label="textarea"
          value={message}
          onChange={(e)=> setMessage(e.target.value) }
        />
        <LoadingButton
          variant="outlined"
          size="small"
          style={{
            borderColor: "#93CAED",
            color: "#93CAED",
            width: "100%",
            margin: "auto",
          }}
          onClick={handleSend}
          loading={spinner}
          loadingPosition="end"
  
        >
          Send
        </LoadingButton>
      </Collapse>

      <p>
        If you prefer to write us a letter, you can request our address here:
      </p>
      <Button
        variant="outlined"
        size="small"
        style={{
          borderColor: "darkgrey",
          color: "darkgrey",
          width: "170px",
        }}
      >
        Request Address
      </Button>
    </div>
  );
};

export default EmailProvider;

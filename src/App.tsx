import React from "react";
import Zoom from "@mui/material/Zoom";
import Modal from "@mui/material/Modal";

import { ChoiceEnum } from "./components/Choice/Choice";
import StepOne from "./Steps/StepOne/StepOne";
import StepTwo from "./Steps/StepTwo/StepTwo";

import RulesImg from "./images/image-rules.svg?react";
import CloseIcon from "./images/icon-close.svg?react";
import { StyledApp, StyledBox } from "./style";
import "./font.css";

function App() {
  const [choice, setChoice] = React.useState<ChoiceEnum | null>(null);
  const [score, setScore] = React.useState(0);
  const [step, setStep] = React.useState<React.ReactNode>(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (choice) {
      setStep(
        <StepTwo
          choicePlayer={choice}
          retry={() => setChoice(null)}
          onWin={() => setScore(score + 1)}
        />
      );
    } else {
      setStep(<StepOne setChoice={(choice) => setChoice(choice)} />);
    }
  }, [choice, score]);
  return (
    <StyledApp>
      <div className="header">
        <ul className="list-item">
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
        </ul>
        <div className="card-score">
          <p className="title">SCORE</p>
          <p className="number">{score}</p>
        </div>
      </div>
      {step}
      <Modal onClose={handleClose} open={open}>
        <Zoom in={open}>
          <StyledBox>
            <div className="modal-header">
              <p className="modal-title">RULES</p>
              <button className="btn-close" onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            <RulesImg />
          </StyledBox>
        </Zoom>
      </Modal>
      <button className="btn-rules" onClick={handleOpen}>
        RULES
      </button>
    </StyledApp>
  );
}

export default App;

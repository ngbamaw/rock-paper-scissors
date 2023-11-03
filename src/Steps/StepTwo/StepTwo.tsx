import React from "react";
import classNames from "clsx";

import Choice, { ChoiceEnum } from "../../components/Choice/Choice";
import StyledStepTwo from "./style";

interface StepTwoProps {
  choicePlayer: ChoiceEnum;
  retry(): void;
  onWin?(): void;
}

const choices: ChoiceEnum[] = ["paper", "rock", "scissors"];

const getRandomChoice = () => {
  const value = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return choices[value];
};
const useTimeout = (ms: number) => {
  const [isReady, setReady] = React.useState(false);
  const timeout = setTimeout(() => setReady(true), ms);
  const cancel = () => clearTimeout(timeout);
  return [isReady, cancel];
};
const beatChoice: Record<ChoiceEnum, ChoiceEnum[]> = {
  paper: ["rock"],
  scissors: ["paper"],
  rock: ["scissors"],
};
const resultText = (result: ResultType) => {
  switch (result) {
    case "win":
      return "YOU WIN";
    case "lose":
      return "YOU LOSE";
    case "draw":
      return "DRAW";
  }
};
type ResultType = "win" | "lose" | "draw";
function StepTwo({ choicePlayer, retry, onWin }: StepTwoProps) {
  const [isReady] = useTimeout(2 * 1000);
  const [aiChoice, setAiChoice] = React.useState<ChoiceEnum | null>(null);
  const [result, setResult] = React.useState<ResultType | null>(null);

  React.useEffect(() => {
    if (isReady) {
      setAiChoice(getRandomChoice());
    }
  }, [isReady]);

  React.useEffect(() => {
    if (aiChoice && !result) {
      if (aiChoice === choicePlayer) setResult("draw");
      else if (beatChoice[choicePlayer].includes(aiChoice)) {
        setResult("win");
        onWin?.();
      } else setResult("lose");
    }
  }, [choicePlayer, aiChoice, onWin, result]);

  return (
    <StyledStepTwo>
      <div className="slots">
        <div className="slot-container">
          <p></p>
          <div className="slot">
            <Choice className="choice" choice={choicePlayer} />
          </div>
        </div>
        <div className={classNames({ result: true, display: aiChoice })}>
          <p className="status">{resultText(result || "draw")}</p>
          <button className="btn-retry" onClick={() => retry()}>
            PLAY AGAIN
          </button>
        </div>

        <div className="slot-container">
          <div className="slot">
            {aiChoice && <Choice className="choice" choice={aiChoice} />}
          </div>
        </div>
      </div>
      <div
        className={classNames({
          result: true,
          "md-size": true,
          display: aiChoice,
        })}
      >
        <p className="status">{resultText(result || "draw")}</p>
        <button className="btn-retry" onClick={() => retry()}>
          PLAY AGAIN
        </button>
      </div>
    </StyledStepTwo>
  );
}

export default StepTwo;

import Choice, { ChoiceEnum } from "../../components/Choice/Choice";

import TriangleBg from "./bg-triangle.svg?react";
import StyledStepOne from "./style";

interface StepOneProps {
  setChoice(choice: ChoiceEnum): void;
}
export default function StepOne({ setChoice }: StepOneProps) {
  return (
    <StyledStepOne>
      <TriangleBg />
      <Choice
        className="choice"
        choice="paper"
        onClick={() => setChoice("paper")}
      />
      <Choice
        className="choice"
        choice="scissors"
        onClick={() => setChoice("scissors")}
      />
      <Choice
        className="choice"
        choice="rock"
        onClick={() => setChoice("rock")}
      />
    </StyledStepOne>
  );
}

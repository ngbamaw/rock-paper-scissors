import React from "react";

import PaperIcon from "./icons/icon-paper.svg?react";
import RockIcon from "./icons/icon-rock.svg?react";
import ScissorsIcon from "./icons/icon-scissors.svg?react";

import StyledChoice from "./style";

export type ChoiceEnum = "paper" | "scissors" | "rock";
interface ChoiceProps {
  className?: string;
  choice: ChoiceEnum;
}

interface ChoiceValues {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  startGradient: string;
  endGradient: string;
}

const choices: Record<ChoiceEnum, ChoiceValues> = {
  paper: {
    Icon: PaperIcon,
    startGradient: "hsl(230, 89%, 62%)",
    endGradient: "hsl(230, 89%, 65%)",
  },
  scissors: {
    Icon: ScissorsIcon,
    startGradient: "hsl(39, 89%, 49%)",
    endGradient: "hsl(40, 84%, 53%)",
  },
  rock: {
    Icon: RockIcon,
    startGradient: "hsl(349, 71%, 52%)",
    endGradient: "hsl(349, 70%, 56%)",
  },
};

const Choice: React.FC<ChoiceProps & React.ButtonHTMLAttributes<string>> = ({
  choice,
  ...props
}) => {
  const { Icon, startGradient, endGradient } = choices[choice];
  return (
    <StyledChoice
      startGradient={startGradient}
      endGradient={endGradient}
      {...props}
    >
      <div className="logo-container">
        <Icon className="icon" />
      </div>
    </StyledChoice>
  );
};

export default Choice;

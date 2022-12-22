import { useState } from "react";
import styled from "styled-components";

/**
 * Exercise #1 - Toggle Button
 *
 * @param {boolean} isOn
 */

function Toggle({ isOn = false }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => setIsToggled((prev) => !prev);

  return (
    <Button onClick={handleClick} isOn={isOn} isToggled={isToggled}>
      Toggle
    </Button>
  );
}

const Button = styled.button`
  color: ${(props) => (props.isOn ? "blue" : "red")};
  width: ${(props) => (props.isToggled ? "50%" : "100%")};
`;

/**
 * Exercise #2 - Colorful Word
 *
 * @param {string} word
 */
const colorScheme = ["blue", "red", "green", "yellow", "cyan", "violet"];

function ColorfulWord({ word }) {
  const splittedWord = word.split("");

  return splittedWord.map((c, i) => (
    <ColorfulCharacter key={`${c}${i}`} id={`${c} - ${i}`} index={i}>
      {c}
    </ColorfulCharacter>
  ));
}

const ColorfulCharacter = styled.span`
  color: ${(props) => colorScheme[props.index]};
`;

/**
 * Exercise #3 - Fully Controlled Styled Component
 *
 * @param {CSSObject} styles
 * @returns {React.ReactElement}
 */
function StyledComponent({ styles }) {
  return <StyledSpan styles={styles}>Styled Span</StyledSpan>;
}

const StyledSpan = styled.span((props) => props.styles);

/**
 * Exercise #4 - Styled Children
 *
 * @param {React.Node} children
 * @returns {React.ReactElement}
 */
function StyledChildren({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  & > span {
    color: red;
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
    background-color: yellow;
    border: 1px solid black;
  }
`;

/**
 * Exercise #5 - Responsive Box
 *
 * @returns {React.ReactElement}
 */
function Box() {
  return <StyledBox id='styled-component' />;
}

const StyledBox = styled.div`
  background-color: red;
  border: 1px solid black;

  @media only screen and (device-width: 390px) and (device-height: 844px) {
    height: 500px;
    width: 300px;
  }

  @media only screen and (device-width: 768px) and (device-height: 1024px) {
    height: 800px;
    width: 500px;
  }

  @media only screen and (device-width: 1280px) and (device-height: 800px) {
    height: 300px;
    width: 800px;
  }
`;

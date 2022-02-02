import styled from "styled-components";

export const StatBox = styled.div<StatBoxProps>`
  width: 45%;
  background-color: ${(props) => props.backgroundColor};
  height: 220px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface StatBoxProps {
  backgroundColor: string;
}

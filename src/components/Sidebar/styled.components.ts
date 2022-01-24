import styled from "styled-components";
import { Colors } from "../../constants";

export const Root = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OptionContainer = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? Colors.itemActive : "white"};
  cursor: pointer;
  :hover {
    background-color: ${Colors.itemActive};
  }
  padding: 15px 0px;
`;

interface OptionProps {
  isActive?: boolean;
}

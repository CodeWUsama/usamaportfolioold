import styled from "styled-components";
import { Colors } from "../../constants";

export const Root = styled.div`
  min-width: 130px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 768px;
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

export const MobileNavBarContainer = styled.div`
  width: 100%;
  background-color: ${Colors.base};
  padding: 20px;
  height: max-content;
  display: flex;
  flex-direction: column;
`;

export const MobileNavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

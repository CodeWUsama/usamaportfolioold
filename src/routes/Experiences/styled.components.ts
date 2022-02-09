import { Colors } from "../../constants";
import styled from "styled-components";

export const VerticalBar = styled.div`
  height: 600px;
  width: 10px;
  background-color: ${Colors.base};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: relative;
  left: -10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

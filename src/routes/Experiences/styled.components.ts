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

export const RootContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  @media (max-width: 1130px) {
    flex-direction: column;
    height: max-content;
  }
`;

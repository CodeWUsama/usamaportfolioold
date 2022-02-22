import { Colors } from "../../constants";
import styled from "styled-components";

export const YellowBubble = styled.div`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  background-color: ${Colors.base};
`;

export const GreyBubble = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: lightgrey;
`;

export const CenterPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 87vh;
  align-items: center;
  @media (max-width: 600px) {
    gap: 30px;
  }
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (max-width: 1150px) {
    height: max-content;
  }
`;

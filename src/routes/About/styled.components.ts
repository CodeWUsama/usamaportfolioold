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
  min-width: 175px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

interface StatBoxProps {
  backgroundColor: string;
}

export const AboutContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media (max-width: 1150px) {
    flex-direction: column;
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

export const TextCenterContainer = styled.div`
  @media (max-width: 1150px) {
    p {
      text-align: center;
      font-size: 36px;
    }
  }
`;

export const LeftContentContainer = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 1150px) {
    width: 90%;
    height: max-content;
  }
`;

export const RightContentContainer = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  align-items: center;
  @media (max-width: 1150px) {
    width: 90%;
    height: max-content;
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

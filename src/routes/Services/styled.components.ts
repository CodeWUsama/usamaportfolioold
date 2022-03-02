import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  @media (max-width: 950px) {
    flex-direction: column;
    height: max-content;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 45%;
  @media (max-width: 950px) {
    width: 90%;
    margin-top: 60px;
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

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 950px) {
    align-items: center;
  }
`;

import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  /* flex-direction: column; */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  border: 2px solid red;
`;

export const ContentContainer = styled.div`
  height: 100%;
  border: 2px solid black;
`;

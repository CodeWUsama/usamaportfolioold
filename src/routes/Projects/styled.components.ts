import styled from "styled-components";

export const RootContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;

export const ContentContainer = styled.div`
  height: 100%;
`;

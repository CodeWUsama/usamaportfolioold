import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  img {
    border-radius: 3px;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
    img {
      width: 95% !important;
    }
  }
`;
export const ProjectDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 45%;
  @media (max-width: 850px) {
    width: 90%;
  }
`;
export const ControlsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
  cursor: pointer;
`;
export const SControl = styled.div<ControlProps>`
  height: 10px;
  width: 50px;
  background-color: ${(props) => (props.isActive ? "orange" : "grey")};
`;

interface ControlProps {
  isActive: boolean;
  onClick: () => {};
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 80%;
  justify-content: space-between;
  @media (max-width: 1150px) {
    height: max-content;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
`;

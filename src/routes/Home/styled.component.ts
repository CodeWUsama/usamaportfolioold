import styled from "styled-components";
import { Colors } from "../../constants";

export const Root = styled.div`
  height: 100%;
  display: flex;
`;

export const BannersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5%;
  justify-content: center;
`;

export const BannerLeftCont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
  gap: 20px;
  @media (max-width: 950px) {
    width: 100%;
    align-items: center;
    padding-left: 0%;
    p {
      text-align: center;
    }
  }
`;

export const BannerRightCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const MobileRoot = styled.div`
  height: 100%;
`;

export const UsamaImage = styled.img`
  border-radius: 50%;
  height: 300px;
  width: 300px;
`;

export const UsamaImageFull = styled.img`
  height: 100%;
  width: 100%;
  max-width: 600px;
  max-height: 600px;
  border-radius: 50%;
`;

export const UsamaImageTab = styled.img`
  display: none;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  @media (max-width: 950px) {
    display: flex;
  }
`;

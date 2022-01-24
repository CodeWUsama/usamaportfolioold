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
`;

export const BannerLeftCont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 5%;
  gap: 20px;
`;

export const BannerRightCont = styled.div`
  width: 50%;
  background-color: ${Colors.base};
  background-image: url("/Images/usama.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

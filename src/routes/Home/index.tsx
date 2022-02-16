import { Flex, Text } from "../../components/Global/styled.components";
import Sidebar from "../../components/Sidebar";
import {
  BannerLeftCont,
  BannerRightCont,
  BannersContainer,
  ButtonsContainer,
  MobileRoot,
  Root,
  UsamaImage,
} from "./styled.component";
import { Colors } from "../../constants";
import Button from "../../components/Button";
import ArrowRightOutlined from "@ant-design/icons/ArrowRightOutlined";
import { useContext } from "react";
import { DataContext } from "App";

const Home = () => {
  const { width } = useContext(DataContext);

  return width >= 600 ? (
    <Root>
      <Sidebar />
      <BannersContainer>
        <BannerLeftCont>
          <Text fontSize={28} fontWeight={"bold"} capital color={Colors.base}>
            Web & Mobile App Developer
          </Text>
          <Text fontSize={90} fontWeight={"bold"}>
            I'm Usama <br /> Bilal
          </Text>
          <ButtonsContainer>
            <Button text="More About Me" />
            <Button
              text="Hire Me"
              icon={<ArrowRightOutlined></ArrowRightOutlined>}
            />
          </ButtonsContainer>
        </BannerLeftCont>
        <BannerRightCont />
      </BannersContainer>
    </Root>
  ) : (
    <MobileRoot>
      <Sidebar />
      <Flex
        flexDirection="column"
        height="85%"
        alignItems="center"
        justifyContent="center"
        gap={20}
      >
        <UsamaImage
          src={process.env.PUBLIC_URL + "/Images/usama-cropped.png"}
        />
        <Text
          color={Colors.base}
          fontWeight="bold"
          textAlign="center"
          fontSize={24}
          capital
        >
          Web & Mobile App
          <br />
          Developer
        </Text>
        <Text fontSize={40} fontWeight="bold">
          Usama Bilal
        </Text>
        <Button text="More About Me" />
        <Button
          text="Hire Me"
          icon={<ArrowRightOutlined></ArrowRightOutlined>}
        />
      </Flex>
    </MobileRoot>
  );
};

export default Home;

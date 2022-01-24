import { Text } from "../../components/Global/styled.components";
import Sidebar from "../../components/Sidebar";
import {
  BannerLeftCont,
  BannerRightCont,
  BannersContainer,
  ButtonsContainer,
  Root,
} from "./styled.component";
import { Colors } from "../../constants";
import Button from "../../components/Button";
import ArrowRightOutlined from "@ant-design/icons/ArrowRightOutlined";

const Home = () => {
  return (
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
  );
};

export default Home;

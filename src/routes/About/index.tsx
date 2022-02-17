import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Sidebar from "components/Sidebar";
import { Colors } from "../../constants";
import {
  AboutContentContainer,
  ContentWrapper,
  LeftContentContainer,
  RightContentContainer,
  RootContainer,
  StatBox,
  TextCenterContainer,
} from "./styled.components";

const About = () => {
  return (
    <RootContainer>
      <Sidebar />
      <ContentWrapper>
        <Flex
          id="header"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 26 }}
        >
          <Text fontSize={45} fontWeight={"bold"} capital>
            About
          </Text>
        </Flex>
        <AboutContentContainer>
          <LeftContentContainer>
            <TextCenterContainer>
              <Text color={Colors.base} fontSize={40} fontWeight="bold">
                Web & Mobile App Developer Based in Pakistan
              </Text>
            </TextCenterContainer>
            <Text fontSize={24} textAlign="justify" fontSizeMobile={20}>
              A passionate software engineer who loves to code and create
              wonders in computer science industry. I am graduated from Comsats
              University Islamabad in Computer Science securing Gold Medal with
              3.78 CGPA.
            </Text>
            <Text fontSize={24} textAlign="justify" fontSizeMobile={20}>
              I am currently working as a Full Stack Web Developer in Pakistan
              Airforce. I am honoured to serve my country through my coding
              skills.
            </Text>
          </LeftContentContainer>
          <RightContentContainer>
            <StatBox backgroundColor="#0DC340">
              <Text color="white" fontSize={30} fontWeight="bold">
                50+
              </Text>
              <Text color="white" fontSize={20}>
                Projects Done
              </Text>
            </StatBox>
            <StatBox backgroundColor="#F44D4D">
              <Text color="white" fontSize={30} fontWeight="bold">
                30+
              </Text>
              <Text color="white" fontSize={20}>
                Happy Clients
              </Text>
            </StatBox>
            <StatBox backgroundColor="#E29219">
              <Text color="white" fontSize={30} fontWeight="bold">
                500+
              </Text>
              <Text color="white" fontSize={20}>
                Cups of Coffee
              </Text>
            </StatBox>
            <StatBox backgroundColor="#526AEA">
              <Text color="white" fontSize={30} fontWeight="bold">
                2+
              </Text>
              <Text color="white" fontSize={20} textAlign="center">
                Years of Experience
              </Text>
            </StatBox>
          </RightContentContainer>
        </AboutContentContainer>
      </ContentWrapper>
      <InvisibleText>usama</InvisibleText>
    </RootContainer>
  );
};

export default About;

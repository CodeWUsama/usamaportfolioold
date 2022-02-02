import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Sidebar from "components/Sidebar";
import { Colors } from "../../constants";
import { StatBox } from "./styled.components";

const About = () => {
  return (
    <Flex height="100%" justifyContent="space-between">
      <Sidebar />
      <Flex flexDirection="column" height="100%">
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
        <Flex
          id="Content Container"
          justifyContent="space-around"
          height="100%"
        >
          <Flex
            id="Stats container"
            width="50%"
            flexWrap="wrap"
            justifyContent="space-between"
            gap={30}
            alignItems="center"
            height="100%"
            padding="5%"
          >
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
              <Text color="white" fontSize={20}>
                Years of Experience
              </Text>
            </StatBox>
          </Flex>
          <Flex
            id="Content"
            width="50%"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            gap={20}
          >
            <Text color={Colors.base} fontSize={40} fontWeight="bold">
              Web & Mobile App Developer Based in Pakistan
            </Text>
            <Text fontSize={24} textAlign="justify">
              A passionate software engineer who loves to code and create
              wonders in computer science industry.
            </Text>
            <Text fontSize={24} textAlign="justify">
              I am currently working as a Full Stack Web Developer in Pakistan
              Airforce. I am honoured to serve my country through my coding
              skills.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <InvisibleText>Usama is my name</InvisibleText>
    </Flex>
  );
};

export default About;

import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Sidebar from "components/Sidebar";
import { Colors } from "../../constants";
import {
  Circle,
  ContentContainer,
  RootContainer,
  VerticalBar,
} from "./styled.components";

const Experiences = () => {
  return (
    <RootContainer>
      <Sidebar />
      <Flex flexDirection="column" height="100%">
        <Flex
          id="header"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 26 }}
        >
          <Text fontSize={45} fontWeight={"bold"} capital>
            Experiences
          </Text>
        </Flex>
        <ContentContainer>
          <Flex
            id="leftCont"
            width="40%"
            height="100%"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Flex id="experienceContainer" width="max-content" gap={30}>
              <Flex
                id="timeline"
                height="600px"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Text>Oct 2021 - Present</Text>
                <Text>Feb 2019 - Present</Text>
                <Text>June 2021 - Sep 2021</Text>
              </Flex>
              <VerticalBar>
                <Circle />
                <Circle />
                <Circle />
              </VerticalBar>
              <Flex
                id="details"
                height="600px"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text
                  color={Colors.base}
                  fontWeight="bold"
                  fontSize={22}
                  capital
                >
                  Working Experiences
                </Text>
                <Flex width="300px" flexDirection="column">
                  <Text fontWeight="bold">Pakistan Airforce</Text>
                  <Text textAlign="justify">
                    Working as a full stack developer (MERN) in Pakistan
                    Airforce. Currently working on two major software solutions
                    for defense.
                  </Text>
                </Flex>
                <Flex width="300px" flexDirection="column">
                  <Text fontWeight="bold">Embrace-IT Pakistan</Text>
                  <Text textAlign="justify">
                    Worked as a React JS developer in one of Pakistan’s top
                    software firm. I got so much to learn while working under
                    top IT professionals.
                  </Text>
                </Flex>
                <Flex width="300px" flexDirection="column">
                  <Text fontWeight="bold">Freelance Web Developer</Text>
                  <Text textAlign="justify">
                    Offering web development services using React and Nodejs on
                    Fiverr.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            id="rightCont"
            width="40%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Flex id="educationContainer" width="max-content" gap={30}>
              <Flex
                id="timeline"
                height="600px"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Text>2017-2021</Text>
                <Text>2015-2017</Text>
                <Text>2013-2015</Text>
              </Flex>
              <VerticalBar>
                <Circle />
                <Circle />
                <Circle />
              </VerticalBar>
              <Flex
                id="details"
                height="600px"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text
                  color={Colors.base}
                  fontWeight="bold"
                  fontSize={22}
                  capital
                >
                  Education Information
                </Text>
                <Flex width="300px" flexDirection="column">
                  <Text fontWeight="bold">BS Computer Science</Text>
                  <Text textAlign="justify">
                    I am graduated from Comsats university Islamabad in computer
                    science securing Gold Medal in department with 3.78 CGPA.
                  </Text>
                </Flex>
                <Flex width="300px" flexDirection="column">
                  <Text fontWeight="bold">FSC Pre Engg</Text>
                  <Text textAlign="justify">
                    I did my intermediate from Army Public School and College
                    Sargodha Cantt with 85% marks in Federal Board.
                  </Text>
                </Flex>
                <Flex width="300px" flexDirection="column">
                  <Text fontWeight="bold">Metric</Text>
                  <Text textAlign="justify">
                    I did matric with Computer Science electives securing 86%
                    marks.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ContentContainer>
      </Flex>
      <InvisibleText>Usama is my name</InvisibleText>
    </RootContainer>
  );
};

export default Experiences;

import Button from "components/Button";
import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Sidebar from "components/Sidebar";
import {
  CenterPageContainer,
  ContentWrapper,
  GreyBubble,
  RootContainer,
  YellowBubble,
} from "./styled.components";
import CloudDownloadOutlined from "@ant-design/icons/CloudDownloadOutlined";

const Skills = () => {
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
            Skills
          </Text>
        </Flex>
        <CenterPageContainer id="fucking">
          <Flex
            justifyContent="space-around"
            flexWrap="wrap"
            gap={20}
            style={{ margin: "0px 10px" }}
          >
            <Flex width="max-content" flexDirection="column" gap={60}>
              <Flex flexDirection="column" alignItems="center">
                <Text
                  fontSize={26}
                  fontWeight={"bold"}
                  capital
                  style={{ marginBottom: 20 }}
                >
                  Web Technologies
                </Text>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>React JS</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>HTML 5</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Node JS</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Javascript</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Typescript</Text>
                  <Bubbles filled={4} />
                </Flex>
              </Flex>
              <Flex width="max-content" flexDirection="column">
                <Text
                  fontSize={26}
                  fontWeight={"bold"}
                  capital
                  style={{ marginBottom: 20 }}
                >
                  Mobile Applications
                </Text>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>React Native</Text>
                  <Bubbles filled={4} />
                </Flex>
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <Text
                  fontSize={26}
                  fontWeight={"bold"}
                  capital
                  style={{ marginBottom: 20 }}
                >
                  Databases
                </Text>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>MongoDB</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>MySQL</Text>
                  <Bubbles filled={3} />
                </Flex>
              </Flex>
            </Flex>
            <Flex width="max-content" flexDirection="column" gap={60}>
              <Flex flexDirection="column" alignItems="center">
                <Text
                  fontSize={26}
                  fontWeight={"bold"}
                  capital
                  style={{ marginBottom: 20 }}
                >
                  Others
                </Text>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Java</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>C++</Text>
                  <Bubbles filled={3} />
                </Flex>
              </Flex>
              <Flex width="max-content" flexDirection="column">
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Ant Design</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Material UI</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Styled Components</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Context API</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Redux</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>JQuery</Text>
                  <Bubbles filled={3} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Bootstrap</Text>
                  <Bubbles filled={4} />
                </Flex>
              </Flex>
              <Flex flexDirection="column">
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Docker</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Github</Text>
                  <Bubbles filled={5} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>Figma</Text>
                  <Bubbles filled={4} />
                </Flex>
                <Flex
                  gap={20}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize={20}>JIRA</Text>
                  <Bubbles filled={5} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent="center">
            <Button text="Download Resume" icon={<CloudDownloadOutlined />} />
          </Flex>
        </CenterPageContainer>
      </ContentWrapper>
      <InvisibleText>Usama is my name</InvisibleText>
    </RootContainer>
  );
};

const Bubbles: React.FC<BubblesProps> = ({ filled }) => {
  let empty = 5 - filled;

  let yellow = Array.from(Array(filled).keys());
  let grey = Array.from(Array(empty).keys());

  return (
    <Flex
      width="max-content"
      gap={5}
      alignItems="center"
      justifyContent="center"
    >
      {yellow.map((i) => {
        return <YellowBubble />;
      })}
      {grey.map((i) => {
        return <GreyBubble />;
      })}
    </Flex>
  );
};

interface BubblesProps {
  filled: number;
}

export default Skills;

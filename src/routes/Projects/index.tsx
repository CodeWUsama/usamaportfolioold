import { InvisibleText, Text } from "components/Global/styled.components";
import Sidebar from "components/Sidebar";
import {
  ContentContainer,
  ContentWrapper,
  RootContainer,
} from "./styled.components";
import { Carousel } from "antd";

const Projects = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    background: "#364d79",
  };

  return (
    <RootContainer>
      <Sidebar />
      <ContentWrapper>
        <Text fontSize={45} fontWeight={"bold"} capital>
          Projects
        </Text>
        <ContentContainer>
          <Carousel
            autoplay
            style={{ maxWidth: "800px", minWidth: "100px", width: 300 }}
          >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </ContentContainer>
      </ContentWrapper>
      <InvisibleText>usama is my name</InvisibleText>
    </RootContainer>
  );
};

export default Projects;

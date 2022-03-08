import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Sidebar from "components/Sidebar";
import { Colors } from "../../constants";
import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import {
  CarouselContainer,
  CarouselWrapper,
  ContentWrapper,
  ControlsContainer,
  ProjectContainer,
  ProjectDescriptionContainer,
  SControl,
} from "./styled.components";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  let projects = [1, 2, 3];
  const carouselRef: any = useRef(null);

  return (
    <CarouselContainer>
      <Sidebar />
      <ContentWrapper>
        <Flex
          id="header"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 26 }}
        >
          <Text fontSize={45} fontWeight={"bold"} capital>
            Projects
          </Text>
        </Flex>
        <CarouselWrapper>
          <Carousel
            ref={carouselRef}
            afterChange={(previousSlide, { currentSlide }) => {
              setCurrentSlide(currentSlide - 1);
            }}
            additionalTransfrom={0}
            arrows={false}
            // autoPlaySpeed={3000}
            centerMode={false}
            autoPlay={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <ProjectContainer>
              <img
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="loading.."
                style={{
                  display: "block",
                  height: "80%",
                  width: "45%",
                }}
              />
              <ProjectDescriptionContainer>
                <Text fontSize={20} fontWeight="bold" color={Colors.base}>
                  Workspace
                </Text>
                <Text textAlign="justify" fontSize={14}>
                  I have worked on the frontend of Embrace IT very own project
                  called Workspace. It is a company managment platform like
                  BambooHR in which companies can post jobs, interview
                  candidates either virtually through video calls or calling
                  them on site physcially and hire them. Companies can also
                  conduct their daily meetings like standups etc, manage people
                  information & finances on Workspace. I worked majorly on the
                  frontend of Jobs, Interviews & candidates modules using React
                  JS, typescript, Ant design, Html, Css & Javascript.
                </Text>
              </ProjectDescriptionContainer>
            </ProjectContainer>
            <ProjectContainer>
              <img
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="loading.."
                style={{
                  display: "block",
                  height: "80%",
                  margin: "auto",
                  width: "45%",
                }}
              />
              <ProjectDescriptionContainer>
                <h1>SPIED</h1>
                <p>
                  Lorem ipsum dolor sit amet. Rem alias dolore ab doloremque
                  galisum est quas dolorum cum numquam modi At molestiae maxime
                  qui veritatis eaque. Id sunt eligendi et dolorum placeat sit
                  maiores sint? Sit dolorem quam ut minima explicabo est sunt
                  illum. Ea exercitationem voluptatum non doloribus illum est
                  autem explicabo sed dicta eaque in cupiditate consectetur et
                  laborum officiis rem possimus quas? Et laborum velit et beatae
                  tenetur qui veritatis officiis est voluptatibus autem. Et
                  dolores harum qui tempore illum ab quas ipsum est corrupti
                  nihil. Est animi dolor et esse dolore et dolorum ratione quo
                  doloribus consequatur aut exercitationem sint et voluptatem
                  sapiente.
                </p>
              </ProjectDescriptionContainer>
            </ProjectContainer>
            <ProjectContainer>
              <img
                src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="loading.."
                style={{
                  display: "block",
                  height: "80%",
                  margin: "auto",
                  width: "45%",
                }}
              />
              <ProjectDescriptionContainer>
                <h1>SPIED</h1>
                <p>
                  Lorem ipsum dolor sit amet. Rem alias dolore ab doloremque
                  galisum est quas dolorum cum numquam modi At molestiae maxime
                  qui veritatis eaque. Id sunt eligendi et dolorum placeat sit
                  maiores sint? Sit dolorem quam ut minima explicabo est sunt
                  illum. Ea exercitationem voluptatum non doloribus illum est
                  autem explicabo sed dicta eaque in cupiditate consectetur et
                  laborum officiis rem possimus quas? Et laborum velit et beatae
                  tenetur qui veritatis officiis est voluptatibus autem. Et
                  dolores harum qui tempore illum ab quas ipsum est corrupti
                  nihil. Est animi dolor et esse dolore et dolorum ratione quo
                  doloribus consequatur aut exercitationem sint et voluptatem
                  sapiente.
                </p>
              </ProjectDescriptionContainer>
            </ProjectContainer>
          </Carousel>
          <ControlsContainer>
            {projects.map((p, i) => {
              return (
                <Control
                  key={i}
                  isActive={currentSlide === i + 1}
                  onClick={() => carouselRef.current.goToSlide(i + 2)}
                />
              );
            })}
          </ControlsContainer>
        </CarouselWrapper>
        <InvisibleText>usama</InvisibleText>
      </ContentWrapper>
      <InvisibleText>usama</InvisibleText>
    </CarouselContainer>
  );
};

const Control: React.FC<ControlProps> = ({ isActive, onClick }) => {
  return <SControl isActive={isActive} onClick={onClick} />;
};

interface ControlProps {
  isActive: boolean;
  onClick: () => {};
}

export default Projects;

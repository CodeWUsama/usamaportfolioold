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
                src="Images/workspace.png"
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
                src="/Images/website-creator.png"
                alt="loading.."
                style={{
                  display: "block",
                  height: "80%",
                  margin: "auto",
                  width: "45%",
                }}
              />
              <ProjectDescriptionContainer>
                <Text fontSize={20} fontWeight="bold" color={Colors.base}>
                  Website Creator Using Presets
                </Text>
                <Text textAlign="justify" fontSize={14}>
                  We developed a system where user can search through multiple
                  categories. After selecting the desired category, he is
                  provided with presets or templates related to that category
                  having the basic functions. For customizing, user can edit the
                  text, upload the banners/images, modify the styles of the
                  elements, remove the unnecessary components and add things
                  like products, services and research depending up the
                  category. Moreover, he can also use our subdomains to publish
                  his website on the live server. Unlike other systems he
                  doesn’t has to hire a professional instead he can manage
                  everything on his own because of easy interface. Our main
                  target was the layman audience with no professional knowledge
                  of IT.
                </Text>
              </ProjectDescriptionContainer>
            </ProjectContainer>
            <ProjectContainer>
              <img
                src="/Images/website-creator.png"
                alt="loading.."
                style={{
                  display: "block",
                  height: "80%",
                  margin: "auto",
                  width: "45%",
                }}
              />
              <ProjectDescriptionContainer>
                <Text fontSize={20} fontWeight="bold" color={Colors.base}>
                  Digital Wallet
                </Text>
                <Text textAlign="justify" fontSize={14}>
                  Digital Wallet is a cross platform mobile application which
                  revolutionize the idea of wallet management. This application
                  is designed in such a way that any layman having mobile phone
                  can shift its daily physical wallet tasks to digital wallet.
                  User can add the income or expense records into the wallet
                  through which digital wallet maintains the cash. User can see
                  the income/expense history, edit or delete them. User can also
                  view multiple statistics calculated based upon the records
                  such as total cash spent in a week, cash spent in a month.
                  These statistics are also visually presented in form of graphs
                  for better understanding of user. Main idea behind the
                  application is to make the wallet managment easy and more
                  optimized. This application is being developed using React
                  Native, TypeScript, Node JS & MongoDB Atlas.
                </Text>
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

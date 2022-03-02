import { Flex, InvisibleText, Text } from "components/Global/styled.components";
import Image from "components/Image";
import Sidebar from "components/Sidebar";
import {
  Column,
  ContentContainer,
  RootContainer,
  ServiceContainer,
  ServiceDescription,
} from "./styled.components";

const Services = () => {
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
            Services
          </Text>
        </Flex>
        <ContentContainer>
          <Column>
            <ServiceCard
              title="Web Development"
              description="If you are looking for a complete website including frontend, backend, database and deployment in modern technologies then i am a perfect guy for you. "
              icon="/Icons/web.png"
            />
            <ServiceCard
              title="Product Design"
              description="Web & mobile app design is one of my favorite thing to do. I am perfect fit to design the product UI for you with modern and minimal design."
              icon="/Icons/product.png"
            />
            <ServiceCard
              title="Product Development"
              description="If you are looking for a guy who can develop a web app as well as mobile app for your idea using emerging technologies, you can give me shot."
              icon="/Icons/app-development.png"
            />
          </Column>
          <Column>
            <ServiceCard
              title="Mobile App Development"
              description="Need to convert your idea into full stack mobile application that runs on multiple operating systems like Android, IOS? I can make it possible."
              icon="/Icons/mobile.png"
            />
            <ServiceCard
              title="Content Writing"
              description="If you are looking for words that sells, then you are at right place. I am expert in writing professional content for website that attract potentional readers. "
              icon="/Icons/content.png"
            />
            <ServiceCard
              title="Learning..."
              description="I am constantly learning new skills and technologies so i can serve the IT industry and be a better Computer Science professional"
              icon="/Icons/web.png"
            />
          </Column>
        </ContentContainer>
      </Flex>
      <InvisibleText>Usama is my name</InvisibleText>
    </RootContainer>
  );
};

export default Services;

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  description,
}) => {
  return (
    <ServiceContainer>
      <Flex width="max-content">
        <Image src={icon} height={50} width={50} />
      </Flex>
      <ServiceDescription>
        <Text fontSize={28} fontWeight="bold">
          {title}
        </Text>
        <Text textAlign="justify">{description}</Text>
      </ServiceDescription>
    </ServiceContainer>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

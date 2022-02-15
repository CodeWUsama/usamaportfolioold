import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Text } from "../Global/styled.components";
import Image from "../Image";
import {
  MobileNavBarContainer,
  MobileNavItemsContainer,
  OptionContainer,
  Root,
} from "./styled.components";
import { DataContext } from "./../../App";

const Sidebar = () => {
  const { width } = useContext(DataContext);
  const [enableNav, setEnableNav] = useState(false);

  return width >= 600 ? (
    <Root>
      <Option text="Home" path="/Icons/home.png" />
      <Option text="About" path="/Icons/about.png" />
      <Option text="Skills" path="/Icons/skills.png" />
      <Option text="Services" path="/Icons/services.png" />
      <Option text="Experiences" path="/Icons/experience.png" />
      <Option text="Projects" path="/Icons/projects.png" />
      <Option text="Contact" path="/Icons/contact.png" />
    </Root>
  ) : (
    <MobileNavBarContainer>
      <Flex justifyContent="space-between">
        <Text fontWeight="bold" color="white" fontSize={22}>
          Usama.
        </Text>
        <Image
          src={enableNav ? "/Icons/cross.png" : "/Icons/hamburger.png"}
          height={enableNav ? 20 : 30}
          width={enableNav ? 20 : 30}
          style={{ cursor: "pointer" }}
          onClick={() => setEnableNav(!enableNav)}
        />
      </Flex>
      {enableNav && (
        <MobileNavItemsContainer>
          <Flex flexDirection="column" gap={10} width="max-content">
            <MobileNavItem text="About" path="/Icons/about-white.png" />
            <MobileNavItem text="Skills" path="/Icons/skills-white.png" />
            <MobileNavItem text="Services" path="/Icons/services-white.png" />
          </Flex>
          <Flex flexDirection="column" gap={10} width="max-content">
            <MobileNavItem text="Experiences" path="/Icons/about-white.png" />
            <MobileNavItem text="Projects" path="/Icons/skills-white.png" />
            <MobileNavItem text="Contact" path="/Icons/services-white.png" />
          </Flex>
        </MobileNavItemsContainer>
      )}
    </MobileNavBarContainer>
  );
};

const Option: React.FC<OptionProps> = ({ text, path, isActive }) => {
  let navigate = useNavigate();
  let navigateTo = text.toLocaleLowerCase();
  if (text === "Home") navigateTo = "";

  let url = window.location.pathname;

  return (
    <OptionContainer
      isActive={url.substring(1, url.length) === navigateTo}
      onClick={() => navigate("/" + navigateTo)}
    >
      <Image src={path} height={50} width={50} />
      <Text>{text}</Text>
    </OptionContainer>
  );
};

const MobileNavItem: React.FC<OptionProps> = ({ text, path, isActive }) => {
  let navigate = useNavigate();
  let navigateTo = text.toLocaleLowerCase();
  if (text === "Home") navigateTo = "";

  return (
    <Flex
      gap={10}
      alignItems="center"
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/" + navigateTo)}
    >
      <Image src={path} height={20} width={20} />
      <Text color="white">{text}</Text>
    </Flex>
  );
};

interface OptionProps {
  text: string;
  path: string;
  isActive?: boolean;
}

export default Sidebar;

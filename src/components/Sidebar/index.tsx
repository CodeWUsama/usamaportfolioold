import { useNavigate } from "react-router-dom";
import { Text } from "../Global/styled.components";
import Image from "../Image";
import { OptionContainer, Root } from "./styled.components";

const Sidebar = () => {
  return (
    <Root>
      <Option text="Home" path="/Icons/home.png" />
      <Option text="About" path="/Icons/about.png" />
      <Option text="Skills" path="/Icons/skills.png" />
      <Option text="Services" path="/Icons/services.png" />
      <Option text="Experiences" path="/Icons/experience.png" />
      <Option text="Projects" path="/Icons/projects.png" />
      <Option text="Contact" path="/Icons/contact.png" />
    </Root>
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

interface OptionProps {
  text: string;
  path: string;
  isActive?: boolean;
}

export default Sidebar;

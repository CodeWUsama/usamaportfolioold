import { Button as AButton } from "antd";
import styled from "styled-components";

const Button: React.FC<ButtonProps> = ({ width, text, icon }) => {
  console.log(icon);
  return (
    <CustomizedButton type="primary" size="large" icon={icon}>
      {text}
    </CustomizedButton>
  );
};

const CustomizedButton = styled(AButton)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px 20px;
`;

interface ButtonProps {
  width?: number;
  text: string;
  icon?: React.ReactElement;
}

export default Button;

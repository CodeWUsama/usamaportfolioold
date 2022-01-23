import styled from "styled-components";

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize ?? "18px"};
  font-weight: ${(props) => props.fontWeight ?? "normal"};
`;

interface TextProps {
  fontSize?: number;
  fontWeight?: any;
}

import styled from "styled-components";

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize ?? 18}px;
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  color: ${(props) => props.color ?? "black"};
  text-transform: ${(props) => (props.capital ? "uppercase" : "none")};
  margin: 0;
`;

interface TextProps {
  fontSize?: number;
  fontWeight?: any;
  color?: string;
  capital?: boolean;
}

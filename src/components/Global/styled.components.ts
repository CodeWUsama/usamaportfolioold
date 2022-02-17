import styled from "styled-components";

export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize ?? 18}px;
  font-weight: ${(props) => props.fontWeight ?? "normal"};
  color: ${(props) => props.color ?? "black"};
  text-transform: ${(props) => (props.capital ? "uppercase" : "none")};
  margin: 0;
  text-align: ${(props) => props.textAlign};
  @media (max-width: 600px) {
    font-size: ${(props) => props.fontSizeMobile ?? props.fontSize ?? 18}px;
  }
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  gap: ${(props) => props.gap ?? 0}px;
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  align-items: ${(props) => props.alignItems ?? "flex-start"};
  width: ${(props) => props.width ?? "100%"};
  height: ${(props) => props.height};
  flex-wrap: ${(props) => props.flexWrap};
  padding: ${(props) => props.padding};
`;

export const InvisibleText = styled.p`
  visibility: hidden;
`;

interface TextProps {
  fontSize?: number;
  fontSizeMobile?: number;
  fontWeight?: any;
  color?: string;
  capital?: boolean;
  textAlign?: string;
}

interface FlexProps {
  flexDirection?: string;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  height?: string;
  width?: string;
  flexWrap?: string;
  padding?: string;
}

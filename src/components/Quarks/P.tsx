import styled from 'styled-components';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
} from 'styled-system';

interface Props extends ColorProps, FontSizeProps, LineHeightProps {}

export const P = styled.p<Props>`
  ${color};
  ${fontSize};
  ${lineHeight};
`;

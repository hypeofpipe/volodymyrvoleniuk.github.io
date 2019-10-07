import styled from 'styled-components';
import { color, ColorProps, fontSize, FontSizeProps } from 'styled-system';

export const P = styled.p<ColorProps & FontSizeProps>`
  ${color}
  ${fontSize}
`;

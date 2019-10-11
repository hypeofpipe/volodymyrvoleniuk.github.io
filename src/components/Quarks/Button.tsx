import styled from 'styled-components';
import {
  width,
  WidthProps,
  height,
  HeightProps,
  margin,
  MarginProps,
} from 'styled-system';

interface Props extends WidthProps, HeightProps, MarginProps {}

export const Button = styled.button<Props>`
  ${width};
  ${height};
  ${margin};
`;

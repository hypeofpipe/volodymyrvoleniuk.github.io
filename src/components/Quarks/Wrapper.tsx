import styled from 'styled-components';
import {
  position,
  PositionProps,
  color,
  ColorProps,
  zIndex,
  ZIndexProps,
  width,
  WidthProps,
  height,
  HeightProps,
  display,
  DisplayProps,
  flexDirection,
  FlexDirectionProps,
  PaddingProps,
  padding,
  BorderRadiusProps,
  borderRadius,
} from 'styled-system';

interface Props
  extends PositionProps,
    ColorProps,
    ZIndexProps,
    WidthProps,
    HeightProps,
    DisplayProps,
    FlexDirectionProps,
    PaddingProps,
    BorderRadiusProps {
  float?: string;
}

export const Wrapper = styled.div<Props>`
  ${display};
  ${flexDirection};
  ${position};
  ${color};
  ${zIndex};
  ${width};
  ${height};
  ${padding};
  ${borderRadius};
  ${({ float }) => (float ? `float: ${float};` : '')}
`;

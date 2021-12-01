import * as S from './container.styled';

import { FC } from "react";

interface Props {
}

const Container: FC<Props> = ({ children, ...props }) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;

import * as S from './page-heading.styled';

import { FC } from "react";

interface Props {
}

const PageHeading: FC<Props> = ({ children, ...props }) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;

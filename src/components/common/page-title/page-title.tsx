import * as S from './page-title.styled';

import { FC } from "react";

interface Props {
}

const PageTitle: FC<Props> = ({ children, ...props }) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;

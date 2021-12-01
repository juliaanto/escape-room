import * as S from './page-subtext.styled';

import { FC } from "react";

interface Props {
}

const PageSubtext: FC<Props> = ({ children, ...props }) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;

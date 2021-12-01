import * as S from './button.styled';

import { FC } from "react";

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Button: FC<Props> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;

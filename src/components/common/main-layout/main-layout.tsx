import { Footer, Header } from 'components/common/common';

import { FC } from "react";

interface Props {
}

const MainLayout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;

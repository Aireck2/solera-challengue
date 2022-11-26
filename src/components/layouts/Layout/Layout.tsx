import { Navbar } from "../Navbar";
import { LayoutStyled } from "./styles";

interface NavComposition {
  Navbar: React.FC;
}
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> & NavComposition = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

Layout.Navbar = Navbar;

export default Layout;

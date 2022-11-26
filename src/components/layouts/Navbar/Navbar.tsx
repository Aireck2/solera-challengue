import { NavbarStyled } from "./styles";

interface MenuItem {
  href: string;
  label: string;
}

const menuList: MenuItem[] = [
  { href: "/", label: "Todos" },
  { href: "/cars", label: "Autos" },
  { href: "/health", label: "Salud" },
];

export const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="logo-container">
        <img src="/vite.svg" alt="logo" />
        <h1>Servicios</h1>
      </div>
      <nav>
        <ul className="nav-list">
          {menuList.map(({ href, label }) => (
            <li key={href + label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </NavbarStyled>
  );
};

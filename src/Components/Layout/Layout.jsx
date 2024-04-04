// import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { StyledLink, NavStyled, HeaderStyled } from './Layout.styled';
import { Footer } from 'pages/Footer/Footer';
const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </NavStyled>
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <footer >
       <Footer/>
      </footer>
    </>
  );
};
export default Layout;

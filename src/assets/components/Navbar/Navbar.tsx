// Libraries
import styled from 'styled-components';


// Styled Components
const HorizontalNav = styled.nav`
background-color: #800000df;
padding: 2em;

display: flex;

justify-content:space-between;
align-items: center;
`

const LogoPlaceholder = styled.div`
min-width: 5em;
min-height: 5em;

border-radius: 50%;
background-color: red;
`

const BareUList = styled.ul`
display: flex;

justify-content: space-between;

list-style: none;
padding: 0;

& > * {
  margin: 1em
}
`

const MenuItem = styled.li`
`

const MenuLink = styled.a`
color: yellow;
text-decoration: none;

&:hover {
  filter: drop-shadow(0px 0px 5px yellow) hue-rotate(180deg);
  background-color: #0000001f;
}
`

function Navbar(): JSX.Element {
  return(
    <HorizontalNav>
      <LogoPlaceholder />
      <BareUList>
        <MenuItem><MenuLink href='#'>Home</MenuLink></MenuItem>
        <MenuItem><MenuLink href='#'>About</MenuLink></MenuItem>
        <MenuItem><MenuLink href='#'>Contact</MenuLink></MenuItem>
      </BareUList>
    </HorizontalNav>
  );
};

export default Navbar;
import { h } from 'preact';
import { HeaderStyled, LinkStyled } from './header.styled';

const Header = () => (
	<HeaderStyled>
		<div>Check Your Mac</div>
		<nav>
			<LinkStyled href="/">Home</LinkStyled>
			<LinkStyled href="/profile">Me</LinkStyled>
			<LinkStyled href="/profile/john">John</LinkStyled>
		</nav>
	</HeaderStyled>
);

export default Header;

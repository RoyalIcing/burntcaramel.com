import { h } from 'preact';
import { Link } from 'preact-router/match';
import Block from '../block';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<Block>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/projects">Projects</Link>
				{/* <Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link> */}
			</nav>
		</Block>
	</header>
);

export default Header;

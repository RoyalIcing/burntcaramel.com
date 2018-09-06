import { h } from 'preact';
import Icon from 'async!../../components/icon';
import Block from '../../components/block';
import Picture from '../../components/picture';
import style from './style';
import insignaImage from './insignia.png';

function LinkItem({
	children, href, iconName
}) {
	return (
		<li>
			<a href={href} class={style.linkItem__a}>
				<h3><Icon name={iconName} /> <span class={style.linkItem__text}>{children}</span></h3>
			</a>
		</li>
	)
}

function Home() {
	return (
		<main class={style.home}>
				<h1>Patrick George Wyndham Smith · Developer & Designer</h1>
			<Block>
				<p>I am a digital product developer & designer from Melbourne, Australia, focused on creating apps for passionate professionals, both for clients and through my own projects.</p>

				<p>Completing a Bachelor of Multimedia Design at Swinburne University in 2009, I then freelanced for companies large & small. In 2011 I co-founded adventure sports video creator and curator InfinityList, where I was the primary developer, and worked on UI/UX design, strategy & monetisation. From 2016 to beginning of 2018, I was lead educator at Coder Academy where I taught 3 six-month bootcamps.</p>

				<p>I now work at <a href="https://cogent.co/">Cogent</a>, a digital product consultancy. I also lead a range of open source projects, using Golang, Elm, JavaScript & Swift, under the organisation <a href="https://github.com/RoyalIcing">@RoyalIcing</a>.</p>

				<nav class={style.linksNav}>
					<ul class={style.links}>
						<LinkItem
							href="https://www.dropbox.com/s/mqv201sbql1692o/Patrick%20Smith%20Resume.pdf"
							iconName='paperclip'
						>
							Resume
						</LinkItem>
						<LinkItem
							href="https://github.com/BurntCaramel"
							iconName='github'
						>
							GitHub
						</LinkItem>
						<LinkItem
							href="https://twitter.com/concreteniche"
							iconName='twitter'
						>
							Twitter
						</LinkItem>
						<LinkItem
							href="https://medium.com/@concreteniche"
							iconName='medium'
						>
							Medium
						</LinkItem>
						<LinkItem
							href="https://instagram.com/burntcaramel/"
							iconName='instagram'
						>
							Instagram
						</LinkItem>
						<LinkItem
							href="https://dribbble.com/PatrickSmith"
							iconName='dribbble'
						>
							Dribbble
						</LinkItem>
						<LinkItem
							href="https://www.slideshare.net/PatrickSmith55"
							iconName='slideshare'
						>
							SlideShare
						</LinkItem>
						<LinkItem
							href="https://pinterest.com/pgwsmith/pins/"
							iconName='pinterest'
						>
							Pinterest
						</LinkItem>
						<LinkItem
							href="https://stackoverflow.com/users/652615/vine"
							iconName='stack-overflow'
						>
							Stack Overflow
						</LinkItem>
						<LinkItem
							href="https://codepen.io/burntcaramel/pens/public/"
							iconName='codepen'
						>
							CodePen
						</LinkItem>
						<LinkItem
							href="https://www.behance.net/burntcaramel"
							iconName='behance'
						>
							Behance
						</LinkItem>
					</ul>
				</nav>

				<div class={style.insignia}>
					<Picture imageURL={insignaImage} description='' width={280} />
				</div>

			</Block>
		</main>
	);
}

export default Home;

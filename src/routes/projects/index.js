import { h } from 'preact';
import Icon from 'async!../../components/icon';
import Block from '../../components/block';
import Picture from '../../components/picture';
import style from './style';
import hoverlyticsImage from './assets/hoverlytics.jpg'
import infinityListImage from './assets/infinitylist2.jpg'
import infinityListImage2 from './assets/infinitylist3.jpg'
import blikImage from './assets/blik.png'
import wilsanaImage from './assets/wilsana.jpg'

function Project({
	name, renderPicture, points
}) {
	return (
		<div class={style.project}>
			<h2>{name}</h2>
			{renderPicture()}
			<ul class={style.project__points}>
				{points.map((point) => <li><span class={style.project__point__inner}>{point}</span></li>)}
			</ul>
		</div>
	)
}

function Projects() {
	return (
		<main class={style.projects}>
			<Block>
				<h1>Previous Projects</h1>

				<Project
					name='Hoverlytics'
					points={`
Panel that overlaid website with audience analytics for the exact page your were visiting.
Installed as a Chrome extension.
Developed using JavaScript, Backbone, D3, jQuery.
Used the Google Analytics API.
UI design using Photoshop.
Solo project.
`.trim().split('\n')}
					renderPicture={
						() => <Picture imageURL={hoverlyticsImage} description='Screenshot of Hoverlytics, which let you see audience analytics directly on your site' />
					}
				/>

				<Project
					name='InfinityList'
					points={`
Video production house with clients such as Mercedes Benz, Luna Park, Casio, and Bounce.
Received 400K visits and 1.4M page views per month at its peak.
Had an average time on site of over 30 minutes.
Allowed visitors to favourite videos, and also up-vote skills, cinematography, editing, and music.
Featured multiple novels ways of watching videos, from an infinity carousel, through to popular lists of the week and month
Developed using PHP, MySQL, Memcache, jQuery, HTML5, CSS3.
UI design using paper, Photoshop.
Used survey to get continual user feedback.
Collaborative project, solo on development.
`.trim().split('\n')}
					renderPicture={
						() => <Picture imageURL={infinityListImage} description='Home page of InfinityList' />
					}
				/>

				<Project
					name='Blik'
					points={`
Utility app for Mac for organising your projects and opening their files quickly.
Used animation and a clean design to make file organisation exciting.
Launched on the Mac App Store.
Developed using Objective-C, AppKit, Core Animation, Auto Layout, Grand Central Dispatch.
UI design using paper, Keynote.
Solo project.
`.trim().split('\n')}
					renderPicture={
						() => <Picture imageURL={blikImage} description='Screenshot of Blik, a utility app I made for Mac' width={450} />
					}
				/>

				<Project
					name='Wilsana'
					points={`
Website for two villas in Bali, through which bookings could be made.
Developed using PHP, HTML5, CSS3
UI design using Photoshop.
Solo project.
`.trim().split('\n')}
					renderPicture={
						() => <Picture imageURL={wilsanaImage} description='Website for Wilsana, two villas in Bali' />
					}
				/>

			</Block>
		</main>
	);
}

export default Projects;

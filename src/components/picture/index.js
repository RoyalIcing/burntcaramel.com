import { h } from 'preact';
import style from './style';

function Picture({
	description, imageURL, width
}) {
	return (
		<figure class={style.picture}>
			<img src={imageURL} alt={description} width={width} class={style.picture__img} />
		</figure>
	);
}

export default Picture;

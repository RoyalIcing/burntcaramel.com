import { h } from 'preact';
import style from './style';

const Block = ({children}) => (
	<div class={style.block} children={children} />
);

export default Block;

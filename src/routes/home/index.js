import { h } from 'preact';
import { CheckScreen } from './home.styled';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>Проверь свой Мак</h1>
		<p>Здесь я собрал все инструменты с помощью которых ты сможешь проверить исправность своего Макинтоша. Будь то покупка б/у устройства или просто плановая проверка. Хорошего настроения и чтобы твой Мак всегда исправно работал!</p>
		<CheckScreen>Проверка экрана</CheckScreen>
	</div>
);

export default Home;

import { h } from 'preact';
import { FullScreen } from './styled';

const CheckScreen = () => {
    const onToggle = () => {
        const elem = document.getElementById('fullscreen');
        const rfs = document.body.requestFullscreen ||
            document.body.webkitRequestFullScreen ||
            document.body.mozRequestFullScreen ||
            document.body.msRequestFullscreen;
        rfs.call(elem);
    };

    return (
        <>
            <div onClick={onToggle}>check screen</div>
            <FullScreen id="fullscreen">
                <div></div>
            </FullScreen>
        </>
    )
}

export default CheckScreen;

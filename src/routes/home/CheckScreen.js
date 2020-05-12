import { h } from 'preact';
import { useState } from 'preact/hooks';
import { FullScreen } from './styled';

const colors = ['#fff', '#000', '#f44336', '#4caf50', '#2196f3']

const CheckScreen = () => {
    const [colorIdx, setColorIdx] = useState(0);
    const onToggle = () => {
        const elem = document.getElementById('fullscreen');
        const rfs = document.body.requestFullscreen ||
            document.body.webkitRequestFullScreen ||
            document.body.mozRequestFullScreen ||
            document.body.msRequestFullscreen;
        rfs.call(elem);
    };

    const setNextColor = () => {
        if (colorIdx + 1 == colors.length) {
            setColorIdx(0)
        } else {
            setColorIdx(colorIdx + 1)
        }
    }

    return (
        <>
            <div onClick={onToggle}>check screen</div>
            <FullScreen id="fullscreen" bgColor={colors[colorIdx]}>
                <div onClick={setNextColor}></div>
            </FullScreen>
        </>
    )
}

export default CheckScreen;

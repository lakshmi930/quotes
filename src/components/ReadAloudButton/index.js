import { useEffect, useState } from "react";
import { Button } from "./ReadAlound.styled";

export const ReadAloudButton = ({ text }) => {
    const [utterance, setUtterance] = useState(null);
    useEffect(() => {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        const voices = synth.getVoices();
        utterThis.voice = voices.filter(function(voice) { return voice.name === 'Google US English'; })[0]

        setUtterance(utterThis);

        return () => {
          synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        synth.speak(utterance);
    };

    return (
        <Button onClick={handlePlay}>
            <img src="play.png" alt="Play" />
        </Button>
    );
};

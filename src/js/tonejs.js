import * as Tone from "tone.js";

document.querySelector(".star-wrapper").addEventListener("click", async () => {
    await Tone.start();

    const reverb = new Tone.Reverb({
        decay: 5,
        wet: 1
    }).toDestination();
    const synth = new Tone.Synth().connect(reverb);

    const notes = ["E4", "G#4", "B4", "D5", "E5"];
    let t = 0;
    notes.forEach(note => {
        synth.triggerAttackRelease(note, "8n", Tone.now() + t);
        t += 0.2;
    });

});

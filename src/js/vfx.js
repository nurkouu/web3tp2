import { VFX } from "vfx-js";

const img1 = document.querySelector('#tylerImg');

const vfxT = new VFX();
vfxT.add(img1, {
    shader: "glitch",
    overflow: 400
});

const img2 = document.querySelector('#nurlikaImg');

const vfxN = new VFX();
vfxN.add(img2, {
    shader: "glitch",
    overflow: 100
});

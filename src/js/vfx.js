import { VFX } from "vfx-js";

const vfx = new VFX();


const el = document.getElementById("titleVFX");

vfx.add(el, {
    shader,
    uniforms: {
        scroll: () => window.scrollY / window.innerHeight,
    }
});

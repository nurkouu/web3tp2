import Zdog from "zzz";

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    resize: true
});

const circ = new Zdog.Ellipse({
    addTo: illo,
    diameter: 120,
    stroke: 15,
    color: "rgb(251, 248, 95)",
    scale: 1
});

const pulseShape = new Zdog.Shape({
    addTo: illo,
    stroke: 50,
    color: "rgba(125, 121, 32, 0.5)",
    scale: 1
});


let scale = 1;
let growing = true;

function animate() {

    illo.rotate.y += 0.05;
    illo.rotate.x += 0.02;


    if (growing) {
        scale += 0.01;
        if (scale >= 1.5) growing = false;
    } else {
        scale -= 0.01;
        if (scale <= 0.7) growing = true;
    }


    circ.scale = scale;
    pulseShape.scale = scale;


    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();

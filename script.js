const layers = document.querySelectorAll(".layer");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (event) => {

    targetX = (event.clientX / window.innerWidth - 0.5) * 2;
    targetY = (event.clientY / window.innerHeight - 0.5) * 2;

});

function animate() {

    // suavizado
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    layers.forEach(layer => {

        const depth = Number(layer.dataset.depth);

        const x = currentX * depth;
        const y = currentY * depth;

        layer.style.transform =
            `translate3d(${-x}px, ${-y}px, 0)`;

    });

    requestAnimationFrame(animate);
}

animate();
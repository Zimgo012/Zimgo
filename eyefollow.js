document.addEventListener('mousemove', (e) => {

    // console.log(e);

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const outer = document.getElementById('outer');
    const rekt  = outer.getBoundingClientRect();

    const outerX = rekt.left + rekt.width / 2;
    const outerY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX,mouseY,outerX, outerY);
    // console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye-socket');

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${180+ angleDeg}deg)`;
    })


})



//functions
function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg;
}

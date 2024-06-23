const circle = document.getElementById('circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animate() {
    // 원의 위치를 부드럽게 이동시키기 위해 각도를 계산합니다.
    const dx = mouseX - circleX;
    const dy = mouseY - circleY;
    const angle = Math.atan2(dy, dx);
    
    // 원의 이동 거리를 조절합니다.
    const distance = Math.sqrt(dx * dx + dy * dy);
    const easingFactor = 0.1; // 부드러운 움직임을 위한 이동 비율
    circleX += distance * easingFactor * Math.cos(angle);
    circleY += distance * easingFactor * Math.sin(angle);
    
    // 원의 위치를 업데이트합니다.
    circle.style.left = circleX + 'px';
    circle.style.top = circleY + 'px';

    requestAnimationFrame(animate);
}

animate();

// 페이지 스크롤에 따라 원의 위치를 업데이트합니다.
window.addEventListener('scroll', function() {
    circleY = mouseY + window.scrollY;
});
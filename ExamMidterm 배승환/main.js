


function initializeCanvas() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // 캔버스 크기 설정
    canvas.width = 480;
    canvas.height = 800;

    // (0, 0)을 캔버스의 중앙으로 설정
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // 별 그리기
    drawStar(ctx, 0, 0, 5, 100, 40);

    const x = Math.random() * (canvas.width - 100) - (canvas.width / 2 - 50);
    const y = Math.random() * (canvas.height - 100) - (canvas.height / 2 - 50);
    drawHeart(ctx, x, y, 20);
}

// 별 그리기 함수
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = '#FFC90E';
    ctx.fill();

    ctx.strokeStyle = 'black'; // 태두리 색상 설정
        ctx.lineWidth = 1; // 태두리 두께 설정
        ctx.stroke();
}

function drawHeart(ctx, x, y, size) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 180 * 0);
    ctx.scale(size, size);
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0.75, -0.75, 1.75, -0.75, 1.75, 0);
    ctx.bezierCurveTo(1.75, 1, 0, 2.25, 0, 3.25);
    ctx.bezierCurveTo(0, 2.25, -1.75, 1, -1.75, 0);
    ctx.bezierCurveTo(-1.75, -0.75, -0.75, -0.75, 0, 0);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.restore();
}


//drawStar(ctx, 0, 0, 5, 100, 40);


document.addEventListener('DOMContentLoaded', initializeCanvas);

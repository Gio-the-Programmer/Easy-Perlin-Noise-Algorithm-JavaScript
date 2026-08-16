var pixelValues = PerlinNoise(true);
// alert(pixelValues);

const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");
var widthMap = canvas.width;

for (var i = 0; i < pixelValues.length; i++) {
  var intensity = Math.abs(pixelValues[i]);
  ctx.fillStyle = `rgba(255, 255, 255, ${intensity})`;
  ctx.fillRect(i % widthMap, Math.floor(i / widthMap), 1, 1);
}

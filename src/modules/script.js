const img = document.createElement('img');
document.body.append(img);

//URL(relativePath, moduleUrl)
const imgUrl = new URL ('../media/ork.jpg', import.meta.url);
console.log(import.meta.url)
img.src = imgUrl.href;
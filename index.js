
const mergeImages = require('merge-images');
mergeImages(['./img/img1.jpg' , './img/img2.jpg'])
.then((output)=>{
	console.log('done');
}).catch((err)=>{
	console.log(err);
});


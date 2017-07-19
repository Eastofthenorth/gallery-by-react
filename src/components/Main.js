require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


// var imageDatas = require('../data/imageDatas.json');

//使用自执行函数，将图片名信息转化为图片URL路径信息
// function getImageUrl(imageDatasArr){
// 	for(var i=0;i<imageDatasArr.length;i++){
// 		var singleImageData = imageDatasArr[i];
// 		singleImageData.imageURL = require('../images/'+singleImageData.filename);
// 		imageDatasArr[i] = singleImageData;
// 	}
// 	return imageDatasArr;
// }
// imageDatas = getImageUrl(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec">
      		kkk
      	</section>
      	<nav className="controller-nav">

      	</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

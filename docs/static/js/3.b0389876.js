(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(e,t,o){},222:function(e,t,o){},400:function(e,t,o){"use strict";var n=o(221);o.n(n).a},401:function(e,t,o){"use strict";var n=o(222);o.n(n).a},404:function(e,t,o){"use strict";o.r(t);var n=o(399),a=o.n(n);function i(e,t){var o=e.file,n=e.target,a=new FileReader;a.onload=function(e){var a=new Image;a.crossOrigin="anonymous",a.onload=function(){console.log("origin",a.width,a.height);var e=n.size,i=n.width,s=n.orientation,r=.92-o.size/1024/1024/e;console.log("ratio",r);var l=function(e,t){for(var o=e.split(","),n=o[0].match(/:(.*?);/)[1],a=atob(o[1]),i=a.length,s=new Uint8Array(i);i--;)s[i]=a.charCodeAt(i);var r=new Blob([s],{type:n});return new window.File([r],t,{type:n})}(function(e,t){var o=document.createElement("canvas"),n=o.getContext("2d");console.log(e.width,e.height);var a=e.width,i=e.height,s=1,r=(t.orientation,t.width),l=t.ratio,c=t.type;return a>r&&(s=r/a),o.width=a*s,o.height=i*s,n.drawImage(e,0,0,o.width,o.height),o.toDataURL(c,l)}(a,{orientation:s,width:i,ratio:r,type:o.type}),o.name);console.group(),console.log("orientation",s),console.log(l,l.size/1024/1024),console.log(o,o.size/1024/1024),console.log(l.size/o.size),console.groupEnd(),t(l)},a.src=e.target.result},a.readAsDataURL(o)}var s={name:"index",data:function(){return{fileName:"",compressedImagesrc:""}},mounted:function(){var e=this;document.getElementById("upload").addEventListener("change",(function(t){var o=t.target.files[0];console.log(o),e.fileName=o.name,e.getEXIFInfo(o,(function(t){i({file:o,target:{size:30,width:1920,orientation:t}},(function(t){var o,n,a;o=t,n=function(t){e.compressedImagesrc=t},(a=new FileReader).onload=function(e){n(e.target.result)},a.readAsDataURL(o)}))}))}))},methods:{getEXIFInfo:function(e,t){a.a.getData(e,(function(){a.a.getAllTags(this);var e=a.a.getTag(this,"Make"),o=a.a.getTag(this,"Model"),n=a.a.getTag(this,"Orientation");console.group(),console.log("make",e),console.log("model",o),console.log("orientation",n),console.groupEnd(),t(n)}))},loadImg:function(){var e=document.querySelector("img");e.complete&&a.a.getData(e,(function(){a.a.getAllTags(this);var e=a.a.getTag(this,"Make"),t=a.a.getTag(this,"Model"),o=a.a.getTag(this,"Orientation");console.group(),console.log("compressed"),console.log("make",e),console.log("model",t),console.log("orientation",o),console.groupEnd()}))},downloadCompressedImage:function(){!function(e,t){var o=document.createElement("a");o.href=e,o.download=t;var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(n)}(this.compressedImagesrc,this.fileName)}}},r=(o(400),o(401),o(1)),l=Object(r.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("label",{staticClass:"btn-upload",attrs:{for:"upload"}},[e._v("点击上传图片")]),e._v(" "),o("input",{staticClass:"hidden",attrs:{type:"file",id:"upload"}}),e._v(" "),o("div",{staticClass:"divider"}),e._v(" "),o("el-row",[o("el-col",{staticClass:"container-flexible",attrs:{span:24}},[o("el-image",{ref:"showcase",staticClass:"uploaded-image demo-image__error",attrs:{fit:"contain",src:e.compressedImagesrc},on:{load:e.loadImg}},[o("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[o("i",{staticClass:"el-icon-picture-outline"})])]),e._v(" "),e.compressedImagesrc?o("el-button",{staticClass:"btn-download__cimg",attrs:{type:"text"},on:{click:e.downloadCompressedImage}},[e._v("下载压缩后的图片")]):e._e()],1)],1)],1)}),[],!1,null,"648c3e12",null);t.default=l.exports}}]);
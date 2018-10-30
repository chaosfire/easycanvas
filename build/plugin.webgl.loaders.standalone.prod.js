!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(97)},8:function(e,t,r){"use strict";var a=r(25),n=r(73),i=r(72),o=r(69);e.exports={FileLoader:a.FileLoader,LoaderUtils:n.LoaderUtils,Interpolant:i.Interpolant,CompressedTextureLoader:o.CompressedTextureLoader,RGB_S3TC_DXT1_Format:33776,RGBA_S3TC_DXT1_Format:33777,RGBA_S3TC_DXT3_Format:33778,RGBA_S3TC_DXT5_Format:33779}},25:function(e,t,r){"use strict";function a(e){this.manager=void 0!==e?e:o.DefaultLoadingManager}Object.defineProperty(t,"__esModule",{value:!0}),t.FileLoader=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=r(68),o=r(26),s={};n(a.prototype,{load:function(e,t,r,a){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var n=this,o=i.Cache.get(e);if(void 0!==o)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;if(void 0!==s[e])return void s[e].push({onLoad:t,onProgress:r,onError:a});var u=/^data:(.*?)(;base64)?,(.*)$/,f=e.match(u);if(f){var d=f[1],l=!!f[2],h=f[3];h=window.decodeURIComponent(h),l&&(h=window.atob(h));try{var p,c=(this.responseType||"").toLowerCase();switch(c){case"arraybuffer":case"blob":for(var A=new Uint8Array(h.length),g=0;g<h.length;g++)A[g]=h.charCodeAt(g);p="blob"===c?new Blob([A.buffer],{type:d}):A.buffer;break;case"document":var m=new DOMParser;p=m.parseFromString(h,d);break;case"json":p=JSON.parse(h);break;default:p=h}window.setTimeout(function(){t&&t(p),n.manager.itemEnd(e)},0)}catch(t){window.setTimeout(function(){a&&a(t),n.manager.itemEnd(e),n.manager.itemError(e)},0)}}else{s[e]=[],s[e].push({onLoad:t,onProgress:r,onError:a});var v=new XMLHttpRequest;v.open("GET",e,!0),v.addEventListener("load",function(t){var r=this.response;i.Cache.add(e,r);var a=s[e];if(delete s[e],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var o=0,u=a.length;o<u;o++){var f=a[o];f.onLoad&&f.onLoad(r)}n.manager.itemEnd(e)}else{for(var o=0,u=a.length;o<u;o++){var f=a[o];f.onError&&f.onError(t)}n.manager.itemEnd(e),n.manager.itemError(e)}},!1),v.addEventListener("progress",function(t){for(var r=s[e],a=0,n=r.length;a<n;a++){var i=r[a];i.onProgress&&i.onProgress(t)}},!1),v.addEventListener("error",function(t){var r=s[e];delete s[e];for(var a=0,i=r.length;a<i;a++){var o=r[a];o.onError&&o.onError(t)}n.manager.itemEnd(e),n.manager.itemError(e)},!1),void 0!==this.responseType&&(v.responseType=this.responseType),void 0!==this.withCredentials&&(v.withCredentials=this.withCredentials),v.overrideMimeType&&v.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(var y in this.requestHeader)v.setRequestHeader(y,this.requestHeader[y]);v.send(null)}return n.manager.itemStart(e),v},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}}),t.FileLoader=a},26:function(e,t){"use strict";function r(e,t,r){var a=this,n=!1,i=0,o=0,s=void 0;this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(e){o++,n===!1&&void 0!==a.onStart&&a.onStart(e,i,o),n=!0},this.itemEnd=function(e){i++,void 0!==a.onProgress&&a.onProgress(e,i,o),i===o&&(n=!1,void 0!==a.onLoad&&a.onLoad())},this.itemError=function(e){void 0!==a.onError&&a.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this}}Object.defineProperty(t,"__esModule",{value:!0});var a=new r;t.DefaultLoadingManager=a,t.LoadingManager=r},68:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};t.Cache=r},69:function(e,t,r){"use strict";function a(e){this.manager=void 0!==e?e:o.DefaultLoadingManager,this._parser=null}Object.defineProperty(t,"__esModule",{value:!0}),t.CompressedTextureLoader=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=r(25),o=r(26),s=1006;n(a.prototype,{load:function(e,t,r,a){function n(n){d.load(e[n],function(e){var r=o._parser(e,!0);u[n]={width:r.width,height:r.height,format:r.format,mipmaps:r.mipmaps},l+=1,6===l&&(1===r.mipmapCount&&(f.minFilter=s),f.format=r.format,f.needsUpdate=!0,t&&t(f))},r,a)}var o=this,u=[],f={};f.image=u;var d=new i.FileLoader(this.manager);if(d.setPath(this.path),d.setResponseType("arraybuffer"),Array.isArray(e))for(var l=0,h=0,p=e.length;h<p;++h)n(h);else d.load(e,function(e){var r=o._parser(e,!0);if(r.isCubemap)for(var a=r.mipmaps.length/r.mipmapCount,n=0;n<a;n++){u[n]={mipmaps:[]};for(var i=0;i<r.mipmapCount;i++)u[n].mipmaps.push(r.mipmaps[n*r.mipmapCount+i]),u[n].format=r.format,u[n].width=r.width,u[n].height=r.height}else f.image.width=r.width,f.image.height=r.height,f.mipmaps=r.mipmaps;1===r.mipmapCount&&(f.minFilter=s),f.format=r.format,f.needsUpdate=!0,t&&t(f)},r,a);return f},setPath:function(e){return this.path=e,this}}),t.CompressedTextureLoader=a},70:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=r(8),i=a(n);e.exports=i.default.DDSLoader=function(){this._parser=i.default.DDSLoader.parse},i.default.DDSLoader.prototype=Object.create(i.default.CompressedTextureLoader.prototype),i.default.DDSLoader.prototype.constructor=i.default.DDSLoader,i.default.DDSLoader.parse=function(e,t){function r(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function a(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}function n(e,t,r,a){for(var n=r*a*4,i=new Uint8Array(e,t,n),o=new Uint8Array(n),s=0,u=0,f=0;f<a;f++)for(var d=0;d<r;d++){var l=i[u];u++;var h=i[u];u++;var p=i[u];u++;var c=i[u];u++,o[s]=p,s++,o[s]=h,s++,o[s]=l,s++,o[s]=c,s++}return o}var o={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},s=542327876,u=131072,f=512,d=1024,l=2048,h=4096,p=8192,c=16384,A=32768,g=4,m=r("DXT1"),v=r("DXT3"),y=r("DXT5"),b=r("ETC1"),C=31,x=0,E=1,w=2,T=3,B=4,L=7,I=20,R=21,U=22,_=23,M=24,D=25,S=26,k=28,F=new Int32Array(e,0,C);if(F[x]!==s)return console.error("THREE.DDSLoader.parse: Invalid magic number in DDS header."),o;if(!F[I]&g)return console.error("THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code."),o;var O,P=F[R],Q=!1;switch(P){case m:O=8,o.format=i.default.RGB_S3TC_DXT1_Format;break;case v:O=16,o.format=i.default.RGBA_S3TC_DXT3_Format;break;case y:O=16,o.format=i.default.RGBA_S3TC_DXT5_Format;break;case b:O=8,o.format=i.default.RGB_ETC1_Format;break;default:if(!(32===F[U]&&16711680&F[_]&&65280&F[M]&&255&F[D]&&4278190080&F[S]))return console.error("THREE.DDSLoader.parse: Unsupported FourCC code ",a(P)),o;Q=!0,O=64,o.format=i.default.RGBAFormat}o.mipmapCount=1,F[w]&u&&t!==!1&&(o.mipmapCount=Math.max(1,F[L]));var V=F[k];if(o.isCubemap=!!(V&f),o.isCubemap&&(!(V&d)||!(V&l)||!(V&h)||!(V&p)||!(V&c)||!(V&A)))return console.error("THREE.DDSLoader.parse: Incomplete cubemap faces"),o;o.width=F[B],o.height=F[T];for(var N=F[E]+4,X=o.isCubemap?6:1,j=0;j<X;j++)for(var z=o.width,G=o.height,H=0;H<o.mipmapCount;H++){if(Q)var Y=n(e,N,z,G),K=Y.length;else var K=Math.max(4,z)/4*Math.max(4,G)/4*O,Y=new Uint8Array(e,N,K);var W={data:Y,width:z,height:G};o.mipmaps.push(W),N+=K,z=Math.max(z>>1,1),G=Math.max(G>>1,1)}return o}},71:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=r(8),o=a(i);e.exports=function(){function e(){}function t(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=void 0===t||t}function r(){}function a(e){var t="Kaydara FBX Binary  \0";return e.byteLength>=t.length&&t===u(e,0,t.length)}function i(e){function t(t){var r=e[t-1];return e=e.slice(a+t),a++,r}for(var r=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],a=0,n=0;n<r.length;++n){var i=t(1);if(i===r[n])return!1}return!0}function s(e){var t=/FBXVersion: (\d+)/,r=e.match(t);if(r){var a=parseInt(r[1]);return a}throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function u(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=e.byteLength),o.default.LoaderUtils.decodeText(new Uint8Array(e,t,r))}return o.default.FBXLoader=function(e){this.manager=void 0!==e?e:o.default.DefaultLoadingManager},n(o.default.FBXLoader.prototype,{load:function(e,t,r,a){var n=this,i=o.default.LoaderUtils.extractUrlBase(e),s=new o.default.FileLoader(this.manager);s.setResponseType("arraybuffer"),s.load(e,function(e){var r=n.parse(e,i);t(r)},r,a)},parse:function(t,r){var n;if(a(t))n=(new e).parse(t);else{var o=u(t);if(!i(o))throw new Error("THREE.FBXLoader: Unknown format.");if(s(o)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+s(o));n=(new TextParser).parse(o)}return n}}),n(e.prototype,{parse:function(e){var a=new t(e);a.skip(23);var n=a.getUint32();console.log("THREE.FBXLoader: FBX binary version: "+n);for(var i=new r;!this.endOfContent(a);){var o=this.parseNode(a,n);null!==o&&i.add(o.name,o)}return i},endOfContent:function(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()},parseNode:function(e,t){var r={},a=t>=7500?e.getUint64():e.getUint32(),n=t>=7500?e.getUint64():e.getUint32(),i=(t>=7500?e.getUint64():e.getUint32(),e.getUint8()),o=e.getString(i);if(0===a)return null;for(var s=[],u=0;u<n;u++)s.push(this.parseProperty(e));var f=s.length>0?s[0]:"",d=s.length>1?s[1]:"",l=s.length>2?s[2]:"";for(r.singleProperty=1===n&&e.getOffset()===a;a>e.getOffset();){var h=this.parseNode(e,t);null!==h&&this.parseSubNode(o,r,h)}return r.propertyList=s,"number"==typeof f&&(r.id=f),""!==d&&(r.attrName=d),""!==l&&(r.attrType=l),""!==o&&(r.name=o),r},parseSubNode:function(e,t,r){if(r.singleProperty===!0){var a=r.propertyList[0];Array.isArray(a)?(t[r.name]=r,r.a=a):t[r.name]=a}else if("Connections"===e&&"C"===r.name){var n=[];r.propertyList.forEach(function(e,t){0!==t&&n.push(e)}),void 0===t.connections&&(t.connections=[]),t.connections.push(n)}else if("Properties70"===r.name){var i=Object.keys(r);i.forEach(function(e){t[e]=r[e]})}else if("Properties70"===e&&"P"===r.name){var o,s=r.propertyList[0],u=r.propertyList[1],f=r.propertyList[2],d=r.propertyList[3];0===s.indexOf("Lcl ")&&(s=s.replace("Lcl ","Lcl_")),0===u.indexOf("Lcl ")&&(u=u.replace("Lcl ","Lcl_")),o="Color"===u||"ColorRGB"===u||"Vector"===u||"Vector3D"===u||0===u.indexOf("Lcl_")?[r.propertyList[4],r.propertyList[5],r.propertyList[6]]:r.propertyList[4],t[s]={type:u,type2:f,flag:d,value:o}}else void 0===t[r.name]?"number"==typeof r.id?(t[r.name]={},t[r.name][r.id]=r):t[r.name]=r:"PoseNode"===r.name?(Array.isArray(t[r.name])||(t[r.name]=[t[r.name]]),t[r.name].push(r)):void 0===t[r.name][r.id]&&(t[r.name][r.id]=r)},parseProperty:function(e){var r=e.getString(1);switch(r){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":var a=e.getUint32();return e.getArrayBuffer(a);case"S":var a=e.getUint32();return e.getString(a);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var n=e.getUint32(),i=e.getUint32(),o=e.getUint32();if(0===i)switch(r){case"b":case"c":return e.getBooleanArray(n);case"d":return e.getFloat64Array(n);case"f":return e.getFloat32Array(n);case"i":return e.getInt32Array(n);case"l":return e.getInt64Array(n)}void 0===window.Zlib&&console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var s=new Zlib.Inflate(new Uint8Array(e.getArrayBuffer(o))),u=new t(s.decompress().buffer);switch(r){case"b":case"c":return u.getBooleanArray(n);case"d":return u.getFloat64Array(n);case"f":return u.getFloat32Array(n);case"i":return u.getInt32Array(n);case"l":return u.getInt64Array(n)}default:throw new Error("THREE.FBXLoader: Unknown property type "+r)}}}),n(t.prototype,{getOffset:function(){return this.offset},size:function(){return this.dv.buffer.byteLength},skip:function(e){this.offset+=e},getBoolean:function(){return 1===(1&this.getUint8())},getBooleanArray:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getBoolean());return t},getUint8:function(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e},getInt16:function(){var e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e},getInt32:function(){var e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e},getInt32Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getInt32());return t},getUint32:function(){var e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e},getInt64:function(){var e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),2147483648&t?(t=4294967295&~t,e=4294967295&~e,4294967295===e&&(t=t+1&4294967295),e=e+1&4294967295,-(4294967296*t+e)):4294967296*t+e},getInt64Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getInt64());return t},getUint64:function(){var e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),4294967296*t+e},getFloat32:function(){var e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e},getFloat32Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getFloat32());return t},getFloat64:function(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e},getFloat64Array:function(e){for(var t=[],r=0;r<e;r++)t.push(this.getFloat64());return t},getArrayBuffer:function(e){var t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t},getString:function(e){for(var t=new Uint8Array(e),r=0;r<e;r++)t[r]=this.getUint8();var a=t.indexOf(0);return a>=0&&(t=t.slice(0,a)),o.default.LoaderUtils.decodeText(t)}}),n(r.prototype,{add:function(e,t){this[e]=t}}),o.default.FBXLoader}()},72:function(e,t){"use strict";function r(e,t,r,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==a?a:new t.constructor(r),this.sampleValues=t,this.valueSize=r}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};a(r.prototype,{evaluate:function(e){var t=this.parameterPositions,r=this._cachedIndex,a=t[r],n=t[r-1];e:{t:{var i;r:{a:if(!(e<a)){for(var o=r+2;;){if(void 0===a){if(e<n)break a;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,n)}if(r===o)break;if(n=a,a=t[++r],e<a)break t}i=t.length;break r}{if(e>=n)break e;var s=t[1];e<s&&(r=2,n=s);for(var o=r-2;;){if(void 0===n)return this._cachedIndex=0,this.beforeStart_(0,e,a);if(r===o)break;if(a=n,n=t[--r-1],e>=n)break t}i=r,r=0}}for(;r<i;){var u=r+i>>>1;e<t[u]?i=u:r=u+1}if(a=t[r],n=t[r-1],void 0===n)return this._cachedIndex=0,this.beforeStart_(0,e,a);if(void 0===a)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,n,e)}this._cachedIndex=r,this.intervalChanged_(r,n,a)}return this.interpolate_(r,n,e,a)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=e*a,i=0;i!==a;++i)t[i]=r[n+i];return t},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}}),a(r.prototype,{beforeStart_:r.prototype.copySampleValue_,afterEnd_:r.prototype.copySampleValue_}),t.Interpolant=r},73:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={decodeText:function(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);for(var t="",r=0,a=e.length;r<a;r++)t+=String.fromCharCode(e[r]);return decodeURIComponent(escape(t))},extractUrlBase:function(e){var t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};t.LoaderUtils=r},74:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=r(8),o=a(i);e.exports=function(){function e(e){this.manager=void 0!==e?e:o.default.DefaultLoadingManager,this.loader=new o.default.FileLoader(this.manager),this.parser=null,this.meshBuilder=new t(this.manager),this.animationBuilder=new i}function t(e){this.geometryBuilder=new r,this.materialBuilder=new a(e)}function r(){}function a(e){this.manager=e,this.tgaLoader=null}function i(){}function s(e,t,r,a,n){o.default.Interpolant.call(this,e,t,r,a),this.interpolationParams=n}e.prototype={constructor:e,crossOrigin:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},load:function(e,t,r,a){var n=(this._getParser(),this.meshBuilder.setCrossOrigin(this.crossOrigin)),i=o.default.LoaderUtils.extractUrlBase(e),s=this._extractExtension(e).toLowerCase();return"pmd"!==s&&"pmx"!==s?void(a&&a(new Error("THREE.MMDLoader: Unknown model file extension ."+s+"."))):void this["pmd"===s?"loadPMD":"loadPMX"](e,function(e){t(n.build(e,i,r,a))},r,a)},loadAnimation:function(e,t,r,a,n){var i=this.animationBuilder;this.loadVMD(e,function(e){r(t.isCamera?i.buildCameraAnimation(e):i.build(e,t))},a,n)},loadWithAnimation:function(e,t,r,a,n){var i=this;this.load(e,function(e){i.loadAnimation(t,e,function(t){r({mesh:e,animation:t})},a,n)},a,n)},loadPMD:function(e,t,r,a){var n=this._getParser();this.loader.setMimeType(void 0).setResponseType("arraybuffer").load(e,function(e){t(n.parsePmd(e,!0))},r,a)},loadPMX:function(e,t,r,a){var n=this._getParser();this.loader.setMimeType(void 0).setResponseType("arraybuffer").load(e,function(e){t(n.parsePmx(e,!0))},r,a)},loadVMD:function(e,t,r,a){var n=Array.isArray(e)?e:[e],i=[],o=n.length,s=this._getParser();this.loader.setMimeType(void 0).setResponseType("arraybuffer");for(var u=0,f=n.length;u<f;u++)this.loader.load(n[u],function(e){i.push(s.parseVmd(e,!0)),i.length===o&&t(s.mergeVmds(i))},r,a)},loadVPD:function(e,t,r,a,n,i){i=i||{};var o=this._getParser();this.loader.setMimeType(t?void 0:"text/plain; charset=shift_jis").setResponseType("text").load(e,function(e){r(o.parseVpd(e,!0))},a,n)},_extractExtension:function(e){var t=e.lastIndexOf(".");return t<0?"":e.slice(t+1)},_getParser:function(){if(null===this.parser){if("undefined"==typeof MMDParser)throw new Error("THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser");this.parser=new MMDParser.Parser}return this.parser}};var u=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="];return t.prototype={constructor:t,crossOrigin:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},build:function(e,t,r,a){var n=this.geometryBuilder.build(e),i=this.materialBuilder.setCrossOrigin(this.crossOrigin).setTexturePath(t).build(e,n,r,a),s=new o.default.SkinnedMesh(n,i);return s}},r.prototype={constructor:r,build:function(e){function t(t,r,a){for(var n=0;n<r.elementCount;n++){var i,o=r.elements[n];i="pmd"===e.metadata.format?e.morphs[0].elements[o.index].index:o.index,t.array[3*i+0]+=o.position[0]*a,t.array[3*i+1]+=o.position[1]*a,t.array[3*i+2]+=o.position[2]*a}}for(var r=[],a=[],n=[],i=[],s=[],u=[],f=[],d=[],l=[],h=[],p=[],c=[],A=[],g=[],m=0,v={},y=0;y<e.metadata.vertexCount;y++){for(var b=e.vertices[y],C=0,x=b.position.length;C<x;C++)r.push(b.position[C]);for(var C=0,x=b.normal.length;C<x;C++)n.push(b.normal[C]);for(var C=0,x=b.uv.length;C<x;C++)a.push(b.uv[C]);for(var C=0;C<4;C++)f.push(b.skinIndices.length-1>=C?b.skinIndices[C]:0);for(var C=0;C<4;C++)d.push(b.skinWeights.length-1>=C?b.skinWeights[C]:0)}for(var y=0;y<e.metadata.faceCount;y++)for(var E=e.faces[y],C=0,x=E.indices.length;C<x;C++)i.push(E.indices[C]);for(var y=0;y<e.metadata.materialCount;y++){var w=e.materials[y];s.push({offset:3*m,count:3*w.faceCount}),m+=w.faceCount}for(var y=0;y<e.metadata.rigidBodyCount;y++){var T=e.rigidBodies[y],B=v[T.boneIndex];B=void 0===B?T.type:Math.max(T.type,B),v[T.boneIndex]=B}for(var y=0;y<e.metadata.boneCount;y++){var L=e.bones[y],I={parent:L.parentIndex,name:L.name,pos:L.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:void 0!==v[y]?v[y]:-1};I.parent!==-1&&(I.pos[0]-=e.bones[I.parent].position[0],I.pos[1]-=e.bones[I.parent].position[1],I.pos[2]-=e.bones[I.parent].position[2]),u.push(I)}if("pmd"===e.metadata.format)for(var y=0;y<e.metadata.ikCount;y++){for(var R=e.iks[y],U={target:R.target,effector:R.effector,iteration:R.iteration,maxAngle:4*R.maxAngle,links:[]},C=0,x=R.links.length;C<x;C++){var _={};_.index=R.links[C].index,_.enabled=!0,e.bones[_.index].name.indexOf("ひざ")>=0&&(_.limitation=new o.default.Vector3(1,0,0)),U.links.push(_)}p.push(U)}else for(var y=0;y<e.metadata.boneCount;y++){var R=e.bones[y].ik;if(void 0!==R){for(var U={target:y,effector:R.effector,iteration:R.iteration,maxAngle:R.maxAngle,links:[]},C=0,x=R.links.length;C<x;C++){var _={};if(_.index=R.links[C].index,_.enabled=!0,1===R.links[C].angleLimitation){var M=R.links[C].lowerLimitationAngle,D=R.links[C].upperLimitationAngle,S=-D[0],k=-D[1];D[0]=-M[0],D[1]=-M[1],M[0]=S,M[1]=k,_.rotationMin=(new o.default.Vector3).fromArray(M),_.rotationMax=(new o.default.Vector3).fromArray(D)}U.links.push(_)}p.push(U)}}if("pmx"===e.metadata.format){for(var y=0;y<e.metadata.boneCount;y++){var L=e.bones[y],F=L.grant;if(void 0!==F){var U={index:y,parentIndex:F.parentIndex,ratio:F.ratio,isLocal:F.isLocal,affectRotation:F.affectRotation,affectPosition:F.affectPosition,transformationClass:L.transformationClass};c.push(U)}}c.sort(function(e,t){return e.transformationClass-t.transformationClass})}for(var y=0;y<e.metadata.morphCount;y++){var O=e.morphs[y],P={name:O.name},Q=new o.default.Float32BufferAttribute(3*e.metadata.vertexCount,3);Q.name=O.name;for(var C=0;C<3*e.metadata.vertexCount;C++)Q.array[C]=r[C];if("pmd"===e.metadata.format)0!==y&&t(Q,O,1);else if(0===O.type)for(var C=0;C<O.elementCount;C++){var V=e.morphs[O.elements[C].index],N=O.elements[C].ratio;1===V.type&&t(Q,V,N)}else 1===O.type&&t(Q,O,1);l.push(P),h.push(Q)}for(var y=0;y<e.metadata.rigidBodyCount;y++){var X=e.rigidBodies[y],P={};for(var j in X)P[j]=X[j];if("pmx"===e.metadata.format&&P.boneIndex!==-1){var I=e.bones[P.boneIndex];P.position[0]-=I.position[0],P.position[1]-=I.position[1],P.position[2]-=I.position[2]}A.push(P)}for(var y=0;y<e.metadata.constraintCount;y++){var z=e.constraints[y],P={};for(var j in z)P[j]=z[j];var G=A[P.rigidBodyIndex1],H=A[P.rigidBodyIndex2];0!==G.type&&2===H.type&&G.boneIndex!==-1&&H.boneIndex!==-1&&e.bones[H.boneIndex].parentIndex===G.boneIndex&&(H.type=1),g.push(P)}var Y=new o.default.BufferGeometry;Y.addAttribute("position",new o.default.Float32BufferAttribute(r,3)),Y.addAttribute("normal",new o.default.Float32BufferAttribute(n,3)),Y.addAttribute("uv",new o.default.Float32BufferAttribute(a,2)),Y.addAttribute("skinIndex",new o.default.Uint16BufferAttribute(f,4)),Y.addAttribute("skinWeight",new o.default.Float32BufferAttribute(d,4)),Y.setIndex(i);for(var y=0,K=s.length;y<K;y++)Y.addGroup(s[y].offset,s[y].count,y);return Y.bones=u,Y.morphTargets=l,Y.morphAttributes.position=h,Y.userData.MMD={bones:u,iks:p,grants:c,rigidBodies:A,constraints:g,format:e.metadata.format},Y.computeBoundingSphere(),Y}},a.prototype={constructor:a,crossOrigin:void 0,texturePath:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},setTexturePath:function(e){return this.texturePath=e,this},build:function(e,t,r,a){var n=[],i={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(var s=0;s<e.metadata.materialCount;s++){var u=e.materials[s],f={userData:{}};if(void 0!==u.name&&(f.name=u.name),f.color=(new o.default.Color).fromArray(u.diffuse),f.opacity=u.diffuse[3],f.specular=(new o.default.Color).fromArray(u.specular),f.emissive=(new o.default.Color).fromArray(u.ambient),f.shininess=Math.max(u.shininess,1e-4),f.transparent=1!==f.opacity,f.skinning=t.bones.length>0,f.morphTargets=t.morphTargets.length>0,f.lights=!0,f.fog=!0,f.blending=o.default.CustomBlending,f.blendSrc=o.default.SrcAlphaFactor,f.blendDst=o.default.OneMinusSrcAlphaFactor,f.blendSrcAlpha=o.default.SrcAlphaFactor,f.blendDstAlpha=o.default.DstAlphaFactor,f.side="pmx"===e.metadata.format&&1===(1&u.flag)?o.default.DoubleSide:1===f.opacity?o.default.FrontSide:o.default.DoubleSide,"pmd"===e.metadata.format){if(u.fileName){var d=u.fileName,l=d.split("*");if(f.map=this._loadTexture(l[0],i),l.length>1){var h=l[1].slice(-4).toLowerCase();f.envMap=this._loadTexture(l[1],i,{sphericalReflectionMapping:!0}),f.combine=".sph"===h?o.default.MultiplyOperation:o.default.AddOperation}}var p=u.toonIndex===-1?"toon00.bmp":e.toonTextures[u.toonIndex].fileName;f.gradientMap=this._loadTexture(p,i,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(p)}),f.userData.outlineParameters={thickness:1===u.edgeFlag?.003:0,color:[0,0,0],alpha:1,visible:1===u.edgeFlag}}else{u.textureIndex!==-1&&(f.map=this._loadTexture(e.textures[u.textureIndex],i)),u.envTextureIndex===-1||1!==u.envFlag&&2!=u.envFlag||(f.envMap=this._loadTexture(e.textures[u.envTextureIndex],i,{sphericalReflectionMapping:!0}),f.combine=1===u.envFlag?o.default.MultiplyOperation:o.default.AddOperation);var p,c;u.toonIndex===-1||0!==u.toonFlag?(p="toon"+("0"+(u.toonIndex+1)).slice(-2)+".bmp",c=!0):(p=e.textures[u.toonIndex],c=!1),f.gradientMap=this._loadTexture(p,i,{isToonTexture:!0,isDefaultToonTexture:c}),f.userData.outlineParameters={thickness:u.edgeSize/300,color:u.edgeColor.slice(0,3),alpha:u.edgeColor[3],visible:0!==(16&u.flag)&&u.edgeSize>0}}void 0!==f.map&&(f.transparent||this._checkImageTransparency(f.map,t,s),f.emissive.multiplyScalar(.2)),n.push(new o.default.MeshToonMaterial(f))}if("pmx"===e.metadata.format)for(var A=function(e,t){for(var r=0,a=e.length;r<a;r++){var n=e[r];if(n.index!==-1){var i=t[n.index];i.opacity!==n.diffuse[3]&&(i.transparent=!0)}}},s=0,g=e.morphs.length;s<g;s++){var m=e.morphs[s],v=m.elements;if(0===m.type)for(var y=0,b=v.length;y<b;y++){var C=e.morphs[v[y].index];8===C.type&&A(C.elements,n)}else 8===m.type&&A(v,n)}return n},_getTGALoader:function(){if(null===this.tgaLoader){if(void 0===o.default.TGALoader)throw new Error("THREE.MMDLoader: Import THREE.TGALoader");this.tgaLoader=new o.default.TGALoader(this.manager)}return this.tgaLoader},_isDefaultToonTexture:function(e){return 10===e.length&&/toon(10|0[0-9])\.bmp/.test(e)},_loadTexture:function(e,t,r,a,n){r=r||{};var i,s=this;if(r.isDefaultToonTexture===!0){var f;try{f=parseInt(e.match("toon([0-9]{2}).bmp$")[1])}catch(t){console.warn("THREE.MMDLoader: "+e+" seems like a not right default texture path. Using toon00.bmp instead."),f=0}i=u[f]}else i=this.texturePath+e;if(void 0!==t[i])return t[i];var d=o.default.Loader.Handlers.get(i);null===d&&(d=".tga"===e.slice(-4).toLowerCase()?this._getTGALoader():this.textureLoader);var l=d.load(i,function(e){r.isToonTexture===!0&&(e.image=s._getRotatedImage(e.image)),e.flipY=!1,e.wrapS=o.default.RepeatWrapping,e.wrapT=o.default.RepeatWrapping;for(var t=0;t<l.readyCallbacks.length;t++)l.readyCallbacks[t](l);delete l.readyCallbacks},a,n);return r.sphericalReflectionMapping===!0&&(l.mapping=o.default.SphericalReflectionMapping),l.readyCallbacks=[],t[i]=l,l},_getRotatedImage:function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),a=e.width,n=e.height;return t.width=a,t.height=n,r.clearRect(0,0,a,n),r.translate(a/2,n/2),r.rotate(.5*Math.PI),r.translate(-a/2,-n/2),r.drawImage(e,0,0),r.getImageData(0,0,a,n)},_checkImageTransparency:function(e,t,r){e.readyCallbacks.push(function(a){function n(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,t.width,t.height)}function i(e,t,r){var a=e.width,n=e.height,i=e.data,s=253;if(i.length/(a*n)!==4)return!1;for(var u=0;u<r.length;u+=3){for(var f={x:0,y:0},d=0;d<3;d++){var l=r[3*u+d],h={x:t[2*l+0],y:t[2*l+1]};if(o(e,h)<s)return!0;f.x+=h.x,f.y+=h.y}if(f.x/=3,f.y/=3,o(e,f)<s)return!0}return!1}function o(e,t){var r=e.width,a=e.height,n=Math.round(t.x*r)%r,i=Math.round(t.y*a)%a;n<0&&(n+=r),i<0&&(i+=a);var o=i*r+n;return e.data[4*o+3]}var s=void 0!==a.image.data?a.image:n(a.image),u=t.groups[r];i(s,t.attributes.uv.array,t.index.array.slice(u.start,u.start+u.count))&&(e.transparent=!0);
})}},i.prototype={constructor:i,build:function(e,t){for(var r=this.buildSkeletalAnimation(e,t).tracks,a=this.buildMorphAnimation(e,t).tracks,n=0,i=a.length;n<i;n++)r.push(a[n]);return new o.default.AnimationClip("",-1,r)},buildSkeletalAnimation:function(e,t){function r(e,t,r){e.push(t[r+0]/127),e.push(t[r+8]/127),e.push(t[r+4]/127),e.push(t[r+12]/127)}for(var a=[],n={},i=t.skeleton.bones,s={},u=0,f=i.length;u<f;u++)s[i[u].name]=!0;for(var u=0;u<e.metadata.motionCount;u++){var d=e.motions[u],l=d.boneName;void 0!==s[l]&&(n[l]=n[l]||[],n[l].push(d))}for(var h in n){var p=n[h];p.sort(function(e,t){return e.frameNum-t.frameNum});for(var c=[],A=[],g=[],m=[],v=[],y=t.skeleton.getBoneByName(h).position.toArray(),u=0,f=p.length;u<f;u++){var b=p[u].frameNum/30,C=p[u].position,x=p[u].rotation,E=p[u].interpolation;c.push(b);for(var w=0;w<3;w++)A.push(y[w]+C[w]);for(var w=0;w<4;w++)g.push(x[w]);for(var w=0;w<3;w++)r(m,E,w);r(v,E,3)}var T=".bones["+h+"]";a.push(this._createTrack(T+".position",o.default.VectorKeyframeTrack,c,A,m)),a.push(this._createTrack(T+".quaternion",o.default.QuaternionKeyframeTrack,c,g,v))}return new o.default.AnimationClip("",-1,a)},buildMorphAnimation:function(e,t){for(var r=[],a={},n=t.morphTargetDictionary,i=0;i<e.metadata.morphCount;i++){var s=e.morphs[i],u=s.morphName;void 0!==n[u]&&(a[u]=a[u]||[],a[u].push(s))}for(var f in a){var d=a[f];d.sort(function(e,t){return e.frameNum-t.frameNum});for(var l=[],h=[],i=0,p=d.length;i<p;i++)l.push(d[i].frameNum/30),h.push(d[i].weight);r.push(new o.default.NumberKeyframeTrack(".morphTargetInfluences["+n[f]+"]",l,h))}return new o.default.AnimationClip("",-1,r)},buildCameraAnimation:function(e){function t(e,t){e.push(t.x),e.push(t.y),e.push(t.z)}function r(e,t){e.push(t.x),e.push(t.y),e.push(t.z),e.push(t.w)}function a(e,t,r){e.push(t[4*r+0]/127),e.push(t[4*r+1]/127),e.push(t[4*r+2]/127),e.push(t[4*r+3]/127)}var n=[],i=void 0===e.cameras?[]:e.cameras.slice();i.sort(function(e,t){return e.frameNum-t.frameNum});for(var s=[],u=[],f=[],d=[],l=[],h=[],p=[],c=[],A=[],g=new o.default.Quaternion,m=new o.default.Euler,v=new o.default.Vector3,y=new o.default.Vector3,b=0,C=i.length;b<C;b++){var x=i[b],E=x.frameNum/30,w=x.position,T=x.rotation,B=x.distance,L=x.fov,I=x.interpolation;s.push(E),v.set(0,0,-B),y.set(w[0],w[1],w[2]),m.set(-T[0],-T[1],-T[2]),g.setFromEuler(m),v.add(y),v.applyQuaternion(g),t(u,y),r(f,g),t(d,v),l.push(L);for(var R=0;R<3;R++)a(h,I,R);a(p,I,3);for(var R=0;R<3;R++)a(c,I,4);a(A,I,5)}var n=[];return n.push(this._createTrack("target.position",o.default.VectorKeyframeTrack,s,u,h)),n.push(this._createTrack(".quaternion",o.default.QuaternionKeyframeTrack,s,f,p)),n.push(this._createTrack(".position",o.default.VectorKeyframeTrack,s,d,c)),n.push(this._createTrack(".fov",o.default.NumberKeyframeTrack,s,l,A)),new o.default.AnimationClip("",-1,n)},_createTrack:function(e,t,r,a,n){if(r.length>2){r=r.slice(),a=a.slice(),n=n.slice();for(var i=a.length/r.length,o=n.length/r.length,u=1,f=2,d=r.length;f<d;f++){for(var l=0;l<i;l++)if(a[u*i+l]!==a[(u-1)*i+l]||a[u*i+l]!==a[f*i+l]){u++;break}if(f>u){r[u]=r[f];for(var l=0;l<i;l++)a[u*i+l]=a[f*i+l];for(var l=0;l<o;l++)n[u*o+l]=n[f*o+l]}}r.length=u+1,a.length=(u+1)*i,n.length=(u+1)*o}var h=new t(e,r,a);return h.createInterpolant=function(e){return new s(this.times,this.values,this.getValueSize(),e,new Float32Array(n))},h}},s.prototype=n(Object.create(o.default.Interpolant.prototype),{constructor:s,interpolate_:function(e,t,r,a){var n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,u=this.interpolationParams,f=e*s,d=f-s,l=a-t<.05?0:(r-t)/(a-t);if(4===s){var h=u[4*e+0],p=u[4*e+1],c=u[4*e+2],A=u[4*e+3],g=this._calculate(h,p,c,A,l);o.default.Quaternion.slerpFlat(n,0,i,d,i,f,g)}else if(3===s)for(var m=0;m!==s;++m){var h=u[12*e+4*m+0],p=u[12*e+4*m+1],c=u[12*e+4*m+2],A=u[12*e+4*m+3],g=this._calculate(h,p,c,A,l);n[m]=i[d+m]*(1-g)+i[f+m]*g}else{var h=u[4*e+0],p=u[4*e+1],c=u[4*e+2],A=u[4*e+3],g=this._calculate(h,p,c,A,l);n[0]=i[d]*(1-g)+i[f]*g}return n},_calculate:function(e,t,r,a,n){for(var i,o,s,u=.5,f=u,d=1-f,l=15,h=1e-5,p=Math,c=0;c<l;c++){i=3*d*d*f,o=3*d*f*f,s=f*f*f;var A=i*e+o*t+s-n;if(p.abs(A)<h)break;u/=2,f+=A<0?u:-u,d=1-f}return i*r+o*a+s}}),e}()},97:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=r(74),i=a(n),o=r(71),s=a(o),u=r(70),f=a(u),d="undefined"!=typeof window,l={MMDLoader:function(e,t,r,a){var n=new i.default;n.load(e,function(e){t(e)},r,a)},FBXLoader:function(e,t,r,a){var n=new s.default;n.load(e,function(e){for(var r in e.Objects.Geometry){var a=e.Objects.Geometry[r];a.PolygonVertexIndex.a=a.PolygonVertexIndex.a.map(function(e,t){return e<0?-e-1:e})}t(e)},r,a)},DDSLoader:f.default},h={onCreate:function(e){if(this.$isWebgl){var t=this.$gl;this.ddsLoader=function(e,r){if(e){var a=t.createTexture(),n=(t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),{width:0,height:0}),i=new f.default;return i.load(e,function(e){t.bindTexture(t.TEXTURE_2D,a),t.compressedTexImage2D(t.TEXTURE_2D,0,e.format,e.image.width,e.image.height,0,e.mipmaps[0].data),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),n.width=e.image.width,n.height=e.image.height,n.texture=a,r&&r(e)},null,null),n}}}}};d&&window.Easycanvas?(Easycanvas.loaders=l,Easycanvas.use(h)):e.exports=l}})});
(function(){var _1=20;var _2=0;var _3=null;var _4=null;var _5=0;var _6=location.hash;var _7="#_";var _8=[];var _9=0;var _a;window.iui={showPage:function(_b,_c){if(_4){_4.removeAttribute("selected");_4=null;}if(_b.className.indexOf("dialog")!=-1){showDialog(_b);}else{var _d=_3;_3=_b;if(_d){setTimeout(slidePages,0,_d,_b,_c);}else{updatePage(_b,_d);}}},showPageById:function(_e){var _f=$(_e);if(_f){var _10=_8.indexOf(_e);var _11=_10!=-1;if(_11){_8.splice(_10,_8.length);}iui.showPage(_f,_11);}},showPageByHref:function(_12,_13,_14,_15,cb){var req=new XMLHttpRequest();req.onerror=function(){if(cb){cb(false);}};req.onreadystatechange=function(){if(req.readyState==4){if(_15){replaceElementWithSource(_15,req.responseText);}else{var _18=document.createElement("div");_18.innerHTML=req.responseText;iui.insertPages(_18.childNodes);}if(cb){setTimeout(cb,1000,true);}}};if(_13){req.open(_14||"GET",_12,true);req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");req.setRequestHeader("Content-Length",_13.length);req.send(_13.join("&"));}else{req.open(_14||"GET",_12,true);req.send(null);}},insertPages:function(_19){var _1a;for(var i=0;i<_19.length;++i){var _1c=_19[i];if(_1c.nodeType==1){if(!_1c.id){_1c.id="__"+(++_9)+"__";}var _1d=$(_1c.id);if(_1d){_1d.parentNode.replaceChild(_1c,_1d);}else{document.body.appendChild(_1c);}if(_1c.getAttribute("selected")=="true"||!_1a){_1a=_1c;}--i;}}if(_1a){iui.showPage(_1a);}},getSelectedPage:function(){for(var _1e=document.body.firstChild;_1e;_1e=_1e.nextSibling){if(_1e.nodeType==1&&_1e.getAttribute("selected")=="true"){return _1e;}}}};addEventListener("load",function(_1f){var _20=iui.getSelectedPage();if(_20){iui.showPage(_20);}setTimeout(preloadImages,0);setTimeout(checkOrientAndLocation,0);_a=setInterval(checkOrientAndLocation,300);},false);addEventListener("click",function(_21){var _22=findParent(_21.target,"a");if(_22){function unselect(){_22.removeAttribute("selected");}if(_22.href&&_22.hash&&_22.hash!="#"){_22.setAttribute("selected","true");iui.showPage($(_22.hash.substr(1)));setTimeout(unselect,500);}else{if(_22==$("backButton")){history.back();}else{if(_22.getAttribute("type")=="submit"){submitForm(findParent(_22,"form"));}else{if(_22.target=="_replace"){_22.setAttribute("selected","progress");iui.showPageByHref(_22.href,null,null,_22,unselect);}else{if(!_22.target){_22.setAttribute("selected","progress");iui.showPageByHref(_22.href,null,null,null,unselect);}else{return;}}}}}_21.preventDefault();}},true);addEventListener("click",function(_23){var div=findParent(_23.target,"div");if(div&&div.className=="toggle"){div.setAttribute("toggled",div.getAttribute("toggled")!="true");_23.preventDefault();}},true);function checkOrientAndLocation(){if(window.innerWidth!=_5){_5=window.innerWidth;var _25=_5==320?"profile":"landscape";document.body.setAttribute("orient",_25);setTimeout(scrollTo,100,0,1);}if(location.hash!=_6){var _26=location.hash.substr(_7.length);iui.showPageById(_26);}}function showDialog(_27){_4=_27;_27.setAttribute("selected","true");if(_27.localName.toLowerCase()=="form"&&!_27.target){showForm(_27);}}function showForm(_28){_28.onsubmit=function(_29){_29.preventDefault();submitForm(_28);};_28.onclick=function(_2a){if(_2a.target==_28){_28.removeAttribute("selected");document.body.removeChild(iframe);}};}function updatePage(_2b,_2c){if(!_2b.id){_2b.id="__"+(++_9)+"__";}location.href=_6=_7+_2b.id;_8.push(_2b.id);var _2d=$("pageTitle");_2d.innerHTML=_2b.title||"-";if(_2b.localName.toLowerCase()=="form"&&!_2b.target){showForm(_2b);}var _2e=$("backButton");if(_2e){var _2f=$(_8[_8.length-2]);if(_2f){_2e.style.display="inline";_2e.innerHTML=_2f.title?_2f.title:"Back";}else{_2e.style.display="none";}}}function slidePages(_30,_31,_32){_31.style.left="100%";_31.setAttribute("selected","true");scrollTo(0,1);clearInterval(_a);var _33=100;slide();var _34=setInterval(slide,_2);function slide(){_33-=_1;if(_33<=0){_33=0;_30.removeAttribute("selected");clearInterval(_34);_a=setInterval(checkOrientAndLocation,300);setTimeout(updatePage,0,_31,_30);}_30.style.left=(_32?(100-_33):(_33-100))+"%";_31.style.left=(_32?-_33:_33)+"%";}}function preloadImages(){var _35=document.createElement("div");_35.id="preloader";document.body.appendChild(_35);}function submitForm(_36){iui.showPageByHref(_36.action,encodeForm(_36),_36.method);}function encodeForm(_37){function encode(_38){for(var i=0;i<_38.length;++i){if(_38[i].name){args.push(_38[i].name+"="+escape(_38[i].value));}}}var _3a=[];encode(_37.getElementsByTagName("input"));encode(_37.getElementsByTagName("select"));return _3a;}function findParent(_3b,_3c){while(_3b&&(_3b.nodeType!=1||_3b.localName.toLowerCase()!=_3c)){_3b=_3b.parentNode;}return _3b;}function replaceElementWithSource(_3d,_3e){var _3f=_3d.parentNode;var _40=_3d;while(_3f.parentNode!=document.body){_3f=_3f.parentNode;_40=_40.parentNode;}var _41=document.createElement(_40.localName);_41.innerHTML=_3e;_3f.removeChild(_40);while(_41.firstChild){_3f.appendChild(_41.firstChild);}}function $(id){return document.getElementById(id);}function ddd(){console.log.apply(console,arguments);}})();
(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/book.d54a3b09.svg"},function(e,a,t){e.exports=t.p+"static/media/chart.4b94e9e6.svg"},function(e,a,t){e.exports=t.p+"static/media/gear.999c3085.svg"},function(e,a,t){e.exports=t.p+"static/media/play.256114b4.svg"},function(e,a,t){e.exports=t.p+"static/media/plus.fc04cfa2.svg"},function(e,a,t){e.exports=t.p+"static/media/stack.f76fa13c.svg"},function(e,a,t){e.exports=t.p+"static/media/emoji-happy.3ff76f0b.png"},,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),i=t.n(c),s=(t(21),t(4)),o=t(5),r=t(14),m=t(6),u=t(1),d=t(15),v=t(7),h=t.n(v),f=t(8),p=t.n(f),y=t(9),g=t.n(y),b=t(10),E=t.n(b),k=t(11),w=t.n(k),N=t(12),A=t.n(N),C=t(13),j=t.n(C),I=(t(22),t(23),t(24),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).state={items:[],dataRoute:"https://rodrigofelipe.com.br/testes/wp-headless/wp-json/wp/v2/posts/"},t.showAllItems=t.showAllItems.bind(Object(u.a)(t)),t.showEbooks=t.showEbooks.bind(Object(u.a)(t)),t.showChart=t.showChart.bind(Object(u.a)(t)),t.showWebinar=t.showWebinar.bind(Object(u.a)(t)),t.showGear=t.showGear.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"showAllItems",value:function(){var e,a=document.querySelectorAll(".items li");for(e=0;e<a.length;e++)a[e].style.display="block";var t=document.querySelectorAll(".nav-primary li");[].forEach.call(t,(function(e){e.classList.remove("nav-active")})),document.getElementById("nav-all-items").className="nav-active"}},{key:"showEbooks",value:function(){var e,a=document.querySelectorAll(".items li");for(e=0;e<a.length;e++)a[e].style.display="none";var t,n=document.getElementsByClassName("e-books");for(t=0;t<n.length;t++)n[t].style.display="block";var l=document.querySelectorAll(".nav-primary li");[].forEach.call(l,(function(e){e.classList.remove("nav-active")})),document.getElementById("nav-books").className="nav-active"}},{key:"showChart",value:function(){var e,a=document.querySelectorAll(".items li");for(e=0;e<a.length;e++)a[e].style.display="none";var t,n=document.getElementsByClassName("infogr\xe1ficos");for(t=0;t<n.length;t++)n[t].style.display="block";var l=document.querySelectorAll(".nav-primary li");[].forEach.call(l,(function(e){e.classList.remove("nav-active")})),document.getElementById("nav-chart").className="nav-active"}},{key:"showWebinar",value:function(){var e,a=document.querySelectorAll(".items li");for(e=0;e<a.length;e++)a[e].style.display="none";var t,n=document.getElementsByClassName("webinar");for(t=0;t<n.length;t++)n[t].style.display="block";var l=document.querySelectorAll(".nav-primary li");[].forEach.call(l,(function(e){e.classList.remove("nav-active")})),document.getElementById("nav-webinar").className="nav-active"}},{key:"showGear",value:function(){var e,a=document.querySelectorAll(".items li");for(e=0;e<a.length;e++)a[e].style.display="none";var t,n=document.getElementsByClassName("ferramentas");for(t=0;t<n.length;t++)n[t].style.display="block";var l=document.querySelectorAll(".nav-primary li");[].forEach.call(l,(function(e){e.classList.remove("nav-active")})),document.getElementById("nav-gear").className="nav-active"}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("nav",{className:"nav-primary animated bounceInDown delay-2s"},l.a.createElement("div",{className:"aux center w-90"},l.a.createElement("ul",null,l.a.createElement("li",{className:"nav-active",onClick:this.showAllItems,id:"nav-all-items"},l.a.createElement("img",{src:A.a,alt:"icon-stack"})," todos"),l.a.createElement("li",{onClick:this.showEbooks,id:"nav-books"},l.a.createElement("img",{src:h.a,alt:"icon-book"})," e-books"),l.a.createElement("li",{onClick:this.showChart,id:"nav-chart"},l.a.createElement("img",{src:p.a,alt:"icon-chart"})," infogr\xe1ficos"),l.a.createElement("li",{onClick:this.showWebinar,id:"nav-webinar"},l.a.createElement("img",{src:E.a,alt:"icon-play"})," webinar"),l.a.createElement("li",{onClick:this.showGear,id:"nav-gear"},l.a.createElement("img",{src:g.a,alt:"icon-gear"})," ferramentas")),l.a.createElement("h1",null,"Materiais gratuitos ",l.a.createElement("img",{src:j.a,alt:"icon-happy"})))),l.a.createElement("ul",{className:"items animated fadeInLeft delay-3s"},this.state.items.map((function(e){return l.a.createElement("li",{className:e.category,key:"item-".concat(e.id,"}")},l.a.createElement("figure",null,l.a.createElement("img",{src:e.image,alt:e.name,className:"item-image"})),l.a.createElement("div",{className:"item-content center-v-h"},l.a.createElement("div",{className:"aux"},l.a.createElement("h2",null,e.name),l.a.createElement("p",{className:"txt"},e.description),l.a.createElement("a",{className:"item-link",href:e.link},l.a.createElement("img",{src:w.a,alt:"icon-plus"})," Saiba mais sobre o ",e.category))))}))))}},{key:"componentDidMount",value:function(){var e=this;fetch(this.state.dataRoute).then((function(e){return e.json()})).then((function(a){return e.setState((function(t,n){return{items:a.map(e.mapitem)}}))}))}},{key:"mapitem",value:function(e){return{id:e.id,image:e.acf_fields.image,name:e.title.rendered,link:e.link,description:e.acf_fields.description,category:e.acf_fields.type}}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.147742fa.chunk.js.map
(function(){"use strict";var e={483:function(e,t,n){var r=n(963),o=n(252),a=n(577);const i=(0,o._)("h1",null,[(0,o._)("span",null,[(0,o._)("a",{style:{color:"#244d66"},href:"https://www.franckferrand.com/",title:"Franck Ferrand",rel:"home"},[(0,o.Uk)("B"),(0,o._)("span",{style:{color:"#728294"}},"INGO"),(0,o.Uk)(" FERRAND")])])],-1),s=(0,o._)("p",null,"Cliquer pour aligner 5 expressions de notre brave Franck Ferrand !",-1),l=(0,o._)("p",null,"Rechargez la page pour mélanger les cartes",-1),u={class:"board"},c={class:"test-podcast"},d={key:0,title:"le-podcast",frameborder:"0",loading:"lazy",id:"ausha-vuVx",height:"220",style:{border:"none",width:"100%",height:"220px"},src:"https://player.ausha.co/index.html?podcastId=B4ePjTpOYnd4&v=3&playerId=ausha-vuVx"};function p(e,t,n,r,p,h){const f=(0,o.up)("CellButton");return(0,o.wg)(),(0,o.iD)("main",null,[i,s,l,(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.words,((e,t)=>((0,o.wg)(),(0,o.j4)(f,{word:e,key:`word-${t}`},null,8,["word"])))),128))]),(0,o._)("span",c,(0,a.zw)(p.podcast),1),e.loaded?((0,o.wg)(),(0,o.iD)("iframe",d)):(0,o.kq)("",!0)])}var h=n(669),f=n.n(h);function g(e,t,n,i,s,l){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=(...e)=>l.toggleSelection&&l.toggleSelection(...e)),onKeydown:t[1]||(t[1]=(0,r.D2)(((...e)=>l.toggleSelection&&l.toggleSelection(...e)),["enter"])),class:(0,a.C_)({selected:s.isSelected})},(0,a.zw)(this.word),35)}var m={name:"CellButton",data(){return{isSelected:!1}},props:{word:{type:String,default:"x"}},methods:{toggleSelection(){this.isSelected=!this.isSelected}}},v=n(744);const w=(0,v.Z)(m,[["render",g],["__scopeId","data-v-560a78ea"]]);var y=w,b={name:"App",components:{CellButton:y},data(){return{podcast:null,words:["Un livre qui vient de paraître","Si vous me passez l'expression","C'est ce qui s'appelle avoir ...","Commentaire sur la tenue de Christian Morin","La suite, vous la connaissez !","Est-ce que j'ai besoin de vous le dire ?","C'est pas un rigolo !","Vous l'avez, reconnu...","Anecdote de Christian Morin deja dîte","..., que l'on salue","L'orchestre de la Scala de Milan était dirigé par Riccardo Mutti","Aux éditions Perrin","Qui a préparé cette émission","J'avais déjà eu l'occasion de vous raconter cette hitoire","Et là, un homme","Ca commence à sentir le roussi !","Il faut l'imaginer","Dans Historia","Si je puis dire","Ca devient chaud!","Que j'ai toujours plaisir à citer","Ca ne s'invente pas","Cela pourra faire l'objet d'une prochaine émission","On dirait aujourd'hui que ...","Le tout-Paris"],iframe:{src:window.location.href,style:null,wrapperStyle:null}}},methods:{shuffle(e){let t,n=e.length;while(0!==n)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e},getPodcast(){const e="https://www.radioclassique.fr/radio/emissions/franck-ferrand-raconte/";f().get(e).then((e=>{this.podcast=e.status,console.log(e.data)})).catch((e=>{console.log(e)}))},testPod(){console.log(f().get("https://cors-anywhere-herokuapp.com/https://www.radioclassique.fr/radio/emissions/franck-ferrand-raconte/",{headers:{}}).data)}},mounted(){const e=document.createElement("script");e.setAttribute("src","https://player.ausha.co/ausha-player.js"),document.head.appendChild(e);const t=document.createElement("script");t.setAttribute("src","http://code.jquery.com/jquery-latest.min.js"),document.head.appendChild(t),this.words=this.shuffle(this.words),this.testPod(),this.loaded=!0}};const j=(0,v.Z)(b,[["render",p]]);var C=j;(0,r.ri)(C).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0;return n.O(c)},r=self["webpackChunklingobingo"]=self["webpackChunklingobingo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(483)}));r=n.O(r)})();
//# sourceMappingURL=app.6ba7cf58.js.map
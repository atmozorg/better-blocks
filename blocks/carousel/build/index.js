!function(){"use strict";var e,n={87:function(){var e=window.wp.blocks,n=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor);(0,e.registerBlockType)("better-blocks/carousel",{edit:function(){return(0,n.createElement)("div",(0,r.useBlockProps)(),(0,n.createElement)(r.InnerBlocks,{allowedBlocks:["core/cover"]}))},save:function(e){let{attributes:t}=e;const o=r.useBlockProps.save();return console.log(t),(0,n.createElement)("div",o,(0,n.createElement)("div",{class:"carousel"},(0,n.createElement)(r.InnerBlocks.Content,null)))}})}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var c=r[e]={exports:{}};return n[e](c,c.exports,t),c.exports}t.m=n,e=[],t.O=function(n,r,o,c){if(!r){var l=1/0;for(a=0;a<e.length;a++){r=e[a][0],o=e[a][1],c=e[a][2];for(var i=!0,u=0;u<r.length;u++)(!1&c||l>=c)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(i=!1,c<l&&(l=c));if(i){e.splice(a--,1);var s=o();void 0!==s&&(n=s)}}return n}c=c||0;for(var a=e.length;a>0&&e[a-1][2]>c;a--)e[a]=e[a-1];e[a]=[r,o,c]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,c,l=r[0],i=r[1],u=r[2],s=0;if(l.some((function(n){return 0!==e[n]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(u)var a=u(t)}for(n&&n(r);s<l.length;s++)c=l[s],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(a)},r=self.webpackChunkbetter_blocks=self.webpackChunkbetter_blocks||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var o=t.O(void 0,[431],(function(){return t(87)}));o=t.O(o)}();
!function(){"use strict";var e,r={604:function(){var e=window.wp.blocks,r=window.wp.element,t=window.wp.i18n,n=window.wp.blockEditor;(0,e.registerBlockType)("better-blocks/hero",{edit:function(){return(0,r.createElement)("p",(0,n.useBlockProps)(),(0,t.__)("Multiple Blocks Plugin – hello from the editor!","better-blocks"))},save:function(){return(0,r.createElement)("section",n.useBlockProps.save(),(0,t.__)("Multiple Blocks Plugin – hello from the saved content!","better-blocks"))}})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=function(r,t,o,i){if(!t){var l=1/0;for(f=0;f<e.length;f++){t=e[f][0],o=e[f][1],i=e[f][2];for(var c=!0,u=0;u<t.length;u++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(c=!1,i<l&&(l=i));if(c){e.splice(f--,1);var s=o();void 0!==s&&(r=s)}}return r}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[t,o,i]},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={826:0,431:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,i,l=t[0],c=t[1],u=t[2],s=0;if(l.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(r&&r(t);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},t=self.webpackChunkbetter_blocks=self.webpackChunkbetter_blocks||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=n.O(void 0,[431],(function(){return n(604)}));o=n.O(o)}();
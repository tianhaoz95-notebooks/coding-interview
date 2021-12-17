"use strict";(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[55],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3397:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={},c={unversionedId:"solutions/maximum-population-year",id:"solutions/maximum-population-year",isDocsHomePage:!1,title:"1854. Maximum Population Year",description:"`python",source:"@site/docs/solutions/1854__maximum-population-year.md",sourceDirName:"solutions",slug:"/solutions/maximum-population-year",permalink:"/coding-interview/docs/solutions/maximum-population-year",editUrl:"https://github.com/tianhaoz95-notebooks/coding-interview/edit/main/docs/solutions/1854__maximum-population-year.md",version:"current",sidebarPosition:1854,frontMatter:{},sidebar:"solutionsSidebar",previous:{title:"Home",permalink:"/coding-interview/docs/solutions/index"},next:{title:"1855. Maximum Distance Between a Pair of Values",permalink:"/coding-interview/docs/solutions/maximum-distance-between-a-pair-of-values"}},l=[],s={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution(object):\n  def maximumPopulation(self, logs):\n    cnt = [0 for i in range(2060)]\n    for log in logs:\n      for i in range(log[0], log[1], 1):\n        cnt[i] += 1\n    return cnt.index(max(cnt))\n")))}p.isMDXComponent=!0}}]);
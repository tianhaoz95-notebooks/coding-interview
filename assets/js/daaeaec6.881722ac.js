"use strict";(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[467],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1205:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={},c="2079. Watering Plants",l={unversionedId:"solutions/watering-plants",id:"solutions/watering-plants",isDocsHomePage:!1,title:"2079. Watering Plants",description:"",source:"@site/docs/solutions/2079__watering-plants.md",sourceDirName:"solutions",slug:"/solutions/watering-plants",permalink:"/coding-interview/docs/solutions/watering-plants",editUrl:"https://github.com/tianhaoz95-notebooks/coding-interview/edit/main/docs/solutions/2079__watering-plants.md",tags:[],version:"current",sidebarPosition:2079,frontMatter:{},sidebar:"solutionsSidebar",previous:{title:"2078. Two Furthest Houses With Different Colors",permalink:"/coding-interview/docs/solutions/two-furthest-houses-with-different-colors"},next:{title:"2080. Range Frequency Queries",permalink:"/coding-interview/docs/solutions/range-frequency-queries"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2079-watering-plants"},"2079. Watering Plants"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def wateringPlants(self, plants, capacity):\n        """\n        :type plants: List[int]\n        :type capacity: int\n        :rtype: int\n        """\n        steps = 0\n        refill = False\n        water = capacity\n        for i, p in enumerate(plants):\n            if water >= p:\n                water -= p\n                steps += 1\n            else:\n                steps += (2 * i + 1)\n                water = capacity - p\n        return steps\n        \n')))}f.isMDXComponent=!0}}]);
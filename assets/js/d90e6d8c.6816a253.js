"use strict";(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5411:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:3},l={unversionedId:"tricks/python",id:"tricks/python",isDocsHomePage:!1,title:"Python",description:"Initialization",source:"@site/docs/tricks/python.md",sourceDirName:"tricks",slug:"/tricks/python",permalink:"/coding-interview/docs/tricks/python",editUrl:"https://github.com/tianhaoz95-notebooks/coding-interview/edit/main/docs/tricks/python.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tricksSidebar",previous:{title:"Conventions",permalink:"/coding-interview/docs/tricks/conventions"}},s=[{value:"Initialization",id:"initialization",children:[{value:"Set and dict",id:"set-and-dict",children:[]},{value:"List",id:"list",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"initialization"},"Initialization"),(0,o.kt)("h3",{id:"set-and-dict"},"Set and dict"),(0,o.kt)("p",null,"When initializing a empty ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dict")," in Python, it's better to implicitly say if it's a set or dict instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," (which is a ",(0,o.kt)("inlineCode",{parentName:"p"},"dict")," btw)."),(0,o.kt)("p",null,"There are a few benefits in doing so:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's more readable."),(0,o.kt)("li",{parentName:"ul"},"It's less likely to catch you off guard when you want to use ",(0,o.kt)("inlineCode",{parentName:"li"},"set"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Do\nmy_set = set()\nmy_dict = dict()\n\n# Don't\n# This will be a dict and might catch you off guard\nmy_what = {}\n")),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)("h4",{id:"size-copy"},"Size copy"),(0,o.kt)("p",null,"Size copy a list and fill with elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [0 for i in range(other_list)]\n\nmy_list = [0] * len(other_list)\n")),(0,o.kt)("p",null,"With custom first several elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"my_list = [0, 1] + [0] * len(other_list[2:])\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This can be useful for DP-based problems."))))}d.isMDXComponent=!0}}]);
(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[867],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6944:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},u={unversionedId:"solutions/maximum-distance-between-a-pair-of-values",id:"solutions/maximum-distance-between-a-pair-of-values",isDocsHomePage:!1,title:"1855. Maximum Distance Between a Pair of Values",description:"`python",source:"@site/docs/solutions/1855__maximum-distance-between-a-pair-of-values.md",sourceDirName:"solutions",slug:"/solutions/maximum-distance-between-a-pair-of-values",permalink:"/coding-interview/docs/solutions/maximum-distance-between-a-pair-of-values",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/solutions/1855__maximum-distance-between-a-pair-of-values.md",version:"current",sidebarPosition:1855,frontMatter:{},sidebar:"solutionsSidebar",previous:{title:"1854. Maximum Population Year",permalink:"/coding-interview/docs/solutions/maximum-population-year"},next:{title:"1863. Sum of All Subset XOR Totals",permalink:"/coding-interview/docs/solutions/sum_of_all_subset_xor_totals"}},s=[],c={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n  def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:\n    max_dist = 0\n    j = 0\n    for i, v in enumerate(nums1):\n      j = max(i, j)\n      while j + 1 < len(nums2) and v <= nums2[j + 1]:\n        j += 1\n      max_dist = max(max_dist, j - i)\n    return max_dist\n")))}l.isMDXComponent=!0}}]);
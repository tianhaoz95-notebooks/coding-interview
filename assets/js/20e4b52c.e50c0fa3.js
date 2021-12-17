"use strict";(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[439],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return p}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),m=u(t),p=o,_=m["".concat(c,".").concat(p)]||m[p]||f[p]||i;return t?r.createElement(_,s(s({ref:e},l),{},{components:t})):r.createElement(_,s({ref:e},l))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6038:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={},c={unversionedId:"solutions/minimum_number_of_swaps_to_make_the_binary_string_alternating",id:"solutions/minimum_number_of_swaps_to_make_the_binary_string_alternating",isDocsHomePage:!1,title:"1864. Minimum Number of Swaps to Make the Binary String Alternating",description:"`python",source:"@site/docs/solutions/1864__minimum_number_of_swaps_to_make_the_binary_string_alternating.md",sourceDirName:"solutions",slug:"/solutions/minimum_number_of_swaps_to_make_the_binary_string_alternating",permalink:"/coding-interview/docs/solutions/minimum_number_of_swaps_to_make_the_binary_string_alternating",editUrl:"https://github.com/tianhaoz95-notebooks/coding-interview/edit/main/docs/solutions/1864__minimum_number_of_swaps_to_make_the_binary_string_alternating.md",version:"current",sidebarPosition:1864,frontMatter:{},sidebar:"solutionsSidebar",previous:{title:"1863. Sum of All Subset XOR Totals",permalink:"/coding-interview/docs/solutions/sum_of_all_subset_xor_totals"},next:{title:"1865. Finding Pairs With a Certain Sum",permalink:"/coding-interview/docs/solutions/finding_pairs_with_a_certain_sum"}},u=[],l={toc:u};function f(n){var e=n.components,t=(0,o.Z)(n,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from collections import Counter\n\nclass Solution:\n    def flip(self, prev: str) -> str:\n        if prev == "0":\n            return "1"\n        return "0"\n    \n    def countDiff(self, start: str, s: str) -> int:\n        current = start\n        cnt = 0\n        for c in s:\n            if c != current:\n                cnt += 1\n            current = self.flip(current)\n        return cnt\n    \n    def minSwaps(self, s: str) -> int:\n        cnts = Counter(s)\n        one_cnt = cnts["1"]\n        zero_cnt = cnts["0"]\n        if abs(one_cnt - zero_cnt) > 1:\n            return -1\n        if one_cnt > zero_cnt:\n            return self.countDiff("1", s) // 2\n        if one_cnt < zero_cnt:\n            return self.countDiff("0", s) // 2\n        return min(self.countDiff("0", s), self.countDiff("1", s)) // 2\n')))}f.isMDXComponent=!0}}]);
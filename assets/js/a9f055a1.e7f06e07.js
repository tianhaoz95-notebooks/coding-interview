"use strict";(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[436],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(n),p=o,b=f["".concat(a,".").concat(p)]||f[p]||m[p]||s;return n?r.createElement(b,u(u({ref:t},c),{},{components:n})):r.createElement(b,u({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,u=new Array(s);u[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<s;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1179:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),u=["components"],i={},a="1863. Sum of All Subset XOR Totals",l={unversionedId:"solutions/sum_of_all_subset_xor_totals",id:"solutions/sum_of_all_subset_xor_totals",title:"1863. Sum of All Subset XOR Totals",description:"",source:"@site/docs/solutions/1863__sum_of_all_subset_xor_totals.md",sourceDirName:"solutions",slug:"/solutions/sum_of_all_subset_xor_totals",permalink:"/coding-interview/docs/solutions/sum_of_all_subset_xor_totals",editUrl:"https://github.com/tianhaoz95-notebooks/coding-interview/edit/main/docs/solutions/1863__sum_of_all_subset_xor_totals.md",tags:[],version:"current",sidebarPosition:1863,frontMatter:{},sidebar:"solutionsSidebar",previous:{title:"1855. Maximum Distance Between a Pair of Values",permalink:"/coding-interview/docs/solutions/maximum-distance-between-a-pair-of-values"},next:{title:"1864. Minimum Number of Swaps to Make the Binary String Alternating",permalink:"/coding-interview/docs/solutions/minimum_number_of_swaps_to_make_the_binary_string_alternating"}},c=[],m={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"1863-sum-of-all-subset-xor-totals"},"1863. Sum of All Subset XOR Totals"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def subsetXorSumStep(self, last_sum: int, nums: List[int]) -> int:\n        if not nums:\n            return 0\n        current_sum = last_sum^nums[0]\n        return current_sum + self.subsetXorSumStep(last_sum, nums[1:]) + self.subsetXorSumStep(current_sum, nums[1:])\n    \n    def subsetXORSum(self, nums: List[int]) -> int:\n        return self.subsetXorSumStep(0, nums)\n")))}f.isMDXComponent=!0}}]);
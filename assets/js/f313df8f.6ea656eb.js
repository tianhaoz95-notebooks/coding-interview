"use strict";(self.webpackChunkcoding_interview=self.webpackChunkcoding_interview||[]).push([[142],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},l=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(t),f=r,p=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return t?i.createElement(p,d(d({ref:n},l),{},{components:t})):i.createElement(p,d({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,d=new Array(o);d[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,d[1]=a;for(var u=2;u<o;u++)d[u]=t[u];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3138:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),d=["components"],a={},s="2058. Find the Minimum and Maximum Number of Nodes Between Critical Points",u={unversionedId:"solutions/find-the-minimum-and-maximum-number-of-nodes-between-critical-points",id:"solutions/find-the-minimum-and-maximum-number-of-nodes-between-critical-points",title:"2058. Find the Minimum and Maximum Number of Nodes Between Critical Points",description:"",source:"@site/docs/solutions/2058_find-the-minimum-and-maximum-number-of-nodes-between-critical-points.md",sourceDirName:"solutions",slug:"/solutions/find-the-minimum-and-maximum-number-of-nodes-between-critical-points",permalink:"/coding-interview/docs/solutions/find-the-minimum-and-maximum-number-of-nodes-between-critical-points",editUrl:"https://github.com/tianhaoz95-notebooks/coding-interview/edit/main/docs/solutions/2058_find-the-minimum-and-maximum-number-of-nodes-between-critical-points.md",tags:[],version:"current",sidebarPosition:2058,frontMatter:{},sidebar:"solutionsSidebar",previous:{title:"2057. Smallest Index With Equal Value",permalink:"/coding-interview/docs/solutions/smallest-index-with-equal-value"},next:{title:"2078. Two Furthest Houses With Different Colors",permalink:"/coding-interview/docs/solutions/two-furthest-houses-with-different-colors"}},l=[],c={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2058-find-the-minimum-and-maximum-number-of-nodes-between-critical-points"},"2058. Find the Minimum and Maximum Number of Nodes Between Critical Points"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def getMinDist(self, idx: int, critical_idxs: List[int], cmp_idx: int) -> int:\n        if not critical_idxs:\n            return -1\n        return idx - critical_idxs[cmp_idx]\n    \n    def isCritical(self, left_node: ListNode, mid_node: ListNode, right_node: ListNode) -> bool:\n        if left_node.val < mid_node.val and mid_node.val > right_node.val:\n            return True\n        if left_node.val > mid_node.val and mid_node.val < right_node.val:\n            return True\n        return False\n    \n    def updateMinDist(self, min_dist: int, update_dist: int) -> int:\n        if min_dist == -1:\n            return update_dist\n        return min(min_dist, update_dist)\n    \n    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:\n        min_dist = -1\n        max_dist = -1\n        current_idx = 1\n        critical_idxs = []\n        if head is None or head.next is None or head.next.next is None:\n            return [-1, -1]\n        left_node = head\n        mid_node = head.next\n        right_node = head.next.next\n        while right_node:\n            if self.isCritical(left_node, mid_node, right_node):\n                # update the min max history\n                min_dist = self.updateMinDist(min_dist, self.getMinDist(current_idx, critical_idxs, -1))\n                max_dist = max(max_dist, self.getMinDist(current_idx, critical_idxs, 0))\n                # update the seen critical points\n                critical_idxs.append(current_idx)\n            # update the pointers\n            left_node = left_node.next\n            mid_node = mid_node.next\n            right_node = right_node.next\n            # update index\n            current_idx += 1\n        return [min_dist, max_dist]\n")))}m.isMDXComponent=!0}}]);
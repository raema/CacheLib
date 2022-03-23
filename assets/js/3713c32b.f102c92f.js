"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[9087],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){return function(t){var n=m(t.components);return r.createElement(e,i({},t,{components:n}))}},m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,h=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1985:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"common_components",title:"Cachelib Common Components"},s=void 0,l={unversionedId:"Cache_Library_Architecture_Guide/common_components",id:"Cache_Library_Architecture_Guide/common_components",isDocsHomePage:!1,title:"Cachelib Common Components",description:"cachelib/common has a number of helper classes that we use throughout the codebase. You're free to use them in your own projects as well. This page will give an overview to each of the components.",source:"@site/docs/Cache_Library_Architecture_Guide/Cachelib_Common_Components.md",sourceDirName:"Cache_Library_Architecture_Guide",slug:"/Cache_Library_Architecture_Guide/common_components",permalink:"/docs/Cache_Library_Architecture_Guide/common_components",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_Architecture_Guide/Cachelib_Common_Components.md",tags:[],version:"current",frontMatter:{id:"common_components",title:"Cachelib Common Components"},sidebar:"archguideSideBar",previous:{title:"Overview: A random walk down the Cache Library",permalink:"/docs/Cache_Library_Architecture_Guide/overview_a_random_walk"},next:{title:"RAM cache indexing and eviction",permalink:"/docs/Cache_Library_Architecture_Guide/ram_cache_indexing_and_eviction"}},u=[{value:"AccessTracker",id:"accesstracker",children:[]},{value:"DropSet &amp; ApproxSplitSet",id:"dropset--approxsplitset",children:[]},{value:"BloomFilter",id:"bloomfilter",children:[]},{value:"Cohort",id:"cohort",children:[]},{value:"CountDownLatch",id:"countdownlatch",children:[]},{value:"CountMinSketch",id:"countminsketch",children:[]},{value:"PercentileStats",id:"percentilestats",children:[]},{value:"PeriodicWorker",id:"periodicworker",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common")," has a number of helper classes that we use throughout the codebase. You're free to use them in your own projects as well. This page will give an overview to each of the components."),(0,i.mdx)("h2",{id:"accesstracker"},"AccessTracker"),(0,i.mdx)("p",null,"This tracks items' past accesses in an approximate manner. User can configure this to be used with a bloom filter or count min sketch implementation. Once a window granularity and number of windows are configured, the tracker will track history for require duration and return approximate past history of accesses. In CacheLib, this is used in conjunction with ML-based admission policies. This can also be used to gather variou statistics regarding item access history."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/AccessTracker.h")),(0,i.mdx)("h2",{id:"dropset--approxsplitset"},"DropSet & ApproxSplitSet"),(0,i.mdx)("p",null,"DropSet is a set that can drop entries (evict entries) once load factor in its internal hash table exceeds 90% load factor. ApproxSplitSet uses several DropSets internally, and uses each DropSet to represent the keys we've seen in an hour. The goal of ApproxSplitSet is to detect the existence of a key approximately over the recent X hours. We use this in one of our reject first admission policy."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/ApproxSplitSet.h")),(0,i.mdx)("h2",{id:"bloomfilter"},"BloomFilter"),(0,i.mdx)("p",null,"Sharded bloom filters. Internally we have a number of bloom filters and distribute keys between them via their hash. This component also supports serialization for persistence."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/BloomFilter.h")),(0,i.mdx)("h2",{id:"cohort"},"Cohort"),(0,i.mdx)("p",null,"This can be used to divide a set of threads into two groups. This component stores two refcounts in one atomic, and allows switching between them and waiting for them to drain. Used for copy-on-write with memory management for non-blocking read wrapper around thread-unsafe datastructures."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/Cohort.h")),(0,i.mdx)("h2",{id:"countdownlatch"},"CountDownLatch"),(0,i.mdx)("p",null,"This implements the same interface as the standard ",(0,i.mdx)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/thread/latch"},"std::latch"),"."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/CountDownLatch.h"),"."),(0,i.mdx)("h2",{id:"countminsketch"},"CountMinSketch"),(0,i.mdx)("p",null,"Sharded count min sketch implementation. Internally we have a number of buckets and distribute keys between them via their hash."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/CountMinSketch.h"),"."),(0,i.mdx)("h2",{id:"percentilestats"},"PercentileStats"),(0,i.mdx)("p",null,"A sliding window histogram stats. By default the window size is 1 second. Internally it uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"folly::SlidingWindowQuantileEstimator")," which uses TDigest data structure underneath (See ",(0,i.mdx)("a",{parentName:"p",href:"https://medium.com/@mani./t-digest-an-interesting-datastructure-to-estimate-quantiles-accurately-b99a50eaf4f7"},"this")," for an introduction on TDigest)."),(0,i.mdx)("h2",{id:"periodicworker"},"PeriodicWorker"),(0,i.mdx)("p",null,"Background worker that wakes up every configured period and runs a user specified task. Internally uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"std::thread"),". Inherit from this class and override the work() function to provide user's custom logic."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("inlineCode",{parentName:"p"},"cachelib/common/PeriodicWorker.h"),"."))}d.isMDXComponent=!0}}]);
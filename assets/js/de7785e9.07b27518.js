"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[7017],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return l}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,h=l["".concat(o,".").concat(m)]||l[m]||p[m]||i;return n?r.createElement(h,c(c({ref:t},d),{},{components:n})):r.createElement(h,c({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68172:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"Visit_data_in_cache",title:"Visit data in cache"},s=void 0,d={unversionedId:"Cache_Library_User_Guides/Visit_data_in_cache",id:"Cache_Library_User_Guides/Visit_data_in_cache",isDocsHomePage:!1,title:"Visit data in cache",description:"Cachelib provides a concurrent iterator to visit unchained data (items) in a cache while other threads are inserting data to or removing data from the cache. At any time, an item visited by the iterator is guaranteed to be valid even if it is concurrently removed by another thread.",source:"@site/docs/Cache_Library_User_Guides/Visit_data_in_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Visit_data_in_cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_User_Guides/Visit_data_in_cache.md",tags:[],version:"current",frontMatter:{id:"Visit_data_in_cache",title:"Visit data in cache"},sidebar:"userguideSidebar",previous:{title:"Remove data from cache",permalink:"/docs/Cache_Library_User_Guides/Remove_data_from_cache"},next:{title:"FAQ",permalink:"/docs/Cache_Library_User_Guides/faq"}},l=[],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Cachelib provides a concurrent iterator to visit unchained data (items) in a cache while other threads are inserting data to or removing data from the cache. At any time, an item visited by the iterator is guaranteed to be valid even if it is concurrently removed by another thread."),(0,i.mdx)("p",null,"The current iterator is ",(0,i.mdx)("em",{parentName:"p"},"unordered"),"; that is, the order it visits the items is not the same as the order in which they're written to the cache. During iteration, it guarantees visiting all items that exist in the cache. Iterating the cache does not block any other cache operation like ",(0,i.mdx)("inlineCode",{parentName:"p"},"find()")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"allocate()"),". However, before calling the ",(0,i.mdx)("inlineCode",{parentName:"p"},"shutDown()")," API to shut down the cache, you must release all iterators."),(0,i.mdx)("p",null,"For example, suppose you write the following three items to cache:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},'std::map<std::string, std::string> dict = {\n  { "key1", "item 1" },\n  { "key2", "item 2" },\n  { "key3", "item 3" },\n};\nfor (const auto& [k, v] : dict) {\n  auto handle = cache->allocate(poolId, k, v.size());\n  std::memcpy(handle->getMemory(), v.data(), v.size());\n  cache->insertOrReplace(handle);\n}\n')),(0,i.mdx)("p",null,"To visit these three items in the cache, use an iterator:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},"for (auto itr = cache->begin(); itr != cache->end(); ++itr) {\n  auto key = itr->getKey();\n  auto data = reinterpret_cast<const char*>(itr->getMemory());\n  std::cout << key << \" -> \" << data << '\\n';\n}\n")),(0,i.mdx)("p",null,"You can also use the shorter ",(0,i.mdx)("inlineCode",{parentName:"p"},"for-each")," statement to visit them:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},"for (const auto& itr : *cache) {\n  auto key = itr.getKey();\n  auto data = reinterpret_cast<const char*>(itr.getMemory());\n  std::cout << key << \" -> \" << data << '\\n';\n}\n")),(0,i.mdx)("p",null,"Chained items are stored in cache as a linked list. For example, suppose you write three chained items to cache:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},'std::string parentItem("parent item");\nauto parentItemHandle = cache->allocate(poolId, "parent key", parentItem.size());\nstd::memcpy(parentItemHandle->getMemory(), parentItem.c_str(), parentItem.size());\ncache->insert(parentItemHandle);\n\nauto size = 100\nstd::vector<std::string> vitems = { "item 1", "item 2", "item 3" };\nfor (auto& itr : vitems) {\n  auto handle = cache->allocateChainedItem(parentItemHandle, size);\n  std::memcpy(handle->getMemory(), itr.c_str(), itr.size());\n  cache->addChainedItem(parentItemHandle, std::move(handle));\n}\n')),(0,i.mdx)("p",null,"To visit the chained items, use the parent item's handle to traverse the list."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-cpp"},"auto chainedAllocs = cache->viewAsChainedAllocs(parentItemHandle);\nfor (const auto& c : chainedAllocs.getChain()) {\n  auto data = reinterpret_cast<const char*>(c.getMemory());\n  std::cout << data << '\\n';\n}\n")))}m.isMDXComponent=!0}}]);
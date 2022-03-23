"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[4072],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){return function(t){var n=u(t.components);return i.createElement(e,o({},t,{components:n}))}},u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,h=d["".concat(a,".").concat(p)]||d[p]||m[p]||o;return n?i.createElement(h,s(s({ref:t},l),{},{components:n})):i.createElement(h,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44839:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"small_object_cache",title:"Small Object Cache"},c=void 0,l={unversionedId:"Cache_Library_Architecture_Guide/small_object_cache",id:"Cache_Library_Architecture_Guide/small_object_cache",isDocsHomePage:!1,title:"Small Object Cache",description:"The Small Object Cache (SOC)   caches objects that are 100s of bytes in size using 100s of GB of SSD. SOC is implemented as a set associative cache to reduce the DRAM overhead for indexing.  SOC is initialized with large range of blocks specified through a start offset and size.",source:"@site/docs/Cache_Library_Architecture_Guide/Small_Object_Cache.md",sourceDirName:"Cache_Library_Architecture_Guide",slug:"/Cache_Library_Architecture_Guide/small_object_cache",permalink:"/docs/Cache_Library_Architecture_Guide/small_object_cache",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Cache_Library_Architecture_Guide/Small_Object_Cache.md",tags:[],version:"current",frontMatter:{id:"small_object_cache",title:"Small Object Cache"},sidebar:"archguideSideBar",previous:{title:"Navy Architecture Overview",permalink:"/docs/Cache_Library_Architecture_Guide/navy_architecture_overview"},next:{title:"Large Object Cache",permalink:"/docs/Cache_Library_Architecture_Guide/large_object_cache"}},d=[{value:"Buckets",id:"buckets",children:[]},{value:"Lookups",id:"lookups",children:[]},{value:"Inserts",id:"inserts",children:[]},{value:"Deletes",id:"deletes",children:[]},{value:"Persistence across restarts",id:"persistence-across-restarts",children:[]},{value:"SOC operation cost",id:"soc-operation-cost",children:[]}],u={toc:d};function p(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.mdx)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The Small Object Cache (SOC)   caches objects that are 100s of bytes in size using 100s of GB of SSD. SOC is implemented as a set associative cache to reduce the DRAM overhead for indexing.  SOC is initialized with large range of blocks specified through a start offset and size."),(0,o.mdx)("h2",{id:"buckets"},"Buckets"),(0,o.mdx)("p",null,"SOC divides the available range of block space into fixed size buckets. The size of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," is typically the smallest unit of read into the SSD(4KB), but is configurable. A",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," has a  header followed by sequence of key value pairs.  The header encapsulates the following:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"a checksum that is used for validating the content of bucket against IO errors."),(0,o.mdx)("li",{parentName:"ul"},"generation timestamp that is used to determine if the bucket is properly intialized."),(0,o.mdx)("li",{parentName:"ul"},"capacity, number of keys and offset of next allocation to manage the storage portion.")),(0,o.mdx)("p",null,"The header in total consumes 24 bytes per bucket. Following the header bits is sequence of key, value pairs corresponding to ",(0,o.mdx)("inlineCode",{parentName:"p"},"BucketEntry"),".  ",(0,o.mdx)("inlineCode",{parentName:"p"},"BucketEntry")," contains a key size,  value size and hash for quick search, followed by actual key and value. The overhead for ",(0,o.mdx)("inlineCode",{parentName:"p"},"BucketEntry")," is 20 bytes per entry."),(0,o.mdx)("p",null,"Buckets are always read entirely and written entirely. SOC uses an array of ",(0,o.mdx)("inlineCode",{parentName:"p"},"folly::SharedMutex")," to protect concurrent reads and writes to the corresponding bucket associatively."),(0,o.mdx)("h2",{id:"lookups"},"Lookups"),(0,o.mdx)("p",null,"Keys are associatively hashed into the buckets based on a uniform hash function.\nSince hybrid caches are usually leveraged in deployments that have 50-80% hit ratio, a significant volume of lookups could be for keys that don't exist. To speed up the performance of lookups, SOC can be configured to use a ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter"),". The  ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," is utilized to quickly answer if a key might be missing from the cache.  To perform a lookup, SOC computes the hash of the key to locate the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," corresponding to it. It then checks the corresponding ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," to quickly determine if the key could exist. If positive, only then SOC performs the IO operation to read the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," into memory. Once read, the key value pairs are iterated quickly to locate the key being looked up. Due to the nature of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter"),", SOC can have false positives. By controlling the bits per bucket, the false positive rate can be kept low (<7% with 16 bytes per 4KB bucket). SOC can efficiently cache billions of keys and perform lookups with single IO while consuming only 1-2GB of DRAM. To keep the DRAM overhead low, SOC does not adopt eviction policies like LRU that need additional DRAM overhead or additional writes into SSD to maintain ordering information. SOC employs a simple FIFO eviction policy."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(73264).Z})),(0,o.mdx)("h2",{id:"inserts"},"Inserts"),(0,o.mdx)("p",null,"To insert a cache into SOC, the key hash is used to determine the bucket. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," is read into memory and if the key already exists and needs to be overridden, it is first removed and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," is compacted in-memory. Next, SOC determines if there is sufficient space left in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," to insert the new value for the key. Most often, caches operate being at full capacity. Hence, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," would be full and SOC now has to pick a victim. To pick a victim, SOC employs a FIFO eviction policy. Keys are iterated in FIFO order and removed until there is enough space to insert the new key. SOC issues the removeCB for all evicted keys. Next, SOC writes the new state of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," into SSD and reinitializes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," to reflect the current content of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket"),". The ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," for any given bucket is updated upon every insert or delete operation that changes  the  contents of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket"),"."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(66942).Z})),(0,o.mdx)("h2",{id:"deletes"},"Deletes"),(0,o.mdx)("p",null,"Deletes are similar to insertion of keys when the key is present in SOC. SOC can quickly confirm if the key can be present. If so, SOC reads the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket"),", scans through the keys to remove an compact the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket"),". Once this is done, the new contents  of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket")," are written into SSD and ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," is re-initialized as well."),(0,o.mdx)("h2",{id:"persistence-across-restarts"},"Persistence across restarts"),(0,o.mdx)("p",null,"SOC stores the keys and value in SSD. When SOC  is shutdown cleanly, it persists any relevant state in memory to SSD. SOC currently stores only the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," in memory and maintains some statistics related to the distribution of object sizes. Upon a successful initilaization, SOC can reinitialize the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BloomFilter")," from the previously persisted state if the parameters have not changed."),(0,o.mdx)("h2",{id:"soc-operation-cost"},"SOC operation cost"),(0,o.mdx)("p",null,"The following table summarizes the cost of various operations to SOC under correponding scenarios. Cache workloads have fair volume of lookups and deletes for non-existent keys. All misses are handled in-memory, while lookups for keys hit can be serviced with a single IO corresponding to bucket size.  For inserts and deletes that mutate the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Bucket"),", it involves two IO opertions(a read and a write). Deletes for non-existent keys are also purely in-memory operations."),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(12388).Z})))}p.isMDXComponent=!0},12388:function(e,t,n){t.Z=n.p+"assets/images/SOC_cost_of_operations-b91db1af306bc356a314f9bca1c84e69.png"},73264:function(e,t,n){t.Z=n.p+"assets/images/Small_Item_engine_Read-1d0b3a1ea4976f74de8f119017b1aad8.png"},66942:function(e,t,n){t.Z=n.p+"assets/images/Small_Item_engine_Write-2c909e82adc02b6d2654560a59b84a06.png"}}]);
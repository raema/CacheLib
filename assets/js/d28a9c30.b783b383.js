"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[2715],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return l}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){return function(n){var t=d(n.components);return r.createElement(e,a({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(t),p=o,h=l["".concat(i,".").concat(p)]||l[p]||u[p]||a;return t?r.createElement(h,m(m({ref:n},s),{},{components:t})):r.createElement(h,m({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var m={};for(var c in n)hasOwnProperty.call(n,c)&&(m[c]=n[c]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},48340:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],m={title:"Github Repository Synchronization (after cleanup)",id:"github-squash-sync"},c=void 0,s={unversionedId:"installation/github-squash-sync",id:"installation/github-squash-sync",isDocsHomePage:!1,title:"Github Repository Synchronization (after cleanup)",description:"In preparation of making CacheLib public, the CacheLib github repository",source:"@site/docs/installation/github-squash-sync.md",sourceDirName:"installation",slug:"/installation/github-squash-sync",permalink:"/docs/installation/github-squash-sync",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation/github-squash-sync.md",tags:[],version:"current",frontMatter:{title:"Github Repository Synchronization (after cleanup)",id:"github-squash-sync"},sidebar:"installationSidebar",previous:{title:"Testing",permalink:"/docs/installation/testing"}},l=[{value:"Advanced topic: updated a forked repository on github",id:"advanced-topic-updated-a-forked-repository-on-github",children:[]}],d={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"In preparation of making ",(0,a.mdx)("strong",{parentName:"p"},"CacheLib")," public, the CacheLib github repository\nhas a new branch ",(0,a.mdx)("inlineCode",{parentName:"p"},"main")," (instead of ",(0,a.mdx)("inlineCode",{parentName:"p"},"master"),"), and all previous commits\nhave been squashed (merged into one)."),(0,a.mdx)("p",null,"If you cloned/forked the ",(0,a.mdx)("strong",{parentName:"p"},"CacheLib")," repository ",(0,a.mdx)("strong",{parentName:"p"},"after September 2021"),", there\nis no need to run the commands below - your repository is up-to-date."),(0,a.mdx)("p",null,"When trying to update an existing cloned CacheLib repository (e.g. on\nyour local work computer), The following error might appear:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git pull\nfatal: refusing to merge unrelated histories\n")),(0,a.mdx)("p",null,"Use the following instructions to synchronize your local repository with CacheLib's.\nNOTES about the commands;"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"This assumes you have no local changes"),(0,a.mdx)("li",{parentName:"ol"},'This assumes the "origin" remote is ',(0,a.mdx)("inlineCode",{parentName:"li"},"git@github.com:facebook/CacheLib.git")," .")),(0,a.mdx)("p",null,"First, fetch all the remote updates:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git fetch --all\nFetching origin\nremote: Enumerating objects: 174, done.\nremote: Counting objects: 100% (174/174), done.\nremote: Compressing objects: 100% (75/75), done.\nremote: Total 174 (delta 54), reused 174 (delta 54), pack-reused 0\nReceiving objects: 100% (174/174), 398.69 KiB | 1.28 MiB/s, done.\nResolving deltas: 100% (54/54), completed with 5 local objects.\nFrom github.com:facebook/CacheLib\n+ eb0a8b64...45eb4ad3 main       -> origin/main  (forced update) #### This indicates the branch was squashed\nd12f6273..3d6e81b8  gh-pages   -> origin/gh-pages\n")),(0,a.mdx)("p",null,"Second, checkout the updated remote 'main' branch, and overwrite any\nexisting local 'main' branches (",(0,a.mdx)("inlineCode",{parentName:"p"},"-B"),")"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git checkout -B main -t origin/main\nBranch 'main' set up to track remote branch 'main' from 'origin'.\nReset branch 'main'\n")),(0,a.mdx)("p",null,"Your branch is up to date with 'origin/main'."),(0,a.mdx)("p",null,"Third, verify you have the updated branch, with only few commits (as\nof Aug 13, 2021):"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git log --pretty=oneline\n45eb4ad36b2b94b223319ee11326c3bb9a560bf5 (HEAD -> main, origin/main) Updating submodules\na0cf7942cae3f83e60fe3bca5b2ffc87fb1572fe Initial commit\n")),(0,a.mdx)("h2",{id:"advanced-topic-updated-a-forked-repository-on-github"},"Advanced topic: updated a forked repository on github"),(0,a.mdx)("p",null,"If you created a forked repository on Github, it is very likely that\nthe ",(0,a.mdx)("inlineCode",{parentName:"p"},"origin")," git remote points to YOUR forked repository, not to the\n",(0,a.mdx)("inlineCode",{parentName:"p"},"facebook/CacheLib")," repository."),(0,a.mdx)("p",null,"In such cases it is customary to locally add a second git-remote\nsource and name it ",(0,a.mdx)("inlineCode",{parentName:"p"},"upstream"),", so that ",(0,a.mdx)("inlineCode",{parentName:"p"},"git pull")," from ",(0,a.mdx)("inlineCode",{parentName:"p"},"origin")," gets\nyour private changes (and similarly, ",(0,a.mdx)("inlineCode",{parentName:"p"},"git push")," to ",(0,a.mdx)("inlineCode",{parentName:"p"},"origin")," uploads\nyou changes to GitHub), and ",(0,a.mdx)("inlineCode",{parentName:"p"},"git pull")," from ",(0,a.mdx)("inlineCode",{parentName:"p"},"upstream")," gets the latest\nchanges from the CacheLib team."),(0,a.mdx)("p",null,"First step, check which remote sources are defined in your local repository:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git remote show\norigin\n\n$ git remote show origin | grep Fetch\nFetch URL: git@github.com:agordon/CacheLib.git\n")),(0,a.mdx)("p",null,"In the above example, there is only one remote source (named ",(0,a.mdx)("inlineCode",{parentName:"p"},"origin"),")\nand it points to a personal (",(0,a.mdx)("em",{parentName:"p"},"agordon"),"'s) forked repository."),(0,a.mdx)("p",null,"To add a second remote source, run the following command:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git remote add upstream git@github.com:facebook/CacheLib.git\n$ git remote show\norigin\nupstream\n")),(0,a.mdx)("p",null,"Synchronize all remote sources:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git fetch --all\nFetching origin\nFetching upstream\nFrom github.com:facebook/CacheLib\n* [new branch]        gh-pages                         -> upstream/gh-pages\n* [new branch]        main                             -> upstream/main\n")),(0,a.mdx)("p",null,"Checkout the updated ",(0,a.mdx)("inlineCode",{parentName:"p"},"main")," branch from the upstream source, overwriting the\nexisting local ",(0,a.mdx)("inlineCode",{parentName:"p"},"main")," branch (if it exists):"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git checkout -B main upstream/main\nReset branch 'main'\nYour branch is up to date with 'upstream/main'.\n")),(0,a.mdx)("p",null,"Now update (",(0,a.mdx)("inlineCode",{parentName:"p"},"git push --force"),') your github fork, with the updated "main" branch content:'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git push --force --set-upstream origin main:main\nTotal 0 (delta 0), reused 0 (delta 0)\nremote:\nremote: Create a pull request for 'main' on GitHub by visiting:\nremote:      https://github.com/agordon/CacheLib/pull/new/main\nremote:\nTo github.com:agordon/CacheLib.git\n* [new branch]        main -> main\n")),(0,a.mdx)("p",null,'You can now delete the old "master" branch from your forked repository.'),(0,a.mdx)("p",null,"The following command deletes a remote branch. If it fails with the following error:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git push --delete origin master\nTo github.com:agordon/CacheLib.git\n! [remote rejected]   master (refusing to delete the current branch: refs/heads/master)\nerror: failed to push some refs to 'git@github.com:agordon/CacheLib.git'\n")),(0,a.mdx)("p",null,'This means that on your local github forked repository, you did not\nyet change the default branch from "master" to "main" (as the CacheLib\nrepository did on August 12, 2021).'),(0,a.mdx)("p",null,'Go to the "settings" page of your forked CacheLib github repository\n(i.e. ',(0,a.mdx)("inlineCode",{parentName:"p"},"https://github.com/USERNAME/CacheLib/settings/branches"),'),\nselect "branches" (from the left-side menu bar), then change the\n"Default Branch" settings from "master" to "main".'),(0,a.mdx)("p",null,"Now try the command again:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git push --delete myfork master\nTo github.com:agordon/CacheLib.git\n- [deleted]           master\n")),(0,a.mdx)("p",null,'You can also delete the local "master" branch, as it is no longer needed:'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ git branch -D master\nDeleted branch master (was a19b4c0a).\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[4013],{46165:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(63366),r=n(67294),l=n(86010),c=n(33516),i=n(36742),s="sidebar_q+wC",o="sidebarItemTitle_9G5K",u="sidebarItemList_6T4b",m="sidebarItem_cjdF",f="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",v=n(24973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.default)(s,"thin-scrollbar"),"aria-label":(0,v.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.default)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:u},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(i.default,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var h=n(571),b=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,n=e.toc,i=e.children,s=(0,a.Z)(e,b),o=t&&t.items.length>0;return r.createElement(c.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(g,{sidebar:t})),r.createElement("main",{className:(0,l.default)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&r.createElement("div",{className:"col col--2"},r.createElement(h.default,{toc:n})))))}},70094:function(e,t,n){n.r(t);var a=n(67294),r=n(46165),l=n(6584),c=n(941);t.default=function(e){var t=e.tags,n=e.sidebar,i=(0,c.translateTagsPageTitle)();return a.createElement(r.Z,{title:i,wrapperClassName:c.ThemeClassNames.wrapper.blogPages,pageClassName:c.ThemeClassNames.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,i),a.createElement(l.Z,{tags:Object.values(t)}))}},571:function(e,t,n){n.r(t),n.d(t,{TOCHeadings:function(){return d},default:function(){return v}});var a=n(67294),r=n(86010),l=n(941);function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e){var t,n=e.anchorTopOffset,a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((function(e){return c(e).top>=n}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null:a[a.length-1]}function s(){var e=(0,a.useRef)(0),t=(0,l.useThemeConfig)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var o=function(e){var t=(0,a.useRef)(void 0),n=s();(0,a.useEffect)((function(){var a=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=i({anchorTopOffset:n.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},u="tableOfContents_vrFS",m="table-of-contents__link",f={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function d(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return o(f),a.createElement("div",{className:(0,r.default)(u,"thin-scrollbar")},a.createElement(d,{toc:t}))}},37211:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),l=n(36742),c="tag_WK-t",i="tagRegular_LXbV",s="tagWithCount_S5Zl";var o=function(e){var t,n=e.permalink,o=e.name,u=e.count;return a.createElement(l.default,{href:n,className:(0,r.default)(c,(t={},t[i]=!u,t[s]=u,t))},o,u&&a.createElement("span",null,u))}},6584:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(37211),l=n(941),c="tag_7kA+";function i(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:c},a.createElement(r.Z,e))}))),a.createElement("hr",null))}var s=function(e){var t=e.tags,n=(0,l.listTagsByLetters)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(i,{key:e.letter,letterEntry:e})})))}}}]);
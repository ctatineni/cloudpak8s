(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),o=a("NmYn"),i=a.n(o),c=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,o=r.subDirectory,i=l+"/edit/"+r.branch+o+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},N=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),l=r===n,o=new RegExp(n+"(?!-)"),c=a.replace(o,r);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(g.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},n}(l.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,m=t.titleType,O=s.tabs,j=s.title,g=s.theme,f=s.description,y=s.keywords,x=n.data.site.pathPrefix,C=x?r.pathname.replace(x,""):r.pathname,I=O?C.split("/").filter(Boolean).slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:O,homepage:!1,theme:g,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:m},Object(u.b)(d,{title:l?Object(u.b)(l,null):j,label:"label",tabs:O}),O&&Object(u.b)(v,{slug:C,tabs:O,currentTab:I}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(N.a,{pageContext:t,location:r,slug:C,tabs:O,currentTab:I}),Object(u.b)(c.a,null))}},MZyJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},c=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,l({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#begin-installation"}),"Begin Installation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",l({parentName:"li"},{href:"#validate-installation"}),"Validate Installation"))),Object(n.b)("h3",null,"Introduction"),Object(n.b)("p",null,"This page contains guidance on how to configure the Datapower Gateway\nrelease for both on-prem and IBM Cloud.  Note - you do not need to install this\nchart unless you are using DataPower as a standalone capability.",Object(n.b)("br",{parentName:"p"}),"\n","When you install API Connect, it installs its own version of this chart\nas part of the APIC Cluster."),Object(n.b)("h3",null,"Prepare Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Change project to eventstreams"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc project datapower\n")))),Object(n.b)("h3",null,"Begin Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to CP4I Platform Home. Click ",Object(n.b)("strong",{parentName:"li"},"Create instance")," inside the\n",Object(n.b)("strong",{parentName:"li"},"DataPower")," tile.  "),Object(n.b)("li",{parentName:"ol"},"A window will pop up with a description of the requirements for\ninstalling. Click ",Object(n.b)("strong",{parentName:"li"},"Continue")," to the helm chart deployment configuration.     "),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Overview")," to view the chart information and pre-reqs that were\ncovered in ",Object(n.b)("a",l({parentName:"li"},{href:"#prepare-installation"}),"Prepare Installation"),"."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Configure")),Object(n.b)("li",{parentName:"ol"},"Enter the Helm release name. In our example, ",Object(n.b)("strong",{parentName:"li"},"datapower")),Object(n.b)("li",{parentName:"ol"},"Enter Target Namespace - ",Object(n.b)("strong",{parentName:"li"},"datapower")),Object(n.b)("li",{parentName:"ol"},"Select a Cluster - ",Object(n.b)("strong",{parentName:"li"},"local-cluster"),"."),Object(n.b)("li",{parentName:"ol"},"Check the license agreement. "),Object(n.b)("li",{parentName:"ol"},"Under Parameters click ",Object(n.b)("strong",{parentName:"li"},"All Parameters")," to expand. ",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Ingress - icp-proxy address defined during icp / common-services\ninstallation - icp-proxy.","<","openshift-router-domain",">","  "),Object(n.b)("li",{parentName:"ol"},"Image Pull Secret - Set to ",Object(n.b)("inlineCode",{parentName:"li"},"ibm-entitlement-key")," if using entitled\nregistry or if offline use the ",Object(n.b)("inlineCode",{parentName:"li"},"deployer-dockercfg-XX")," secret in your\ndatapower namespace.  Use ",Object(n.b)("inlineCode",{parentName:"li"},"oc get secrets")," to get the exact value for\nyour environment."))),Object(n.b)("li",{parentName:"ol"},"Scroll down to External access settings - enter the proxy\naddress - ",Object(n.b)("strong",{parentName:"li"},"icp-proxy.","<","openshift-router-domain",">",".")),Object(n.b)("li",{parentName:"ol"},"Note:  If you want to enable access to the WebUI and XML/Rest\nInterfaces for your datapower instance, you will need to change those\nmanually.  Otherwise, they will default to disabled."),Object(n.b)("li",{parentName:"ol"},"Scroll to the bottom. Click ",Object(n.b)("strong",{parentName:"li"},"Install"),".")),Object(n.b)("h3",null,"Validate Installation"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"check pods using the command line",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",l({parentName:"pre"},{}),"oc get pods -n datapower\nNAME                                      READY     STATUS    RESTARTS   AGE\ndp-1-ibm-datapower-icp4i-fb888677-mvd9q   1/1       Running   0          3m\n")))))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-deploy-secure-gateway-index-mdx-892b50f83f069f3b7f83.js.map
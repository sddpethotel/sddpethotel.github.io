import{c as l,h as i,a as p}from"./QBtn.9996c0f7.js";import{t as n,m as d,a as h,_ as m,o,c as t,f as c,w as b,k as u,j as _,a7 as g,e as s}from"./index.dda7049c.js";const x=n("div",{class:"q-space"});var y=l({name:"QSpace",setup(){return()=>x}}),k=l({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const r=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>n("div",{class:r.value,role:"toolbar"},i(a.default))}});const f=h({name:"DashboardToolbar",props:["title","hide_back_button"]}),v={class:"bg-green-4 title-head",style:{"border-radius":"0 0 25px 25px","z-index":"100","box-shadow":"rgba(0, 0, 0, 0.4) 0px 0px 8px inset"}},w={key:1,style:{"font-size":"24px"}},$={key:2,class:"col-6"},q=s("img",{class:"q-pt-sm",style:{"max-height":"36px",opacity:"1"},src:"https://imageserver.thebaguiocountryclub.com/pethotel/logos/cute.png"},null,-1),B=[q],Q=["src"],C=["src"];function D(e,a,r,S,T,z){return o(),t("div",v,[c(k,{class:"q-pa-xs"},{default:b(()=>[e.hide_back_button?_("",!0):(o(),u(p,{key:0,color:"black",icon:"arrow_back","router-link":"",to:"/dashboard",class:"q-mr-md",size:"12px",round:""})),e.title?(o(),t("div",w,g(e.title),1)):(o(),t("div",$,B)),c(y),s("img",{src:`${e.$mediaURL}/pethotel/logos/pethotel.webp`,style:{height:"52px",opacity:"1"}},null,8,Q),s("img",{src:`${e.$mediaURL}/bcc/320/bcc_logo.webp`,style:{height:"52px",opacity:"1"}},null,8,C)]),_:1})])}var L=m(f,[["render",D]]);export{L as D,y as Q,k as a};

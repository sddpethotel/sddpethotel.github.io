import{api as i}from"./axios.13cf03e6.js";function p(e,t,a){i.get(e).then(n=>{const f=n.data;t.length=0,f.forEach(o=>{t.push(o)}),a&&a()})}function h(e,t,a,n,f){i.post(e,t,{headers:a}).then(o=>{n&&n(),console.log(o),f!==!1&&location.reload()}).catch(o=>{console.log(o)})}export{p as g,h as p};

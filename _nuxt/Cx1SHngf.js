import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./M0VkZoJE.js";import{u as d}from"./D2jAv2J-.js";import f from"./BPxso6jb.js";import y from"./Vk2lEPIP.js";import"./DSNeRykp.js";import"./m1qop69g.js";import"./CjB4B04g.js";import"./DlzIEgzU.js";import"./BeUK6lQA.js";import"./Bj8JSf7T.js";import"./ByNBOVN6.js";import"./DfzhkieS.js";import"./Dvb1Fu2f.js";import"./DWTF5QrG.js";import"./B6qNlAVd.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-04bb036e"]]);export{V as default};

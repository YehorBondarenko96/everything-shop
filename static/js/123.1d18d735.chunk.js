"use strict";(self.webpackChunkeverything_shop=self.webpackChunkeverything_shop||[]).push([[123],{236:(e,n,t)=>{t.d(n,{Z:()=>h});var r,i,o=t(168),s=t(690);const l=s.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  overflow-y: auto;\n  z-index: 2;\n  box-sizing: border-box;\n"]))),c=s.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  border-radius: 10px;\n  background-color: #fff;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  overflow-y: auto;\n"])));var d=t(791),a=t(689),u=t(420),p=t(580),x=t(184);const h=e=>{let{children:n}=e;const t=(0,u.v9)(p.aD),r=(0,a.s0)(),i=(0,d.useRef)(null),o=(0,d.useRef)(null);return(0,d.useEffect)((()=>{if(i.current&&o.current){const e=t>1e3?1e3:t,n=2,s=i.current,l=o.current;l.style.padding="".concat(e/(21*n),"px ").concat(e/(10*n),"px"),l.style.height="".concat(e/(1.2*n),"px");const c=e=>{e.target.classList.contains("backdropChair")&&d()},d=()=>{window.removeEventListener("keydown",a),s.removeEventListener("click",c),r("/")},a=e=>{"Escape"===e.code&&d()};return window.addEventListener("keydown",a),s.addEventListener("click",c),()=>{window.removeEventListener("keydown",a)}}}),[r,t]),(0,x.jsx)(l,{ref:i,className:"backdropChair",children:(0,x.jsx)(c,{ref:o,children:n})})}},123:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Se});var r,i,o=t(236),s=t(420),l=t(949),c=t(580),d=t(689),a=t(168),u=t(690);const p=u.ZP.div(r||(r=(0,a.Z)(["\nheight: 100%;\noverflow-y: auto;\nscrollbar-width: none; \n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n  display: none;\n"]))),x=u.ZP.ul(i||(i=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\n"])));var h,f,y;const g=u.ZP.li(h||(h=(0,a.Z)(["\npadding: 1px;\nborder: 0.5px solid transparent;\n"]))),Z=u.ZP.button(f||(f=(0,a.Z)(["\nwidth: 100%;\nheight: 100%;\npadding: 0;\nmargin: 0;\nborder: 0;\noverflow: hidden;\n"]))),b=u.ZP.img(y||(y=(0,a.Z)(["\nwidth: 100%;\nheight: 100%;\nobject-fit: cover;\n"])));var v=t(791),j=t(184);const w=e=>{let{id:n,photo:t,alt:r,ulPhotos:i,heightUlPhotos:o}=e;const d=(0,s.I0)(),a=(0,s.v9)(c.aD),u=(0,s.v9)(c.qD),p=(0,v.useRef)(null),x=(0,v.useRef)(null);return(0,v.useEffect)((()=>{if(x.current&&p.current){const e=a>1e3?1e3:a,n=2,r=x.current,s=p.current;if(r.style.width=e/(7*n)+"px",r.style.height=e/(7*n)+"px",r.style.borderRadius=e/(70*n)+"px",s.style.borderRadius=e/(70*n)+"px",u===t&&i&&o>0){const e=i.getBoundingClientRect().top,n=r.getBoundingClientRect().top,t=r.offsetHeight,s=i.scrollTop-(o/2-t/2+(e-n));i.style.scrollBehavior="smooth",i.scrollTop=s}}}),[a,t,u,i,o]),(0,j.jsx)(g,{ref:x,style:{borderColor:u===t&&"#a7a7a7"},children:(0,j.jsx)(Z,{ref:p,type:"button",onClick:()=>{const e={id:n,titleImage:t};d((0,l.xo)(e))},children:(0,j.jsx)(b,{src:t,alt:r})})})},m=e=>{let{id:n,photos:t,title:r}=e;const[i,o]=(0,v.useState)(0),l=(0,s.v9)(c.aD),d=(0,v.useRef)(null),a=(0,v.useRef)(null);return(0,v.useEffect)((()=>{if(d.current&&a.current){const e=l>1e3?1e3:l,n=2,t=d.current;a.current.style.gap=e/(50*n)+"px",setTimeout((()=>{o(t.offsetHeight)}),0)}}),[l]),(0,j.jsx)(p,{ref:d,children:(0,j.jsx)(x,{ref:a,className:"ulPhotos",children:t&&t.map((e=>(0,j.jsx)(w,{id:n,photo:e,alt:r,ulPhotos:d.current,heightUlPhotos:i},e)))})})};var P,k,C,R,z,I,E,S,_,D,N,B,L,T,Q,q;const U=u.ZP.div(P||(P=(0,a.Z)(["\ndisplay: flex;\n"]))),H=u.ZP.div(k||(k=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nheight: 100%;\n"]))),O=u.ZP.button(C||(C=(0,a.Z)(["\nbackground-color: transparent;\n"]))),A=u.ZP.svg(R||(R=(0,a.Z)(["\n  width: ",";\n  height: ",";\n  fill: ",";\n  display: inline-block;\n"])),(e=>e.size||"12px"),(e=>e.size||"12px"),(e=>e.color||"#000")),V=u.ZP.div(z||(z=(0,a.Z)(["\nheight: 100%;\n"]))),W=u.ZP.img(I||(I=(0,a.Z)(["\nwidth: 100%;\nobject-fit: cover;\n"]))),F=u.ZP.div(E||(E=(0,a.Z)(["\nbackground-color: #f6f6f6;\n  overflow-y: auto;\n  border-radius: 5px;\n"]))),J=u.ZP.h1(S||(S=(0,a.Z)(["\nfont-weight: 400;\n"]))),G=u.ZP.p(_||(_=(0,a.Z)(["\nfont-weight: 700;\n"]))),K=u.ZP.span(D||(D=(0,a.Z)(["\ntext-decoration: line-through;\n"]))),M=u.ZP.p(N||(N=(0,a.Z)(["\ncolor: #a7a7a7;\n"]))),X=u.ZP.div(B||(B=(0,a.Z)(["\nborder-top: 1px solid #a7a7a7;\n"]))),Y=u.ZP.h3(L||(L=(0,a.Z)(["\ncolor: #a7a7a7\n"]))),$=u.ZP.div(T||(T=(0,a.Z)(["\ndisplay: flex;\nflex-direction: column;\n"]))),ee=u.ZP.div(Q||(Q=(0,a.Z)(["\ndisplay: flex;\ngap: 14px;\n\n@media(max-width: 700px){\n  gap: 10px;\n};\n"]))),ne=u.ZP.button(q||(q=(0,a.Z)(["\nwidth: 100%;\nborder: 0;\nbackground-color: #525252;\ncolor: #ffffff;\ntransition: background-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);\n\n&:hover{\n  background-color: #393939;\n}\n"])));var te,re,ie,oe,se,le=t(561);const ce=u.ZP.div(te||(te=(0,a.Z)([""]))),de=u.ZP.p(re||(re=(0,a.Z)([""]))),ae=u.ZP.ul(ie||(ie=(0,a.Z)(["\ndisplay: flex;\ngap: 14px;\n\n@media(max-width: 700px){\n  gap: 10px;\n}\n"]))),ue=u.ZP.li(oe||(oe=(0,a.Z)(["\nwidth: 18px;\nheight: 18px;\npadding: 1px;\nborder: 0.5px solid transparent;\n\n@media(max-width: 700px){\n  width: 12px;\n  height: 12px;\n}\n"]))),pe=u.ZP.button(se||(se=(0,a.Z)(["\nwidth: 100%;\nheight: 100%;\n"]))),xe=e=>{let{id:n}=e;const t=(0,s.I0)(),r=(0,s.v9)(c.h3),i=e=>{const r=e.currentTarget.id,i={id:n,color:r};t((0,l.vk)(i))};return(0,j.jsxs)(ce,{children:[(0,j.jsxs)(de,{children:["Color: ",r]}),(0,j.jsxs)(ae,{children:[(0,j.jsx)(ue,{style:{borderColor:"white"===r&&"#000000"},children:(0,j.jsx)(pe,{type:"button",id:"white",style:{backgroundColor:"#ffffff"},onClick:i})}),(0,j.jsx)(ue,{style:{borderColor:"yellow"===r&&"#000000"},children:(0,j.jsx)(pe,{type:"button",id:"yellow",style:{backgroundColor:"#ffff00"},onClick:i})}),(0,j.jsx)(ue,{style:{borderColor:"green"===r&&"#000000"},children:(0,j.jsx)(pe,{type:"button",id:"green",style:{backgroundColor:"#596B46"},onClick:i})}),(0,j.jsx)(ue,{style:{borderColor:"gray"===r&&"#000000"},children:(0,j.jsx)(pe,{type:"button",id:"gray",style:{backgroundColor:"#767676"},onClick:i})})]})]})};var he,fe,ye;const ge=u.ZP.div(he||(he=(0,a.Z)([""]))),Ze=u.ZP.p(fe||(fe=(0,a.Z)([""]))),be=u.ZP.ul(ye||(ye=(0,a.Z)(["\ndisplay: flex;\ngap: 14px;\n\n@media(max-width: 700px){\n  gap: 10px;\n};\n"])));var ve,je;const we=u.ZP.li(ve||(ve=(0,a.Z)(["\nwidth: calc((100% - 14px)/2);\npadding: 1px;\nborder: 0.5px solid #a7a7a7;\nborder-radius: 2px;\nbackground-color: #ffffff;\n\n@media(max-width: 700px){\nwidth: calc((100% - 10px)/2);\n};\n"]))),me=u.ZP.button(je||(je=(0,a.Z)(["\nwidth: 100%;\nheight: 100%;\nbackground-color: transparent;\n"]))),Pe=e=>{let{size:n,id:t}=e;const r=(0,s.I0)(),i=(0,s.v9)(c.aD),o=(0,s.v9)(c.WI).selectedSize,d=(0,v.useRef)(null);return(0,v.useEffect)((()=>{if(d.current){const e=i>1e3?1e3:i,n=2;d.current.style.height=e/(27.78*n)+"px"}}),[i]),(0,j.jsx)(we,{ref:d,style:{borderColor:o===n&&"#000000"},children:(0,j.jsx)(me,{type:"button",onClick:e=>{const n=e.currentTarget.textContent,i={id:t,size:n};r((0,l.ZB)(i))},children:n})})},ke=e=>{let{id:n}=e;const t=(0,s.v9)(c.WI).sizes;return(0,j.jsxs)(ge,{children:[(0,j.jsx)(Ze,{children:"Size"}),(0,j.jsx)(be,{children:t.map(((e,t)=>(0,j.jsx)(Pe,{size:e,id:n},t)))})]})},Ce="QuantityInput_divInput__BlgNC",Re="QuantityInput_inputSavDr__hsrJ8",ze="QuantityInput_minBut__719N3",Ie="QuantityInput_plusBut__mVEnV",Ee=e=>{let{quantity:n,setQuantity:t}=e;const r=(0,s.v9)(c.aD),i=(0,v.useRef)(null),o=(0,v.useRef)(null),l=(0,v.useRef)(null);return(0,v.useEffect)((()=>{if(i.current&&o.current&&l.current){const e=r>1e3?1e3:r,n=3,t=i.current,s=o.current,c=l.current;t.style.width=e>450?e/(12*n)+"px":e/(25*n)+"px",t.style.height=e/(12*n)-2+"px",t.style.borderRadius=e/(100*n)+"px",t.style.fontSize=e/(30*n)+"px",s.style.height=e/(12*n)+"px",c.style.height=e/(12*n)+"px",s.style.width=e/(25*n)+"px",c.style.width=e/(25*n)+"px",s.style.fontSize=e/(20*n)+"px",c.style.fontSize=e/(20*n)+"px",s.style.right=e>900?e/(300*n)+"px":e/(150*n)+"px",c.style.left=e>900?e/(300*n)+"px":e/(150*n)+"px"}}),[r]),(0,j.jsxs)("div",{className:Ce,children:[(0,j.jsx)("button",{type:"button",ref:l,className:ze,onClick:()=>{const e=Number(n)-1;t(e>0?e:1)}}),(0,j.jsx)("input",{ref:i,className:Re,name:"quantity",type:"text",onInput:e=>{e.target.value=e.target.value.replace(/[^0-9]/g,"")},value:n,onChange:e=>{e.preventDefault();const n=e.target.value;t(n)}}),(0,j.jsx)("button",{type:"button",ref:o,className:Ie,onClick:()=>{const e=Number(n)+1;t(e>0?e:1)}})]})},Se=()=>{const e=(0,s.I0)(),{id:n}=(0,d.UO)(),[t,r]=(0,v.useState)(1),i=(0,s.v9)(c.a1).find((e=>e.id===n)),a=(0,s.v9)(c.aD),u=(0,v.useRef)(null),p=(0,v.useRef)(null),x=(0,v.useRef)(null),h=(0,v.useRef)(null),f=(0,v.useRef)(null),y=(0,v.useRef)(null),g=(0,v.useRef)(null),Z=(0,v.useRef)(null);return(0,v.useEffect)((()=>{if(u.current&&x.current&&h.current&&f.current&&y.current&&p.current&&g.current&&Z.current){const e=a>1e3?1e3:a,n=2,t=u.current,r=p.current,i=x.current,o=h.current,s=f.current,l=y.current,c=g.current,d=Z.current;t.style.height=e/(1.5*n)+"px",t.style.gap=e/(15*n)+"px",o.style.fontSize=e/(30*n)+"px",i.style.padding="".concat(e/(15*n),"px ").concat(e/(21*n),"px"),i.style.fontSize=e/(42*n)+"px",s.style.fontSize=e/(35*n)+"px",l.style.marginTop=e/(71.8*n)+"px",r.style.width=e/(1.5*n)+"px",c.style.marginBottom=e/(42*n)+"px",c.style.gap=e/(42*n)+"px",c.style.width=e/(1.4*n)+"px",d.style.height=e/(18*n)-1+"px",d.style.borderRadius=e/(150*n)+"px",d.style.fontSize=e/(40*n)+"px"}}),[a]),(0,j.jsx)(o.Z,{children:i&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(U,{ref:u,children:[(0,j.jsxs)(H,{children:[(0,j.jsx)(O,{children:(0,j.jsx)(A,{children:(0,j.jsx)("use",{href:"".concat(le.Z,"#arrow-up")})})}),(0,j.jsx)(m,{id:n,photos:i[i.color].images,title:i.title.toLowerCase()}),(0,j.jsx)(O,{children:(0,j.jsx)(A,{children:(0,j.jsx)("use",{href:"".concat(le.Z,"#arrow-down")})})})]}),(0,j.jsx)(V,{ref:p,children:(0,j.jsx)(W,{src:i[i.color].titleImage,alt:i.title.toLowerCase()})})]}),(0,j.jsxs)(F,{ref:x,children:[(0,j.jsx)(J,{ref:h,children:i.title}),(0,j.jsxs)(G,{ref:f,children:[(0,j.jsx)(K,{children:"".concat(i.price," UAH")})," ","".concat(i.newPrice," UAH")]}),(0,j.jsx)(M,{children:i.smollDescription}),(0,j.jsxs)($,{ref:g,children:[(0,j.jsx)(xe,{id:n}),(0,j.jsx)(ke,{id:n}),(0,j.jsxs)(ee,{children:[(0,j.jsx)(Ee,{quantity:t,setQuantity:r}),(0,j.jsx)(ne,{ref:Z,type:"button",onClick:()=>{const r={id:n,price:i.newPrice?i.newPrice:i.price,title:i.title,color:i.color,size:i.size.selectedSize,quantity:t};e((0,l.B4)(r))},children:"ORDER"})]})]}),(0,j.jsxs)(X,{children:[(0,j.jsx)(Y,{ref:y,children:"DESCRIPTION"}),i.description.map(((e,n)=>(0,j.jsx)(M,{children:e},n)))]})]})]})})}}}]);
//# sourceMappingURL=123.1d18d735.chunk.js.map
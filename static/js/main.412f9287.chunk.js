(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{105:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(94),a(66)),c=a(67),s=a(79),m=a(68),u=a(80),d=a(34),p=a(42),g=a(170),h=a(171),f=a(185),E=a(172),b=a(48),y=a.n(b),v=a(72),w=a.n(v),k=a(73),x=a.n(k),j=a(41),S=a.n(j),C=a(166),O=a(184),B=a(15),N=a.n(B);a(105);function M(e){var t=e.children,a=e.value,n=e.index,l=Object(p.a)(e,["children","value","index"]);return r.a.createElement(C.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},l),r.a.createElement(O.a,{p:3},t))}function I(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var R=Object(g.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function T(){var e=R(),t=r.a.useState(0),a=Object(d.a)(t,2),n=a[0],l=a[1],o=r.a.useState(["standard",!0]),i=Object(d.a)(o,2),c=i[0],s=i[1];r.a.useLayoutEffect((function(){function e(){window.innerWidth>500?s(["standard",!0]):s(["scrollable",!1])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var m=N.a.scroller,u=function(e){"about-me"===e?B.animateScroll.scrollToTop():m.scrollTo(e,{duration:800,delay:0,offset:-200,smooth:"easeInOutQuart"})};return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{color:"default",className:"tabs"},r.a.createElement(f.a,{value:n,onChange:function(e,t){l(t)},variant:c[0],scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example",centered:c[1]},r.a.createElement(E.a,Object.assign({onClick:function(){return u("about-me")},label:"About Me",icon:r.a.createElement(w.a,null)},I(0))),r.a.createElement(E.a,Object.assign({onClick:function(){return u("projects")},label:"Projects",icon:r.a.createElement(y.a,null)},I(1))),r.a.createElement(E.a,Object.assign({onClick:function(){return u("skill")},label:"Skill",icon:r.a.createElement(y.a,null)},I(3))),r.a.createElement(E.a,Object.assign({onClick:function(){return u("contact-me")},label:"Contact Me",icon:r.a.createElement(x.a,null)},I(4))),r.a.createElement(E.a,Object.assign({onClick:function(){return u("resume")},label:"Find Me",icon:r.a.createElement(S.a,null)},I(5))))),r.a.createElement(M,{value:n,index:0},"About Me"),r.a.createElement(M,{value:n,index:1},"Project"),r.a.createElement(M,{value:n,index:2},"Experience"),r.a.createElement(M,{value:n,index:3},"Skill"),r.a.createElement(M,{value:n,index:4}),r.a.createElement(M,{value:n,index:5},"Resume"))}a(109);var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase"}}),r.a.createElement("div",{className:"name"},r.a.createElement("img",{src:"https://media.discordapp.net/attachments/762721371809382421/793101111309500466/11334138_10204951267766836_8466014935568855448_o.jpg?width=473&height=473",alt:"profile_photo",className:"img"}),r.a.createElement("h1",{style:{fontWeight:"lighter"}},"Ameed Asmah"),r.a.createElement("div",{className:"subtitle"},r.a.createElement("h3",null,"I am a Front-End developer."),r.a.createElement("p",null,"Creating Beautiful things with quality and elegance! ",r.a.createElement("br",null),"My favourite technology is React"))))},A=a(174),D=[{image:"https://media.discordapp.net/attachments/763317063266729986/793144962908815380/unknown.png?width=1025&height=471",title:"Online School System",des:"full Stack Application using the python Django in the backend, react and redux in the frontend, it\u2019s about manage a School system, it has adminwith all control, portal for Students/Parents, Staff, Teachers, Classes, Subjects and Exams. ",tags:["React","Redux","typeScript","Django","Firebase","Cloudenary"],links:{github:"https://github.com/ameedasmah/OnlineSchoolSystem"}},{image:"https://media.discordapp.net/attachments/763370844180185148/821173077719253042/unknown.png",title:"Twitter",des:"Full Stack Application using the python Django in the backend, react and redux in the frontend, you can create your own Tweets, Twitter user follow other users. If you follow someone you can see their tweets on your home page, you can see all user\u2019s Tweets on Explore page, you can add like, comments, and bookmark other tweets, and you can search on other people's profile.",tags:["React","Redux","Django","Cloudinary","Djoser"],links:{launch:"https://tweeeeeter.herokuapp.com/home",github:"https://github.com/ameedasmah/Tweetler.git"}},{image:"https://media.discordapp.net/attachments/763317063266729986/793145544268578816/unknown.png?width=911&height=473",title:"HotelCom",des:"A MERN-stack project that allows you use a hotels API prewiring the hotels of a specific city and country and being able to add it toBookmarks and add favorites, and in the profile page you will be able to make payments throw Stripe API, there also authentication and authorization using JWT and hashing the password using bcrybt.",tags:["nodejs","ReactJ","Express","mongoDb","jwt","Api"],links:{launch:"https://raptors-hotels.herokuapp.com/",github:"https://github.com/ameedasmah/green-field-project"}},{image:"https://media.discordapp.net/attachments/762737273128353841/792798697003548732/Capture11.png?width=833&height=473",title:"Laflefne",des:"MERN Stack Application with JWT authentication letting users to see the places in Palestine, and to book a trip, the users who want to book the same trip can make  chat with each other. ",tags:["React","Express","mongoDb","Nodejs"],links:{launch:"https://laflefne.herokuapp.com/",github:"https://github.com/ameedasmah/laflefne"}},{image:"https://media.discordapp.net/attachments/763317063266729986/793141749849522186/unknown.png?width=1025&height=472",title:"WhatsappMessenger",des:"A MERN-Stack project that allows you to send the data and save it database using MongoAtlas,  It's appear in front-end page.In this project I used  React in front-end and I used material Ui in Design",tags:["React","Express","mongoDb","CSS"],links:{github:"https://github.com/ameedasmah/whatsapp_challenge"}}],L=a(186),z=a(175),_=a(176),P=a(177),W=a(178),J=a(179),Q=a(180),G=a(181),U=a(182),q=a(173),H=(a(110),function(e){var t=e.project,a=e.handleClose,l=function(e){"Escape"===e.key&&a()};return Object(n.useEffect)((function(){return window.addEventListener("keydown",l),function(){return window.removeEventListener("onkeydown",l)}})),r.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto",margin:"0",zIndex:"100",display:"flex",backgroundColor:"rgba(100, 100, 100, 0.4)"}},r.a.createElement("div",{className:"modal"},r.a.createElement(C.a,{gutterBottom:!0,variant:"h6",component:"h2",style:{display:"flex",justifyContent:"center",alignItems:"center"}},t.title),r.a.createElement(C.a,{gutterBottom:!0,variant:"body2",component:"p",style:{display:"flex",justifyContent:"center",alignItems:"center"}},t.des),r.a.createElement(q.a,{variant:"outlined",color:"primary",onClick:a},"Close")))});a(111);function Z(e){var t=e.project,a=r.a.createRef(),l=Object(n.useState)(t.des),o=Object(d.a)(l,2),i=o[0],c=o[1],s=Object(n.useState)(!1),m=Object(d.a)(s,2),u=m[0],p=m[1],g=function(){c(13*t.des.length<=10*a.current.offsetWidth?t.des:t.des.slice(0,10*a.current.offsetWidth/15).trim()+"...")};Object(n.useEffect)((function(){return g(),window.addEventListener("resize",g),function(){return window.removeEventListener("resize",g)}}));return r.a.createElement(A.a,{item:!0,xs:12,sm:6,md:6,lg:4,xl:2},r.a.createElement(z.a,null,r.a.createElement(_.a,{component:"img",className:"project-image",alt:t.title,image:t.image,title:t.title}),r.a.createElement(P.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"h6",component:"h2",className:"one-line"},t.title),r.a.createElement(C.a,{variant:"body2",component:"p",className:"description",ref:a,gutterBottom:!0},i),r.a.createElement("div",{className:"chip-container"},t.tags.map((function(e,t){return r.a.createElement(L.a,{className:"chip",size:"small",label:e,color:"primary",key:t})})))),r.a.createElement(W.a,{disableSpacing:!0,className:"card-actions"},r.a.createElement(J.a,{title:"More Info","aria-label":"More Info",onClick:function(){p(!0)}},r.a.createElement(Q.a,null)),u?r.a.createElement(H,{project:t,handleClose:function(){p(!1)}}):null,t.links.launch?r.a.createElement(J.a,{title:"Launch App","aria-label":"Launch Application",href:t.links.launch},r.a.createElement(G.a,null)):r.a.createElement("div",null),r.a.createElement(J.a,{title:"See Code","aria-label":"Source Code On Github",href:t.links.github},r.a.createElement(U.a,null)))))}var K=Object(g.a)({"spacing-xs-4":{width:"inherit",margin:0}});function V(){var e=K();return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{id:"projects",variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase",fontFamily:"'Bungee',cursive"}},r.a.createElement(B.Element,{name:"projects"},"Projects")),r.a.createElement(A.a,{container:!0,spacing:4,style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},classes:{"spacing-xs-4":e["spacing-xs-4"]}},D.map((function(e,t){return r.a.createElement(Z,{project:e,key:t})}))))}var Y=a(33),$=(a(112),[{name:"Python",value:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"},{name:"Django",value:"https://icon-library.com/images/django-icon/django-icon-0.jpg"},{name:"MySQL/PostgreSQL",value:"https://icons-for-free.com/iconfiles/png/512/file+sql+icon-1320183612970878250.png"},{name:"React",value:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"},{name:"JavaScript",value:"https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"},{name:"HTML/CSS",value:"https://media.discordapp.net/attachments/762721371809382421/793153790260805712/html5-css3.png"},{name:"TypeScript",value:"https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"},{name:"C++",value:"https://img.icons8.com/color/452/c-plus-plus-logo.png"},{name:"MongoDB",value:"https://img.icons8.com/color/452/mongodb.png"},{name:"Firebase",value:"https://img.icons8.com/color/452/firebase.png"},{name:"Material-Ui",value:"https://miro.medium.com/max/560/1*jZtQFMYGgMvRkIje-Rm1gQ.png"}]);function X(e){e.skill;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase",fontFamily:'"Bungee", cursive'}},r.a.createElement(B.Element,{name:"skill"},"Skills")),r.a.createElement("div",{className:"skill-container"},$.map((function(e,t){return r.a.createElement("div",{className:"skill-img",key:t},r.a.createElement(Y.a,{titleAccess:e.name}),r.a.createElement("img",{src:e.value,style:{width:"auto",height:"100%"},className:"svg-icon",viewBox:"0 0 24 24",color:"primary"}))}))))}var ee=a(183),te=a(74),ae=a.n(te);a(130);function ne(){var e=function(e){e.preventDefault();var t=document.getElementById("name").value,a=document.getElementById("email").value,n=document.getElementById("message").value;ae()({method:"POST",url:"URLOFBACKEND/email",data:{name:t,email:a,message:n}}).then((function(e){console.log("response:",e),"success"===e.data.message?(alert("Message Sent."),document.getElementById("contact-form").reset()):"fail"===e.data.msg&&alert("Message failed to send.")}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{variant:"h2",display:"block",align:"center",id:"contact-us",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase",fontFamily:'"Bungee", cursive'}},r.a.createElement(B.Element,{name:"contact-me"},"Contact Me")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},r.a.createElement("form",{onSubmit:function(t){return e(t)},className:"contact-form",id:"contact-form",style:{backgroundColor:"#fff",display:"flex",flexDirection:"column",padding:"25px",borderRadius:"10px"}},r.a.createElement(ee.a,{label:"Name",type:"text",margin:"normal",variant:"outlined",id:"name",placeholder:"Enter your name"}),r.a.createElement(ee.a,{label:"Email",type:"email",id:"email",margin:"normal",variant:"outlined",placeholder:"Enter your email"}),r.a.createElement(ee.a,{label:"Message",id:"message",multiline:!0,margin:"normal",variant:"outlined",placeholder:"Enter your message"}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(q.a,{variant:"outlined",color:"primary",size:"large",type:"submit",style:{width:"50%",marginTop:"15px"}},"Send")))))}var re=a(75),le=a.n(re),oe=a(76),ie=a.n(oe),ce=a(77),se=a.n(ce),me=a(78),ue=a.n(me);function de(){return r.a.createElement(C.a,{variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"35px",textTransform:"uppercase",fontFamily:'"Bungee", cursive'}},r.a.createElement(B.Element,{name:"resume"},"Find Me"),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px",marginTop:"35px"}},r.a.createElement("a",{href:"https://drive.google.com/file/d/1Zwx3Gbu6WwkP4_bkQ_COlV80Qx1SwJtj/view?usp=sharing",target:"_blank",rel:"noreferrer"},r.a.createElement(S.a,{style:{height:"60px",width:"120px"},color:"primary"})),r.a.createElement("a",{href:"https://github.com/ameedasmah",target:"_blank",rel:"noreferrer"},r.a.createElement(le.a,{color:"primary",style:{paddingLeft:"6px",paddingRight:"6px",height:"60px",width:"120px"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ameed-asmah-1532431b7/",target:"_blank",rel:"noreferrer"},r.a.createElement(ie.a,{color:"primary",style:{height:"60px",width:"120px"}}))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"20px",fontSize:"19px",fontFamily:"Work Sans"}},r.a.createElement("div",null,r.a.createElement(se.a,{color:"primary"}),": (+970)-599-043-747"),r.a.createElement("div",null,r.a.createElement(ue.a,{color:"primary"}),"ameed.asmah1@gmail.com")))}a(131);var pe=Object(g.a)({bg:{background:"rgb(256, 256, 256, 0.6)",padding:"50px 5%",borderTop:"1px solid rgba(0, 0, 0, 0.13)",borderBottom:"1px solid rgba(0, 0, 0, 0.13)",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2)"},noBg:{background:"none",padding:"50px 5%"}});function ge(e){var t=e.bg,a=Object(p.a)(e,["bg"]),n=pe(),l=t?n.bg:n.noBg;return r.a.createElement("div",{className:l},a.children)}var he=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(ge,null,r.a.createElement(F,null)),r.a.createElement(ge,{bg:!0},r.a.createElement(V,null)),r.a.createElement(ge,{bg:!0},r.a.createElement(X,null)),r.a.createElement(ge,null,r.a.createElement(ne,null)),r.a.createElement(ge,null,r.a.createElement(de,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){e.exports=a(132)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.412f9287.chunk.js.map
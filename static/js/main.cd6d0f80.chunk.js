(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/myPhoto.fc588e40.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/html.b83d2575.svg"},116:function(e,t,a){e.exports=a.p+"static/media/js.3f047bc1.svg"},117:function(e,t,a){e.exports=a.p+"static/media/react.d62cf863.svg"},118:function(e,t,a){e.exports=a.p+"static/media/ts.9cea5b2f.svg"},119:function(e,t,a){e.exports=a.p+"static/media/redux.49e2c31f.svg"},120:function(e,t,a){e.exports=a.p+"static/media/counter.f162c074.PNG"},121:function(e,t,a){e.exports=a.p+"static/media/ToDoList.9bc2c7ca.PNG"},122:function(e,t,a){e.exports=a.p+"static/media/react-table.6311dcc0.PNG"},123:function(e,t,a){e.exports=a.p+"static/media/SocialNetwork.e980397f.PNG"},124:function(e,t,a){e.exports=a.p+"static/media/constructor.37649434.PNG"},125:function(e,t,a){e.exports=a.p+"static/media/linkedin.0fa64925.svg"},126:function(e,t,a){e.exports=a.p+"static/media/tutby.3aacd88d.svg"},127:function(e,t,a){e.exports=a.p+"static/media/mail.97affe1c.svg"},128:function(e,t,a){e.exports=a.p+"static/media/phone.95c8625d.svg"},129:function(e,t,a){e.exports=a.p+"static/media/telegram.979d1c87.svg"},132:function(e,t,a){e.exports=a(375)},137:function(e,t,a){},168:function(e,t,a){},20:function(e,t,a){e.exports={navMenu:"NavMenu_navMenu__2MXBY",link:"NavMenu_link__hRRm6"}},21:function(e,t,a){e.exports={contacts:"Contact_contacts__3fxt5",container:"Contact_container__rk5NH",formWrapper:"Contact_formWrapper__2WMCX",formArea:"Contact_formArea__2NVKg",messageArea:"Contact_messageArea__7yplE",btnSubmit:"Contact_btnSubmit__3_uau"}},25:function(e,t,a){e.exports={menu_icon_wrapper:"Menu_menu_icon_wrapper__1f8JY",menu_icon:"Menu_menu_icon__3WcHv",menu_icon_active:"Menu_menu_icon_active__4axO5",header:"Menu_header__1DiBm",container:"Menu_container__r5z7j"}},26:function(e,t,a){e.exports={container:"SpecificProject_container__hGuns",projectImg:"SpecificProject_projectImg__1GWPx",backgroundImg:"SpecificProject_backgroundImg__1vNVl",btnLink:"SpecificProject_btnLink__2W55G",title:"SpecificProject_title__qcH0I",description:"SpecificProject_description__1-e6F"}},27:function(e,t,a){e.exports={about:"AboutMe_about__36LtY",moreInfo:"AboutMe_moreInfo__1Jjfg",hideInfo:"AboutMe_hideInfo__pLeKU",container:"AboutMe_container__UBnL6",btnShow:"AboutMe_btnShow__IE9da"}},34:function(e,t,a){e.exports={main:"Main_main__2zVbf",container:"Main_container__2ZliT",greeting:"Main_greeting__1WBbi",photo:"Main_photo__1BuQM"}},375:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(31),r=a.n(c),i=(a(137),a(10)),l=a(11),s=a(14),m=a(13),u=a(20),p=a.n(u),d=a(24);var f=function(){return o.a.createElement("div",{className:p.a.navMenu},o.a.createElement(d.Link,{className:p.a.link,to:"main",smooth:!0,offset:-70,duration:1e3},"Home"),o.a.createElement(d.Link,{className:p.a.link,to:"skills",smooth:!0,offset:-70,duration:1e3},"Skills"),o.a.createElement(d.Link,{className:p.a.link,to:"projects",smooth:!0,offset:-70,duration:1e3},"Projects"),o.a.createElement(d.Link,{className:p.a.link,to:"about",smooth:!0,offset:-70,duration:1e3},"About me"),o.a.createElement(d.Link,{className:p.a.link,to:"write",smooth:!0,offset:-70,duration:1e3},"Write me"),o.a.createElement(d.Link,{className:p.a.link,to:"contacts",smooth:!0,offset:-70,duration:1e3},"Contacts"))},_=a(25),b=a.n(_),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={menu:!1},e.burgerClick=function(){e.state.menu?e.setState({menu:!1}):e.setState({menu:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.menu?"".concat(b.a.menu_icon," ").concat(b.a.menu_icon_active):"".concat(b.a.menu_icon);return o.a.createElement("div",{onClick:this.burgerClick,className:b.a.menu_icon_wrapper},o.a.createElement("div",{className:e},o.a.createElement("div",{className:b.a.header},o.a.createElement("div",{className:b.a.container},o.a.createElement(f,null)))))}}]),a}(o.a.Component),E=a(34),g=a.n(E);var k=function(e){return o.a.createElement("div",{id:"main",className:g.a.main},o.a.createElement("div",{className:g.a.container},o.a.createElement("div",{className:g.a.greeting},o.a.createElement("span",null,"Hi There"),o.a.createElement("span",null,"I am ",o.a.createElement("span",null,"Vladislav Leshkov")),o.a.createElement("h1",null,"front-end developer")),o.a.createElement("div",{className:g.a.photo},o.a.createElement("img",{src:e.photo,alt:"myPhoto"}))))},v=a(45),N=a.n(v),j=a(46),y=a.n(j);var S=function(e){return o.a.createElement("div",{className:y.a.skill},o.a.createElement("div",{className:y.a.icon},o.a.createElement("img",{src:e.img,alt:"logo"})),o.a.createElement("h3",{className:y.a.skillTitle},e.skill))},O=a(65),w=a.n(O),M=a(12),x=a.n(M);var T=function(e){return o.a.createElement(x.a,{big:!0,cascade:!0},o.a.createElement("div",{className:w.a.titleBlock},o.a.createElement("div",null,e.title),o.a.createElement("div",{className:w.a.line})))},D=a(17),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.skills.map((function(e){return o.a.createElement(S,{key:e.id,skill:e.title,img:e.logo})}));return o.a.createElement("div",{id:"skills",className:N.a.skills},o.a.createElement(x.a,{bottom:!0,cascade:!0},o.a.createElement("div",{className:N.a.container},o.a.createElement(T,{title:"My skills"}),o.a.createElement("div",{className:N.a.listMySkills},e))))}}]),a}(o.a.Component),I=Object(D.b)((function(e){return{skills:e.reducer.portfolioData.skills}}))(P),C=a(47),A=a.n(C),L=a(26),F=a.n(L);var R=function(e){var t={backgroundImage:"url(".concat(e.img,")")};return o.a.createElement(x.a,{right:!0,cascade:!0},o.a.createElement("div",{className:F.a.container},o.a.createElement("div",{className:F.a.projectImg},o.a.createElement("div",{className:F.a.backgroundImg,style:t}," "),o.a.createElement("a",{className:F.a.btnLink,href:e.link,target:"_blank"},"Tap to view")),o.a.createElement("span",{className:F.a.title},e.title),o.a.createElement("span",{className:F.a.description},e.description,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",null,"Tap on the image to view it!"),o.a.createElement("br",null),o.a.createElement("span",null,"You can see source code ",o.a.createElement("a",{href:e.code,target:"_blank"},"here"),"."))))},B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.projects.map((function(e){return o.a.createElement(R,{key:e.id,title:e.title,img:e.img,description:e.description,link:e.link,code:e.code})}));return o.a.createElement("div",{id:"projects",className:A.a.projects},o.a.createElement("div",{className:A.a.container},o.a.createElement(T,{title:"My Works"}),o.a.createElement("div",{className:A.a.listMyProjects},e)))}}]),a}(o.a.Component),H=Object(D.b)((function(e){return{projects:e.reducer.portfolioData.projects}}))(B),Y=a(27),W=a.n(Y),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isHidden:!0},e.onShowAbout=function(){e.state.isHidden?e.setState({isHidden:!1}):e.setState({isHidden:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.isHidden?"Show":"Hide",t=this.state.isHidden?"".concat(W.a.moreInfo," ").concat(W.a.hideInfo):"".concat(W.a.moreInfo);return o.a.createElement("div",{id:"about",className:W.a.about},o.a.createElement("div",{className:W.a.container},o.a.createElement(T,{title:"More about me"}),o.a.createElement(x.a,{left:!0,cascade:!0},o.a.createElement("div",{className:t},o.a.createElement("p",null,"Let me tell you a few words about myself. "),o.a.createElement("p",null,"My name is Vladislav, I was born in 1998. I come from Belarus and live in ",o.a.createElement("mark",null,"Minsk"),"."),o.a.createElement("p",null,"I am a student of the ",o.a.createElement("mark",null,"Belarusian state University of Informatics and Radioelectronics"),", faculty of engineering and Economics, in my fifth year. I also studied at ",o.a.createElement("mark",null,"RS School and IT-incubator"),"."),o.a.createElement("p",null,"I have experience as a sales Manager and content Manager. I am ",o.a.createElement("mark",null,"looking for a job")," at the moment."),o.a.createElement("p",null,"If we talk about my professional qualities, I have extensive technical knowledge and attention to detail for ",o.a.createElement("mark",null,"bug-free software"),". A perfectionist by nature with methodical testing ability and ",o.a.createElement("mark",null,"good communication skills"),". People who know me well, say that I am a ",o.a.createElement("mark",null,"reliable")," person."),o.a.createElement("p",null,"If you want to contact me, use the form below, or the links in the site's footer.")),o.a.createElement("button",{onClick:this.onShowAbout,className:W.a.btnShow},e))))}}]),a}(o.a.Component),J=a(21),U=a.n(J),V=a(9),X=a(113),z=a(114),q=a.n(z),K=a(115),Q=a.n(K),Z=a(116),$=a.n(Z),ee=a(117),te=a.n(ee),ae=a(118),ne=a.n(ae),oe=a(119),ce=a.n(oe),re=a(120),ie=a.n(re),le=a(121),se=a.n(le),me=a(122),ue=a.n(me),pe=a(123),de=a.n(pe),fe=a(124),_e=a.n(fe),be="Portfolio/src/redux/reducer/UPDATE-NAME-FORM",he="Portfolio/src/redux/reducer/UPDATE-EMAIL-FORM",Ee="Portfolio/src/redux/reducer/UPDATE-MESSAGE-FORM",ge="Portfolio/src/redux/reducer/DISABLED-BUTTON-FORM",ke={portfolioData:{myPhoto:q.a,skills:[{id:1,title:"HTML&CSS",logo:Q.a},{id:2,title:"JAVASCRIPT",logo:$.a},{id:3,title:"REACT",logo:te.a},{id:4,title:"TYPESCRIPT",logo:ne.a},{id:5,title:"REDUX",logo:ce.a}],projects:[{id:1,title:"Social Network",img:de.a,description:"Social network from React-Redux YouTube course 'The way of samurai'.",link:"https://samurai98.github.io/SocialNetwork_reactJS/",code:"https://github.com/samurai98/SocialNetwork_reactJS"},{id:2,title:"To Do List",img:se.a,description:"Your personal planning Board.",link:"https://samurai98.github.io/ToDoList/",code:"https://github.com/samurai98/ToDoList"},{id:3,title:"React Table",img:ue.a,description:"This is a table project in react-table library!",link:"https://samurai98.github.io/react-table/",code:"https://github.com/samurai98/react-table"},{id:4,title:"Counter",img:ie.a,description:"This is a simple counter on React and Redux!",link:"https://samurai98.github.io/Counter/",code:"https://github.com/samurai98/Counter"},{id:5,title:"Constructor",img:_e.a,description:"Sites constructor in pure JS with using Classes and OOP!",link:"https://constructor-leshk.web.app/",code:"https://github.com/samurai98/constructor"}],contact:{name:"",email:"",message:"",buttonDisabled:!1},particlesSettings:{particles:{number:{value:50,density:{enable:!0,value_area:800}}}}}},ve=function(e){return{type:be,newTitle:e}},Ne=function(e){return{type:he,newTitle:e}},je=function(e){return{type:Ee,newText:e}},ye=function(e){return{type:ge,isDisabled:e}},Se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).sendMessageClick=function(t){e.props.contact.name&&e.props.contact.email&&e.props.contact.message?(e.props.disabledButtonForm(!0),e.props.sendEmail(e.props.contact.name,e.props.contact.email,e.props.contact.message)):(t.preventDefault(),alert("Please, fill in all fields of the form!"))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact.buttonDisabled;return o.a.createElement("div",{id:"write",className:U.a.contacts},o.a.createElement("div",{className:U.a.container},o.a.createElement(T,{title:"Contact me"}),o.a.createElement(x.a,{right:!0,cascade:!0},o.a.createElement("form",{className:U.a.formWrapper,action:""},o.a.createElement("input",{className:U.a.formArea,placeholder:"Your name",type:"text",value:this.props.contact.name,onChange:function(t){return e.props.updateNameForm(t.currentTarget.value)}}),o.a.createElement("input",{className:U.a.formArea,placeholder:"E-mail or Phone",type:"text",value:this.props.contact.email,onChange:function(t){return e.props.updateEmailForm(t.currentTarget.value)}}),o.a.createElement("textarea",{className:U.a.messageArea,placeholder:"Your message",value:this.props.contact.message,onChange:function(t){return e.props.updateMessageForm(t.currentTarget.value)}}," "),o.a.createElement("button",{className:U.a.btnSubmit,disabled:t,onClick:this.sendMessageClick,type:"submit"},"Send message")))))}}]),a}(o.a.Component),Oe=Object(D.b)((function(e){return{contact:e.reducer.portfolioData.contact}}),{updateNameForm:ve,updateEmailForm:Ne,updateMessageForm:je,disabledButtonForm:ye,sendEmail:function(e,t,a){return function(n){X.post("https://smtp-nodejs-server-portfolio.herokuapp.com/sendMessage",{name:e,contacts:t,message:a}).then((function(){alert("Thanks! Your email has been sent!"),n(ye(!1)),n(ve("")),n(Ne("")),n(je(""))}))}}})(Se),we=a(8),Me=a.n(we),xe=a(125),Te=a.n(xe),De=a(126),Pe=a.n(De),Ie=a(127),Ce=a.n(Ie),Ae=a(128),Le=a.n(Ae),Fe=a(129),Re=a.n(Fe);var Be=function(){return o.a.createElement("div",{id:"contacts",className:Me.a.footer},o.a.createElement("div",{className:Me.a.container},o.a.createElement(T,{title:"Vladislav Leshkov"}),o.a.createElement(x.a,{big:!0,cascade:!0},o.a.createElement("div",{className:Me.a.social},o.a.createElement("div",{className:Me.a.blockLink},o.a.createElement("a",{href:"https://linkedin.com/in/\u0432\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432-\u043b\u0435\u0448\u043a\u043e\u0432-bb42821b3",target:"_blank"},o.a.createElement("img",{src:Te.a,alt:"logo"}))),o.a.createElement("div",{className:Me.a.blockLink},o.a.createElement("a",{href:"https://jobs.tut.by/resume/9bd6a49aff0383c2180039ed1f6e70376f5959",target:"_blank"},o.a.createElement("img",{src:Pe.a,alt:"logo"}))),o.a.createElement("div",{className:Me.a.blockLink},o.a.createElement("a",{href:"mailto:leshkov.1998@mail.ru",target:"_blank"},o.a.createElement("img",{src:Ce.a,alt:"logo"})),o.a.createElement("div",{className:Me.a.hint},"leshkov.1998@mail.ru")),o.a.createElement("div",{className:Me.a.blockLink},o.a.createElement("a",{href:"tel:+375298755838",target:"_blank"},o.a.createElement("img",{src:Le.a,alt:"logo"})),o.a.createElement("div",{className:Me.a.hint},"+375298755838")),o.a.createElement("div",{className:Me.a.blockLink},o.a.createElement("a",{href:"https://t.me/l_vladislav_l",target:"_blank"},o.a.createElement("img",{src:Re.a,alt:"logo"})),o.a.createElement("div",{className:Me.a.hint},"@l_vladislav_l"))),o.a.createElement("span",{className:Me.a.copyright},"\xa9 2020 All Rights Reserved."))))},He=(a(168),a(130)),Ye=a.n(He),We=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"portfolio"},o.a.createElement(Ye.a,{className:"particles",params:this.props.portfolioData.particlesSettings}),o.a.createElement(h,null),o.a.createElement(k,{photo:this.props.portfolioData.myPhoto}),o.a.createElement(I,null),o.a.createElement(H,null),o.a.createElement(G,null),o.a.createElement(Oe,null),o.a.createElement(Be,null)))}}]),a}(o.a.Component),Ge=Object(D.b)((function(e){return{portfolioData:e.reducer.portfolioData}}))(We);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=a(32),Ue=a(131),Ve=Object(Je.c)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(V.a)({},e,{portfolioData:Object(V.a)({},e.portfolioData,{contact:Object(V.a)({},e.portfolioData.contact,{name:t.newTitle})})});case he:return Object(V.a)({},e,{portfolioData:Object(V.a)({},e.portfolioData,{contact:Object(V.a)({},e.portfolioData.contact,{email:t.newTitle})})});case Ee:return Object(V.a)({},e,{portfolioData:Object(V.a)({},e.portfolioData,{contact:Object(V.a)({},e.portfolioData.contact,{message:t.newText})})});case ge:return Object(V.a)({},e,{portfolioData:Object(V.a)({},e.portfolioData,{contact:Object(V.a)({},e.portfolioData.contact,{buttonDisabled:t.isDisabled})})});default:return e}}}),Xe=Object(Je.d)(Ve,Object(Je.a)(Ue.a));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D.a,{store:Xe},o.a.createElement(Ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,a){e.exports={skills:"Skills_skills__OJ2Lj",container:"Skills_container__26-iX",listMySkills:"Skills_listMySkills__2YpU6"}},46:function(e,t,a){e.exports={skill:"SpecificSkill_skill__3eBdi",icon:"SpecificSkill_icon__1By8R",skillTitle:"SpecificSkill_skillTitle__1p5ty"}},47:function(e,t,a){e.exports={projects:"Projects_projects__10GII",container:"Projects_container__13zba",listMyProjects:"Projects_listMyProjects__2FN1Y"}},65:function(e,t,a){e.exports={titleBlock:"Title_titleBlock__T-X0i",line:"Title_line__2nn3n"}},8:function(e,t,a){e.exports={footer:"Footer_footer__2oN-u",container:"Footer_container__2hXhf",social:"Footer_social__1YX2S",blockLink:"Footer_blockLink__2_GO-",hint:"Footer_hint__2h0Hp",copyright:"Footer_copyright__gO0Jo"}}},[[132,1,2]]]);
//# sourceMappingURL=main.cd6d0f80.chunk.js.map
(this["webpackJsonptimekeeper-frontend"]=this["webpackJsonptimekeeper-frontend"]||[]).push([[0],{103:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var r,i,n,c,o,s,u,l=t(0),d=t.n(l),m=t(14),A=t.n(m),b=(t(103),t(13)),h=t.n(b),j=t(18),p=t(10),f=t(87),g=t(176),x=t(177),O=t(182),v=t(8),k=t(166),y=t(168),w=t(170),S=t(2),P=Object(k.a)({div:{marginBottom:40},the:(r={fontSize:"5.5rem",color:"white"},Object(v.a)(r,"@media (min-width:380px) and (max-width:880px)",{fontSize:"2.5rem"}),Object(v.a)(r,"@media (max-width:380px)",{fontSize:"1.5rem"}),r),timekeeper:(i={fontSize:"9.5rem",color:"white"},Object(v.a)(i,"@media (min-width:380px) and (max-width:880px)",{fontSize:"4.5rem"}),Object(v.a)(i,"@media (max-width:380px)",{fontSize:"2.5rem"}),i)}),C=function(){var e=P();return Object(S.jsx)(y.a,{container:!0,justify:"center",children:Object(S.jsx)("div",{className:e.div,children:Object(S.jsxs)(w.a,{align:"center",children:[Object(S.jsx)("span",{className:e.the,children:"The"}),Object(S.jsx)("span",{className:e.timekeeper,children:"TimeKeeper"})]})})})},E=t(180),_=t(171),M=t(136),B=t(19),T=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(y.a,{container:!0,justify:"center",children:Object(S.jsx)("div",{style:{position:"relative",bottom:0},children:Object(S.jsxs)(w.a,{variant:"subtitle1",color:"secondary",children:[Object(S.jsx)("span",{children:"\xa9"})," Sarthak Soni"]})})})})},I=Object(k.a)({box:(n={background:"#f6defa",width:600,height:350,borderRadius:60},Object(v.a)(n,"@media (min-width:380px) and (max-width:880px)",{width:400,height:250,borderRadius:30}),Object(v.a)(n,"@media (max-width:380px)",{width:300,height:150,borderRadius:30}),n),btn:{padding:10}}),z=function(){var e=I();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(y.a,{container:!0,direction:"column",alignItems:"center",children:Object(S.jsx)(E.a,{className:e.box,display:"flex",alignItems:"center",justifyContent:"center",p:0,children:Object(S.jsxs)(_.a,{orientation:"vertical",size:"large",color:"primary","aria-label":"vertical outlined primary button group",children:[Object(S.jsx)(M.a,{component:B.b,to:"/api/login",children:"Login"}),Object(S.jsx)(M.a,{component:B.b,to:"/api/users/signup",children:"Sign-up"})]})})}),Object(S.jsx)(T,{})]})},N=t(43),R=t.n(N),U=null,D={setToken:function(e){U="bearer ".concat(e)},login:function(){var e=Object(j.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),signup:function(){var e=Object(j.a)(h.a.mark((function e(a){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("/api/users/signup",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),getAll:function(){var e=Object(j.a)(h.a.mark((function e(a){var t,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,r={headers:{Authorization:U}},e.next=4,R.a.get("/api/users/".concat(t,"/zones"),r);case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),createZone:function(){var e=Object(j.a)(h.a.mark((function e(a,t){var r,i,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.username,i={headers:{Authorization:U}},e.next=4,R.a.post("/api/users/".concat(r,"/zones"),t,i);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),removeZone:function(){var e=Object(j.a)(h.a.mark((function e(a,t){var r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.username,i={headers:{Authorization:U}},e.next=4,R.a.delete("/api/users/".concat(r,"/zones/").concat(t.id),i);case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},K=t(15),L=t(179),F=Object(k.a)({box:(c={background:"#f6defa",width:600,height:350,borderRadius:60},Object(v.a)(c,"@media (min-width:380px) and (max-width:880px)",{width:400,height:250,borderRadius:30}),Object(v.a)(c,"@media (max-width:380px)",{width:200,height:150,borderRadius:30}),c),btn:{padding:10},field:{marginBottom:20,minWidth:150,marginTop:20,display:"block"}}),G=function(e){var a=e.setUser,t=e.setAlert,r=e.setAlertmsg,i=e.setPending,n=e.setUpdate,c=F(),o=Object(l.useState)(""),s=Object(p.a)(o,2),u=s[0],d=s[1],m=Object(l.useState)(""),A=Object(p.a)(m,2),b=A[0],f=A[1],g=Object(l.useState)(!1),x=Object(p.a)(g,2),O=x[0],v=x[1],k=Object(l.useState)(!1),P=Object(p.a)(k,2),C=P[0],_=P[1],I=Object(K.f)(),z=function(){var e=Object(j.a)(h.a.mark((function e(c){var o,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),v(!1),_(!1),""!==u&&""!==b){e.next=12;break}return t(!0),r("Username or Password was not provided!"),setTimeout((function(){t(!1),r("")}),5e3),""===u&&v(!0),""===b&&_(!0),e.abrupt("return");case 12:return e.prev=12,i(!0),e.next=16,D.login({username:u,password:b});case 16:o=e.sent,a(o),s=o.username,window.localStorage.setItem("loggedBlogUser",JSON.stringify(o)),D.setToken(o.token),d(""),f(""),I.push("/api/users/".concat(s,"/zones")),n(Math.floor(1e3*Math.random())),e.next=33;break;case 27:e.prev=27,e.t0=e.catch(12),i(!1),t(!0),r("".concat(e.t0.response.data.error)),setTimeout((function(){t(!1),r("")}),5e3);case 33:case"end":return e.stop()}}),e,null,[[12,27]])})));return function(a){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(y.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(S.jsx)(E.a,{className:c.box,display:"flex",alignItems:"center",justifyContent:"center",p:25,children:Object(S.jsxs)("div",{children:[Object(S.jsx)(w.a,{align:"center",variant:"h5",children:"Login"}),Object(S.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:z,children:[Object(S.jsx)(L.a,{className:c.field,value:u,onChange:function(e){var a=e.target;return d(a.value)},label:"Username",variant:"outlined",color:"primary",required:!0,error:O}),Object(S.jsx)(L.a,{className:c.field,type:"password",value:b,onChange:function(e){var a=e.target;return f(a.value)},label:"Password",variant:"outlined",color:"primary",required:!0,error:C}),Object(S.jsx)(M.a,{type:"submit",color:"primary",variant:"outlined",children:"Login"})]})]})}),Object(S.jsx)(M.a,{component:B.b,to:"/",children:"Back"})]}),Object(S.jsx)(T,{})]})},W=Object(k.a)({box:(o={background:"#f6defa",width:600,height:350,borderRadius:60},Object(v.a)(o,"@media (min-width:380px) and (max-width:880px)",{width:400,height:250,borderRadius:30}),Object(v.a)(o,"@media (max-width:380px)",{width:200,height:150,borderRadius:30}),o),btn:{padding:10},field:{marginBottom:20,marginTop:20,minWidth:150,display:"block"}}),J=function(e){var a=e.setUser,t=e.setAlert,r=e.setAlertmsg,i=e.setPending,n=e.setUpdate,c=W(),o=Object(l.useState)(""),s=Object(p.a)(o,2),u=s[0],d=s[1],m=Object(l.useState)(""),A=Object(p.a)(m,2),b=A[0],f=A[1],g=Object(l.useState)(""),x=Object(p.a)(g,2),O=x[0],v=x[1],k=Object(l.useState)(!1),P=Object(p.a)(k,2),C=P[0],_=P[1],I=Object(l.useState)(!1),z=Object(p.a)(I,2),N=z[0],R=z[1],U=Object(l.useState)(!1),F=Object(p.a)(U,2),G=F[0],J=F[1],V=Object(K.f)(),q=function(){var e=Object(j.a)(h.a.mark((function e(c){var o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),_(!1),R(!1),J(!1),""!==u&&""!==b&&""!==O){e.next=14;break}return t(!0),r("Complete Information was not provided!"),setTimeout((function(){t(!1),r("")}),5e3),""===u&&_(!0),""===b&&R(!0),""===O&&J(!0),e.abrupt("return");case 14:return e.prev=14,i(!0),e.next=18,D.signup({name:O,username:u,password:b});case 18:return e.sent,e.next=21,D.login({username:u,password:b});case 21:o=e.sent,a(o),window.localStorage.setItem("loggedBlogUser",JSON.stringify(o)),D.setToken(o.token),v(""),d(""),f(""),V.push("/api/users/".concat(o.username,"/zones")),n(Math.floor(1e3*Math.random())),e.next=38;break;case 32:e.prev=32,e.t0=e.catch(14),i(!1),t(!0),r("".concat(e.t0.response.data.error)),setTimeout((function(){t(!1),r("")}),5e3);case 38:case"end":return e.stop()}}),e,null,[[14,32]])})));return function(a){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(y.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(S.jsx)(E.a,{className:c.box,display:"flex",alignItems:"center",justifyContent:"center",p:25,children:Object(S.jsxs)("div",{children:[Object(S.jsx)(w.a,{align:"center",variant:"h5",children:"Sign Up!"}),Object(S.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:q,children:[Object(S.jsx)(L.a,{className:c.field,value:O,onChange:function(e){var a=e.target;return v(a.value)},label:"Name",variant:"outlined",color:"primary",required:!0,error:G}),Object(S.jsx)(L.a,{className:c.field,value:u,onChange:function(e){var a=e.target;return d(a.value)},label:"Username",variant:"outlined",color:"primary",required:!0,error:C}),Object(S.jsx)(L.a,{className:c.field,value:b,onChange:function(e){var a=e.target;return f(a.value)},label:"Password",variant:"outlined",color:"primary",required:!0,error:N}),Object(S.jsx)(M.a,{type:"submit",color:"primary",variant:"outlined",children:"Sign Up"})]})]})}),Object(S.jsx)(M.a,{component:B.b,to:"/",children:"Back"})]}),Object(S.jsx)(T,{})]})},V=t(83),q=t.n(V),H=t(132).DateTime,Z=Object(k.a)({box:(s={background:"#2a2b2b",width:600,height:250,borderRadius:30,margin:15,borderColor:"#faeb1b",transition:"background 0.5s","&:hover":{background:"#23033d"}},Object(v.a)(s,"@media (min-width:380px) and (max-width:880px)",{width:400,height:250}),Object(v.a)(s,"@media (max-width:380px)",{width:200,height:150}),s),text:(u={color:"#dfbce3"},Object(v.a)(u,"@media (min-width:380px) and (max-width:880px)",{fontSize:"2.5rem"}),Object(v.a)(u,"@media (max-width:380px)",{fontSize:"1.2rem"}),u)}),Y=function(e){var a=e.zone,t=e.handleRemoving,r=Z(),i=Object(l.useState)(""),n=Object(p.a)(i,2),c=n[0],o=n[1],s=Object(l.useState)(""),u=Object(p.a)(s,2),d=u[0],m=u[1],A=a.timezone;return setInterval((function(){o(H.local().setZone(a.timezone).toString().substring(11,19));var e=H.local().setZone(a.timezone).toFormat("DD");m(e.toString())}),1e3),Object(S.jsx)("div",{children:Object(S.jsxs)(E.a,{className:r.box,border:1,p:3,children:[Object(S.jsxs)(y.a,{container:!0,justify:"space-between",children:[Object(S.jsxs)(w.a,{className:r.text,variant:"h5",align:"left",children:[A," "]}),Object(S.jsxs)(w.a,{className:r.text,variant:"h5",align:"right",children:[d," "]})]}),Object(S.jsxs)(w.a,{className:r.text,variant:"h1",align:"center",children:[c," "]}),Object(S.jsx)(y.a,{container:!0,justify:"center",children:Object(S.jsx)(M.a,{color:"secondary",startIcon:Object(S.jsx)(q.a,{}),align:"center",variant:"outlined",onClick:function(){return t(a)},children:"Delete"})})]})})},Q=t(63),X=(t(174),t(84),t(86)),$=t.n(X),ee=t(181),ae={TimeZones:["Europe/Andorra","Asia/Dubai","Asia/Kabul","Europe/Tirane","Asia/Yerevan","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Mawson","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","America/Argentina/Buenos_Aires","America/Argentina/Cordoba","America/Argentina/Salta","America/Argentina/Jujuy","America/Argentina/Tucuman","America/Argentina/Catamarca","America/Argentina/La_Rioja","America/Argentina/San_Juan","America/Argentina/Mendoza","America/Argentina/San_Luis","America/Argentina/Rio_Gallegos","America/Argentina/Ushuaia","Pacific/Pago_Pago","Europe/Vienna","Australia/Lord_Howe","Antarctica/Macquarie","Australia/Hobart","Australia/Currie","Australia/Melbourne","Australia/Sydney","Australia/Broken_Hill","Australia/Brisbane","Australia/Lindeman","Australia/Adelaide","Australia/Darwin","Australia/Perth","Australia/Eucla","Asia/Baku","America/Barbados","Asia/Dhaka","Europe/Brussels","Europe/Sofia","Atlantic/Bermuda","Asia/Brunei","America/La_Paz","America/Noronha","America/Belem","America/Fortaleza","America/Recife","America/Araguaina","America/Maceio","America/Bahia","America/Sao_Paulo","America/Campo_Grande","America/Cuiaba","America/Santarem","America/Porto_Velho","America/Boa_Vista","America/Manaus","America/Eirunepe","America/Rio_Branco","America/Nassau","Asia/Thimphu","Europe/Minsk","America/Belize","America/St_Johns","America/Halifax","America/Glace_Bay","America/Moncton","America/Goose_Bay","America/Blanc-Sablon","America/Toronto","America/Nipigon","America/Thunder_Bay","America/Iqaluit","America/Pangnirtung","America/Atikokan","America/Winnipeg","America/Rainy_River","America/Resolute","America/Rankin_Inlet","America/Regina","America/Swift_Current","America/Edmonton","America/Cambridge_Bay","America/Yellowknife","America/Inuvik","America/Creston","America/Dawson_Creek","America/Fort_Nelson","America/Vancouver","America/Whitehorse","America/Dawson","Indian/Cocos","Europe/Zurich","Africa/Abidjan","Pacific/Rarotonga","America/Santiago","America/Punta_Arenas","Pacific/Easter","Asia/Shanghai","Asia/Urumqi","America/Bogota","America/Costa_Rica","America/Havana","Atlantic/Cape_Verde","America/Curacao","Indian/Christmas","Asia/Nicosia","Asia/Famagusta","Europe/Prague","Europe/Berlin","Europe/Copenhagen","America/Santo_Domingo","Africa/Algiers","America/Guayaquil","Pacific/Galapagos","Europe/Tallinn","Africa/Cairo","Africa/El_Aaiun","Europe/Madrid","Africa/Ceuta","Atlantic/Canary","Europe/Helsinki","Pacific/Fiji","Atlantic/Stanley","Pacific/Chuuk","Pacific/Pohnpei","Pacific/Kosrae","Atlantic/Faroe","Europe/Paris","Europe/London","Asia/Tbilisi","America/Cayenne","Africa/Accra","Europe/Gibraltar","America/Godthab","America/Danmarkshavn","America/Scoresbysund","America/Thule","Europe/Athens","Atlantic/South_Georgia","America/Guatemala","Pacific/Guam","Africa/Bissau","America/Guyana","Asia/Hong_Kong","America/Tegucigalpa","America/Port-au-Prince","Europe/Budapest","Asia/Jakarta","Asia/Pontianak","Asia/Makassar","Asia/Jayapura","Europe/Dublin","Asia/Jerusalem","Asia/Kolkata","Indian/Chagos","Asia/Baghdad","Asia/Tehran","Atlantic/Reykjavik","Europe/Rome","America/Jamaica","Asia/Amman","Asia/Tokyo","Africa/Nairobi","Asia/Bishkek","Pacific/Tarawa","Pacific/Enderbury","Pacific/Kiritimati","Asia/Pyongyang","Asia/Seoul","Asia/Almaty","Asia/Qyzylorda","Asia/Qostanay","Asia/Aqtobe","Asia/Aqtau","Asia/Atyrau","Asia/Oral","Asia/Beirut","Asia/Colombo","Africa/Monrovia","Europe/Vilnius","Europe/Luxembourg","Europe/Riga","Africa/Tripoli","Africa/Casablanca","Europe/Monaco","Europe/Chisinau","Pacific/Majuro","Pacific/Kwajalein","Asia/Yangon","Asia/Ulaanbaatar","Asia/Hovd","Asia/Choibalsan","Asia/Macau","America/Martinique","Europe/Malta","Indian/Mauritius","Indian/Maldives","America/Mexico_City","America/Cancun","America/Merida","America/Monterrey","America/Matamoros","America/Mazatlan","America/Chihuahua","America/Ojinaga","America/Hermosillo","America/Tijuana","America/Bahia_Banderas","Asia/Kuala_Lumpur","Asia/Kuching","Africa/Maputo","Africa/Windhoek","Pacific/Noumea","Pacific/Norfolk","Africa/Lagos","America/Managua","Europe/Amsterdam","Europe/Oslo","Asia/Kathmandu","Pacific/Nauru","Pacific/Niue","Pacific/Auckland","Pacific/Chatham","America/Panama","America/Lima","Pacific/Tahiti","Pacific/Marquesas","Pacific/Gambier","Pacific/Port_Moresby","Pacific/Bougainville","Asia/Manila","Asia/Karachi","Europe/Warsaw","America/Miquelon","Pacific/Pitcairn","America/Puerto_Rico","Asia/Gaza","Asia/Hebron","Europe/Lisbon","Atlantic/Madeira","Atlantic/Azores","Pacific/Palau","America/Asuncion","Asia/Qatar","Indian/Reunion","Europe/Bucharest","Europe/Belgrade","Europe/Kaliningrad","Europe/Moscow","Europe/Simferopol","Europe/Kirov","Europe/Astrakhan","Europe/Volgograd","Europe/Saratov","Europe/Ulyanovsk","Europe/Samara","Asia/Yekaterinburg","Asia/Omsk","Asia/Novosibirsk","Asia/Barnaul","Asia/Tomsk","Asia/Novokuznetsk","Asia/Krasnoyarsk","Asia/Irkutsk","Asia/Chita","Asia/Yakutsk","Asia/Khandyga","Asia/Vladivostok","Asia/Ust-Nera","Asia/Magadan","Asia/Sakhalin","Asia/Srednekolymsk","Asia/Kamchatka","Asia/Anadyr","Asia/Riyadh","Pacific/Guadalcanal","Indian/Mahe","Africa/Khartoum","Europe/Stockholm","Asia/Singapore","America/Paramaribo","Africa/Juba","Africa/Sao_Tome","America/El_Salvador","Asia/Damascus","America/Grand_Turk","Africa/Ndjamena","Indian/Kerguelen","Asia/Bangkok","Asia/Dushanbe","Pacific/Fakaofo","Asia/Dili","Asia/Ashgabat","Africa/Tunis","Pacific/Tongatapu","Europe/Istanbul","America/Port_of_Spain","Pacific/Funafuti","Asia/Taipei","Europe/Kiev","Europe/Uzhgorod","Europe/Zaporozhye","Pacific/Wake","America/New_York","America/Detroit","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Indiana/Indianapolis","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Vevay","America/Chicago","America/Indiana/Tell_City","America/Indiana/Knox","America/Menominee","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/North_Dakota/Beulah","America/Denver","America/Boise","America/Phoenix","America/Los_Angeles","America/Anchorage","America/Juneau","America/Sitka","America/Metlakatla","America/Yakutat","America/Nome","America/Adak","Pacific/Honolulu","America/Montevideo","Asia/Samarkand","Asia/Tashkent","America/Caracas","Asia/Ho_Chi_Minh","Pacific/Efate","Pacific/Wallis","Pacific/Apia","Africa/Johannesburg"]},te=Object(k.a)({inputRoot:{color:"#fa1b92"},btn:{maxWidth:1}}),re=function(e){var a=e.handleAdd,t=te(),r=Object(l.useState)(""),i=Object(p.a)(r,2),n=i[0],c=i[1],o=Object(l.useState)(""),s=Object(p.a)(o,2),u=s[0],d=s[1],m=Object(l.useState)(!1),A=Object(p.a)(m,2),b=A[0],h=A[1];return Object(S.jsx)("div",{children:Object(S.jsxs)("form",{style:{display:"flex"},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),h(!1),""!==n&&""!==u?(a({timezone:n}),c(""),d("")):h(!0)},children:[Object(S.jsx)(ee.a,{id:"combo-box-demo",value:n,onChange:function(e,a){return c(a)},inputValue:u,onInputChange:function(e,a){return d(a)},classes:{inputRoot:t.inputRoot},options:ae.TimeZones,getOptionSelected:function(e,a){return e.value===a.value},style:{width:1200},renderInput:function(e){return Object(S.jsx)(L.a,Object(Q.a)(Object(Q.a)({},e),{},{InputLabelProps:{style:{color:"#fff"}},label:"Add TimeZone",variant:"filled",error:b}))}}),Object(S.jsx)(M.a,{type:"submit",startIcon:Object(S.jsx)($.a,{style:{fontSize:30}}),variant:"contained"})]})})},ie=function(e){var a=e.setUser,t=e.zones,r=e.handleAdd,i=e.handleRemoving,n=Object(K.f)(),c=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogUser"),a(null),n.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{style:{marginBottom:15},children:Object(S.jsx)(y.a,{container:!0,justify:"center",children:Object(S.jsx)(M.a,{variant:"contained",color:"secondary",onClick:c,children:"Logout"})})}),Object(S.jsxs)("div",{style:{margin:25},children:[Object(S.jsx)("div",{style:{margin:25},children:Object(S.jsx)(re,{handleAdd:r})}),Object(S.jsx)(y.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:t.map((function(e){return Object(S.jsx)(Y,{zone:e,handleRemoving:i},e.id)}))})]})]})},ne=function(e){var a=e.setUser,t=Object(K.f)(),r=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogUser"),a(null),t.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{children:Object(S.jsxs)(y.a,{container:!0,alignItems:"center",justify:"center",direction:"column",children:[Object(S.jsx)(w.a,{variant:"h1",children:"Not Found! :("}),Object(S.jsx)("div",{style:{margin:40},children:Object(S.jsx)(w.a,{variant:"h3",children:"Wandered too far off eh?"})}),Object(S.jsx)(B.b,{style:{color:"white",fontSize:"30px"},onClick:r,children:"Take me back!"})]})})},ce=t(175),oe=t(178),se=Object(f.a)({palette:{background:{default:"#311b92"}},typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700}}),ue=function(){var e=Object(l.useState)(null),a=Object(p.a)(e,2),t=a[0],r=a[1],i=Object(l.useState)([]),n=Object(p.a)(i,2),c=n[0],o=n[1],s=Object(l.useState)(null),u=Object(p.a)(s,2),d=u[0],m=u[1],A=Object(l.useState)(!1),b=Object(p.a)(A,2),f=b[0],v=b[1],k=Object(l.useState)(""),y=Object(p.a)(k,2),w=y[0],P=y[1],E=Object(l.useState)(!0),_=Object(p.a)(E,2),M=_[0],T=_[1],I=Object(K.f)(),N=function(){var e=Object(j.a)(h.a.mark((function e(a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),e.prev=1,e.next=4,D.createZone(t,a);case 4:r=e.sent,o(c.concat(r)),m(Math.floor(100*Math.random())),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),v(!0),P("".concat(e.t0.response.data.error)),setTimeout((function(){v(!1),P("")}),5e3);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Remove Timezone?")){e.next=14;break}return T(!0),e.prev=3,e.next=6,D.removeZone(t,a);case 6:m(Math.floor(100*Math.random())),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(3),v(!0),P("".concat(e.t0.response.data.error)),setTimeout((function(){v(!1),P("")}),5e3);case 14:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(a){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogUser");if(e){var a=JSON.parse(e);r(a),D.setToken(a.token);var t=a.username;I.push("/api/users/".concat(t,"/zones"))}}),[]),Object(l.useEffect)((function(){var e=new AbortController;return function(){var a=Object(j.a)(h.a.mark((function a(){return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=3;break}return a.next=3,D.getAll(t).then((function(e){return o(e)}),{signal:e.signal});case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),T(!1),function(){return e.abort()}}),[t,d]),Object(S.jsx)(B.a,{children:Object(S.jsx)(ce.a,{maxWidth:"lg",children:Object(S.jsxs)(g.a,{theme:se,children:[Object(S.jsx)(x.a,{}),Object(S.jsx)(C,{}),Object(S.jsxs)("div",{style:{margin:30},children:[f&&Object(S.jsx)(O.a,{variant:"filled",severity:"error",children:w}),M&&Object(S.jsx)(oe.a,{color:"secondary"})]}),Object(S.jsxs)(K.c,{children:[!t&&Object(S.jsx)(K.a,{exact:!0,path:"/",children:Object(S.jsx)(z,{})}),!t&&Object(S.jsx)(K.a,{exact:!0,path:"/api/login",children:!M&&Object(S.jsx)(G,{setPending:T,setUpdate:m,setUser:r,setAlert:v,setAlertmsg:P})}),!t&&Object(S.jsx)(K.a,{exact:!0,path:"/api/users/signup",children:!M&&Object(S.jsx)(J,{setPending:T,setUpdate:m,setUser:r,setAlert:v,setAlertmsg:P})}),t&&Object(S.jsx)(K.a,{exact:!0,path:"/api/users/:username/zones",children:!M&&Object(S.jsx)(ie,{setUser:r,zones:c,handleAdd:N,handleRemoving:R})}),Object(S.jsx)(K.a,{path:"*",children:Object(S.jsx)(ne,{setUser:r})})]})]})})})},le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,184)).then((function(a){var t=a.getCLS,r=a.getFID,i=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),r(e),i(e),n(e),c(e)}))};A.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(B.a,{children:Object(S.jsx)(ue,{})})}),document.getElementById("root")),le()}},[[134,1,2]]]);
//# sourceMappingURL=main.73d70f04.chunk.js.map
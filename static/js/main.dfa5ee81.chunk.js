(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",stats:"Profile_stats__25zJx",label:"Profile_label__3Zjy8",quantity:"Profile_quantity__1zFQ4"}},function(e,t,a){e.exports={item:"FriendListItem_item__2Yytv",status:"FriendListItem_status__2nRXz",isOnline:"FriendListItem_isOnline__3lA3H",avatar:"FriendListItem_avatar__iGhXA",name:"FriendListItem_name__38iRn"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,function(e,t,a){e.exports={item:"StatisticsItem_item__2_9jw",label:"StatisticsItem_label__1MwcF",percentage:"StatisticsItem_percentage__-3JfQ"}},function(e,t,a){e.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg",statList:"Statistics_statList__3BR2u"}},,,function(e,t,a){e.exports={friendList:"FriendsList_friendList__1ktY0"}},function(e,t,a){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1k0Uk"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),s=a(8),i=a.n(s),r=a(1),l=a.n(r),d=a(0),o=function(e){var t=e.userName,a=e.tag,c=e.location,n=e.avatar,s=e.stats,i=s.followers,r=s.views,o=s.likes;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:n,alt:"User avatar",className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:t}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",a]}),Object(d.jsx)("p",{className:l.a.location,children:c})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:i})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:r})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:o})]})]})]})},b=a(5),u=a.n(b),p=function(e){var t=e.label,a=e.percentage;return Object(d.jsxs)("li",{className:u.a.item,children:[Object(d.jsx)("span",{className:u.a.label,children:t}),Object(d.jsxs)("span",{className:u.a.percentage,children:[a,"%"]})]})},m=a(6),j=a.n(m),f=function(e){var t=e.title,a=e.stats.map((function(e){var t=e.id,a=e.label,c=e.percentage;return Object(d.jsx)(p,{label:a,percentage:c},t)}));return Object(d.jsxs)("section",{className:j.a.statistics,children:[t&&Object(d.jsx)("h2",{className:j.a.title,children:t}),Object(d.jsx)("ul",{className:j.a.statList,children:a})]})},y=a(2),O=a.n(y),_=function(e){var t=e.status,a=e.avatar,c=e.name,n=t?"".concat(O.a.status," ").concat(O.a.isOnline):O.a.status;return Object(d.jsxs)("li",{className:O.a.item,children:[Object(d.jsx)("span",{className:n}),Object(d.jsx)("img",{className:O.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(d.jsx)("p",{className:O.a.name,children:c})]})},h=a(9),x=a.n(h),v=function(e){var t=e.friends.map((function(e){var t=e.avatar,a=e.name,c=e.isOnline,n=e.id;return Object(d.jsx)(_,{status:c,avatar:t,name:a},n)}));return Object(d.jsx)("ul",{className:x.a.friendList,children:t})},g=(a(20),function(e){var t=e.type,a=e.amount,c=e.currency;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:c})]})}),N=a(10),w=a.n(N),L=function(e){var t=e.transactions.map((function(e){var t=e.id,a=e.type,c=e.amount,n=e.currency;return Object(d.jsx)(g,{type:a,amount:c,currency:n},t)}));return Object(d.jsxs)("table",{className:w.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:t})]})},P=a(3),S=a(11),U=a(12),J=a(13),k=a(14),F=a.n(k);var I=function(){return Object(d.jsxs)("div",{className:F.a.App,children:[Object(d.jsx)(o,{userName:P.username,tag:P.tag,location:P.location,avatar:P.avatar,stats:P.stats}),Object(d.jsx)(f,{title:"Upload stats",stats:S}),Object(d.jsx)(v,{friends:U}),Object(d.jsx)(L,{transactions:J})]})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.dfa5ee81.chunk.js.map
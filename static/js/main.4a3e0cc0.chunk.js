(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(29)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),s=t(1),o=(t(15),function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="badge ".concat(t).trim();return c.a.createElement("span",Object.assign({className:r},n))}),i=(t(16),function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="button ".concat(t).trim();return c.a.createElement("button",Object.assign({className:r},n))}),m=(t(17),function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="flex-container ".concat(t).trim();return c.a.createElement("div",Object.assign({className:r},n))}),u=(t(18),function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="card ".concat(t).trim();return c.a.createElement(m,Object.assign({className:r},n))}),f=(t(19),m),d=function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="flex-item ".concat(t).trim();return c.a.createElement("div",Object.assign({className:r},n))},b=(t(20),function(e){var a=e.as,t=void 0===a?"h1":a,n=e.className,r=void 0===n?"":n,l=Object(s.a)(e,["as","className"]),o="heading ".concat(r).trim();return c.a.createElement(t,Object.assign({className:o},l))}),N=(t(21),function(e){var a=e.as,t=void 0===a?"span":a,n=e.className,r=void 0===n?"":n,l=Object(s.a)(e,["as","className"]),o="text ".concat(r).trim();return c.a.createElement(t,Object.assign({className:o},l))}),v=(t(22),function(e){var a=e.className,t=void 0===a?"":a,n=e.src,r=Object(s.a)(e,["className","src"]),l="avatar ".concat(t).trim();return c.a.createElement("div",Object.assign({className:l},r),n&&c.a.createElement("img",{src:n,alt:"profile card profile"}))}),g=(t(23),t(24),t(25),t(26),t(27),function(e){return c.a.createElement(u,Object.assign({className:"profile-card"},e))});g.Avatar=v,g.Bio=function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="profile-card__bio ".concat(t).trim();return c.a.createElement(d,Object.assign({className:r},n))},g.Body=function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="profile-card__body ".concat(t).trim();return c.a.createElement(f,Object.assign({className:r},n))},g.Footer=function(e){var a=e.className,t=void 0===a?"":a,n=Object(s.a)(e,["className"]),r="profile-card__footer ".concat(t).trim();return c.a.createElement(f,Object.assign({className:r},n))},g.Header=function(e){var a=e.className,t=void 0===a?"":a,n=e.src,r=Object(s.a)(e,["className","src"]),l="profile-card__header ".concat(t).trim();return c.a.createElement(f,Object.assign({className:l},r),n&&c.a.createElement("img",{src:n,alt:"profile card header"}))};var E=t(4),p=t(5),j=t(7),O=t(6),w=t(8),h={name:"Jeff Goldblum",username:"@jeffreygoldbIum",backgroundPic:"https://pbs.twimg.com/profile_banners/2877259509/1535411967",profilePic:"https://pbs.twimg.com/profile_images/1034219136199602176/4e8CGxPD_400x400.jpg",bio:"Legend of film, TV & stage. Cats & Dogs, Holy Man and the Curry's Christmas Ad campaign 2015 * no tick *",isFollowing:!0,isFriend:!0,tweetCount:3438,followerCount:86300,friendsCount:7},x={profilePic:"",backgroundPic:"",username:"",name:"",bio:"",isFollowing:!1,isFriend:!1,tweetCount:0,followerCount:0,friendsCount:0};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e<1e4?e.toLocaleString():e<1e6?"".concat((e/1e3).toFixed(1),"K"):"".concat((e/1e6).toFixed(1),"M")}var F,y=(F=function(e){return c.a.createElement(g,null,c.a.createElement(g.Header,{src:e.backgroundPic}),c.a.createElement(g.Body,null,c.a.createElement(g.Avatar,{src:e.profilePic}),c.a.createElement(d,{className:"justify-content-flex-end"},e.isFriend?c.a.createElement(i,{className:"primary"},"Following"):c.a.createElement(i,null,"Follow")),c.a.createElement(b,{as:"h3"},e.name),c.a.createElement(d,null,c.a.createElement(N,null,e.username),e.isFollowing&&c.a.createElement(o,null,"Follows you")),c.a.createElement(g.Bio,{className:"flex-1"},c.a.createElement(N,{className:"stretch"},e.bio))),c.a.createElement(g.Footer,null,c.a.createElement(d,{className:"column flex-1"},c.a.createElement(N,{className:"small bold"},"Tweets"),c.a.createElement(N,{className:"xlarge bold"},C(e.tweetCount))),c.a.createElement(d,{className:"column flex-1"},c.a.createElement(N,{className:"small bold"},"Following"),c.a.createElement(N,{className:"xlarge bold"},C(e.friendsCount))),c.a.createElement(d,{className:"column flex-1"},c.a.createElement(N,{className:"small bold"},"Followers"),c.a.createElement(N,{className:"xlarge bold"},C(e.followerCount)))))},function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(j.a)(this,Object(O.a)(a).call(this,e))).state={profileData:x},t}return Object(w.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchProfileCardData()}},{key:"fetchProfileCardData",value:function(){this.setState({profileData:h})}},{key:"render",value:function(){return c.a.createElement(F,this.state.profileData)}}]),a}(c.a.Component));t(28);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null,"hello"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.4a3e0cc0.chunk.js.map
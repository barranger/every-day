(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(21),a(4)),l=a(5),u=a(8),s=a(6),h=a(9),m=[{author:"Carol Burnett",text:"Only I can change my life. No one can do it for me."},{author:"Aristotle",text:"Quality is not an act, it is a habit."},{author:"Mark Twain",text:"The secret of getting ahead is getting started."},{author:"Aldous Huxley",text:"There is only one corner of the universe you can be certain of improving, and that's your own self."},{author:"Ralph Marston",text:"What you do today can improve all your tomorrows."}],d=r.a.createContext(),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={quotes:m},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),p=a(31),b=(a(22),function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(u.a)(this,Object(s.a)(t).call(this)),setTimeout(function(){e.history.push("/Home")},3e3),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Splash"},r.a.createElement("header",{className:"Splash-header"},r.a.createElement(d.Consumer,null,function(e){var t=Math.floor(Math.random()*e.quotes.length),a=e.quotes[t];return r.a.createElement("h2",null,a.text,r.a.createElement("br",null),r.a.createElement("small",null,"~",a.author))})))}}]),t}(n.Component)),v=Object(p.a)(b),y=(a(26),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.reddit.com/r/GetMotivated.json").then(function(e){return e.json()}).then(function(t){e.setState({posts:t.data.children})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"Home-header"},r.a.createElement("h2",null,"This is the Home header"),r.a.createElement("ul",null,this.state.posts.map(function(e,t){var a="self"!==e.data.thumbnail?r.a.createElement("img",{alt:"preview",src:e.data.thumbnail}):"";return!e.data.stickied&&r.a.createElement("li",{key:t},a,e.data.title)}))))}}]),t}(n.Component)),j=(a(27),a(33)),O=a(32),w=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{basename:"/every-day"},r.a.createElement(f,null,r.a.createElement(O.a,{exact:!0,path:"/",component:v}),r.a.createElement(O.a,{path:"/Home",component:y})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.ce7bd974.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=(n(21),n(3)),s=n(4),u=n(6),l=n(5),h=n(7),m=[{author:"Carol Burnett",text:"Only I can change my life. No one can do it for me."},{author:"Aristotle",text:"Quality is not an act, it is a habit."},{author:"Mark Twain",text:"The secret of getting ahead is getting started."},{author:"Aldous Huxley",text:"There is only one corner of the universe you can be certain of improving, and that's your own self."},{author:"Ralph Marston",text:"What you do today can improve all your tomorrows."}],p=r.a.createContext(),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={quotes:m},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),f=n(32),b=(n(22),function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this)),setTimeout(function(){e.history.push("/Home")},3e3),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Splash"},r.a.createElement("header",{className:"Splash-header"},r.a.createElement(p.Consumer,null,function(e){var t=Math.floor(Math.random()*e.quotes.length),n=e.quotes[t];return r.a.createElement("h2",null,n.text,r.a.createElement("br",null),r.a.createElement("small",null,"~",n.author))})))}}]),t}(a.Component)),v=Object(f.a)(b),y=(n(26),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.post.data.thumbnail,t="self"!==e&&"default"!==e?r.a.createElement("img",{alt:"preview",src:e}):"",n=this.props.post.data.title;return n=n.substring(n.indexOf("]")+1),!this.props.post.data.stickied&&r.a.createElement("div",{className:"redditPost",key:this.props.index},t,n)}}]),t}(a.Component)),j=(n(27),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.reddit.com/r/GetMotivated.json").then(function(e){return e.json()}).then(function(t){e.setState({posts:t.data.children})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"Home-header"},r.a.createElement("h2",null,"Get Better Every Day"),this.state.posts.map(function(e,t){return r.a.createElement(y,{post:e,index:t})})))}}]),t}(a.Component)),O=(n(28),n(34)),w=n(33),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{basename:"/every-day"},r.a.createElement(d,null,r.a.createElement(w.a,{exact:!0,path:"/",component:v}),r.a.createElement(w.a,{path:"/Home",component:j})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.7b35bfbf.chunk.js.map
(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],[,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACaUlEQVR4nO3cQU7DMBCF4SfuQAT3vwktq3ZFF0hcpixokSmOGztjz7T9P8kSNALsDG7i+IEEAAAAAAAAAIC1SdL+1Cbnvjy8Z0kfko6n9inp1bVHD2ySdNBPIQ4XHzNTBktnxqekl8xrzJRBLmfGNHNsN75rt+t8Id6p7u2lVIzL4xRkofSk1bzn1xTj2vd8T35+pLZdcB5MtV6ILYsh+Z/4Uhum9UKc+7qa4znDB7/A8D7tdf1CXHNsyfE5FETzBZHyJ7ZXMSQKIqn+BPcqhkRBfl27ZuQehVhcMy5RkMSSmbJTfo2ydmacXRv816mdPz4mn6ev3fRdVqrlMYfFzDhjhmTUFMWyGFKAwWeE6JPFOqSF9+Iv3FtWas06pNVG/ic+196Mxrdabqb0mBmowIZTQEvWIRistA4BgBtHLisQclmBcJscCLmsQMhldUAuKxByWfONXFbANgy5rLLhfSKXVRamIBK5LMmhT+Syylz6RC5rnlufbiGX5cG1T+Sy/nPvE7msv0L0iVyW48Jwjkcuayv/E59rG6PxrUYuKyA2nAIilxUQuSwAAbXmqVq3f1HQmqcih9WB1TYut8UGLLdxyWEZsN7GJfazUs9tXArSIMo2LrmsRIRtXO8TX2ouvLdxXQc/w71Pntu47oPPCNGnmt92y82qtYPv+c9p3C29UyrdodUKM/hEc5+ejDuCQGquCZYr87uaIVZaLtBWRXEffEb42965R/Pc9hqr+XuPJYvHlpnivfgLc5cV5dEJuawTHi4Gw+P3YFoTiiQbO2ILN6DWhCLJxo5aE4okGwEAAAAAAAAAd+gbbgJGwTZBMigAAAAASUVORK5CYII="},,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),l=(n(14),n(1)),r=n(4),s=n(5),u=n(8),m=n(7),d=(n(15),n(6)),A=n.n(d),h=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={newItem:"",list:[]},a}return Object(s.a)(n,[{key:"addItem",value:function(t){if(""!==t){var e={id:Date.now(),value:t,isDone:!1},n=Object(l.a)(this.state.list);n.push(e),this.setState({list:n,newItem:""})}}},{key:"delItem",value:function(t){var e=Object(l.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"updateInput",value:function(t){this.setState({newItem:t})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("img",{className:"logo",src:A.a,alt:"todo logo"}),i.a.createElement("h1",{className:"app-title"}," My ToDo List"),i.a.createElement("div",{className:"container"},"Add todo... ",i.a.createElement("br",null),i.a.createElement("input",{type:"text",className:"text-field",placeholder:"write a todo",required:!0,value:this.state.newItem,onChange:function(e){return t.updateInput(e.target.value)}}),i.a.createElement("button",{className:"add-btn",onClick:function(){return t.addItem(t.state.newItem)},disabled:!this.state.newItem.length},"Add Todo"),i.a.createElement("div",{className:"list"},i.a.createElement("ul",null,this.state.list.map((function(e){return i.a.createElement("li",{key:e.id},e.value,i.a.createElement("button",{className:"del-btn",onClick:function(){return t.delItem(e.id)}},"Delete"))}))))))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.08e16ba6.chunk.js.map
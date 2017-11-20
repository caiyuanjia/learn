var eventE = require('events').EventEmitter;
var event = new eventE();
function aj(a,b){
	console.log("listen1",a,b);
}
function ja(a,b){
	console.log("listen2",b,a);
}
event.on('hello',aj);
event.on('hello',ja);

var eventListeners = eventE.listenerCount(event,'hello');
console.log(eventListeners + " 个监听器监听连接事件。");

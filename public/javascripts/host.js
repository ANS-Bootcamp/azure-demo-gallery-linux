const url = '/data';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  hostinfo.innerText =  data.server.hostname;
  hostname.innerText =  "Hostname: " + data.server.hostname;
  osname.innerText =  "OS Name: " + data.server.osname;
  osplatform.innerText =  "OS Platform: " + data.server.osplatform;
  osrelease.innerText =  "OS Release: " + data.server.osrelease;
  osuptime.innerText =  "Uptime: " + data.server.osuptime;
  cpuarch.innerText =  "CPU Architecture: " + data.server.cpuarch;
  memtotal.innerText =  "Memory Total: " + data.server.memtotal;
  memfree.innerText =  "Memory Free: " + data.server.memfree;
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});  







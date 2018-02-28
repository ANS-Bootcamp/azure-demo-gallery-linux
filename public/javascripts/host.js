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
  cpuload1.innerText =  "CPU Load: " + data.server.cpuload[0];
  memtotal.innerText =  "Memory Total: " + data.server.memtotal;
  memfree.innerText =  "Memory Free: " + data.server.memfree;
  health.innerText = "Health Status: " + data.server.health;
  cpu.innerText = "Load CPU: " + data.server.cpu;
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});  







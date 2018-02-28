var Service = require('node-linux').Service;
 
// Create a new service object 
var svc = new Service({
    name:'AzureDemoGallery',
    description: 'Node.JS Azure Demo Gallery.',
    script: '/ans/azure-demo-gallery-linux-master/bin/www'
});

// Listen for the "install" event, which indicates the 
// process is available as a service. 
svc.on('install',function(){
  svc.start();
});

svc.install();
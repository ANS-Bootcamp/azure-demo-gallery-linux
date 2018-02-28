var Service = require('node-linux').Service;
 
// Create a new service object 
var svc = new Service({
    name:'AzureDemoGallery',
    description: 'Node.JS Azure Demo Gallery.',
    script: '/ans/azure-demo-gallery-linux-master/bin/www',
    env: [{
      name: "AZURE_STORAGE_ACCOUNT",
      value: process.env.AZURE_STORAGE_ACCOUNT
    },
    {
      name: "AZURE_STORAGE_ACCESS_KEY",
      value: process.env.AZURE_STORAGE_ACCESS_KEY
    },
    {
      name: "PORT",
      value: process.env.PORT
    },
    {
      name: "STATUS",
      value: process.env.STATUS
    },
    {
      name: "CPU",
      value: process.env.CPU
    }
  ]
});

// Listen for the "install" event, which indicates the 
// process is available as a service. 
svc.on('install',function(){
  svc.start();
});

svc.install();
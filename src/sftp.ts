const { deploy } = require('sftp-sync-deploy');

const config = require('../sftps-config.json');

let options = {
  dryRun: false,                  // Enable dry-run mode. Default to false
};

deploy(config, options).then(() => {
  console.log('success!');
})

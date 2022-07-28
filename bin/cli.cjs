#!/usr/bin/env node

const {execSync} = require("child_process");
const readline = require('readline');

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch(e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true
}

function init(repoName) {
  const gitCheckoutCommand = `git clone --depth 1 https://github.com/vtprodesign-inc/create-firekit-app.git ${repoName}`;
  const installDepsCommand = `cd ${repoName} && npm install`;
  const installFbDepsCommand = `cd ${repoName}/functions && npm install`;
  const removeOriginCommand = `cd ${repoName} && git remote remove origin`;
  
  console.log(`Clone the repository with name ${repoName}`);
  const checkedOut = runCommand(gitCheckoutCommand);
  if (!checkedOut) process.exit(-1);
  
  console.log(`Installing dependencies for ${repoName}`);
  const installedDeps = runCommand(installDepsCommand);
  if (!installedDeps) process.exit(-1);
  
  console.log(`Installing dependencies for Firebase Functions for ${repoName}`);
  const installedFbDeps = runCommand(installFbDepsCommand);
  if (!installedFbDeps) process.exit(-1);
  
  console.log(`Cleaning up...`);
  const removedOrigin = runCommand(removeOriginCommand);
  if (!removedOrigin) process.exit(-1);
  
  console.log("Congratulations! You are ready to:");
  console.log(`cd ${repoName} && npm start`);
}

if (process.argv[2]) {
  init(process.argv[2])
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Project name: ', (name) => {
    rl.close();
    init(name)
  });
}
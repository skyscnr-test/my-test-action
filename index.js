const core = require('@actions/core');

function run() {
  try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello, ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

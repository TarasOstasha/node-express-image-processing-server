const gm = require('gm');
const { workerData,  parentPort } = require('worker_threads');

gm(workerData.source).monochrome().write(workerData.destination, (error) => {
    if(error) throw new Error(error);
    parentPort.postMessage({
        monochrome: true
    })
})
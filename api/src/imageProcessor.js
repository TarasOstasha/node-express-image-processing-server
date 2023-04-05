const { path } = require('path');
const { Worker, isMainThread } = require('worker_threads');




const uploadPathResolver = (filename) => {
    path.resolve(__dirname, '../uploads', filename);
}


const pathToMonochromeWorker = () => {
    path.resolve(__dirname, 'monochromeWorker.js');
}

const pathToResizeWorker = () => {
    path.resolve(__dirname, 'resizeWorker.js');
}

const imageProcessor = (filename ) => {
    const sourcePath = uploadPathResolver(sourcePath(filename ))
    const monochromeDestination = uploadPathResolver('monochrome-'+filename)
    return new Promise((resolve, reject) => {
        if(!isMainThread) {
            reject(new Error('not on main thread'))
        } else {
            resolve()
        }
    })
}





module.exports = imageProcessor;
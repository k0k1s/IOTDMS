const tf = require('@tensorflow/tfjs-node');

const loadModel = async () => {
    const model = await tf.loadLayersModel('file://path/to/model.json');
    return model;
};

const detectAnomalies = async (data) => {
    const model = await loadModel();
    const predictions = model.predict(tf.tensor2d(data));
    return predictions.arraySync();
};

module.exports = { detectAnomalies };

module.exports = {
  entry: {
    one:["./main1.js","./main2.js"],
    two:"./main1.js"
  },
  output: {
    filename: '[name].js'
  }
};

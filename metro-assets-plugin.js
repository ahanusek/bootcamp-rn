module.exports = function (assetData) {
  if (assetData.httpServerLocation.indexOf('../') !== -1) {
    assetData.httpServerLocation = assetData.httpServerLocation.replace(
      /\.\.\//,
      '_',
    );
  }
  return assetData;
};

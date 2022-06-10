const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let resultAfterWatch = [];

  await promiseTheaterIXX().then((data) => {
    resultAfterWatch.push(...data);
  });

  await promiseTheaterVGC().then((data) => {
    resultAfterWatch.push(...data);
  });
  return resultAfterWatch.filter((review) => review.hasil === emosi).length;
};

module.exports = {
  promiseOutput,
};

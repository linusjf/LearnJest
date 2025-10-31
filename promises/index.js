function fetchData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    if (shouldFail) {
      reject("error");
    } else {
      resolve("peanut butter");
    }
  });
}


module.exports = {fetchData};

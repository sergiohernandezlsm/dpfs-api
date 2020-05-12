const sum = (a, b) => {
  return a + b;
};

const sum2 = (a, b) => {
  return a * b;
};

const compileAndroidCode = () => {
  throw new Error("you are using the wrong JDK");
};

module.exports = { sum, sum2, compileAndroidCode };

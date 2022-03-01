const { onFuncPrefixMatchingCreate } = require("./funcPrefixMatching");

module.exports = {
  rules: {
    "func-prefix-matching-2": {
      create: onFuncPrefixMatchingCreate,
    },
  },
};

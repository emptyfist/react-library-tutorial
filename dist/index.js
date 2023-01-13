var React = require('react');

var SimpleButton = function SimpleButton(_ref) {
  var label = _ref.label;
  return React.createElement("button", {
    className: "emptyfist-btn"
  }, label);
};

var SimpleInput = function SimpleInput(_ref) {
  var placeholder = _ref.placeholder;
  return React.createElement("input", {
    className: "emptyfist-input",
    placeholder: placeholder
  });
};

exports.SimpleButton = SimpleButton;
exports.SimpleInput = SimpleInput;
//# sourceMappingURL=index.js.map

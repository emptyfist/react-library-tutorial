import { createElement } from 'react';

const SimpleButton = ({
  label
}) => {
  return createElement("button", {
    className: "emptyfist-btn"
  }, label);
};

const SimpleInput = ({
  placeholder
}) => {
  return createElement("input", {
    className: "emptyfist-input",
    placeholder: placeholder
  });
};

export { SimpleButton, SimpleInput };
//# sourceMappingURL=index.modern.js.map

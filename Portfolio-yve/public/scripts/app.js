"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./styles/style.scss");

require("../node_modules/bootstrap/scss/bootstrap.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var root = document.getElementById("root");

var template = /*#__PURE__*/_react["default"].createElement("div", {
  className: "containerr"
}, /*#__PURE__*/_react["default"].createElement("div", {
  className: "img-part"
}), /*#__PURE__*/_react["default"].createElement("div", {
  className: "sign-in"
}, /*#__PURE__*/_react["default"].createElement("div", {
  className: "into"
}, /*#__PURE__*/_react["default"].createElement("i", {
  "class": "fas fa-lock-alt"
}), /*#__PURE__*/_react["default"].createElement("h1", null, "Sign In"), /*#__PURE__*/_react["default"].createElement("div", {
  className: "inputs"
}, /*#__PURE__*/_react["default"].createElement("input", {
  type: "text",
  name: "",
  id: "inp-1",
  placeholder: "Email Adress *",
  required: true
}), /*#__PURE__*/_react["default"].createElement("input", {
  type: "text",
  name: "",
  id: "inp-1",
  placeholder: "Password *",
  required: true
})), /*#__PURE__*/_react["default"].createElement("div", {
  className: "box"
}, /*#__PURE__*/_react["default"].createElement("label", {
  htmlFor: ""
}, /*#__PURE__*/_react["default"].createElement("input", {
  type: "checkbox",
  name: "check",
  id: "check"
}), " ", /*#__PURE__*/_react["default"].createElement("span", null, "Remember me"), " ")), /*#__PURE__*/_react["default"].createElement("div", {
  className: "btn"
}, /*#__PURE__*/_react["default"].createElement("button", null, "Sign In")), /*#__PURE__*/_react["default"].createElement("div", {
  className: "end"
}, /*#__PURE__*/_react["default"].createElement("a", {
  href: "#"
}, "Forgot password?"), /*#__PURE__*/_react["default"].createElement("a", {
  href: "#"
}, "Don't have an account? Sign Up")))));

_reactDom["default"].render(template, root);

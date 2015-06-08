// module Mario.DOM

exports.updatePosition =
  function updatePosition(c) {
    return function() {
      c.node.style.left = c.x + "px";
      c.node.style.bottom = c.y + "px";
    };
  };


exports.onDOMContentLoaded =
  function onDOMContentLoaded(action) {
    return function() {
      if (document.readyState === "interactive") {
        action();
      } else {
        document.addEventListener("DOMContentLoaded", action);
      }
      return {};
    };
  };

exports.getMarioNode =
  function getMarioNode() {
    return document.getElementById("mario");
  };

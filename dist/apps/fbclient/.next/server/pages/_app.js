"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
;// CONCATENATED MODULE: ./theme.ts
const theme = {
    fontFamily: "Noto Sans, sans-serif",
    colorScheme: "light",
    headings: {
        fontFamily: "Noto Sans, sans-serif"
    },
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400
    },
    colors: {
        primary: [
            "#1877f2",
            "#f0f2f5",
            "#ffffff",
            "#42b72a",
            "#f0f2f5",
            "#f6f2f5",
            "#f0fqf5",
            "#f0f9f5",
            "#f012f5",
            "#f092f5", 
        ]
    },
    other: {
        appShellDefaultStyles: {
            maxWidth: "1800px",
            minHeight: "100vh",
            margin: "0px auto"
        }
    }
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./pages/_app.tsx






function CustomApp({ Component , pageProps  }) {
    const [showing, setShowing] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        setShowing(true);
    }, []);
    if (!showing) {
        return null;
    }
    if (true) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    } else {}
}
/* harmony default export */ const _app = (CustomApp);


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3430));
module.exports = __webpack_exports__;

})();
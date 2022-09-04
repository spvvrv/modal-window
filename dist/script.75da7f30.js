// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pets = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 1. Я нашла имя животного, как передать его в innerHTML, чтобы брали значения именно этого объекта??
// 2. subtitle is not defined - почему??
// 3.   container.innerHTML = ``; - null is not an object (evaluating 'container.innerHTML = ""')
// 4, function renderPets(pets) - для чего эта функция вообще нужна??
var pets = [{
  name: "Katrine",
  subtitle: "Katrine the kitten",
  description: "Katrine the kitten is patiently waiting to find a new forever home.",
  image: "./img/pets-katrine-3.jpg",
  properties: {
    Age: "2 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites: "none"
  }
}, {
  name: "Betty",
  subtitle: "Betty the kitten",
  description: "Betty the kitten is patiently waiting to find a new forever home.",
  image: "./img/pets-katrine.jpg",
  properties: {
    Age: "2 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites: "none"
  }
}, {
  name: "Scarlet",
  subtitle: "Scarlet the dog",
  description: "Scarlet the dog is patiently waiting to find a new forever home.",
  image: "./img/pets-scarlet.jpg",
  properties: {
    Age: "7 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites: "none"
  }
}, {
  name: "Timmy",
  subtitle: "Timmy the puppy",
  description: "Timmy the puppy is patiently waiting to find a new forever home.",
  image: "./img/pets-timmy.jpg",
  properties: {
    Age: "11 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites: "none"
  }
}, {
  name: "Woody",
  subtitle: "Woody the labrador",
  description: "Woody the labrador is patiently waiting to find a new forever home.",
  image: "./img/pets-woody.jpg",
  properties: {
    Age: "5 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites: "none"
  }
}, {
  name: "Jack",
  subtitle: "Jack the puppy",
  description: "Jack the puppy is patiently waiting to find a new forever home.",
  image: "./img/pets-katrine-2.jpg",
  properties: {
    Age: "6 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites: "none"
  }
}];
exports.pets = pets;

function openModal(petName) {
  var _pets$find = pets.find(function (pet) {
    return pet.name === petName;
  }),
      image = _pets$find.image,
      description = _pets$find.description,
      subtitle = _pets$find.subtitle,
      properties = _pets$find.properties; //вернет первое значение, если оно соответствует условию (если это имя есть в массиве)


  var modalPopupWrapper = document.querySelector("#pet-popup-container"); //вывела содержимое объекта со всеми тегами

  modalPopupWrapper.innerHTML = "\n      <img src=\"".concat(image, "\" alt=\"\" width=\"500\" height=\"500\">\n      <div class=\"popup__about\">\n          <img src=\"/img/svg/popup__close.svg\" alt=\"\" class=\"close-popup-pet\">\n          <h2 class=\"popup__title\">").concat(petName, "</h2>\n          <h3 class=\"popup__subtitle\">").concat(subtitle, "</h3>\n          <div class=\"popup__text\">").concat(description, "</div>\n          <ul class=\"popup__information\">\n              ").concat(Object.entries(properties).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return "<li class=\"popup__pet-info\">".concat(key, ": ").concat(value, "</li>");
  }).join(""), "\n          </ul>\n      </div>\n    ");
  var popupPetInfoBody = document.querySelector(".popup__pet-info-body");
  var popupWrapper = document.querySelector(".popup__wrapper");
  popupPetInfoBody.classList.add("active");
  popupWrapper.classList.add("active");
  var closePopupPetButton = document.querySelector(".close-popup-pet");
  closePopupPetButton.addEventListener("click", function () {
    popupPetInfoBody.classList.remove("active");
    popupWrapper.classList.remove("active");
  });
}

function renderPets(pets) {
  var container = document.querySelector(".pets__cards");
  container.innerHTML = "";
  pets.forEach(function (pet) {
    container.innerHTML += "\n      <div class=\"pets__card\">\n      <img src=\"".concat(pet.image, "\" alt=\"\">\n      <p>").concat(pet.name, "</p>\n      <button data-pet-name=\"").concat(pet.name, "\" class=\"button__pets-card\">Learn more</button>\n  </div>\n      ");
  });
  document.querySelectorAll(".button__pets-card").forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.dataset.petName);
    });
  });
}

renderPets(pets); // ___________
// const modalPopupWrapper = document.getElementById('#pet-popup-container');
// console.log(modalPopupWrapper); //вывела активное модальное окно
// const betty = document.querySelectorAll('[data-item="1"]')
// console.log(betty) //поиск по data-item, которое присвоила карточке
// const modalPopupWrapperContent = modalPopupWrapper.innerHTML; //получили базовое содержимое вместе со всеми тегами
// console.log(modalPopupWrapperContent);
// modalPopupWrapper.innerHTML = 'test1'; //меняю содержимое в базовом модальном окне
// modalPopupWrapper.innerHtml = `${modalPopupWrapperContent} <p>test2</p>`;
// console.log(modalPopupWrapper.innerHtml); //добавляю к базовому содержимому параграф
// const modalPopupWrapper = document.querySelector("#pet-popup-container");
// const modalPopupWrapperFull = modalPopupWrapper.outerHTML; //получили полную оболочку узла
// console.log(modalPopupWrapperFull);
// modalPopupWrapper.outerHTML = 'test2' //поменяли всю оболочку узла
// const modalPopupWrapper = document.querySelector("#pet-popup-container");
// const modalPopupWrapperTextContent = modalPopupWrapper.textContent;
// console.log(modalPopupWrapperTextContent);//получили только текст из узла
// modalPopupWrapper.textContent = `test3` //все прописанные теги будут преобразованы в строки, записывает текст "безопасно"
},{}],"script.js":[function(require,module,exports) {
"use strict";

require("./pet.js");

//popup starts
var popupBg = document.querySelector(".popup__bg");
var popup = document.querySelector(".popup");
var openPopupButtons = document.querySelectorAll(".open-popup");
var closePopupButton = document.querySelector(".close-popup");
openPopupButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});
closePopupButton.addEventListener("click", function () {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
}); //popup ends
//popup-info-pet starts

var popupPetInfoBody = document.querySelector(".popup__pet-info-body");
var popupWrapper = document.querySelector(".popup__wrapper");
var openPopupInfoLinkButton = document.querySelectorAll(".button__pets-card");
var closePopupPetButton = document.querySelector(".close-popup-pet");
openPopupInfoLinkButton.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    popupPetInfoBody.classList.add("active");
    popupWrapper.classList.add("active");
  });
});
closePopupPetButton.addEventListener("click", function () {
  popupPetInfoBody.classList.remove("active");
  popupWrapper.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (e.target === popupPetInfoBody) {
    popupPetInfoBody.classList.remove("active");
    popupWrapper.classList.remove("active");
  }
}); //popup-info-pet ends
},{"./pet.js":"pet.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33857" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map
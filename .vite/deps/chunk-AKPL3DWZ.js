import {
  _objectWithoutPropertiesLoose
} from "./chunk-AVUONKA5.js";
import {
  CacheProvider,
  Global,
  ThemeContext,
  _extends,
  clsx_default,
  createCache,
  serializeStyles,
  styled
} from "./chunk-ALOCFXKX.js";
import {
  require_prop_types
} from "./chunk-DQROLGKX.js";
import {
  require_jsx_runtime
} from "./chunk-GGZZ3EVM.js";
import {
  require_react
} from "./chunk-D2KY6O3O.js";
import {
  __commonJS,
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/joy/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@mui/joy/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    (function() {
      function typeOf(object) {
        if ("object" === typeof object && null !== object) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              switch (object = object.type, object) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                case REACT_VIEW_TRANSITION_TYPE:
                  return object;
                default:
                  switch (object = object && object.$$typeof, object) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                      return object;
                    case REACT_CONSUMER_TYPE:
                      return object;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }
      var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
      exports.ContextConsumer = REACT_CONSUMER_TYPE;
      exports.ContextProvider = REACT_CONTEXT_TYPE;
      exports.Element = REACT_ELEMENT_TYPE;
      exports.ForwardRef = REACT_FORWARD_REF_TYPE;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Lazy = REACT_LAZY_TYPE;
      exports.Memo = REACT_MEMO_TYPE;
      exports.Portal = REACT_PORTAL_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
      exports.isContextConsumer = function(object) {
        return typeOf(object) === REACT_CONSUMER_TYPE;
      };
      exports.isContextProvider = function(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      };
      exports.isElement = function(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      };
      exports.isForwardRef = function(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      };
      exports.isFragment = function(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      };
      exports.isLazy = function(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      };
      exports.isMemo = function(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      };
      exports.isPortal = function(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      };
      exports.isProfiler = function(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      };
      exports.isStrictMode = function(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      };
      exports.isSuspense = function(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      };
      exports.isSuspenseList = function(object) {
        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
      };
      exports.isValidElementType = function(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
      };
      exports.typeOf = typeOf;
    })();
  }
});

// node_modules/@mui/joy/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/@mui/joy/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/@mui/joy/node_modules/@mui/utils/esm/capitalize/capitalize.js
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(true ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
var React = __toESM(require_react());
function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return React.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
  ) !== -1;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useId/useId.js
var React2 = __toESM(require_react());
var globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React2.useState(idOverride);
  const id = idOverride || defaultId;
  React2.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
var maybeReactUseId = React2["useId".toString()];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var React3 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
function useForkRef(...refs) {
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();
var ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/joy/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var React4 = __toESM(require_react());
function isPlainObject(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (React4.isValidElement(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (React4.isValidElement(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) && // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
var import_prop_types = __toESM(require_prop_types());
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementAcceptingRef = chainPropTypes(import_prop_types.default.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(import_prop_types.default.element.isRequired, acceptingRef);

// node_modules/@mui/joy/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
var import_prop_types2 = __toESM(require_prop_types());
function isClassComponent2(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent2(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes(import_prop_types2.default.elementType, elementTypeAcceptingRef);

// node_modules/@mui/joy/node_modules/@mui/utils/esm/exactProp/exactProp.js
var specialProperty = "exact-prop: ​";
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return _extends({}, propTypes, {
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  });
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
var import_react_is = __toESM(require_react_is());
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || "";
}
function getFunctionComponentName(Component, fallback = "") {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== "" ? `${wrapperName}(${functionName})` : wrapperName);
}
function getDisplayName(Component) {
  if (Component == null) {
    return void 0;
  }
  if (typeof Component === "string") {
    return Component;
  }
  if (typeof Component === "function") {
    return getFunctionComponentName(Component, "Component");
  }
  if (typeof Component === "object") {
    switch (Component.$$typeof) {
      case import_react_is.ForwardRef:
        return getWrappedName(Component, Component.render, "ForwardRef");
      case import_react_is.Memo:
        return getWrappedName(Component, Component.type, "memo");
      default:
        return void 0;
    }
  }
  return void 0;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js
var ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();

// node_modules/@mui/joy/node_modules/@mui/utils/esm/refType/refType.js
var import_prop_types3 = __toESM(require_prop_types());
var refType = import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]);

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var React5 = __toESM(require_react());
var useEnhancedEffect = typeof window !== "undefined" ? React5.useLayoutEffect : React5.useEffect;
var useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useControlled/useControlled.js
var React6 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React7 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var React8 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var React9 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
var Timeout = class _Timeout {
  constructor() {
    this.currentId = null;
    this.clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new _Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
};

// node_modules/@mui/joy/node_modules/@mui/utils/esm/useIsFocusVisible/useIsFocusVisible.js
var React10 = __toESM(require_react());
var hadFocusVisibleRecentlyTimeout = new Timeout();

// node_modules/@mui/joy/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
var React11 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js
var React12 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/utils/esm/integerPropType/integerPropType.js
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function ponyfillIsInteger(x) {
  return typeof x === "number" && isFinite(x) && Math.floor(x) === x;
}
var isInteger = Number.isInteger || ponyfillIsInteger;
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;

// node_modules/@mui/joy/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
function resolveProps(defaultProps, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}

// node_modules/@mui/joy/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var React13 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/system/esm/responsivePropType.js
var import_prop_types4 = __toESM(require_prop_types());
var responsivePropType = true ? import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string, import_prop_types4.default.object, import_prop_types4.default.array]) : {};
var responsivePropType_default = responsivePropType;

// node_modules/@mui/joy/node_modules/@mui/system/esm/breakpoints.js
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/system/esm/merge.js
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
var merge_default = merge;

// node_modules/@mui/joy/node_modules/@mui/system/esm/breakpoints.js
var values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style4) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style4);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  if (typeof breakpointValues !== "object") {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === "object") {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/style.js
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = true ? {
    [prop]: responsivePropType_default
  } : {};
  fn.filterProps = [prop];
  return fn;
}
var style_default = style;

// node_modules/@mui/joy/node_modules/@mui/system/esm/memoize.js
function memoize(fn) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/spacing.js
var properties = {
  m: "margin",
  p: "padding"
};
var directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
var aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
var getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split("");
  const property = properties[a];
  const direction = directions[b] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
var marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
var paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
var spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (true) {
        if (typeof abs !== "number") {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs) => {
      if (typeof abs === "string") {
        return abs;
      }
      if (true) {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join("\n"));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join("\n"));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  if (true) {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, "It should be a number, an array or a function."].join("\n"));
  }
  return () => void 0;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, "spacing", 8, "spacing");
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style2(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge_default, {});
}
function margin(props) {
  return style2(props, marginKeys);
}
margin.propTypes = true ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style2(props, paddingKeys);
}
padding.propTypes = true ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return style2(props, spacingKeys);
}
spacing.propTypes = true ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType_default;
  return obj;
}, {}) : {};
spacing.filterProps = spacingKeys;
var spacing_default = spacing;

// node_modules/@mui/joy/node_modules/@mui/system/esm/compose.js
function compose(...styles) {
  const handlers = styles.reduce((acc, style4) => {
    style4.filterProps.forEach((prop) => {
      acc[prop] = style4;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge_default(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = true ? styles.reduce((acc, style4) => Object.assign(acc, style4.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style4) => acc.concat(style4.filterProps), []);
  return fn;
}
var compose_default = compose;

// node_modules/@mui/joy/node_modules/@mui/system/esm/borders.js
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style_default({
    prop,
    themeKey: "borders",
    transform
  });
}
var border = createBorderStyle("border", borderTransform);
var borderTop = createBorderStyle("borderTop", borderTransform);
var borderRight = createBorderStyle("borderRight", borderTransform);
var borderBottom = createBorderStyle("borderBottom", borderTransform);
var borderLeft = createBorderStyle("borderLeft", borderTransform);
var borderColor = createBorderStyle("borderColor");
var borderTopColor = createBorderStyle("borderTopColor");
var borderRightColor = createBorderStyle("borderRightColor");
var borderBottomColor = createBorderStyle("borderBottomColor");
var borderLeftColor = createBorderStyle("borderLeftColor");
var outline = createBorderStyle("outline", borderTransform);
var outlineColor = createBorderStyle("outlineColor");
var borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4, "borderRadius");
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = true ? {
  borderRadius: responsivePropType_default
} : {};
borderRadius.filterProps = ["borderRadius"];
var borders = compose_default(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
var borders_default = borders;

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssGrid.js
var gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "gap");
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = true ? {
  gap: responsivePropType_default
} : {};
gap.filterProps = ["gap"];
var columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "columnGap");
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = true ? {
  columnGap: responsivePropType_default
} : {};
columnGap.filterProps = ["columnGap"];
var rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8, "rowGap");
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = true ? {
  rowGap: responsivePropType_default
} : {};
rowGap.filterProps = ["rowGap"];
var gridColumn = style_default({
  prop: "gridColumn"
});
var gridRow = style_default({
  prop: "gridRow"
});
var gridAutoFlow = style_default({
  prop: "gridAutoFlow"
});
var gridAutoColumns = style_default({
  prop: "gridAutoColumns"
});
var gridAutoRows = style_default({
  prop: "gridAutoRows"
});
var gridTemplateColumns = style_default({
  prop: "gridTemplateColumns"
});
var gridTemplateRows = style_default({
  prop: "gridTemplateRows"
});
var gridTemplateAreas = style_default({
  prop: "gridTemplateAreas"
});
var gridArea = style_default({
  prop: "gridArea"
});
var grid = compose_default(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var cssGrid_default = grid;

// node_modules/@mui/joy/node_modules/@mui/system/esm/palette.js
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
var color = style_default({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
});
var bgcolor = style_default({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
var backgroundColor = style_default({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
var palette = compose_default(color, bgcolor, backgroundColor);
var palette_default = palette;

// node_modules/@mui/joy/node_modules/@mui/system/esm/sizing.js
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
var width = style_default({
  prop: "width",
  transform: sizingTransform
});
var maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
var minWidth = style_default({
  prop: "minWidth",
  transform: sizingTransform
});
var height = style_default({
  prop: "height",
  transform: sizingTransform
});
var maxHeight = style_default({
  prop: "maxHeight",
  transform: sizingTransform
});
var minHeight = style_default({
  prop: "minHeight",
  transform: sizingTransform
});
var sizeWidth = style_default({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
});
var sizeHeight = style_default({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
});
var boxSizing = style_default({
  prop: "boxSizing"
});
var sizing = compose_default(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing_default = sizing;

// node_modules/@mui/joy/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js
var defaultSxConfig = {
  // borders
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: borderTransform
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  // palette
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: "typography"
  }
};
var defaultSxConfig_default = defaultSxConfig;

// node_modules/@mui/joy/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var _excluded = ["sx"];
var splitProps = (props) => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig_default;
  Object.keys(props).forEach((prop) => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style: style4
    } = options;
    if (val == null) {
      return null;
    }
    if (themeKey === "typography" && val === "inherit") {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style4) {
      return style4(props);
    }
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {},
      nested
    } = props || {};
    if (!sx) {
      return null;
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig_default;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (config[styleKey]) {
              css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, (x) => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme,
                  nested: true
                });
              } else {
                css2 = merge_default(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge_default(css2, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      if (!nested && theme.modularCssLayers) {
        return {
          "@layer sx": removeUnusedBreakpoints(breakpointsKeys, css2)
        };
      }
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
var styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
var styleFunctionSx_default = styleFunctionSx;

// node_modules/@mui/joy/node_modules/@mui/system/esm/createBox.js
var React17 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
var React14 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function getCache(injectFirst, enableCssLayer) {
  const emotionCache = createCache({
    key: "css",
    prepend: injectFirst
  });
  if (enableCssLayer) {
    const prevInsert = emotionCache.insert;
    emotionCache.insert = (...args) => {
      if (!args[1].styles.match(/^@layer\s+[^{]*$/)) {
        args[1].styles = `@layer mui {${args[1].styles}}`;
      }
      return prevInsert(...args);
    };
  }
  return emotionCache;
}
var cacheMap = /* @__PURE__ */ new Map();
function StyledEngineProvider(props) {
  const {
    injectFirst,
    enableCssLayer,
    children
  } = props;
  const cache = React14.useMemo(() => {
    const cacheKey = `${injectFirst}-${enableCssLayer}`;
    if (typeof document === "object" && cacheMap.has(cacheKey)) {
      return cacheMap.get(cacheKey);
    }
    const fresh = getCache(injectFirst, enableCssLayer);
    cacheMap.set(cacheKey, fresh);
    return fresh;
  }, [injectFirst, enableCssLayer]);
  if (injectFirst || enableCssLayer) {
    return (0, import_jsx_runtime.jsx)(CacheProvider, {
      value: cache,
      children
    });
  }
  return children;
}
true ? StyledEngineProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types6.default.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: import_prop_types6.default.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: import_prop_types6.default.bool
} : void 0;

// node_modules/@mui/joy/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
var React15 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme: defaultTheme5 = {}
  } = props;
  const globalStyles = typeof styles === "function" ? (themeInput) => styles(isEmpty(themeInput) ? defaultTheme5 : themeInput) : styles;
  return (0, import_jsx_runtime2.jsx)(Global, {
    styles: globalStyles
  });
}
true ? GlobalStyles.propTypes = {
  defaultTheme: import_prop_types7.default.object,
  styles: import_prop_types7.default.oneOfType([import_prop_types7.default.array, import_prop_types7.default.string, import_prop_types7.default.object, import_prop_types7.default.func])
} : void 0;

// node_modules/@mui/joy/node_modules/@mui/styled-engine/index.js
function styled2(tag, options) {
  const stylesFactory = styled(tag, options);
  if (true) {
    return (...styles) => {
      const component = typeof tag === "string" ? `"${tag}"` : "component";
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join("\n"));
      } else if (styles.some((style4) => style4 === void 0)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}
var internal_processStyles = (tag, processor) => {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};
var wrapper = [];
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return serializeStyles(wrapper);
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/createTheme/createBreakpoints.js
var _excluded2 = ["values", "unit", "step"];
var sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values2 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded2);
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/createTheme/shape.js
var shape = {
  borderRadius: 4
};
var shape_default = shape;

// node_modules/@mui/joy/node_modules/@mui/system/esm/createTheme/createSpacing.js
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing2 = (...argsInput) => {
    if (true) {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing2.mui = true;
  return spacing2;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/createTheme/applyStyles.js
function applyStyles(key, styles) {
  const theme = this;
  if (theme.vars && typeof theme.getColorSchemeSelector === "function") {
    const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/createTheme/createTheme.js
var _excluded3 = ["breakpoints", "palette", "spacing", "shape"];
function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded3);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing2 = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing: spacing2,
    shape: _extends({}, shape_default, shapeInput)
  }, other);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig_default, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/joy/node_modules/@mui/system/esm/useThemeWithoutDefault.js
var React16 = __toESM(require_react());
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme5 = null) {
  const contextTheme = React16.useContext(ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme5 : contextTheme;
}
var useThemeWithoutDefault_default = useTheme;

// node_modules/@mui/joy/node_modules/@mui/system/esm/useTheme.js
var systemDefaultTheme = createTheme_default();
function useTheme2(defaultTheme5 = systemDefaultTheme) {
  return useThemeWithoutDefault_default(defaultTheme5);
}
var useTheme_default = useTheme2;

// node_modules/@mui/joy/node_modules/@mui/system/esm/createBox.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded4 = ["className", "component"];
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme5,
    defaultClassName = "MuiBox-root",
    generateClassName
  } = options;
  const BoxRoot = styled2("div", {
    shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
  })(styleFunctionSx_default);
  const Box2 = React17.forwardRef(function Box3(inProps, ref) {
    const theme = useTheme_default(defaultTheme5);
    const _extendSxProp = extendSxProp(inProps), {
      className,
      component = "div"
    } = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded4);
    return (0, import_jsx_runtime3.jsx)(BoxRoot, _extends({
      as: component,
      ref,
      className: clsx_default(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme
    }, other));
  });
  return Box2;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js
var React18 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function wrapGlobalLayer(styles) {
  const serialized = internal_serializeStyles(styles);
  if (styles !== serialized && serialized.styles) {
    if (!serialized.styles.match(/^@layer\s+[^{]*$/)) {
      serialized.styles = `@layer global{${serialized.styles}}`;
    }
    return serialized;
  }
  return styles;
}
function GlobalStyles2({
  styles,
  themeId,
  defaultTheme: defaultTheme5 = {}
}) {
  const upperTheme = useTheme_default(defaultTheme5);
  const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
  let globalStyles = typeof styles === "function" ? styles(resolvedTheme) : styles;
  if (resolvedTheme.modularCssLayers) {
    if (Array.isArray(globalStyles)) {
      globalStyles = globalStyles.map((styleArg) => {
        if (typeof styleArg === "function") {
          return wrapGlobalLayer(styleArg(resolvedTheme));
        }
        return wrapGlobalLayer(styleArg);
      });
    } else {
      globalStyles = wrapGlobalLayer(globalStyles);
    }
  }
  return (0, import_jsx_runtime4.jsx)(GlobalStyles, {
    styles: globalStyles
  });
}
true ? GlobalStyles2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: import_prop_types8.default.object,
  /**
   * @ignore
   */
  styles: import_prop_types8.default.oneOfType([import_prop_types8.default.array, import_prop_types8.default.func, import_prop_types8.default.number, import_prop_types8.default.object, import_prop_types8.default.string, import_prop_types8.default.bool]),
  /**
   * @ignore
   */
  themeId: import_prop_types8.default.string
} : void 0;
var GlobalStyles_default = GlobalStyles2;

// node_modules/@mui/joy/node_modules/@mui/system/esm/display.js
var displayPrint = style_default({
  prop: "displayPrint",
  cssProperty: false,
  transform: (value) => ({
    "@media print": {
      display: value
    }
  })
});
var displayRaw = style_default({
  prop: "display"
});
var overflow = style_default({
  prop: "overflow"
});
var textOverflow = style_default({
  prop: "textOverflow"
});
var visibility = style_default({
  prop: "visibility"
});
var whiteSpace = style_default({
  prop: "whiteSpace"
});
var display_default = compose_default(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

// node_modules/@mui/joy/node_modules/@mui/system/esm/flexbox.js
var flexBasis = style_default({
  prop: "flexBasis"
});
var flexDirection = style_default({
  prop: "flexDirection"
});
var flexWrap = style_default({
  prop: "flexWrap"
});
var justifyContent = style_default({
  prop: "justifyContent"
});
var alignItems = style_default({
  prop: "alignItems"
});
var alignContent = style_default({
  prop: "alignContent"
});
var order = style_default({
  prop: "order"
});
var flex = style_default({
  prop: "flex"
});
var flexGrow = style_default({
  prop: "flexGrow"
});
var flexShrink = style_default({
  prop: "flexShrink"
});
var alignSelf = style_default({
  prop: "alignSelf"
});
var justifyItems = style_default({
  prop: "justifyItems"
});
var justifySelf = style_default({
  prop: "justifySelf"
});
var flexbox = compose_default(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox_default = flexbox;

// node_modules/@mui/joy/node_modules/@mui/system/esm/positions.js
var position = style_default({
  prop: "position"
});
var zIndex = style_default({
  prop: "zIndex",
  themeKey: "zIndex"
});
var top = style_default({
  prop: "top"
});
var right = style_default({
  prop: "right"
});
var bottom = style_default({
  prop: "bottom"
});
var left = style_default({
  prop: "left"
});
var positions_default = compose_default(position, zIndex, top, right, bottom, left);

// node_modules/@mui/joy/node_modules/@mui/system/esm/shadows.js
var boxShadow = style_default({
  prop: "boxShadow",
  themeKey: "shadows"
});
var shadows_default = boxShadow;

// node_modules/@mui/joy/node_modules/@mui/system/esm/typography.js
var fontFamily = style_default({
  prop: "fontFamily",
  themeKey: "typography"
});
var fontSize = style_default({
  prop: "fontSize",
  themeKey: "typography"
});
var fontStyle = style_default({
  prop: "fontStyle",
  themeKey: "typography"
});
var fontWeight = style_default({
  prop: "fontWeight",
  themeKey: "typography"
});
var letterSpacing = style_default({
  prop: "letterSpacing"
});
var textTransform = style_default({
  prop: "textTransform"
});
var lineHeight = style_default({
  prop: "lineHeight"
});
var textAlign = style_default({
  prop: "textAlign"
});
var typographyVariant = style_default({
  prop: "typography",
  cssProperty: false,
  themeKey: "typography"
});
var typography = compose_default(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign, textTransform);
var typography_default = typography;

// node_modules/@mui/joy/node_modules/@mui/system/esm/getThemeValue.js
var filterPropsMapping = {
  borders: borders_default.filterProps,
  display: display_default.filterProps,
  flexbox: flexbox_default.filterProps,
  grid: cssGrid_default.filterProps,
  positions: positions_default.filterProps,
  palette: palette_default.filterProps,
  shadows: shadows_default.filterProps,
  sizing: sizing_default.filterProps,
  spacing: spacing_default.filterProps,
  typography: typography_default.filterProps
};
var styleFunctionMapping = {
  borders: borders_default,
  display: display_default,
  flexbox: flexbox_default,
  grid: cssGrid_default,
  positions: positions_default,
  palette: palette_default,
  shadows: shadows_default,
  sizing: sizing_default,
  spacing: spacing_default,
  typography: typography_default
};
var propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach((propName) => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

// node_modules/@mui/joy/node_modules/@mui/system/esm/Box/Box.js
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/system/esm/Box/boxClasses.js
var boxClasses = generateUtilityClasses("MuiBox", ["root"]);
var boxClasses_default = boxClasses;

// node_modules/@mui/joy/node_modules/@mui/system/esm/Box/Box.js
var Box = createBox({
  defaultClassName: boxClasses_default.root,
  generateClassName: ClassNameGenerator_default.generate
});
true ? Box.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types9.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object])
} : void 0;

// node_modules/@mui/joy/node_modules/@mui/system/esm/createStyled.js
var _excluded5 = ["ownerState"];
var _excluded22 = ["variants"];
var _excluded32 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty2(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
function shallowLayer(serialized, layerName) {
  if (layerName && serialized && typeof serialized === "object" && serialized.styles && !serialized.styles.startsWith("@layer")) {
    serialized.styles = `@layer ${layerName}{${String(serialized.styles)}}`;
  }
  return serialized;
}
var systemDefaultTheme2 = createTheme_default();
var lowercaseFirstLetter = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme: defaultTheme5,
  theme,
  themeId
}) {
  return isEmpty2(theme) ? defaultTheme5 : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref, layerName) {
  let {
    ownerState
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded5);
  const resolvedStylesArg = typeof callableStyle === "function" ? callableStyle(_extends({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap((resolvedStyle) => processStyleArg(resolvedStyle, _extends({
      ownerState
    }, props), layerName));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === "object" && Array.isArray(resolvedStylesArg.variants)) {
    const {
      variants = []
    } = resolvedStylesArg, otherStyles = _objectWithoutPropertiesLoose(resolvedStylesArg, _excluded22);
    let result = otherStyles;
    variants.forEach((variant) => {
      let isMatch = true;
      if (typeof variant.props === "function") {
        isMatch = variant.props(_extends({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach((key) => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        const variantStyle = typeof variant.style === "function" ? variant.style(_extends({
          ownerState
        }, props, ownerState)) : variant.style;
        result.push(layerName ? shallowLayer(internal_serializeStyles(variantStyle), layerName) : variantStyle);
      }
    });
    return result;
  }
  return layerName ? shallowLayer(internal_serializeStyles(resolvedStylesArg), layerName) : resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme5 = systemDefaultTheme2,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    return styleFunctionSx_default(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme: defaultTheme5,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles) => styles.filter((style4) => !(style4 != null && style4.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded32);
    const layerName = componentName && componentName.startsWith("Mui") || !!componentSlot ? "components" : "custom";
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    if (true) {
      if (componentName) {
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || "Root")}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = (stylesArg) => {
      if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg || isPlainObject(stylesArg)) {
        return (props) => {
          const theme = resolveTheme({
            theme: props.theme,
            defaultTheme: defaultTheme5,
            themeId
          });
          return processStyleArg(stylesArg, _extends({}, props, {
            theme
          }), theme.modularCssLayers ? layerName : void 0);
        };
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme5,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, _extends({}, props, {
              theme
            }), theme.modularCssLayers ? "theme" : void 0);
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          var _theme$components;
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme5,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, _extends({}, props, {
            theme
          }), theme.modularCssLayers ? "theme" : void 0);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (true) {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${capitalize(componentSlot || "")}`;
        }
        if (displayName === void 0) {
          displayName = `Styled(${getDisplayName(tag)})`;
        }
        Component.displayName = displayName;
      }
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/styled.js
var styled3 = createStyled();
var styled_default = styled3;

// node_modules/@mui/joy/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme.components[name].defaultProps, props);
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
function useThemeProps({
  props,
  name,
  defaultTheme: defaultTheme5,
  themeId
}) {
  let theme = useTheme_default(defaultTheme5);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js
var React19 = __toESM(require_react());

// node_modules/@mui/joy/node_modules/@mui/system/esm/colorManipulator.js
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors2 = color2.match(re);
  if (colors2 && colors2[0].length === 1) {
    colors2 = colors2.map((n) => n + n);
  }
  return colors2 ? `rgb${colors2.length === 4 ? "a" : ""}(${colors2.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(true ? `MUI: Unsupported \`${color2}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(true ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
var colorChannel = (color2) => {
  const decomposedColor = decomposeColor(color2);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf("hsl") !== -1 && idx !== 0 ? `${val}%` : val).join(" ");
};

// node_modules/@mui/joy/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var React26 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
var React22 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/private-theming/useTheme/ThemeContext.js
var React20 = __toESM(require_react());
var ThemeContext2 = React20.createContext(null);
if (true) {
  ThemeContext2.displayName = "ThemeContext";
}
var ThemeContext_default = ThemeContext2;

// node_modules/@mui/joy/node_modules/@mui/private-theming/useTheme/useTheme.js
var React21 = __toESM(require_react());
function useTheme3() {
  const theme = React21.useContext(ThemeContext_default);
  if (true) {
    React21.useDebugValue(theme);
  }
  return theme;
}

// node_modules/@mui/joy/node_modules/@mui/private-theming/ThemeProvider/nested.js
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var nested_default = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";

// node_modules/@mui/joy/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    if (true) {
      if (!mergedTheme) {
        console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join("\n"));
      }
    }
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme3();
  if (true) {
    if (outerTheme === null && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const theme = React22.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested_default] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return (0, import_jsx_runtime5.jsx)(ThemeContext_default.Provider, {
    value: theme,
    children
  });
}
true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: import_prop_types10.default.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types10.default.oneOfType([import_prop_types10.default.object, import_prop_types10.default.func]).isRequired
} : void 0;
if (true) {
  true ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
}
var ThemeProvider_default = ThemeProvider;

// node_modules/@mui/joy/node_modules/@mui/system/esm/RtlProvider/index.js
var React23 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded6 = ["value"];
var RtlContext = React23.createContext();
function RtlProvider(_ref) {
  let {
    value
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded6);
  return (0, import_jsx_runtime6.jsx)(RtlContext.Provider, _extends({
    value: value != null ? value : true
  }, props));
}
true ? RtlProvider.propTypes = {
  children: import_prop_types11.default.node,
  value: import_prop_types11.default.bool
} : void 0;
var RtlProvider_default = RtlProvider;

// node_modules/@mui/joy/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js
var React24 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var PropsContext = React24.createContext(void 0);
function DefaultPropsProvider({
  value,
  children
}) {
  return (0, import_jsx_runtime7.jsx)(PropsContext.Provider, {
    value,
    children
  });
}
true ? DefaultPropsProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types12.default.node,
  /**
   * @ignore
   */
  value: import_prop_types12.default.object
} : void 0;
var DefaultPropsProvider_default = DefaultPropsProvider;

// node_modules/@mui/joy/node_modules/@mui/system/esm/ThemeProvider/useLayerOrder.js
var React25 = __toESM(require_react());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
function useLayerOrder(theme) {
  const upperTheme = useThemeWithoutDefault_default();
  const id = useId() || "";
  const {
    modularCssLayers
  } = theme;
  let layerOrder = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  if (!modularCssLayers || upperTheme !== null) {
    layerOrder = "";
  } else if (typeof modularCssLayers === "string") {
    layerOrder = modularCssLayers.replace(/mui(?!\.)/g, layerOrder);
  } else {
    layerOrder = `@layer ${layerOrder};`;
  }
  useEnhancedEffect_default(() => {
    const head = document.querySelector("head");
    if (!head) {
      return;
    }
    const firstChild = head.firstChild;
    if (layerOrder) {
      var _firstChild$hasAttrib;
      if (firstChild && (_firstChild$hasAttrib = firstChild.hasAttribute) != null && _firstChild$hasAttrib.call(firstChild, "data-mui-layer-order") && firstChild.getAttribute("data-mui-layer-order") === id) {
        return;
      }
      const styleElement = document.createElement("style");
      styleElement.setAttribute("data-mui-layer-order", id);
      styleElement.textContent = layerOrder;
      head.prepend(styleElement);
    } else {
      var _head$querySelector;
      (_head$querySelector = head.querySelector(`style[data-mui-layer-order="${id}"]`)) == null || _head$querySelector.remove();
    }
  }, [layerOrder, id]);
  if (!layerOrder) {
    return null;
  }
  return (0, import_jsx_runtime8.jsx)(GlobalStyles_default, {
    styles: layerOrder
  });
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React26.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider2(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useThemeWithoutDefault_default(EMPTY_THEME);
  const upperPrivateTheme = useTheme3() || EMPTY_THEME;
  if (true) {
    if (upperTheme === null && typeof localTheme === "function" || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === "function") {
      console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join("\n"));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = engineTheme.direction === "rtl";
  const layerOrder = useLayerOrder(engineTheme);
  return (0, import_jsx_runtime10.jsx)(ThemeProvider_default, {
    theme: privateTheme,
    children: (0, import_jsx_runtime10.jsx)(ThemeContext.Provider, {
      value: engineTheme,
      children: (0, import_jsx_runtime10.jsx)(RtlProvider_default, {
        value: rtlValue,
        children: (0, import_jsx_runtime9.jsxs)(DefaultPropsProvider_default, {
          value: engineTheme == null ? void 0 : engineTheme.components,
          children: [layerOrder, children]
        })
      })
    })
  });
}
true ? ThemeProvider2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: import_prop_types13.default.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: import_prop_types13.default.string
} : void 0;
if (true) {
  true ? ThemeProvider2.propTypes = exactProp(ThemeProvider2.propTypes) : void 0;
}
var ThemeProvider_default2 = ThemeProvider2;

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js
var React29 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/system/esm/InitColorSchemeScript/InitColorSchemeScript.js
var React27 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var DEFAULT_MODE_STORAGE_KEY = "mode";
var DEFAULT_COLOR_SCHEME_STORAGE_KEY = "color-scheme";
var DEFAULT_ATTRIBUTE = "data-color-scheme";
function InitColorSchemeScript(options) {
  const {
    defaultMode = "light",
    defaultLightColorScheme = "light",
    defaultDarkColorScheme = "dark",
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = "document.documentElement",
    nonce
  } = options || {};
  return (0, import_jsx_runtime11.jsx)("script", {
    suppressHydrationWarning: true,
    nonce: typeof window === "undefined" ? nonce : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  var mode = localStorage.getItem('${modeStorageKey}') || '${defaultMode}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
    } else {
      colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
  }
  if (colorScheme) {
    ${colorSchemeNode}.setAttribute('${attribute}', colorScheme);
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssVars/useCurrentColorScheme.js
var React28 = __toESM(require_react());
function getSystemMode(mode) {
  if (typeof window !== "undefined" && mode === "system") {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql.matches) {
      return "dark";
    }
    return "light";
  }
  return void 0;
}
function processState(state, callback) {
  if (state.mode === "light" || state.mode === "system" && state.systemMode === "light") {
    return callback("light");
  }
  if (state.mode === "dark" || state.mode === "system" && state.systemMode === "dark") {
    return callback("dark");
  }
  return void 0;
}
function getColorScheme(state) {
  return processState(state, (mode) => {
    if (mode === "light") {
      return state.lightColorScheme;
    }
    if (mode === "dark") {
      return state.darkColorScheme;
    }
    return void 0;
  });
}
function initializeValue(key, defaultValue) {
  if (typeof window === "undefined") {
    return void 0;
  }
  let value;
  try {
    value = localStorage.getItem(key) || void 0;
    if (!value) {
      localStorage.setItem(key, defaultValue);
    }
  } catch (e) {
  }
  return value || defaultValue;
}
function useCurrentColorScheme(options) {
  const {
    defaultMode = "light",
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === "undefined" ? void 0 : window
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(",");
  const [state, setState] = React28.useState(() => {
    const initialMode = initializeValue(modeStorageKey, defaultMode);
    const lightColorScheme = initializeValue(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
    const darkColorScheme = initializeValue(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme,
      darkColorScheme
    };
  });
  const colorScheme = getColorScheme(state);
  const setMode = React28.useCallback((mode) => {
    setState((currentState) => {
      if (mode === currentState.mode) {
        return currentState;
      }
      const newMode = mode != null ? mode : defaultMode;
      try {
        localStorage.setItem(modeStorageKey, newMode);
      } catch (e) {
      }
      return _extends({}, currentState, {
        mode: newMode,
        systemMode: getSystemMode(newMode)
      });
    });
  }, [modeStorageKey, defaultMode]);
  const setColorScheme = React28.useCallback((value) => {
    if (!value) {
      setState((currentState) => {
        try {
          localStorage.setItem(`${colorSchemeStorageKey}-light`, defaultLightColorScheme);
          localStorage.setItem(`${colorSchemeStorageKey}-dark`, defaultDarkColorScheme);
        } catch (e) {
        }
        return _extends({}, currentState, {
          lightColorScheme: defaultLightColorScheme,
          darkColorScheme: defaultDarkColorScheme
        });
      });
    } else if (typeof value === "string") {
      if (value && !joinedColorSchemes.includes(value)) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState((currentState) => {
          const newState = _extends({}, currentState);
          processState(currentState, (mode) => {
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value);
            } catch (e) {
            }
            if (mode === "light") {
              newState.lightColorScheme = value;
            }
            if (mode === "dark") {
              newState.darkColorScheme = value;
            }
          });
          return newState;
        });
      }
    } else {
      setState((currentState) => {
        const newState = _extends({}, currentState);
        const newLightColorScheme = value.light === null ? defaultLightColorScheme : value.light;
        const newDarkColorScheme = value.dark === null ? defaultDarkColorScheme : value.dark;
        if (newLightColorScheme) {
          if (!joinedColorSchemes.includes(newLightColorScheme)) {
            console.error(`\`${newLightColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.lightColorScheme = newLightColorScheme;
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-light`, newLightColorScheme);
            } catch (error) {
            }
          }
        }
        if (newDarkColorScheme) {
          if (!joinedColorSchemes.includes(newDarkColorScheme)) {
            console.error(`\`${newDarkColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
          } else {
            newState.darkColorScheme = newDarkColorScheme;
            try {
              localStorage.setItem(`${colorSchemeStorageKey}-dark`, newDarkColorScheme);
            } catch (error) {
            }
          }
        }
        return newState;
      });
    }
  }, [joinedColorSchemes, colorSchemeStorageKey, defaultLightColorScheme, defaultDarkColorScheme]);
  const handleMediaQuery = React28.useCallback((event) => {
    if (state.mode === "system") {
      setState((currentState) => {
        const systemMode = event != null && event.matches ? "dark" : "light";
        if (currentState.systemMode === systemMode) {
          return currentState;
        }
        return _extends({}, currentState, {
          systemMode
        });
      });
    }
  }, [state.mode]);
  const mediaListener = React28.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  React28.useEffect(() => {
    const handler = (...args) => mediaListener.current(...args);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addListener(handler);
    handler(media);
    return () => {
      media.removeListener(handler);
    };
  }, []);
  React28.useEffect(() => {
    if (storageWindow) {
      const handleStorage = (event) => {
        const value = event.newValue;
        if (typeof event.key === "string" && event.key.startsWith(colorSchemeStorageKey) && (!value || joinedColorSchemes.match(value))) {
          if (event.key.endsWith("light")) {
            setColorScheme({
              light: value
            });
          }
          if (event.key.endsWith("dark")) {
            setColorScheme({
              dark: value
            });
          }
        }
        if (event.key === modeStorageKey && (!value || ["light", "dark", "system"].includes(value))) {
          setMode(value || defaultMode);
        }
      };
      storageWindow.addEventListener("storage", handleStorage);
      return () => {
        storageWindow.removeEventListener("storage", handleStorage);
      };
    }
    return void 0;
  }, [setColorScheme, setMode, modeStorageKey, colorSchemeStorageKey, joinedColorSchemes, defaultMode, storageWindow]);
  return _extends({}, state, {
    colorScheme,
    setMode,
    setColorScheme
  });
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssVars/createCssVarsProvider.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded7 = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"];
var DISABLE_CSS_TRANSITION = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function createCssVarsProvider(options) {
  const {
    themeId,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: defaultTheme5 = {},
    attribute: defaultAttribute = DEFAULT_ATTRIBUTE,
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey: defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    defaultMode: designSystemMode = "light",
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    resolveTheme: resolveTheme2,
    excludeVariablesFromRoot
  } = options;
  if (!defaultTheme5.colorSchemes || typeof designSystemColorScheme === "string" && !defaultTheme5.colorSchemes[designSystemColorScheme] || typeof designSystemColorScheme === "object" && !defaultTheme5.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.light] || typeof designSystemColorScheme === "object" && !defaultTheme5.colorSchemes[designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark]) {
    console.error(`MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`);
  }
  const ColorSchemeContext = React29.createContext(void 0);
  if (true) {
    ColorSchemeContext.displayName = "ColorSchemeContext";
  }
  const useColorScheme = () => {
    const value = React29.useContext(ColorSchemeContext);
    if (!value) {
      throw new Error(true ? `MUI: \`useColorScheme\` must be called under <CssVarsProvider />` : formatMuiErrorMessage(19));
    }
    return value;
  };
  function CssVarsProvider(props) {
    const {
      children,
      theme: themeProp = defaultTheme5,
      modeStorageKey = defaultModeStorageKey,
      colorSchemeStorageKey = defaultColorSchemeStorageKey,
      attribute = defaultAttribute,
      defaultMode = designSystemMode,
      defaultColorScheme = designSystemColorScheme,
      disableTransitionOnChange = designSystemTransitionOnChange,
      storageWindow = typeof window === "undefined" ? void 0 : window,
      documentNode = typeof document === "undefined" ? void 0 : document,
      colorSchemeNode = typeof document === "undefined" ? void 0 : document.documentElement,
      colorSchemeSelector = ":root",
      disableNestedContext = false,
      disableStyleSheetGeneration = false
    } = props;
    const hasMounted = React29.useRef(false);
    const upperTheme = useTheme3();
    const ctx = React29.useContext(ColorSchemeContext);
    const nested = !!ctx && !disableNestedContext;
    const scopedTheme = themeProp[themeId];
    const _ref = scopedTheme || themeProp, {
      colorSchemes = {},
      components = {},
      generateCssVars = () => ({
        vars: {},
        css: {}
      }),
      cssVarPrefix
    } = _ref, restThemeProp = _objectWithoutPropertiesLoose(_ref, _excluded7);
    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.light;
    const defaultDarkColorScheme2 = typeof defaultColorScheme === "string" ? defaultColorScheme : defaultColorScheme.dark;
    const {
      mode: stateMode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme: stateColorScheme,
      setColorScheme
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme: defaultLightColorScheme2,
      defaultDarkColorScheme: defaultDarkColorScheme2,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow
    });
    let mode = stateMode;
    let colorScheme = stateColorScheme;
    if (nested) {
      mode = ctx.mode;
      colorScheme = ctx.colorScheme;
    }
    const calculatedMode = (() => {
      if (mode) {
        return mode;
      }
      if (defaultMode === "system") {
        return designSystemMode;
      }
      return defaultMode;
    })();
    const calculatedColorScheme = (() => {
      if (!colorScheme) {
        if (calculatedMode === "dark") {
          return defaultDarkColorScheme2;
        }
        return defaultLightColorScheme2;
      }
      return colorScheme;
    })();
    const {
      css: rootCss,
      vars: rootVars
    } = generateCssVars();
    const theme = _extends({}, restThemeProp, {
      components,
      colorSchemes,
      cssVarPrefix,
      vars: rootVars,
      getColorSchemeSelector: (targetColorScheme) => `[${attribute}="${targetColorScheme}"] &`
    });
    const defaultColorSchemeStyleSheet = {};
    const otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css: css2,
        vars
      } = generateCssVars(key);
      theme.vars = deepmerge(theme.vars, vars);
      if (key === calculatedColorScheme) {
        Object.keys(scheme).forEach((schemeKey) => {
          if (scheme[schemeKey] && typeof scheme[schemeKey] === "object") {
            theme[schemeKey] = _extends({}, theme[schemeKey], scheme[schemeKey]);
          } else {
            theme[schemeKey] = scheme[schemeKey];
          }
        });
        if (theme.palette) {
          theme.palette.colorScheme = key;
        }
      }
      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === "string") {
          return defaultColorScheme;
        }
        if (defaultMode === "dark") {
          return defaultColorScheme.dark;
        }
        return defaultColorScheme.light;
      })();
      if (key === resolvedDefaultColorScheme) {
        if (excludeVariablesFromRoot) {
          const excludedVariables = {};
          excludeVariablesFromRoot(cssVarPrefix).forEach((cssVar) => {
            excludedVariables[cssVar] = css2[cssVar];
            delete css2[cssVar];
          });
          defaultColorSchemeStyleSheet[`[${attribute}="${key}"]`] = excludedVariables;
        }
        defaultColorSchemeStyleSheet[`${colorSchemeSelector}, [${attribute}="${key}"]`] = css2;
      } else {
        otherColorSchemesStyleSheet[`${colorSchemeSelector === ":root" ? "" : colorSchemeSelector}[${attribute}="${key}"]`] = css2;
      }
    });
    theme.vars = deepmerge(theme.vars, rootVars);
    React29.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);
    React29.useEffect(() => {
      let timer;
      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        const css2 = documentNode.createElement("style");
        css2.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css2);
        (() => window.getComputedStyle(documentNode.body))();
        timer = setTimeout(() => {
          documentNode.head.removeChild(css2);
        }, 1);
      }
      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    React29.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    const contextValue = React29.useMemo(() => ({
      allColorSchemes,
      colorScheme,
      darkColorScheme,
      lightColorScheme,
      mode,
      setColorScheme,
      setMode,
      systemMode
    }), [allColorSchemes, colorScheme, darkColorScheme, lightColorScheme, mode, setColorScheme, setMode, systemMode]);
    let shouldGenerateStyleSheet = true;
    if (disableStyleSheetGeneration || nested && (upperTheme == null ? void 0 : upperTheme.cssVarPrefix) === cssVarPrefix) {
      shouldGenerateStyleSheet = false;
    }
    const element = (0, import_jsx_runtime13.jsxs)(React29.Fragment, {
      children: [shouldGenerateStyleSheet && (0, import_jsx_runtime13.jsxs)(React29.Fragment, {
        children: [(0, import_jsx_runtime12.jsx)(GlobalStyles, {
          styles: {
            [colorSchemeSelector]: rootCss
          }
        }), (0, import_jsx_runtime12.jsx)(GlobalStyles, {
          styles: defaultColorSchemeStyleSheet
        }), (0, import_jsx_runtime12.jsx)(GlobalStyles, {
          styles: otherColorSchemesStyleSheet
        })]
      }), (0, import_jsx_runtime12.jsx)(ThemeProvider_default2, {
        themeId: scopedTheme ? themeId : void 0,
        theme: resolveTheme2 ? resolveTheme2(theme) : theme,
        children
      })]
    });
    if (nested) {
      return element;
    }
    return (0, import_jsx_runtime12.jsx)(ColorSchemeContext.Provider, {
      value: contextValue,
      children: element
    });
  }
  true ? CssVarsProvider.propTypes = {
    /**
     * The body attribute name to attach colorScheme.
     */
    attribute: import_prop_types14.default.string,
    /**
     * The component tree.
     */
    children: import_prop_types14.default.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: import_prop_types14.default.any,
    /**
     * The CSS selector for attaching the generated custom properties
     */
    colorSchemeSelector: import_prop_types14.default.string,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: import_prop_types14.default.string,
    /**
     * The initial color scheme used.
     */
    defaultColorScheme: import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.object]),
    /**
     * The initial mode used.
     */
    defaultMode: import_prop_types14.default.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: import_prop_types14.default.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: import_prop_types14.default.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: import_prop_types14.default.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: import_prop_types14.default.any,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: import_prop_types14.default.string,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: import_prop_types14.default.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: import_prop_types14.default.object
  } : void 0;
  const defaultLightColorScheme = typeof designSystemColorScheme === "string" ? designSystemColorScheme : designSystemColorScheme.light;
  const defaultDarkColorScheme = typeof designSystemColorScheme === "string" ? designSystemColorScheme : designSystemColorScheme.dark;
  const getInitColorSchemeScript = (params) => InitColorSchemeScript(_extends({
    attribute: defaultAttribute,
    colorSchemeStorageKey: defaultColorSchemeStorageKey,
    defaultMode: designSystemMode,
    defaultLightColorScheme,
    defaultDarkColorScheme,
    modeStorageKey: defaultModeStorageKey
  }, params));
  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript
  };
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssVars/createGetCssVar.js
function createGetCssVar(prefix = "") {
  function appendVar(...vars) {
    if (!vars.length) {
      return "";
    }
    const value = vars[0];
    if (typeof value === "string" && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ""}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ""}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssVars/cssVarsParser.js
var assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === "object") {
        temp[k] = value;
      }
    } else if (temp && typeof temp === "object") {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};
var walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== void 0 && value !== null) {
          if (typeof value === "object" && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
var getCssValue = (keys, value) => {
  if (typeof value === "number") {
    if (["lineHeight", "fontWeight", "opacity", "zIndex"].some((prop) => keys.includes(prop))) {
      return value;
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().indexOf("opacity") >= 0) {
      return value;
    }
    return `${value}px`;
  }
  return value;
};
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  } = options || {};
  const css2 = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(
    theme,
    (keys, value, arrayKeys) => {
      if (typeof value === "string" || typeof value === "number") {
        if (!shouldSkipGeneratingVar2 || !shouldSkipGeneratingVar2(keys, value)) {
          const cssVar = `--${prefix ? `${prefix}-` : ""}${keys.join("-")}`;
          Object.assign(css2, {
            [cssVar]: getCssValue(keys, value)
          });
          assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
          assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${value})`, arrayKeys);
        }
      }
    },
    (keys) => keys[0] === "vars"
    // skip 'vars/*' paths
  );
  return {
    css: css2,
    vars,
    varsWithDefaults
  };
}

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/cssVars/prepareCssVars.js
var _excluded8 = ["colorSchemes", "components", "defaultColorScheme"];
function prepareCssVars(theme, parserConfig) {
  const {
    colorSchemes = {},
    defaultColorScheme = "light"
  } = theme, otherTheme = _objectWithoutPropertiesLoose(theme, _excluded8);
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    [defaultColorScheme]: light
  } = colorSchemes, otherColorSchemes = _objectWithoutPropertiesLoose(colorSchemes, [defaultColorScheme].map(toPropertyKey));
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css: css2,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css: css2,
      vars
    };
  });
  if (light) {
    const {
      css: css2,
      vars,
      varsWithDefaults
    } = cssVarsParser(light, parserConfig);
    themeVars = deepmerge(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css: css2,
      vars
    };
  }
  const generateCssVars = (colorScheme) => {
    var _parserConfig$getSele2;
    if (!colorScheme) {
      var _parserConfig$getSele;
      const css3 = _extends({}, rootCss);
      return {
        css: css3,
        vars: rootVars,
        selector: (parserConfig == null || (_parserConfig$getSele = parserConfig.getSelector) == null ? void 0 : _parserConfig$getSele.call(parserConfig, colorScheme, css3)) || ":root"
      };
    }
    const css2 = _extends({}, colorSchemesMap[colorScheme].css);
    return {
      css: css2,
      vars: colorSchemesMap[colorScheme].vars,
      selector: (parserConfig == null || (_parserConfig$getSele2 = parserConfig.getSelector) == null ? void 0 : _parserConfig$getSele2.call(parserConfig, colorScheme, css2)) || ":root"
    };
  };
  return {
    vars: themeVars,
    generateCssVars
  };
}
var prepareCssVars_default = prepareCssVars;

// node_modules/@mui/joy/node_modules/@mui/system/esm/version/index.js
var major = Number("5");
var minor = Number("18");
var patch = Number("0");
var preReleaseNumber = Number(void 0) || null;

// node_modules/@mui/joy/node_modules/@mui/system/esm/Container/createContainer.js
var React30 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded9 = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"];
var defaultTheme = createTheme_default();
var defaultCreateStyledComponent = styled_default("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
var useThemePropsDefault = (inProps) => useThemeProps({
  props: inProps,
  name: "MuiContainer",
  defaultTheme
});
var useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = (slot) => {
    return generateUtilityClass(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth: maxWidth2
  } = ownerState;
  const slots = {
    root: ["root", maxWidth2 && `maxWidth${capitalize(String(maxWidth2))}`, fixed && "fixed", disableGutters && "disableGutters"]
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps: useThemeProps2 = useThemePropsDefault,
    componentName = "MuiContainer"
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => _extends({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !ownerState.disableGutters && {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => _extends({}, ownerState.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  }, ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  ownerState.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [theme.breakpoints.up(ownerState.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
    }
  }));
  const Container2 = React30.forwardRef(function Container3(inProps, ref) {
    const props = useThemeProps2(inProps);
    const {
      className,
      component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth: maxWidth2 = "lg"
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
    const ownerState = _extends({}, props, {
      component,
      disableGutters,
      fixed,
      maxWidth: maxWidth2
    });
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      // @ts-ignore theme is injected by the styled util
      (0, import_jsx_runtime14.jsx)(ContainerRoot, _extends({
        as: component,
        ownerState,
        className: clsx_default(classes.root, className),
        ref
      }, other))
    );
  });
  true ? Container2.propTypes = {
    children: import_prop_types15.default.node,
    classes: import_prop_types15.default.object,
    className: import_prop_types15.default.string,
    component: import_prop_types15.default.elementType,
    disableGutters: import_prop_types15.default.bool,
    fixed: import_prop_types15.default.bool,
    maxWidth: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types15.default.string]),
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object])
  } : void 0;
  return Container2;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/Container/Container.js
var import_prop_types16 = __toESM(require_prop_types());
var Container = createContainer();
true ? Container.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types16.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types16.default.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types16.default.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types16.default.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: import_prop_types16.default.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types16.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object])
} : void 0;

// node_modules/@mui/joy/node_modules/@mui/system/esm/Container/containerClasses.js
var containerClasses = generateUtilityClasses("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/Grid.js
var import_prop_types18 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/createGrid.js
var React31 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/traverseBreakpoints.js
var filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter((key) => responsiveKeys.includes(key));
var traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0];
  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style4) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style4);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style4;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === "object") {
    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach((key) => {
      if (breakpoints.keys.indexOf(key) !== -1) {
        const breakpointValue = responsive[key];
        if (breakpointValue !== void 0) {
          iterator((responsiveStyles, style4) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style4);
            } else {
              responsiveStyles[breakpoints.up(key)] = style4;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === "number" || typeof responsive === "string") {
    iterator((responsiveStyles, style4) => {
      Object.assign(responsiveStyles, style4);
    }, responsive);
  }
};

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/gridGenerator.js
function appendLevel(level) {
  if (!level) {
    return "";
  }
  return `Level${level}`;
}
function isNestedContainer(ownerState) {
  return ownerState.unstable_level > 0 && ownerState.container;
}
function createGetSelfSpacing(ownerState) {
  return function getSelfSpacing(axis) {
    return `var(--Grid-${axis}Spacing${appendLevel(ownerState.unstable_level)})`;
  };
}
function createGetParentSpacing(ownerState) {
  return function getParentSpacing(axis) {
    if (ownerState.unstable_level === 0) {
      return `var(--Grid-${axis}Spacing)`;
    }
    return `var(--Grid-${axis}Spacing${appendLevel(ownerState.unstable_level - 1)})`;
  };
}
function getParentColumns(ownerState) {
  if (ownerState.unstable_level === 0) {
    return `var(--Grid-columns)`;
  }
  return `var(--Grid-columns${appendLevel(ownerState.unstable_level - 1)})`;
}
var generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const getSelfSpacing = createGetSelfSpacing(ownerState);
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.gridSize, (appendStyle, value) => {
    let style4 = {};
    if (value === true) {
      style4 = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    }
    if (value === "auto") {
      style4 = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    }
    if (typeof value === "number") {
      style4 = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${value} / ${getParentColumns(ownerState)}${isNestedContainer(ownerState) ? ` + ${getSelfSpacing("column")}` : ""})`
      };
    }
    appendStyle(styles, style4);
  });
  return styles;
};
var generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.gridOffset, (appendStyle, value) => {
    let style4 = {};
    if (value === "auto") {
      style4 = {
        marginLeft: "auto"
      };
    }
    if (typeof value === "number") {
      style4 = {
        marginLeft: value === 0 ? "0px" : `calc(100% * ${value} / ${getParentColumns(ownerState)})`
      };
    }
    appendStyle(styles, style4);
  });
  return styles;
};
var generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = isNestedContainer(ownerState) ? {
    [`--Grid-columns${appendLevel(ownerState.unstable_level)}`]: getParentColumns(ownerState)
  } : {
    "--Grid-columns": 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    appendStyle(styles, {
      [`--Grid-columns${appendLevel(ownerState.unstable_level)}`]: value
    });
  });
  return styles;
};
var generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const getParentSpacing = createGetParentSpacing(ownerState);
  const styles = isNestedContainer(ownerState) ? {
    // Set the default spacing as its parent spacing.
    // It will be overridden if spacing props are provided
    [`--Grid-rowSpacing${appendLevel(ownerState.unstable_level)}`]: getParentSpacing("row")
  } : {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    var _theme$spacing;
    appendStyle(styles, {
      [`--Grid-rowSpacing${appendLevel(ownerState.unstable_level)}`]: typeof value === "string" ? value : (_theme$spacing = theme.spacing) == null ? void 0 : _theme$spacing.call(theme, value)
    });
  });
  return styles;
};
var generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const getParentSpacing = createGetParentSpacing(ownerState);
  const styles = isNestedContainer(ownerState) ? {
    // Set the default spacing as its parent spacing.
    // It will be overridden if spacing props are provided
    [`--Grid-columnSpacing${appendLevel(ownerState.unstable_level)}`]: getParentSpacing("column")
  } : {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    var _theme$spacing2;
    appendStyle(styles, {
      [`--Grid-columnSpacing${appendLevel(ownerState.unstable_level)}`]: typeof value === "string" ? value : (_theme$spacing2 = theme.spacing) == null ? void 0 : _theme$spacing2.call(theme, value)
    });
  });
  return styles;
};
var generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
var generateGridStyles = ({
  ownerState
}) => {
  const getSelfSpacing = createGetSelfSpacing(ownerState);
  const getParentSpacing = createGetParentSpacing(ownerState);
  return _extends({
    minWidth: 0,
    boxSizing: "border-box"
  }, ownerState.container && _extends({
    display: "flex",
    flexWrap: "wrap"
  }, ownerState.wrap && ownerState.wrap !== "wrap" && {
    flexWrap: ownerState.wrap
  }, {
    margin: `calc(${getSelfSpacing("row")} / -2) calc(${getSelfSpacing("column")} / -2)`
  }, ownerState.disableEqualOverflow && {
    margin: `calc(${getSelfSpacing("row")} * -1) 0px 0px calc(${getSelfSpacing("column")} * -1)`
  }), (!ownerState.container || isNestedContainer(ownerState)) && _extends({
    padding: `calc(${getParentSpacing("row")} / 2) calc(${getParentSpacing("column")} / 2)`
  }, (ownerState.disableEqualOverflow || ownerState.parentDisableEqualOverflow) && {
    padding: `${getParentSpacing("row")} 0px 0px ${getParentSpacing("column")}`
  }));
};
var generateSizeClassNames = (gridSize) => {
  const classNames = [];
  Object.entries(gridSize).forEach(([key, value]) => {
    if (value !== false && value !== void 0) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
var generateSpacingClassNames = (spacing2, smallestBreakpoint = "xs") => {
  function isValidSpacing(val) {
    if (val === void 0) {
      return false;
    }
    return typeof val === "string" && !Number.isNaN(Number(val)) || typeof val === "number" && val > 0;
  }
  if (isValidSpacing(spacing2)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing2)}`];
  }
  if (typeof spacing2 === "object" && !Array.isArray(spacing2)) {
    const classNames = [];
    Object.entries(spacing2).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
var generateDirectionClasses = (direction) => {
  if (direction === void 0) {
    return [];
  }
  if (typeof direction === "object") {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/createGrid.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded10 = ["className", "children", "columns", "container", "component", "direction", "wrap", "spacing", "rowSpacing", "columnSpacing", "disableEqualOverflow", "unstable_level"];
var defaultTheme2 = createTheme_default();
var defaultCreateStyledComponent2 = styled_default("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault2(props) {
  return useThemeProps({
    props,
    name: "MuiGrid",
    defaultTheme: defaultTheme2
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent2,
    useThemeProps: useThemeProps2 = useThemePropsDefault2,
    componentName = "MuiGrid"
  } = options;
  const GridOverflowContext = React31.createContext(void 0);
  if (true) {
    GridOverflowContext.displayName = "GridOverflowContext";
  }
  const useUtilityClasses2 = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing: spacing2,
      wrap,
      gridSize
    } = ownerState;
    const slots = {
      root: ["root", container && "container", wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(gridSize), ...container ? generateSpacingClassNames(spacing2, theme.breakpoints.keys[0]) : []]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid2 = React31.forwardRef(function Grid3(inProps, ref) {
    var _inProps$columns, _inProps$spacing, _ref, _inProps$rowSpacing, _ref2, _inProps$columnSpacin, _ref3, _disableEqualOverflow;
    const theme = useTheme_default();
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const overflow2 = React31.useContext(GridOverflowContext);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = "div",
      direction = "row",
      wrap = "wrap",
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      disableEqualOverflow: themeDisableEqualOverflow,
      unstable_level: level = 0
    } = props, rest = _objectWithoutPropertiesLoose(props, _excluded10);
    let disableEqualOverflow = themeDisableEqualOverflow;
    if (level && themeDisableEqualOverflow !== void 0) {
      disableEqualOverflow = inProps.disableEqualOverflow;
    }
    const gridSize = {};
    const gridOffset = {};
    const other = {};
    Object.entries(rest).forEach(([key, val]) => {
      if (theme.breakpoints.values[key] !== void 0) {
        gridSize[key] = val;
      } else if (theme.breakpoints.values[key.replace("Offset", "")] !== void 0) {
        gridOffset[key.replace("Offset", "")] = val;
      } else {
        other[key] = val;
      }
    });
    const columns = (_inProps$columns = inProps.columns) != null ? _inProps$columns : level ? void 0 : columnsProp;
    const spacing2 = (_inProps$spacing = inProps.spacing) != null ? _inProps$spacing : level ? void 0 : spacingProp;
    const rowSpacing = (_ref = (_inProps$rowSpacing = inProps.rowSpacing) != null ? _inProps$rowSpacing : inProps.spacing) != null ? _ref : level ? void 0 : rowSpacingProp;
    const columnSpacing = (_ref2 = (_inProps$columnSpacin = inProps.columnSpacing) != null ? _inProps$columnSpacin : inProps.spacing) != null ? _ref2 : level ? void 0 : columnSpacingProp;
    const ownerState = _extends({}, props, {
      level,
      columns,
      container,
      direction,
      wrap,
      spacing: spacing2,
      rowSpacing,
      columnSpacing,
      gridSize,
      gridOffset,
      disableEqualOverflow: (_ref3 = (_disableEqualOverflow = disableEqualOverflow) != null ? _disableEqualOverflow : overflow2) != null ? _ref3 : false,
      // use context value if exists.
      parentDisableEqualOverflow: overflow2
      // for nested grid
    });
    const classes = useUtilityClasses2(ownerState, theme);
    let result = (0, import_jsx_runtime15.jsx)(GridRoot, _extends({
      ref,
      as: component,
      ownerState,
      className: clsx_default(classes.root, className)
    }, other, {
      children: React31.Children.map(children, (child) => {
        if (React31.isValidElement(child) && isMuiElement(child, ["Grid"])) {
          var _unstable_level, _child$props;
          return React31.cloneElement(child, {
            unstable_level: (_unstable_level = (_child$props = child.props) == null ? void 0 : _child$props.unstable_level) != null ? _unstable_level : level + 1
          });
        }
        return child;
      })
    }));
    if (disableEqualOverflow !== void 0 && disableEqualOverflow !== (overflow2 != null ? overflow2 : false)) {
      result = (0, import_jsx_runtime15.jsx)(GridOverflowContext.Provider, {
        value: disableEqualOverflow,
        children: result
      });
    }
    return result;
  });
  true ? Grid2.propTypes = {
    children: import_prop_types17.default.node,
    className: import_prop_types17.default.string,
    columns: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.number), import_prop_types17.default.number, import_prop_types17.default.object]),
    columnSpacing: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string])), import_prop_types17.default.number, import_prop_types17.default.object, import_prop_types17.default.string]),
    component: import_prop_types17.default.elementType,
    container: import_prop_types17.default.bool,
    direction: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types17.default.arrayOf(import_prop_types17.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types17.default.object]),
    disableEqualOverflow: import_prop_types17.default.bool,
    lg: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number, import_prop_types17.default.bool]),
    lgOffset: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number]),
    md: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number, import_prop_types17.default.bool]),
    mdOffset: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number]),
    rowSpacing: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string])), import_prop_types17.default.number, import_prop_types17.default.object, import_prop_types17.default.string]),
    sm: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number, import_prop_types17.default.bool]),
    smOffset: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number]),
    spacing: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string])), import_prop_types17.default.number, import_prop_types17.default.object, import_prop_types17.default.string]),
    sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object]),
    wrap: import_prop_types17.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
    xl: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number, import_prop_types17.default.bool]),
    xlOffset: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number]),
    xs: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number, import_prop_types17.default.bool]),
    xsOffset: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["auto"]), import_prop_types17.default.number])
  } : void 0;
  Grid2.muiName = "Grid";
  return Grid2;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/Grid.js
var Grid = createGrid();
true ? Grid.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types18.default.node,
  /**
   * The number of columns.
   * @default 12
   */
  columns: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.number), import_prop_types18.default.number, import_prop_types18.default.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])), import_prop_types18.default.number, import_prop_types18.default.object, import_prop_types18.default.string]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: import_prop_types18.default.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types18.default.arrayOf(import_prop_types18.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types18.default.object]),
  /**
   * If `true`, the negative margin and padding are apply only to the top and left sides of the grid.
   */
  disableEqualOverflow: import_prop_types18.default.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number, import_prop_types18.default.bool]),
  /**
   * If a number, it sets the margin-left equals to the number of columns the grid item uses.
   * If 'auto', the grid item push itself to the right-end of the container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lgOffset: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number, import_prop_types18.default.bool]),
  /**
   * If a number, it sets the margin-left equals to the number of columns the grid item uses.
   * If 'auto', the grid item push itself to the right-end of the container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   */
  mdOffset: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])), import_prop_types18.default.number, import_prop_types18.default.object, import_prop_types18.default.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number, import_prop_types18.default.bool]),
  /**
   * If a number, it sets the margin-left equals to the number of columns the grid item uses.
   * If 'auto', the grid item push itself to the right-end of the container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   */
  smOffset: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.number, import_prop_types18.default.string])), import_prop_types18.default.number, import_prop_types18.default.object, import_prop_types18.default.string]),
  /**
   * @ignore
   */
  sx: import_prop_types18.default.oneOfType([import_prop_types18.default.arrayOf(import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object, import_prop_types18.default.bool])), import_prop_types18.default.func, import_prop_types18.default.object]),
  /**
   * @internal
   * The level of the grid starts from `0`
   * and increases when the grid nests inside another grid regardless of container or item.
   *
   * ```js
   * <Grid> // level 0
   *   <Grid> // level 1
   *     <Grid> // level 2
   *   <Grid> // level 1
   * ```
   *
   * Only consecutive grid is considered nesting.
   * A grid container will start at `0` if there are non-Grid element above it.
   *
   * ```js
   * <Grid> // level 0
   *   <div>
   *     <Grid> // level 0
   *       <Grid> // level 1
   * ```
   */
  unstable_level: import_prop_types18.default.number,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: import_prop_types18.default.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number, import_prop_types18.default.bool]),
  /**
   * If a number, it sets the margin-left equals to the number of columns the grid item uses.
   * If 'auto', the grid item push itself to the right-end of the container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   */
  xlOffset: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number, import_prop_types18.default.bool]),
  /**
   * If a number, it sets the margin-left equals to the number of columns the grid item uses.
   * If 'auto', the grid item push itself to the right-end of the container.
   * The value is applied for the `xs` breakpoint and wider screens if not overridden.
   */
  xsOffset: import_prop_types18.default.oneOfType([import_prop_types18.default.oneOf(["auto"]), import_prop_types18.default.number])
} : void 0;

// node_modules/@mui/joy/node_modules/@mui/system/esm/Unstable_Grid/gridClasses.js
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
var WRAPS = ["nowrap", "wrap-reverse", "wrap"];
var GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  // spacings
  ...SPACINGS.map((spacing2) => `spacing-xs-${spacing2}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);

// node_modules/@mui/joy/node_modules/@mui/system/esm/Stack/Stack.js
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@mui/joy/node_modules/@mui/system/esm/Stack/createStack.js
var React32 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded11 = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"];
var defaultTheme3 = createTheme_default();
var defaultCreateStyledComponent3 = styled_default("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
});
function useThemePropsDefault3(props) {
  return useThemeProps({
    props,
    name: "MuiStack",
    defaultTheme: defaultTheme3
  });
}
function joinChildren(children, separator) {
  const childrenArray = React32.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(React32.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
var getSideFromDirection = (direction) => {
  return {
    row: "Left",
    "row-reverse": "Right",
    column: "Top",
    "column-reverse": "Bottom"
  }[direction];
};
var style3 = ({
  ownerState,
  theme
}) => {
  let styles = _extends({
    display: "flex",
    flexDirection: "column"
  }, handleBreakpoints({
    theme
  }, resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), (propValue) => ({
    flexDirection: propValue
  })));
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === "object" && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === "object" && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === "object") {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : "column";
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        "& > :not(style):not(style)": {
          margin: 0
        },
        "& > :not(style) ~ :not(style)": {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent3,
    useThemeProps: useThemeProps2 = useThemePropsDefault3,
    componentName = "MuiStack"
  } = options;
  const useUtilityClasses2 = () => {
    const slots = {
      root: ["root"]
    };
    return composeClasses(slots, (slot) => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style3);
  const Stack2 = React32.forwardRef(function Grid2(inProps, ref) {
    const themeProps = useThemeProps2(inProps);
    const props = extendSxProp(themeProps);
    const {
      component = "div",
      direction = "column",
      spacing: spacing2 = 0,
      divider,
      children,
      className,
      useFlexGap = false
    } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
    const ownerState = {
      direction,
      spacing: spacing2,
      useFlexGap
    };
    const classes = useUtilityClasses2();
    return (0, import_jsx_runtime16.jsx)(StackRoot, _extends({
      as: component,
      ownerState,
      ref,
      className: clsx_default(classes.root, className)
    }, other, {
      children: divider ? joinChildren(children, divider) : children
    }));
  });
  true ? Stack2.propTypes = {
    children: import_prop_types19.default.node,
    direction: import_prop_types19.default.oneOfType([import_prop_types19.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types19.default.arrayOf(import_prop_types19.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types19.default.object]),
    divider: import_prop_types19.default.node,
    spacing: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string])), import_prop_types19.default.number, import_prop_types19.default.object, import_prop_types19.default.string]),
    sx: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object, import_prop_types19.default.bool])), import_prop_types19.default.func, import_prop_types19.default.object])
  } : void 0;
  return Stack2;
}

// node_modules/@mui/joy/node_modules/@mui/system/esm/Stack/Stack.js
var Stack = createStack();
true ? Stack.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types20.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types20.default.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types20.default.oneOfType([import_prop_types20.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types20.default.arrayOf(import_prop_types20.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types20.default.object]),
  /**
   * Add an element between each child.
   */
  divider: import_prop_types20.default.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.number, import_prop_types20.default.string])), import_prop_types20.default.number, import_prop_types20.default.object, import_prop_types20.default.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the theme's default props configuration.
   * @default false
   */
  useFlexGap: import_prop_types20.default.bool
} : void 0;

// node_modules/@mui/joy/node_modules/@mui/system/esm/Stack/stackClasses.js
var stackClasses = generateUtilityClasses("MuiStack", ["root"]);

// node_modules/@mui/joy/className/index.js
var generateUtilityClass2 = (componentName, slot) => generateUtilityClass(componentName, slot, "Mui");
var generateUtilityClasses2 = (componentName, slots) => generateUtilityClasses(componentName, slots, "Mui");

// node_modules/@mui/joy/styles/sxConfig.js
var sxConfig = _extends({}, defaultSxConfig_default, {
  // The default system themeKey is shape
  borderRadius: {
    themeKey: "radius"
  },
  // The default system themeKey is shadows
  boxShadow: {
    themeKey: "shadow"
  },
  // The default system themeKey is typography
  fontFamily: {
    themeKey: "fontFamily"
  },
  // The default system themeKey is typography
  fontSize: {
    themeKey: "fontSize"
  },
  // The default system themeKey is typography
  fontWeight: {
    themeKey: "fontWeight"
  },
  // The default system themeKey is typography
  letterSpacing: {
    themeKey: "letterSpacing"
  },
  // The default system themeKey is typography
  lineHeight: {
    themeKey: "lineHeight"
  }
});
var sxConfig_default = sxConfig;

// node_modules/@mui/joy/colors/colors.js
var colors = {
  grey: {
    50: "#FBFCFE",
    100: "#F0F4F8",
    200: "#DDE7EE",
    300: "#CDD7E1",
    400: "#9FA6AD",
    500: "#636B74",
    600: "#555E68",
    700: "#32383E",
    800: "#171A1C",
    900: "#0B0D0E"
  },
  blue: {
    50: "#EDF5FD",
    100: "#E3EFFB",
    200: "#C7DFF7",
    300: "#97C3F0",
    400: "#4393E4",
    500: "#0B6BCB",
    600: "#185EA5",
    700: "#12467B",
    800: "#0A2744",
    900: "#051423"
  },
  yellow: {
    50: "#FEFAF6",
    100: "#FDF0E1",
    200: "#FCE1C2",
    300: "#F3C896",
    400: "#EA9A3E",
    500: "#9A5B13",
    600: "#72430D",
    700: "#492B08",
    800: "#2E1B05",
    900: "#1D1002"
  },
  red: {
    50: "#FEF6F6",
    100: "#FCE4E4",
    200: "#F7C5C5",
    300: "#F09898",
    400: "#E47474",
    500: "#C41C1C",
    600: "#A51818",
    700: "#7D1212",
    800: "#430A0A",
    900: "#240505"
  },
  green: {
    50: "#F6FEF6",
    100: "#E3FBE3",
    200: "#C7F7C7",
    300: "#A1E8A1",
    400: "#51BC51",
    500: "#1F7A1F",
    600: "#136C13",
    700: "#0A470A",
    800: "#042F04",
    900: "#021D02"
  }
};
var colors_default = colors;

// node_modules/@mui/joy/styles/shouldSkipGeneratingVar.js
function shouldSkipGeneratingVar(keys) {
  var _keys$;
  return !!keys[0].match(/^(typography|variants|breakpoints)$/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
  keys[0] === "palette" && !!((_keys$ = keys[1]) != null && _keys$.match(/^(mode)$/)) || keys[0] === "focus" && keys[1] !== "thickness";
}

// node_modules/@mui/joy/styles/variantUtils.js
var isVariantPalette = (colorPalette) => colorPalette && typeof colorPalette === "object" && Object.keys(colorPalette).some((value) => {
  var _value$match;
  return (_value$match = value.match) == null ? void 0 : _value$match.call(value, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
});
var assignCss = (target, variantVar, value) => {
  if (variantVar.includes("Color")) {
    target.color = value;
  }
  if (variantVar.includes("Bg")) {
    target.backgroundColor = value;
  }
  if (variantVar.includes("Border")) {
    target.borderColor = value;
  }
};
var createVariantStyle = (name, palette2, getCssVar) => {
  const result = {};
  Object.entries(palette2 || {}).forEach(([variantVar, value]) => {
    if (variantVar.match(new RegExp(`${name}(color|bg|border)`, "i")) && !!value) {
      const cssVar = getCssVar ? getCssVar(variantVar) : value;
      if (variantVar.includes("Disabled")) {
        result.pointerEvents = "none";
        result.cursor = "default";
        result["--Icon-color"] = "currentColor";
      }
      if (variantVar.match(/(Hover|Active|Disabled)/)) {
        assignCss(result, variantVar, cssVar);
      } else {
        if (!result["--variant-borderWidth"]) {
          result["--variant-borderWidth"] = "0px";
        }
        if (variantVar.includes("Border")) {
          result["--variant-borderWidth"] = "1px";
          result.border = "var(--variant-borderWidth) solid";
        }
        assignCss(result, variantVar, cssVar);
      }
    }
  });
  return result;
};
var createVariant = (variant, theme) => {
  let result = {};
  if (theme) {
    const {
      getCssVar,
      palette: palette2
    } = theme;
    Object.entries(palette2).forEach((entry) => {
      const [color2, colorPalette] = entry;
      if (isVariantPalette(colorPalette) && typeof colorPalette === "object") {
        result = _extends({}, result, {
          [color2]: createVariantStyle(variant, colorPalette, (variantVar) => `var(--variant-${variantVar}, ${getCssVar(`palette-${color2}-${variantVar}`, palette2[color2][variantVar])})`)
        });
      }
    });
  }
  result.context = createVariantStyle(variant, {
    plainColor: "var(--variant-plainColor)",
    plainHoverColor: `var(--variant-plainHoverColor)`,
    plainHoverBg: "var(--variant-plainHoverBg)",
    plainActiveBg: "var(--variant-plainActiveBg)",
    plainDisabledColor: "var(--variant-plainDisabledColor)",
    outlinedColor: "var(--variant-outlinedColor)",
    outlinedBorder: "var(--variant-outlinedBorder)",
    outlinedHoverColor: `var(--variant-outlinedHoverColor)`,
    outlinedHoverBorder: `var(--variant-outlinedHoverBorder)`,
    outlinedHoverBg: `var(--variant-outlinedHoverBg)`,
    outlinedActiveBg: `var(--variant-outlinedActiveBg)`,
    outlinedDisabledColor: `var(--variant-outlinedDisabledColor)`,
    outlinedDisabledBorder: `var(--variant-outlinedDisabledBorder)`,
    softColor: "var(--variant-softColor)",
    softBg: "var(--variant-softBg)",
    softHoverColor: "var(--variant-softHoverColor)",
    softHoverBg: "var(--variant-softHoverBg)",
    softActiveBg: "var(--variant-softActiveBg)",
    softDisabledColor: "var(--variant-softDisabledColor)",
    softDisabledBg: "var(--variant-softDisabledBg)",
    solidColor: "var(--variant-solidColor)",
    solidBg: "var(--variant-solidBg)",
    solidHoverBg: "var(--variant-solidHoverBg)",
    solidActiveBg: "var(--variant-solidActiveBg)",
    solidDisabledColor: "var(--variant-solidDisabledColor)",
    solidDisabledBg: "var(--variant-solidDisabledBg)"
  });
  return result;
};

// node_modules/@mui/joy/styles/extendTheme.js
var _excluded12 = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "shouldSkipGeneratingVar"];
var _excluded23 = ["colorSchemes"];
var createGetCssVar2 = (cssVarPrefix = "joy") => createGetCssVar(cssVarPrefix);
function extendTheme(themeOptions) {
  var _scalesInput$colorSch, _scalesInput$colorSch2, _scalesInput$colorSch3, _scalesInput$colorSch4, _scalesInput$colorSch5, _scalesInput$colorSch6, _scalesInput$focus$th, _scalesInput$focus, _scalesInput$focus$th2, _scalesInput$focus2;
  const _ref = themeOptions || {}, {
    cssVarPrefix = "joy",
    breakpoints,
    spacing: spacing2,
    components: componentsInput,
    variants: variantsInput,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2 = shouldSkipGeneratingVar
  } = _ref, scalesInput = _objectWithoutPropertiesLoose(_ref, _excluded12);
  const getCssVar = createGetCssVar2(cssVarPrefix);
  const defaultColors = {
    primary: colors_default.blue,
    neutral: colors_default.grey,
    danger: colors_default.red,
    success: colors_default.green,
    warning: colors_default.yellow,
    common: {
      white: "#FFF",
      black: "#000"
    }
  };
  const getCssVarColor = (cssVar) => {
    var _defaultColors$color;
    const tokens = cssVar.split("-");
    const color2 = tokens[1];
    const index = tokens[2];
    return getCssVar(cssVar, (_defaultColors$color = defaultColors[color2]) == null ? void 0 : _defaultColors$color[index]);
  };
  const createLightModeVariantVariables = (color2) => ({
    plainColor: getCssVarColor(`palette-${color2}-500`),
    plainHoverBg: getCssVarColor(`palette-${color2}-100`),
    plainActiveBg: getCssVarColor(`palette-${color2}-200`),
    plainDisabledColor: getCssVarColor(`palette-neutral-400`),
    outlinedColor: getCssVarColor(`palette-${color2}-500`),
    outlinedBorder: getCssVarColor(`palette-${color2}-300`),
    outlinedHoverBg: getCssVarColor(`palette-${color2}-100`),
    outlinedActiveBg: getCssVarColor(`palette-${color2}-200`),
    outlinedDisabledColor: getCssVarColor(`palette-neutral-400`),
    outlinedDisabledBorder: getCssVarColor(`palette-neutral-200`),
    softColor: getCssVarColor(`palette-${color2}-700`),
    softBg: getCssVarColor(`palette-${color2}-100`),
    softHoverBg: getCssVarColor(`palette-${color2}-200`),
    softActiveColor: getCssVarColor(`palette-${color2}-800`),
    softActiveBg: getCssVarColor(`palette-${color2}-300`),
    softDisabledColor: getCssVarColor(`palette-neutral-400`),
    softDisabledBg: getCssVarColor(`palette-neutral-50`),
    solidColor: getCssVarColor(`palette-common-white`),
    solidBg: getCssVarColor(`palette-${color2}-500`),
    solidHoverBg: getCssVarColor(`palette-${color2}-600`),
    solidActiveBg: getCssVarColor(`palette-${color2}-700`),
    solidDisabledColor: getCssVarColor(`palette-neutral-400`),
    solidDisabledBg: getCssVarColor(`palette-neutral-100`)
  });
  const createDarkModeVariantVariables = (color2) => ({
    plainColor: getCssVarColor(`palette-${color2}-300`),
    plainHoverBg: getCssVarColor(`palette-${color2}-800`),
    plainActiveBg: getCssVarColor(`palette-${color2}-700`),
    plainDisabledColor: getCssVarColor(`palette-neutral-500`),
    outlinedColor: getCssVarColor(`palette-${color2}-200`),
    outlinedBorder: getCssVarColor(`palette-${color2}-700`),
    outlinedHoverBg: getCssVarColor(`palette-${color2}-800`),
    outlinedActiveBg: getCssVarColor(`palette-${color2}-700`),
    outlinedDisabledColor: getCssVarColor(`palette-neutral-500`),
    outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),
    softColor: getCssVarColor(`palette-${color2}-200`),
    softBg: getCssVarColor(`palette-${color2}-800`),
    softHoverBg: getCssVarColor(`palette-${color2}-700`),
    softActiveColor: getCssVarColor(`palette-${color2}-100`),
    softActiveBg: getCssVarColor(`palette-${color2}-600`),
    softDisabledColor: getCssVarColor(`palette-neutral-500`),
    softDisabledBg: getCssVarColor(`palette-neutral-800`),
    solidColor: getCssVarColor(`palette-common-white`),
    solidBg: getCssVarColor(`palette-${color2}-500`),
    solidHoverBg: getCssVarColor(`palette-${color2}-600`),
    solidActiveBg: getCssVarColor(`palette-${color2}-700`),
    solidDisabledColor: getCssVarColor(`palette-neutral-500`),
    solidDisabledBg: getCssVarColor(`palette-neutral-800`)
  });
  const lightColorSystem = {
    palette: {
      mode: "light",
      primary: _extends({}, defaultColors.primary, createLightModeVariantVariables("primary")),
      neutral: _extends({}, defaultColors.neutral, createLightModeVariantVariables("neutral"), {
        plainColor: getCssVarColor("palette-neutral-700"),
        plainHoverColor: getCssVarColor(`palette-neutral-900`),
        outlinedColor: getCssVarColor("palette-neutral-700")
      }),
      danger: _extends({}, defaultColors.danger, createLightModeVariantVariables("danger")),
      success: _extends({}, defaultColors.success, createLightModeVariantVariables("success")),
      warning: _extends({}, defaultColors.warning, createLightModeVariantVariables("warning")),
      common: {
        white: "#FFF",
        black: "#000"
      },
      text: {
        primary: getCssVarColor("palette-neutral-800"),
        secondary: getCssVarColor("palette-neutral-700"),
        tertiary: getCssVarColor("palette-neutral-600"),
        icon: getCssVarColor("palette-neutral-500")
      },
      background: {
        body: getCssVarColor("palette-common-white"),
        surface: getCssVarColor("palette-neutral-50"),
        popup: getCssVarColor("palette-common-white"),
        level1: getCssVarColor("palette-neutral-100"),
        level2: getCssVarColor("palette-neutral-200"),
        level3: getCssVarColor("palette-neutral-300"),
        tooltip: getCssVarColor("palette-neutral-500"),
        backdrop: `rgba(${getCssVar(
          "palette-neutral-darkChannel",
          colorChannel(defaultColors.neutral[900])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${getCssVar(
        "palette-neutral-mainChannel",
        colorChannel(defaultColors.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.2)`,
      focusVisible: getCssVarColor("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "21 21 21",
    shadowOpacity: "0.08"
  };
  const darkColorSystem = {
    palette: {
      mode: "dark",
      primary: _extends({}, defaultColors.primary, createDarkModeVariantVariables("primary")),
      neutral: _extends({}, defaultColors.neutral, createDarkModeVariantVariables("neutral"), {
        plainColor: getCssVarColor("palette-neutral-300"),
        plainHoverColor: getCssVarColor(`palette-neutral-300`)
      }),
      danger: _extends({}, defaultColors.danger, createDarkModeVariantVariables("danger")),
      success: _extends({}, defaultColors.success, createDarkModeVariantVariables("success")),
      warning: _extends({}, defaultColors.warning, createDarkModeVariantVariables("warning")),
      common: {
        white: "#FFF",
        black: "#000"
      },
      text: {
        primary: getCssVarColor("palette-neutral-100"),
        secondary: getCssVarColor("palette-neutral-300"),
        tertiary: getCssVarColor("palette-neutral-400"),
        icon: getCssVarColor("palette-neutral-400")
      },
      background: {
        body: getCssVarColor("palette-common-black"),
        surface: getCssVarColor("palette-neutral-900"),
        popup: getCssVarColor("palette-common-black"),
        level1: getCssVarColor("palette-neutral-800"),
        level2: getCssVarColor("palette-neutral-700"),
        level3: getCssVarColor("palette-neutral-600"),
        tooltip: getCssVarColor("palette-neutral-600"),
        backdrop: `rgba(${getCssVar(
          "palette-neutral-darkChannel",
          colorChannel(defaultColors.neutral[50])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${getCssVar(
        "palette-neutral-mainChannel",
        colorChannel(defaultColors.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.16)`,
      focusVisible: getCssVarColor("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "0 0 0",
    shadowOpacity: "0.6"
  };
  const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
  const fontFamily2 = _extends({
    body: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    display: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
    code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    fallback: fontFamilyFallback
  }, scalesInput.fontFamily);
  const fontWeight2 = _extends({
    sm: 300,
    // regular
    md: 500,
    // medium
    lg: 600,
    // semi-bold
    xl: 700
  }, scalesInput.fontWeight);
  const fontSize2 = _extends({
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    md: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    xl2: "1.5rem",
    // 24px
    xl3: "1.875rem",
    // 30px
    xl4: "2.25rem"
  }, scalesInput.fontSize);
  const lineHeight2 = _extends({
    xs: "1.33334",
    // largest font sizes: h1, h2
    sm: "1.42858",
    // normal font sizes
    md: "1.5",
    // normal font sizes
    lg: "1.55556",
    // large font sizes for components
    xl: "1.66667"
  }, scalesInput.lineHeight);
  const defaultShadowRing = (_scalesInput$colorSch = (_scalesInput$colorSch2 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch2 = _scalesInput$colorSch2.light) == null ? void 0 : _scalesInput$colorSch2.shadowRing) != null ? _scalesInput$colorSch : lightColorSystem.shadowRing;
  const defaultShadowChannel = (_scalesInput$colorSch3 = (_scalesInput$colorSch4 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch4 = _scalesInput$colorSch4.light) == null ? void 0 : _scalesInput$colorSch4.shadowChannel) != null ? _scalesInput$colorSch3 : lightColorSystem.shadowChannel;
  const defaultShadowOpacity = (_scalesInput$colorSch5 = (_scalesInput$colorSch6 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch6 = _scalesInput$colorSch6.light) == null ? void 0 : _scalesInput$colorSch6.shadowOpacity) != null ? _scalesInput$colorSch5 : lightColorSystem.shadowOpacity;
  const defaultScales = {
    colorSchemes: {
      light: lightColorSystem,
      dark: darkColorSystem
    },
    fontSize: fontSize2,
    fontFamily: fontFamily2,
    fontWeight: fontWeight2,
    focus: {
      thickness: "2px",
      selector: `&.${generateUtilityClass2("", "focusVisible")}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${getCssVar("focus-thickness", (_scalesInput$focus$th = (_scalesInput$focus = scalesInput.focus) == null ? void 0 : _scalesInput$focus.thickness) != null ? _scalesInput$focus$th : "2px")})`,
        outline: `${getCssVar("focus-thickness", (_scalesInput$focus$th2 = (_scalesInput$focus2 = scalesInput.focus) == null ? void 0 : _scalesInput$focus2.thickness) != null ? _scalesInput$focus$th2 : "2px")} solid ${getCssVar("palette-focusVisible", defaultColors.primary[500])}`
      }
    },
    lineHeight: lineHeight2,
    radius: {
      xs: "2px",
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px"
    },
    shadow: {
      xs: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      sm: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 2px 4px 0px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      md: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 6px 12px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      lg: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 12px 16px -4px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`,
      xl: `${getCssVar("shadowRing", defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)}), 0px 20px 24px -4px rgba(${getCssVar("shadowChannel", defaultShadowChannel)} / ${getCssVar("shadowOpacity", defaultShadowOpacity)})`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1e3,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    },
    typography: {
      h1: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily2.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight2.xl}`),
        fontSize: getCssVar(`fontSize-xl4, ${fontSize2.xl4}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight2.xs}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h2: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily2.display}`),
        fontWeight: getCssVar(`fontWeight-xl, ${fontWeight2.xl}`),
        fontSize: getCssVar(`fontSize-xl3, ${fontSize2.xl3}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight2.xs}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h3: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily2.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight2.lg}`),
        fontSize: getCssVar(`fontSize-xl2, ${fontSize2.xl2}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight2.xs}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      h4: {
        fontFamily: getCssVar(`fontFamily-display, ${fontFamily2.display}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight2.lg}`),
        fontSize: getCssVar(`fontSize-xl, ${fontSize2.xl}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight2.md}`),
        letterSpacing: "-0.025em",
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "title-lg": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontWeight: getCssVar(`fontWeight-lg, ${fontWeight2.lg}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize2.lg}`),
        lineHeight: getCssVar(`lineHeight-xs, ${lineHeight2.xs}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "title-md": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight2.md}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize2.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight2.md}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "title-sm": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight2.md}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize2.sm}`),
        lineHeight: getCssVar(`lineHeight-sm, ${lineHeight2.sm}`),
        color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
      },
      "body-lg": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontSize: getCssVar(`fontSize-lg, ${fontSize2.lg}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight2.md}`),
        color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
      },
      "body-md": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontSize: getCssVar(`fontSize-md, ${fontSize2.md}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight2.md}`),
        color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
      },
      "body-sm": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontSize: getCssVar(`fontSize-sm, ${fontSize2.sm}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight2.md}`),
        color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
      },
      "body-xs": {
        fontFamily: getCssVar(`fontFamily-body, ${fontFamily2.body}`),
        fontWeight: getCssVar(`fontWeight-md, ${fontWeight2.md}`),
        fontSize: getCssVar(`fontSize-xs, ${fontSize2.xs}`),
        lineHeight: getCssVar(`lineHeight-md, ${lineHeight2.md}`),
        color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
      }
    }
  };
  const _ref2 = scalesInput ? deepmerge(defaultScales, scalesInput) : defaultScales, {
    colorSchemes
  } = _ref2, mergedScales = _objectWithoutPropertiesLoose(_ref2, _excluded23);
  const theme = _extends({
    colorSchemes
  }, mergedScales, {
    breakpoints: createBreakpoints(breakpoints != null ? breakpoints : {}),
    components: deepmerge({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: "xl2"
        },
        styleOverrides: {
          root: ({
            ownerState,
            theme: themeProp
          }) => {
            var _themeProp$vars$palet;
            const instanceFontSize = ownerState.instanceFontSize;
            return _extends({
              margin: "var(--Icon-margin)"
            }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
              fontSize: `var(--Icon-fontSize, ${themeProp.vars.fontSize[ownerState.fontSize]})`
            }, !ownerState.htmlColor && _extends({
              color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
            }, ownerState.color && ownerState.color !== "inherit" && themeProp.vars.palette[ownerState.color] && {
              color: `rgba(${(_themeProp$vars$palet = themeProp.vars.palette[ownerState.color]) == null ? void 0 : _themeProp$vars$palet.mainChannel} / 1)`
            }), instanceFontSize && instanceFontSize !== "inherit" && {
              "--Icon-fontSize": themeProp.vars.fontSize[instanceFontSize]
            });
          }
        }
      }
    }, componentsInput),
    cssVarPrefix,
    getCssVar,
    spacing: createSpacing(spacing2)
  });
  function attachColorChannels(supportedColorScheme, palette2) {
    Object.keys(palette2).forEach((key) => {
      const channelMapping = {
        main: "500",
        light: "200",
        dark: "700"
      };
      if (supportedColorScheme === "dark") {
        channelMapping.main = 400;
      }
      if (!palette2[key].mainChannel && palette2[key][channelMapping.main]) {
        palette2[key].mainChannel = colorChannel(palette2[key][channelMapping.main]);
      }
      if (!palette2[key].lightChannel && palette2[key][channelMapping.light]) {
        palette2[key].lightChannel = colorChannel(palette2[key][channelMapping.light]);
      }
      if (!palette2[key].darkChannel && palette2[key][channelMapping.dark]) {
        palette2[key].darkChannel = colorChannel(palette2[key][channelMapping.dark]);
      }
    });
  }
  Object.entries(theme.colorSchemes).forEach(([supportedColorScheme, colorSystem]) => {
    attachColorChannels(supportedColorScheme, colorSystem.palette);
  });
  const parserConfig = {
    prefix: cssVarPrefix,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar2
  };
  const {
    vars: themeVars,
    generateCssVars
  } = prepareCssVars_default(
    // @ts-ignore property truDark is missing from colorSchemes
    _extends({
      colorSchemes
    }, mergedScales),
    parserConfig
  );
  theme.vars = themeVars;
  theme.generateCssVars = generateCssVars;
  theme.unstable_sxConfig = _extends({}, sxConfig_default, themeOptions == null ? void 0 : themeOptions.unstable_sxConfig);
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx_default({
      sx: props,
      theme: this
    });
  };
  theme.getColorSchemeSelector = (colorScheme) => colorScheme === "light" ? "&" : `&[data-joy-color-scheme="${colorScheme}"], [data-joy-color-scheme="${colorScheme}"] &`;
  const createVariantInput = {
    getCssVar,
    palette: theme.colorSchemes.light.palette
  };
  theme.variants = deepmerge({
    plain: createVariant("plain", createVariantInput),
    plainHover: createVariant("plainHover", createVariantInput),
    plainActive: createVariant("plainActive", createVariantInput),
    plainDisabled: createVariant("plainDisabled", createVariantInput),
    outlined: createVariant("outlined", createVariantInput),
    outlinedHover: createVariant("outlinedHover", createVariantInput),
    outlinedActive: createVariant("outlinedActive", createVariantInput),
    outlinedDisabled: createVariant("outlinedDisabled", createVariantInput),
    soft: createVariant("soft", createVariantInput),
    softHover: createVariant("softHover", createVariantInput),
    softActive: createVariant("softActive", createVariantInput),
    softDisabled: createVariant("softDisabled", createVariantInput),
    solid: createVariant("solid", createVariantInput),
    solidHover: createVariant("solidHover", createVariantInput),
    solidActive: createVariant("solidActive", createVariantInput),
    solidDisabled: createVariant("solidDisabled", createVariantInput)
  }, variantsInput);
  theme.palette = _extends({}, theme.colorSchemes.light.palette, {
    colorScheme: "light"
  });
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar2;
  theme.applyStyles = applyStyles;
  return theme;
}

// node_modules/@mui/joy/styles/defaultTheme.js
var defaultTheme4 = extendTheme();
var defaultTheme_default = defaultTheme4;

// node_modules/@mui/joy/styles/identifier.js
var identifier_default = "$$joy";

export {
  capitalize,
  isMuiElement,
  useId,
  useForkRef,
  ClassNameGenerator_default,
  generateUtilityClasses,
  extendSxProp,
  createBox,
  createStyled,
  useThemeProps,
  createCssVarsProvider,
  createGetCssVar,
  generateUtilityClass2 as generateUtilityClass,
  generateUtilityClasses2,
  defaultTheme_default,
  identifier_default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/styled-engine/index.js:
  (**
   * @mui/styled-engine v5.18.0
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/private-theming/index.js:
  (**
   * @mui/private-theming v5.17.1
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-AKPL3DWZ.js.map

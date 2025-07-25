"use client";
import {
  useForwardedInput
} from "./chunk-EUUPGOAI.js";
import "./chunk-IKYWJ6V2.js";
import {
  INVERTED_COLORS_ATTR
} from "./chunk-Q5JFZ7U7.js";
import "./chunk-OABLOCRU.js";
import "./chunk-BWGXUAD5.js";
import {
  composeClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-GY6ZY5IK.js";
import {
  capitalize,
  generateUtilityClass,
  generateUtilityClasses2 as generateUtilityClasses
} from "./chunk-AKPL3DWZ.js";
import {
  _objectWithoutPropertiesLoose
} from "./chunk-AVUONKA5.js";
import {
  _extends
} from "./chunk-ALOCFXKX.js";
import {
  require_prop_types
} from "./chunk-DQROLGKX.js";
import "./chunk-2E6KOAY2.js";
import {
  require_jsx_runtime
} from "./chunk-GGZZ3EVM.js";
import {
  require_react
} from "./chunk-D2KY6O3O.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/joy/Input/Input.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Input/inputClasses.js
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses = generateUtilityClasses("MuiInput", ["root", "input", "formControl", "focused", "disabled", "error", "adornedStart", "adornedEnd", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "fullWidth", "startDecorator", "endDecorator"]);
var inputClasses_default = inputClasses;

// node_modules/@mui/joy/Input/Input.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "fullWidth", "size", "color", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    fullWidth,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", fullWidth && "fullWidth", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getInputUtilityClass, {});
};
var StyledInputRoot = styled_default("div")(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _variantStyle$backgro, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
  return [_extends({
    "--Input-radius": theme.vars.radius.sm,
    "--Input-gap": "0.5rem",
    "--Input-placeholderColor": "inherit",
    "--Input-placeholderOpacity": 0.64,
    "--Input-decoratorColor": theme.vars.palette.text.icon,
    "--Input-focused": "0",
    "--Input-focusedThickness": theme.vars.focus.thickness,
    "--Input-focusedHighlight": (_theme$vars$palette = theme.vars.palette[ownerState.color === "neutral" ? "primary" : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
    [`&:not([${INVERTED_COLORS_ATTR}])`]: _extends({}, ownerState.instanceColor && {
      "--_Input-focusedHighlight": (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === "neutral" ? "primary" : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
    }, {
      "--Input-focusedHighlight": `var(--_Input-focusedHighlight, ${theme.vars.palette.focusVisible})`
    })
  }, ownerState.size === "sm" && {
    "--Input-minHeight": "2rem",
    "--Input-paddingInline": "0.5rem",
    "--Input-decoratorChildHeight": "min(1.5rem, var(--Input-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl
  }, ownerState.size === "md" && {
    "--Input-minHeight": "2.25rem",
    "--Input-paddingInline": "0.75rem",
    "--Input-decoratorChildHeight": "min(1.75rem, var(--Input-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, ownerState.size === "lg" && {
    "--Input-minHeight": "2.75rem",
    "--Input-paddingInline": "1rem",
    "--Input-gap": "0.75rem",
    "--Input-decoratorChildHeight": "min(2.25rem, var(--Input-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Input-decoratorChildOffset": "min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))",
    "--_Input-paddingBlock": "max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)",
    "--Input-decoratorChildRadius": "max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))",
    "--Button-minHeight": "var(--Input-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Input-decoratorChildHeight)",
    "--Button-radius": "var(--Input-decoratorChildRadius)",
    "--IconButton-radius": "var(--Input-decoratorChildRadius)",
    boxSizing: "border-box"
  }, ownerState.variant !== "plain" && {
    boxShadow: theme.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Input-minHeight)"
  }, ownerState.fullWidth && {
    width: "100%"
  }, {
    cursor: "text",
    position: "relative",
    display: "flex",
    paddingInline: `var(--Input-paddingInline)`,
    borderRadius: "var(--Input-radius)"
  }, theme.typography[`body-${ownerState.size}`], variantStyle, {
    backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface,
    "&::before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)",
      // for outlined variant
      boxShadow: `var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)`
    }
  }), {
    "&:hover": _extends({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color], {
      backgroundColor: null
      // it is not common to change background on hover for Input
    }),
    [`&.${inputClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color],
    "&:focus-within::before": {
      "--Input-focused": "1"
    }
  }];
});
var StyledInputHtml = styled_default("input")(({
  ownerState
}) => ({
  border: "none",
  // remove the native input width
  minWidth: 0,
  // remove the native input width
  outline: 0,
  // remove the native input outline
  padding: 0,
  // remove the native input padding
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&:-webkit-autofill": _extends({
    paddingInline: "var(--Input-paddingInline)"
  }, !ownerState.startDecorator && {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }, !ownerState.endDecorator && {
    marginInlineEnd: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineEnd: "var(--Input-paddingInline)",
    borderTopRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }),
  "&::-webkit-input-placeholder": {
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-moz-placeholder": {
    // Firefox 19+
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&:-ms-input-placeholder": {
    // IE11
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-ms-input-placeholder": {
    // Edge
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  }
}));
var StyledInputStartDecorator = styled_default("div")({
  "--Button-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Input-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  paddingBlock: "var(--unstable_InputPaddingBlock)",
  // for wrapping Autocomplete's tags
  flexWrap: "wrap",
  // for wrapping Autocomplete's tags
  marginInlineEnd: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
});
var StyledInputEndDecorator = styled_default("div")({
  "--Button-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Input-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
});
var InputRoot = styled_default(StyledInputRoot, {
  name: "JoyInput",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var InputInput = styled_default(StyledInputHtml, {
  name: "JoyInput",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})({});
var InputStartDecorator = styled_default(StyledInputStartDecorator, {
  name: "JoyInput",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({});
var InputEndDecorator = styled_default(StyledInputEndDecorator, {
  name: "JoyInput",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({});
var Input = React.forwardRef(function Input2(inProps, ref) {
  var _ref, _inProps$error, _ref2, _inProps$size, _inProps$color, _formControl$color;
  const props = useThemeProps({
    props: inProps,
    name: "JoyInput"
  });
  const _useForwardedInput = useForwardedInput(_extends({}, props, {
    disabledInProp: inProps.disabled
  }), inputClasses_default), {
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    formControl,
    focused,
    error: errorProp = false,
    disabled,
    fullWidth = false,
    size: sizeProp = "md",
    color: colorProp = "neutral",
    variant = "outlined",
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {}
  } = _useForwardedInput, other = _objectWithoutPropertiesLoose(_useForwardedInput, _excluded);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const error = (_ref = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref : errorProp;
  const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const ownerState = _extends({
    instanceColor: error ? "danger" : inProps.color
  }, props, {
    fullWidth,
    color,
    disabled,
    error,
    focused,
    size,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, rootStateClasses],
    elementType: InputRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", _extends({}, formControl && {
    additionalProps: {
      id: formControl.htmlFor,
      "aria-describedby": formControl["aria-describedby"]
    }
  }, {
    className: [classes.input, inputStateClasses],
    elementType: InputInput,
    getSlotProps: getInputProps,
    internalForwardedProps: propsToForward,
    externalForwardedProps,
    ownerState
  }));
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: InputStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: InputEndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [startDecorator && (0, import_jsx_runtime.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: startDecorator
    })), (0, import_jsx_runtime.jsx)(SlotInput, _extends({}, inputProps)), endDecorator && (0, import_jsx_runtime.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: endDecorator
    }))]
  }));
});
true ? Input.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  autoComplete: import_prop_types.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * @ignore
   */
  defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * @ignore
   */
  disabled: import_prop_types.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: import_prop_types.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: import_prop_types.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * @ignore
   */
  name: import_prop_types.default.string,
  /**
   * @ignore
   */
  onChange: import_prop_types.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types.default.string,
  /**
   * @ignore
   */
  readOnly: import_prop_types.default.bool,
  /**
   * @ignore
   */
  required: import_prop_types.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * Leading adornment for this input.
   */
  startDecorator: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * @ignore
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Input_default = Input;
export {
  Input_default as default,
  getInputUtilityClass,
  inputClasses_default as inputClasses
};
//# sourceMappingURL=@mui_joy_Input.js.map

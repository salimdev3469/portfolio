"use client";
import "./chunk-BLE45GTI.js";
import "./chunk-7RH3YQ3F.js";
import "./chunk-BWGXUAD5.js";
import {
  composeClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-GY6ZY5IK.js";
import "./chunk-TAM2IQJX.js";
import "./chunk-XE2STDAP.js";
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

// node_modules/@mui/joy/AspectRatio/AspectRatio.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/AspectRatio/aspectRatioClasses.js
function getAspectRatioUtilityClass(slot) {
  return generateUtilityClass("MuiAspectRatio", slot);
}
var aspectRatioClasses = generateUtilityClasses("MuiAspectRatio", ["root", "content", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var aspectRatioClasses_default = aspectRatioClasses;

// node_modules/@mui/joy/AspectRatio/AspectRatio.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "ratio", "minHeight", "maxHeight", "objectFit", "color", "variant", "component", "flex", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getAspectRatioUtilityClass, {});
};
var AspectRatioRoot = styled_default("div", {
  name: "JoyAspectRatio",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  const minHeight = typeof ownerState.minHeight === "number" ? `${ownerState.minHeight}px` : ownerState.minHeight;
  const maxHeight = typeof ownerState.maxHeight === "number" ? `${ownerState.maxHeight}px` : ownerState.maxHeight;
  return {
    // a context variable for any child component
    "--AspectRatio-paddingBottom": `clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,
    "--AspectRatio-maxHeight": maxHeight || "9999px",
    "--AspectRatio-minHeight": minHeight || "0px",
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    borderRadius: "var(--AspectRatio-radius)",
    display: ownerState.flex ? "flex" : "block",
    flex: ownerState.flex ? 1 : "initial",
    flexDirection: "column",
    margin: "var(--AspectRatio-margin)"
  };
});
var AspectRatioContent = styled_default("div", {
  name: "JoyAspectRatio",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return _extends({
    flex: 1,
    position: "relative",
    borderRadius: "inherit",
    height: 0,
    paddingBottom: "calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",
    overflow: "hidden",
    transition: "inherit",
    // makes it easy to add transition to the content
    // use data-attribute instead of :first-child to support zero config SSR (emotion)
    // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
    "& [data-first-child]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: ownerState.objectFit,
      margin: 0,
      padding: 0,
      "& > img": {
        // support art-direction that uses <picture><img /></picture>
        width: "100%",
        height: "100%",
        objectFit: ownerState.objectFit
      }
    }
  }, theme.typography["body-md"], (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var AspectRatio = React.forwardRef(function AspectRatio2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAspectRatio"
  });
  const {
    children,
    ratio = "16 / 9",
    minHeight,
    maxHeight,
    objectFit = "cover",
    color = "neutral",
    variant = "soft",
    component,
    flex = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    flex,
    minHeight,
    maxHeight,
    objectFit,
    ratio,
    color,
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
    className: classes.root,
    elementType: AspectRatioRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotContent, contentProps] = useSlot("content", {
    className: classes.content,
    elementType: AspectRatioContent,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime.jsx)(SlotContent, _extends({}, contentProps, {
      children: React.Children.map(children, (child, index) => index === 0 && React.isValidElement(child) ? React.cloneElement(child, {
        "data-first-child": ""
      }) : child)
    }))
  }));
});
true ? AspectRatio.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the AspectRatio if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * By default, the AspectRatio will maintain the aspect ratio of its content.
   * Set this prop to `true` when the container is a flex row and you want the AspectRatio to fill the height of its container.
   * @default false
   */
  flex: import_prop_types.default.bool,
  /**
   * The maximum calculated height of the element (not the CSS height).
   */
  maxHeight: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The minimum calculated height of the element (not the CSS height).
   */
  minHeight: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The CSS object-fit value of the first-child.
   * @default 'cover'
   */
  objectFit: import_prop_types.default.oneOf(["-moz-initial", "contain", "cover", "fill", "inherit", "initial", "none", "revert-layer", "revert", "scale-down", "unset"]),
  /**
   * The aspect-ratio of the element. The current implementation uses padding instead of the CSS aspect-ratio due to browser support.
   * https://caniuse.com/?search=aspect-ratio
   * @default '16 / 9'
   */
  ratio: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    content: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    content: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var AspectRatio_default = AspectRatio;
export {
  aspectRatioClasses_default as aspectRatioClasses,
  AspectRatio_default as default,
  getAspectRatioUtilityClass
};
//# sourceMappingURL=@mui_joy_AspectRatio.js.map

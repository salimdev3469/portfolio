"use client";
import {
  cardOverflowClasses_default
} from "./chunk-U5KJFRP6.js";
import "./chunk-OABLOCRU.js";
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
  generateUtilityClass,
  generateUtilityClasses2 as generateUtilityClasses
} from "./chunk-AKPL3DWZ.js";
import {
  _objectWithoutPropertiesLoose
} from "./chunk-AVUONKA5.js";
import {
  _extends,
  clsx_default
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

// node_modules/@mui/joy/CardContent/CardContent.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/CardContent/cardContentClasses.js
function getCardContentUtilityClass(slot) {
  return generateUtilityClass("MuiCardContent", slot);
}
var cardClasses = generateUtilityClasses("MuiCardContent", ["root"]);
var cardContentClasses_default = cardClasses;

// node_modules/@mui/joy/CardContent/CardContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component", "children", "orientation", "slots", "slotProps"];
var useUtilityClasses = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardContentUtilityClass, {});
};
var StyledCardContentRoot = styled_default("div")(({
  ownerState
}) => ({
  display: "flex",
  flexDirection: ownerState.orientation === "horizontal" ? "row" : "column",
  flex: 9999,
  // fill the available space in the Card and also shrink if needed
  zIndex: 1,
  columnGap: "var(--Card-padding)",
  rowGap: "max(2px, calc(0.1875 * var(--Card-padding)))",
  padding: "var(--unstable_padding)",
  [`.${cardOverflowClasses_default.root} > &`]: {
    "--unstable_padding": "calc(var(--Card-padding) * 0.75) 0px"
  }
}));
var CardContentRoot = styled_default(StyledCardContentRoot, {
  name: "JoyCardContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var CardContent = React.forwardRef(function CardContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardContent"
  });
  const {
    className,
    component = "div",
    children,
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    orientation
  });
  const classes = useUtilityClasses();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardContentRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used to render icon or text elements inside the CardContent if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var CardContent_default = CardContent;
export {
  cardContentClasses_default as cardContentClasses,
  CardContent_default as default,
  getCardContentUtilityClass
};
//# sourceMappingURL=@mui_joy_CardContent.js.map

"use client";
import {
  FormControlContext_default
} from "./chunk-IKYWJ6V2.js";
import "./chunk-OABLOCRU.js";
import {
  composeClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-GY6ZY5IK.js";
import {
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

// node_modules/@mui/joy/FormLabel/FormLabel.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/FormLabel/formLabelClasses.js
function getFormLabelUtilityClass(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "asterisk"]);
var formLabelClasses_default = formLabelClasses;

// node_modules/@mui/joy/FormLabel/FormLabel.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "component", "htmlFor", "id", "slots", "slotProps"];
var useUtilityClasses = () => {
  const slots = {
    root: ["root"],
    asterisk: ["asterisk"]
  };
  return composeClasses(slots, getFormLabelUtilityClass, {});
};
var FormLabelRoot = styled_default("label", {
  name: "JoyFormLabel",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  "--Icon-fontSize": "calc(var(--FormLabel-lineHeight) * 1em)",
  WebkitTapHighlightColor: "transparent",
  alignSelf: "var(--FormLabel-alignSelf)",
  // to not fill the block space. It seems like a bug when clicking on empty space (within the label area), even though it is not.
  display: "flex",
  gap: "2px",
  alignItems: "center",
  flexWrap: "wrap",
  userSelect: "none",
  fontFamily: theme.vars.fontFamily.body,
  fontSize: `var(--FormLabel-fontSize, ${theme.vars.fontSize.sm})`,
  fontWeight: theme.vars.fontWeight.md,
  lineHeight: `var(--FormLabel-lineHeight, ${theme.vars.lineHeight.sm})`,
  color: `var(--FormLabel-color, ${theme.vars.palette.text.primary})`,
  margin: "var(--FormLabel-margin, 0px)"
}));
var AsteriskComponent = styled_default("span", {
  name: "JoyFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})({
  color: "var(--FormLabel-asteriskColor)"
});
var FormLabel = React.forwardRef(function FormLabel2(inProps, ref) {
  var _ref, _inProps$required;
  const props = useThemeProps({
    props: inProps,
    name: "JoyFormLabel"
  });
  const {
    children,
    component = "label",
    htmlFor,
    id,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const formControl = React.useContext(FormControlContext_default);
  const required = (_ref = (_inProps$required = inProps.required) != null ? _inProps$required : formControl == null ? void 0 : formControl.required) != null ? _ref : false;
  const ownerState = _extends({}, props, {
    required
  });
  const classes = useUtilityClasses();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    additionalProps: {
      htmlFor: htmlFor != null ? htmlFor : formControl == null ? void 0 : formControl.htmlFor,
      id: id != null ? id : formControl == null ? void 0 : formControl.labelId
    },
    ref,
    className: classes.root,
    elementType: FormLabelRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotAsterisk, asteriskProps] = useSlot("asterisk", {
    additionalProps: {
      "aria-hidden": true
    },
    className: classes.asterisk,
    elementType: AsteriskComponent,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [children, required && (0, import_jsx_runtime.jsxs)(SlotAsterisk, _extends({}, asteriskProps, {
      children: [" ", "*"]
    }))]
  }));
});
true ? FormLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * @ignore
   */
  htmlFor: import_prop_types.default.string,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * The asterisk is added if required=`true`
   */
  required: import_prop_types.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    asterisk: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    asterisk: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var FormLabel_default = FormLabel;
export {
  FormLabel_default as default,
  formLabelClasses_default as formLabelClasses,
  getFormLabelUtilityClass
};
//# sourceMappingURL=@mui_joy_FormLabel.js.map

import {
  Typography_default,
  typographyClasses_default
} from "./chunk-AWEBYUQO.js";
import {
  useSlot
} from "./chunk-JEXSQ2XE.js";
import {
  ListContext_default
} from "./chunk-NXSWK5OK.js";
import {
  useDefaultProps
} from "./chunk-3SQMDAHS.js";
import {
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  styled_default
} from "./chunk-ZKAULG4W.js";
import {
  clsx_default
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
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/@mui/material/esm/ListItemText/ListItemText.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@mui/material/esm/ListItemText/listItemTextClasses.js
function getListItemTextUtilityClass(slot) {
  return generateUtilityClass("MuiListItemText", slot);
}
var listItemTextClasses = generateUtilityClasses("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
var listItemTextClasses_default = listItemTextClasses;

// node_modules/@mui/material/esm/ListItemText/ListItemText.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ["root", inset && "inset", dense && "dense", primary && secondary && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  };
  return composeClasses(slots, getListItemTextUtilityClass, classes);
};
var ListItemTextRoot = styled_default("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses_default.primary}`]: styles.primary
    }, {
      [`& .${listItemTextClasses_default.secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${typographyClasses_default.root}:where(& .${listItemTextClasses_default.primary})`]: {
    display: "block"
  },
  [`.${typographyClasses_default.root}:where(& .${listItemTextClasses_default.secondary})`]: {
    display: "block"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.primary && ownerState.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.inset,
    style: {
      paddingLeft: 56
    }
  }]
});
var ListItemText = React.forwardRef(function ListItemText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiListItemText"
  });
  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    dense
  } = React.useContext(ListContext_default);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;
  const ownerState = {
    ...props,
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      primary: primaryTypographyProps,
      secondary: secondaryTypographyProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    className: clsx_default(classes.root, className),
    elementType: ListItemTextRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref
  });
  const [PrimarySlot, primarySlotProps] = useSlot("primary", {
    className: classes.primary,
    elementType: Typography_default,
    externalForwardedProps,
    ownerState
  });
  const [SecondarySlot, secondarySlotProps] = useSlot("secondary", {
    className: classes.secondary,
    elementType: Typography_default,
    externalForwardedProps,
    ownerState
  });
  if (primary != null && primary.type !== Typography_default && !disableTypography) {
    primary = (0, import_jsx_runtime.jsx)(PrimarySlot, {
      variant: dense ? "body2" : "body1",
      component: primarySlotProps?.variant ? void 0 : "span",
      ...primarySlotProps,
      children: primary
    });
  }
  if (secondary != null && secondary.type !== Typography_default && !disableTypography) {
    secondary = (0, import_jsx_runtime.jsx)(SecondarySlot, {
      variant: "body2",
      color: "textSecondary",
      ...secondarySlotProps,
      children: secondary
    });
  }
  return (0, import_jsx_runtime.jsxs)(RootSlot, {
    ...rootSlotProps,
    children: [primary, secondary]
  });
});
true ? ListItemText.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: import_prop_types.default.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: import_prop_types.default.bool,
  /**
   * The main content element.
   */
  primary: import_prop_types.default.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.primary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  primaryTypographyProps: import_prop_types.default.object,
  /**
   * The secondary content element.
   */
  secondary: import_prop_types.default.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.secondary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  secondaryTypographyProps: import_prop_types.default.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    primary: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    secondary: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    primary: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    secondary: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var ListItemText_default = ListItemText;

export {
  getListItemTextUtilityClass,
  listItemTextClasses_default,
  ListItemText_default
};
//# sourceMappingURL=chunk-LMQ3EXAZ.js.map

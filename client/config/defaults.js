import { Session } from "meteor/session";

/**
 * Misc. App. Configuration
 *
 * A place to put misc. package configurations
 */

// override/set layout
export const DEFAULT_LAYOUT = "coreLayout";

// override/set workflow
export const DEFAULT_WORKFLOW = "coreWorkflow";

// Use this to override just the home Package
// ie: {template: "products"}
export const INDEX_OPTIONS = {};

export const ABOUT_US = {};
export const CONTACTS = {};
// default load qty for product grid
export const ITEMS_INCREMENT = 24;

Session.setDefault("DEFAULT_LAYOUT", DEFAULT_LAYOUT);
Session.setDefault("DEFAULT_WORKFLOW", DEFAULT_WORKFLOW);
Session.setDefault("INDEX_OPTIONS", INDEX_OPTIONS);
Session.setDefault("ABOUT_US", {
  template: "aboutUs",
  layoutHeader: "layoutHeader",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});
Session.setDefault("productScrollLimit", ITEMS_INCREMENT);
Session.setDefault("CONTACTS", {
  template: "contacts",
  layoutHeader: "layoutHeader",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});
const ORG_MRZLI = "mrzli";
const ORG_MRZLI_JS_LIBS = "mrzli-js-libs";
const ORG_MRZLI_VSCODE_EXTENSIONS = "mrzli-vscode-extensions";
const ORG_MRZLI_GH_ACTIONS = "mrzli-gh-actions";
const ORG_MRZLI_OTHER = "mrzli-other";

export const ORG_OPTIONS = [
  ORG_MRZLI,
  ORG_MRZLI_JS_LIBS,
  ORG_MRZLI_VSCODE_EXTENSIONS,
  ORG_MRZLI_GH_ACTIONS,
  ORG_MRZLI_OTHER,
];

const VISIBILITY_PUBLIC = "public";
const VISIBILITY_PRIVATE = "private";

export const VISIBILITY_OPTIONS = [VISIBILITY_PUBLIC, VISIBILITY_PRIVATE];

const LANGUAGE_JS = "js";
const LANGUAGE_PYTHON = "python";
const LANGUAGE_JAVA = "java";
const LANGUAGE_RACKET = "racket";
const LANGUAGE_CPP = "c++";
const LANGUAGE_TEXT = "text";
const LANGUAGE_OTHER = "other";

export const LANGUAGE_OPTIONS = [
  LANGUAGE_JS,
  LANGUAGE_PYTHON,
  LANGUAGE_JAVA,
  LANGUAGE_RACKET,
  LANGUAGE_CPP,
  LANGUAGE_TEXT,
  LANGUAGE_OTHER,
];

const TYPE_SITE = "site";
const TYPE_APP = "app";
const TYPE_LIB = "lib";
const TYPE_TOOL = "tool";
const TYPE_EXAMPLE = "example";
const TYPE_DOC = "doc";
const TYPE_VSCODE_EXTENSION = "vscode-extension";
const TYPE_GH_ACTION = "gh-action";

export const TYPE_OPTIONS = [
  TYPE_SITE,
  TYPE_APP,
  TYPE_LIB,
  TYPE_TOOL,
  TYPE_EXAMPLE,
  TYPE_DOC,
  TYPE_VSCODE_EXTENSION,
  TYPE_GH_ACTION,
];

export const DATA = [
  // mrzli
  {
    repo: "docs",
    org: ORG_MRZLI,
    language: LANGUAGE_TEXT,
    type: TYPE_DOC,
    visibility: VISIBILITY_PRIVATE,
  },
  {
    repo: "docs-creating-js-libs",
    org: ORG_MRZLI,
    language: LANGUAGE_TEXT,
    type: TYPE_DOC,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gh-links",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_SITE,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-dance-site",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_SITE,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-dance-site-data-converter",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-earnings",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_SITE,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-js-libraries",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_LIB,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-js-starter",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-site",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_SITE,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-task-tracker-old",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_APP,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gm-trading",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_SITE,
    visibility: VISIBILITY_PRIVATE,
  },
  {
    repo: "gmjs",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_LIB,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gmjs-apps",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PRIVATE,
  },
  {
    repo: "gmjs-apps-old",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PRIVATE,
  },
  {
    repo: "gmnx",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "gmrkt",
    org: ORG_MRZLI,
    language: LANGUAGE_RACKET,
    type: TYPE_LIB,
    visibility: VISIBILITY_PRIVATE,
  },
  {
    repo: "gmrktcg",
    org: ORG_MRZLI,
    language: LANGUAGE_RACKET,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PRIVATE,
  },
  {
    repo: "mrzli.github.io",
    org: ORG_MRZLI,
    language: LANGUAGE_JS,
    type: TYPE_SITE,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "python-examples",
    org: ORG_MRZLI,
    language: LANGUAGE_PYTHON,
    type: TYPE_EXAMPLE,
    visibility: VISIBILITY_PRIVATE,
  },
  // mrzli-js-libs
  {
    repo: "js-project-generator",
    org: ORG_MRZLI_JS_LIBS,
    language: LANGUAGE_JS,
    type: TYPE_TOOL,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "date-util ",
    org: ORG_MRZLI_JS_LIBS,
    language: LANGUAGE_JS,
    type: TYPE_LIB,
    visibility: VISIBILITY_PUBLIC,
  },
  // mrzli-vscode-extensions
  {
    repo: "ep-js",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "ep-snippets-js",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "ep-vscode-tools",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "snippets-jest",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "snippets-nestjs",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "snippets-react",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "snippets-redux-observable",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "snippets-special",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "snippets-typescript",
    org: ORG_MRZLI_VSCODE_EXTENSIONS,
    language: LANGUAGE_JS,
    type: TYPE_VSCODE_EXTENSION,
    visibility: VISIBILITY_PUBLIC,
  },
  // mrzli-gh-actions
  {
    repo: "calculate-nx-affected-head-base",
    org: ORG_MRZLI_GH_ACTIONS,
    language: LANGUAGE_JS,
    type: TYPE_GH_ACTION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "deploy-to-surge",
    org: ORG_MRZLI_GH_ACTIONS,
    language: LANGUAGE_JS,
    type: TYPE_GH_ACTION,
    visibility: VISIBILITY_PUBLIC,
  },
  {
    repo: "publish-vscode-extension",
    org: ORG_MRZLI_GH_ACTIONS,
    language: LANGUAGE_JS,
    type: TYPE_GH_ACTION,
    visibility: VISIBILITY_PUBLIC,
  },
  // mrzli-other
  // omit for now
];

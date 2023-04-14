import { h, Component, render } from "https://esm.sh/preact";
import {
  DATA,
  ORG_OPTIONS,
  LANGUAGE_OPTIONS,
  TYPE_OPTIONS,
  VISIBILITY_OPTIONS,
} from "./data.js";

const FILTER_VALUE = {
  org: [],
  language: ['js', 'text'],
  type: ['site', 'lib', 'tool', 'doc'],
  visibility: [],
};

function setup() {
  renderApp(FILTER_VALUE);
}

function renderApp(filterValue) {
  const app = h("div", { class: "container" }, [
    h("div", { class: "filter" }, 'filter'),
    h("div", { class: "content" }, DATA.filter(filterRepos(filterValue)).map(toGithubRepoElement)),
  ]);

  render(app, document.body);
}

function filterRepos(filterValue) {
  return (repo) => {
    return (
      isFilterOptionsSatisfied(filterValue, "org", repo) &&
      isFilterOptionsSatisfied(filterValue, "language", repo) &&
      isFilterOptionsSatisfied(filterValue, "type", repo) &&
      isFilterOptionsSatisfied(filterValue, "visibility", repo)
    );
  };
}

function isFilterOptionsSatisfied(filterValue, key, repo) {
  console.log(filterValue, key, repo);
  const value = filterValue[key];

  return (
    value.length === 0 || value.includes(repo[key])
  );
}

function toGithubRepoElement(repo) {
  return h("div", { class: "repo" }, toGithubLinkElement(repo));
}

function toGithubLinkElement(repo) {
  return h(
    "a",
    {
      href: toGithubUrl(repo),
      target: "_blank",
      rel: "noreferrer noopener",
    },
    repo.repo
  );
}

function toGithubUrl(repo) {
  const repoName = repo.repo.split(" ")[0];
  return `https:/github.com/${repo.org}/${repoName}`;
}

setup();

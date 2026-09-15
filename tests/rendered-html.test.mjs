import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("exports the portfolio metadata and primary sections", () => {
  assert.match(output, /<title>Naresh Kumar R \| Associate Architect<\/title>/);
  assert.match(output, /id="about"/);
  assert.match(output, /id="work"/);
  assert.match(output, /id="stack"/);
  assert.match(output, /id="contact"/);
  assert.match(output, /34[^<]*public repositories/i);
});

test("includes the selected recent GitHub work", () => {
  const projects = [
    "React Intelligent Test Generator",
    "Argus Security Validation",
    "RepoScribe",
    "Conduit Architecture",
    "Mileage Tracker",
    "React TestGen Coverage",
    "ListSync",
    "Banking Data Assessment",
  ];

  for (const project of projects) {
    assert.ok(output.includes(project), `Expected the export to include ${project}`);
  }

  assert.match(output, /github\.com\/naresh-FD\/react-intelligent-test-generator/);
  assert.match(output, /github\.com\/naresh-FD\/argus-security-validation-docs/);
  assert.match(output, /github\.com\/naresh-FD\?tab=repositories/);
});

test("keeps external links safe and the theme control accessible", () => {
  assert.match(output, /aria-label="Switch to dark mode"/);
  assert.match(output, /target="_blank"/);
  assert.match(output, /rel="noopener noreferrer"/);
  assert.doesNotMatch(output, /Your site is taking shape|vinext-starter/);
});

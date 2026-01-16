/**
 * @file Digital Asset Modeling Language
 * @author Semyon Protas <semyon.protas@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "daml",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});

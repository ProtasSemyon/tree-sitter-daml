const {
  layout,
  sep1
} = require('./util.js');

module.exports = {
  template: $ => seq(
    'template',
    field('head', $._type_head),
    optional(seq('with', field('payload', $.daml_fields))),
    'where',
    field('body', $.template_body)
  ),

  daml_fields: $ => layout($, field('field', $.daml_field)),
  daml_field: $ => seq($.variable, ':', $.quantified_type),

  template_body: $ => layout($, field('item', $.template_item)),

  template_item: $ => choice(
    $.signatory,
    $.observer,
    $.ensure,
    $.agreement,
    $.key,
    $.choice
  ),

  signatory: $ => seq('signatory', $._exp),
  observer: $ => seq('observer', $._exp),
  ensure: $ => seq('ensure', $._exp),
  agreement: $ => seq('agreement', $._exp),

  key: $ => seq(
    'key',
    $.type,
    'for',
    $._exp,
    'maintains',
    $._exp
  ),

  choice: $ => seq(
    'choice',
    field('name', $._constructor),
    optional(seq('with', field('argument_fields', $.daml_fields))),
    optional(seq(':', field('return_type', $.quantified_type))),
    'controller',
    $._exp,
    'do',
    field('body', $._statements)
  ),

  daml_scenario: $ => seq(
    'scenario',
    field('body', $._exp)
  ),
};

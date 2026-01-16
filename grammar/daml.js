const {
  layout,
  sep1
} = require('./util.js');

module.exports = {
  template: $ => seq(
    optional($._phantom_template),
    'template',
    field('head', $._type_head),
    optional(seq(optional($._phantom_with), 'with', field('payload', $.daml_fields))),
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

  signatory: $ => seq(
    optional($._phantom_signatory),
    'signatory', $._exp
  ),
  observer: $ => seq(
    optional($._phantom_observer),
    'observer', $._exp
  ),
  ensure: $ => seq(
    optional($._phantom_ensure),
    'ensure', $._exp
  ),
  agreement: $ => seq(
    optional($._phantom_agreement),
    'agreement', $._exp
  ),

  key: $ => seq(
    optional($._phantom_key),
    'key',
    $.type,
    'for',
    $._exp,
    'maintains',
    $._exp
  ),

  choice: $ => seq(
    optional(seq(optional($._phantom_choice), 'choice')), // Correctly placing _phantom_choice
    field('name', $._constructor),
    optional(seq(optional($._phantom_with), 'with', field('argument_fields', $.daml_fields))),
    optional(seq(':', field('return_type', $.quantified_type))),
    'controller',
    $._exp,
    'do',
    field('body', $._statements)
  ),

  daml_scenario: $ => seq(
    optional($._phantom_scenario),
    'scenario',
    field('body', $._exp)
  ),
};

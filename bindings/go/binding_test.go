package tree_sitter_daml_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_daml "github.com/protassemyon/tree-sitter-daml/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_daml.Language())
	if language == nil {
		t.Errorf("Error loading Daml grammar")
	}
}

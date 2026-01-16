import XCTest
import SwiftTreeSitter
import TreeSitterDaml

final class TreeSitterDamlTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_daml())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Daml grammar")
    }
}

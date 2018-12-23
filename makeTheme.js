const fs = require('fs')

const COLORS = {
  hi: '#1a1a1a',
  mi: '#cecece',
  lo: '#212121',
  mo: '#262626',
  et: '#363636',
  tr: '#726c6b',
  oo: '#00000000'
}

const UI = {
  type: 'dark',
  colors: {
    'scrollbar.shadow': COLORS.mo,
    'scrollbarSlider.activeBackground': `${COLORS.tr}99`,
    'scrollbarSlider.background': `${COLORS.tr}66`,
    'scrollbarSlider.hoverBackground': `${COLORS.tr}99`,
    'editor.background': COLORS.mo,
    'editorGutter.background': COLORS.mo,
    'tab.activeBackground': COLORS.mo,
    'tab.activeBorder': COLORS.mo,
    'activityBar.background': COLORS.lo,
    'activityBarBadge.foreground': COLORS.lo,
    'badge.foreground': COLORS.lo,
    'editorWidget.background': COLORS.lo,
    'editorBracketMatch.background': COLORS.lo,
    'editorGroupHeader.noTabsBackground': COLORS.lo,
    'editorGroupHeader.tabsBackground': COLORS.lo,
    'editorSuggestWidget.background': COLORS.lo,
    'debugExceptionWidget.border': COLORS.lo,
    'list.activeSelectionForeground': COLORS.lo,
    'panel.background': COLORS.lo,
    'peekViewEditor.background': COLORS.lo,
    'peekViewEditorGutter.background': COLORS.lo,
    'peekViewResult.background': COLORS.lo,
    'sideBar.background': COLORS.lo,
    'tab.inactiveBackground': COLORS.lo,
    'terminal.background': COLORS.lo,
    'titleBar.activeBackground': COLORS.lo,
    'titleBar.border': COLORS.lo,
    'titleBar.inactiveBackground': COLORS.lo,
    'walkThrough.embeddedEditorBackground': COLORS.lo,
    'tab.hoverBackground': COLORS.lo,
    focusBorder: COLORS.hi,
    'activityBar.dropBackground': COLORS.hi,
    'dropdown.background': COLORS.hi,
    'dropdown.border': COLORS.hi,
    'editor.hoverHighlightBackground': COLORS.hi,
    'editorGroup.border': COLORS.hi,
    'editorGroup.dropBackground': COLORS.hi,
    'editorGroupHeader.tabsBorder': COLORS.hi,
    'editorHoverWidget.background': COLORS.hi,
    'editorHoverWidget.border': COLORS.hi,
    'editorOverviewRuler.border': COLORS.hi,
    'editorOverviewRuler.currentContentForeground': COLORS.hi,
    'editorOverviewRuler.incomingContentForeground': COLORS.hi,
    'editorSuggestWidget.border': COLORS.hi,
    'debugToolBar.background': COLORS.hi,
    'input.background': COLORS.hi,
    'input.border': COLORS.hi,
    'list.hoverBackground': COLORS.hi,
    'merge.border': COLORS.hi,
    'panel.border': COLORS.hi,
    'peekViewTitle.background': COLORS.hi,
    'pickerGroup.border': COLORS.hi,
    'sideBar.border': COLORS.hi,
    'sideBarSectionHeader.background': COLORS.hi,
    'statusBar.background': COLORS.hi,
    'statusBar.noFolderBackground': COLORS.hi,
    'statusBarItem.prominentBackground': COLORS.hi,
    'statusBar.border': COLORS.hi,
    'tab.activeBorderTop': COLORS.hi,
    'tab.border': COLORS.hi,
    'tab.unfocusedHoverBackground': COLORS.hi,
    'terminal.ansiBlack': COLORS.hi,
    'editor.lineHighlightBackground': COLORS.et,
    'list.inactiveSelectionBackground': COLORS.et,
    'list.activeSelectionBackground': COLORS.et,
    'editor.selectionBackground': COLORS.et,
    'editorCursor.background': COLORS.et,
    'editorLineNumber.foreground': COLORS.et,
    'sideBar.dropBackground': COLORS.et,
    'badge.background': COLORS.et,
    'editor.lineHighlightBorder': COLORS.oo,
    foreground: COLORS.mi,
    'activityBar.foreground': COLORS.mi,
    'button.foreground': COLORS.mi,
    'dropdown.foreground': COLORS.mi,
    'editorCursor.foreground': COLORS.mi,
    'editorLineNumber.activeForeground': COLORS.mi,
    'editor.foreground': COLORS.mi,
    'editorSuggestWidget.foreground': COLORS.mi,
    'extensionButton.prominentForeground': COLORS.mi,
    'input.foreground': COLORS.mi,
    'input.placeholderForeground': COLORS.mi,
    'list.inactiveSelectionForeground': COLORS.mi,
    'list.focusForeground': COLORS.mi,
    'panelTitle.inactiveForeground': COLORS.mi,
    'peekViewResult.lineForeground': COLORS.mi,
    'peekViewResult.selectionForeground': COLORS.mi,
    'peekViewTitleDescription.foreground': COLORS.mi,
    'pickerGroup.foreground': COLORS.mi,
    'sideBar.foreground': COLORS.mi,
    'sideBarSectionHeader.foreground': COLORS.mi,
    'sideBarTitle.foreground': COLORS.mi,
    'statusBar.debuggingForeground': COLORS.mi,
    'statusBar.noFolderForeground': COLORS.mi,
    'statusBar.foreground': COLORS.mi,
    'tab.activeForeground': COLORS.mi,
    'tab.inactiveForeground': COLORS.mi,
    'tab.unfocusedActiveForeground': COLORS.mi,
    'tab.unfocusedInactiveForeground': COLORS.mi,
    'terminal.foreground': COLORS.mi,
    'titleBar.activeForeground': COLORS.mi,
    'titleBar.inactiveForeground': COLORS.mi
  }
}

const THEMES = [
  {
    type: 'dark',
    name: 'Cameo Dark+ (default dark)',
    variant: 'default-dark',
    include: './_ui.json',
    tokenColors: [
      {
        "scope": [
          "meta.embedded",
          "source.groovy.embedded"
        ],
        "settings": {
          "foreground": "#D4D4D4"
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "strong",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "header",
        "settings": {
          "foreground": "#000080"
        }
      },
      {
        "scope": "comment",
        "settings": {
          "foreground": "#6A9955"
        }
      },
      {
        "scope": "constant.language",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#b5cea8"
        }
      },
      {
        "scope": "constant.regexp",
        "settings": {
          "foreground": "#646695"
        }
      },
      {
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "entity.name.tag.css",
        "settings": {
          "foreground": "#d7ba7d"
        }
      },
      {
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#9cdcfe"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.mixin.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "source.css.less entity.other.attribute-name.id",
          "entity.other.attribute-name.attribute.scss",
          "entity.other.attribute-name.scss"
        ],
        "settings": {
          "foreground": "#d7ba7d"
        }
      },
      {
        "scope": "invalid",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "scope": "markup.underline",
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "markup.heading",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": "#b5cea8"
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": "#ce9178"
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "punctuation.definition.quote.begin.markdown",
        "settings": {
          "foreground": "#6A9955"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#ce9178"
        }
      },
      {
        "name": "brackets of XML/HTML tags",
        "scope": "punctuation.definition.tag",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": "meta.preprocessor",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "meta.preprocessor.string",
        "settings": {
          "foreground": "#ce9178"
        }
      },
      {
        "scope": "meta.preprocessor.numeric",
        "settings": {
          "foreground": "#b5cea8"
        }
      },
      {
        "scope": "meta.structure.dictionary.key.python",
        "settings": {
          "foreground": "#9cdcfe"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "storage",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "storage.type",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "storage.modifier",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "string",
        "settings": {
          "foreground": "#ce9178"
        }
      },
      {
        "scope": "string.tag",
        "settings": {
          "foreground": "#ce9178"
        }
      },
      {
        "scope": "string.value",
        "settings": {
          "foreground": "#ce9178"
        }
      },
      {
        "scope": "string.regexp",
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "name": "String interpolation",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": "#d4d4d4"
        }
      },
      {
        "scope": [
          "support.type.vendored.property-name",
          "support.type.property-name",
          "variable.css",
          "variable.scss",
          "variable.other.less",
          "source.coffee.embedded"
        ],
        "settings": {
          "foreground": "#9cdcfe"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "keyword.control",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#d4d4d4"
        }
      },
      {
        "scope": [
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python"
        ],
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": "#b5cea8"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php"
        ],
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "support.function.git-rebase",
        "settings": {
          "foreground": "#9cdcfe"
        }
      },
      {
        "scope": "constant.sha.git-rebase",
        "settings": {
          "foreground": "#b5cea8"
        }
      },
      {
        "name": "coloring of the Java import and package identifiers",
        "scope": [
          "storage.modifier.import.java",
          "variable.language.wildcard.java",
          "storage.modifier.package.java"
        ],
        "settings": {
          "foreground": "#d4d4d4"
        }
      },
      {
        "name": "this.self",
        "scope": "variable.language",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "name": "Function declarations",
        "scope": [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars"
        ],
        "settings": {
          "foreground": "#DCDCAA"
        }
      },
      {
        "name": "Types declaration and references",
        "scope": [
          "meta.return-type",
          "support.class",
          "support.type",
          "entity.name.type",
          "entity.name.class",
          "storage.type.numeric.go",
          "storage.type.byte.go",
          "storage.type.boolean.go",
          "storage.type.string.go",
          "storage.type.uintptr.go",
          "storage.type.error.go",
          "storage.type.rune.go",
          "storage.type.cs",
          "storage.type.generic.cs",
          "storage.type.modifier.cs",
          "storage.type.variable.cs",
          "storage.type.annotation.java",
          "storage.type.generic.java",
          "storage.type.java",
          "storage.type.object.array.java",
          "storage.type.primitive.array.java",
          "storage.type.primitive.java",
          "storage.type.token.java",
          "storage.type.groovy",
          "storage.type.annotation.groovy",
          "storage.type.parameters.groovy",
          "storage.type.generic.groovy",
          "storage.type.object.array.groovy",
          "storage.type.primitive.array.groovy",
          "storage.type.primitive.groovy"
        ],
        "settings": {
          "foreground": "#4EC9B0"
        }
      },
      {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.constant.math",
          "support.constant.dom",
          "support.constant.json",
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#4EC9B0"
        }
      },
      {
        "name": "Control flow keywords",
        "scope": "keyword.control",
        "settings": {
          "foreground": "#C586C0"
        }
      },
      {
        "name": "Variable and parameter name",
        "scope": [
          "variable",
          "meta.definition.variable.name",
          "support.variable",
          "entity.name.variable"
        ],
        "settings": {
          "foreground": "#9CDCFE"
        }
      },
      {
        "name": "Object keys, TS grammar specific",
        "scope": [
          "meta.object-literal.key"
        ],
        "settings": {
          "foreground": "#9CDCFE"
        }
      },
      {
        "name": "CSS property value",
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "support.constant.media-type",
          "support.constant.media",
          "constant.other.color.rgb-value",
          "constant.other.rgb-value",
          "support.constant.color"
        ],
        "settings": {
          "foreground": "#CE9178"
        }
      },
      {
        "name": "Regular expression groups",
        "scope": [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp"
        ],
        "settings": {
          "foreground": "#CE9178"
        }
      },
      {
        "scope": [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp"
        ],
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "scope": [
          "keyword.operator.or.regexp",
          "keyword.control.anchor.regexp"
        ],
        "settings": {
          "foreground": "#DCDCAA"
        }
      },
      {
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": "#d7ba7d"
        }
      },
      {
        "scope": "constant.character",
        "settings": {
          "foreground": "#569cd6"
        }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#d7ba7d"
        }
      }
    ]
  }
]

// Load package.json to print file names in
fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
  }

  // Export the UI
  fs.writeFile(
    `./themes/_ui.json`,
    JSON.stringify(UI, null, 2),
    'utf8',
    (msg, err) => {
      if (err) {
        console.error(err)
      }

      console.log('Exported _ui.json')
    }
  )

  const packageJson = JSON.parse(data)

  // Export the themes
  THEMES.forEach(theme => {
    const fileName = `cameo-${theme.variant}-color-theme.json`
    fs.writeFile(
      `./themes/${fileName}`,
      JSON.stringify(theme, null, 2),
      'utf8',
      (msg, err) => {
        if (err) {
          console.error(err)
        }

        console.log(`Exported ${fileName}`)
      }
    )
  })

  // Put themes in package.json
  packageJson.contributes.themes = THEMES.map(theme => ({
    label: `Cameo ${theme.variant}`,
    uiTheme: 'vs-dark',
    path: `./themes/cameo-${theme.variant}-color-theme.json`
  }))

  // Export package.json
  fs.writeFile(
    `./package.json`,
    JSON.stringify(packageJson, null, 2),
    'utf8',
    (msg, err) => {
      if (err) {
        console.error(err)
      }

      console.log('Exported package.json')
    }
  )
})

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
    name: 'Cameo Default',
    variant: 'default',
    include: './_ui.json',
    tokenColors: [
      {
        settings: {
          foreground: '#eeffffff',
          background: '#263238ff'
        }
      },
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          fontStyle: 'italic',
          foreground: '#546E7A'
        }
      },
      {
        name: 'Variables',
        scope: ['variable', 'string constant.other.placeholder'],
        settings: {
          foreground: '#EEFFFF'
        }
      },
      {
        name: 'Colors',
        scope: ['constant.other.color'],
        settings: {
          foreground: '#ffffff'
        }
      },
      {
        name: 'Invalid',
        scope: ['invalid', 'invalid.illegal'],
        settings: {
          foreground: '#FF5370'
        }
      },
      {
        name: 'Keyword, Storage',
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'Operator, Misc',
        scope: [
          'keyword.control',
          'constant.other.color',
          'punctuation',
          'meta.tag',
          'punctuation.definition.tag',
          'punctuation.separator.inheritance.php',
          'punctuation.definition.tag.html',
          'punctuation.definition.tag.begin.html',
          'punctuation.definition.tag.end.html',
          'punctuation.section.embedded',
          'keyword.other.template',
          'keyword.other.substitution'
        ],
        settings: {
          foreground: '#89DDFF'
        }
      },
      {
        name: 'Tag',
        scope: [
          'entity.name.tag',
          'meta.tag.sgml',
          'markup.deleted.git_gutter'
        ],
        settings: {
          foreground: '#f07178'
        }
      },
      {
        name: 'Function, Special Method',
        scope: [
          'entity.name.function',
          'meta.function-call',
          'variable.function',
          'support.function',
          'keyword.other.special-method'
        ],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'Block Level Variables',
        scope: ['meta.block variable.other'],
        settings: {
          foreground: '#f07178'
        }
      },
      {
        name: 'Other Variable, String Link',
        scope: ['support.other.variable', 'string.other.link'],
        settings: {
          foreground: '#f07178'
        }
      },
      {
        name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
        scope: [
          'constant.numeric',
          'constant.language',
          'support.constant',
          'constant.character',
          'constant.escape',
          'variable.parameter',
          'keyword.other.unit',
          'keyword.other'
        ],
        settings: {
          foreground: '#F78C6C'
        }
      },
      {
        name: 'String, Symbols, Inherited Class, Markup Heading',
        scope: [
          'string',
          'constant.other.symbol',
          'constant.other.key',
          'entity.other.inherited-class',
          'markup.heading',
          'markup.inserted.git_gutter',
          'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
        ],
        settings: {
          fontStyle: 'normal',
          foreground: '#C3E88D'
        }
      },
      {
        name: 'Class, Support',
        scope: [
          'entity.name',
          'support.type',
          'support.class',
          'support.orther.namespace.use.php',
          'meta.use.php',
          'support.other.namespace.php',
          'markup.changed.git_gutter',
          'support.type.sys-types'
        ],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'Entity Types',
        scope: ['support.type'],
        settings: {
          foreground: '#B2CCD6'
        }
      },
      {
        name: 'CSS Class and Support',
        scope: [
          'source.css support.type.property-name',
          'source.sass support.type.property-name',
          'source.scss support.type.property-name',
          'source.less support.type.property-name',
          'source.stylus support.type.property-name',
          'source.postcss support.type.property-name'
        ],
        settings: {
          foreground: '#B2CCD6'
        }
      },
      {
        name: 'Sub-methods',
        scope: [
          'entity.name.module.js',
          'variable.import.parameter.js',
          'variable.other.class.js'
        ],
        settings: {
          foreground: '#FF5370'
        }
      },
      {
        name: 'Language methods',
        scope: ['variable.language'],
        settings: {
          fontStyle: 'italic',
          foreground: '#FF5370'
        }
      },
      {
        name: 'entity.name.method.js',
        scope: ['entity.name.method.js'],
        settings: {
          fontStyle: 'italic',
          foreground: '#82AAFF'
        }
      },
      {
        name: 'meta.method.js',
        scope: [
          'meta.class-method.js entity.name.function.js',
          'variable.function.constructor'
        ],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'Attributes',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'HTML Attributes',
        scope: [
          'text.html.basic entity.other.attribute-name.html',
          'text.html.basic entity.other.attribute-name'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'CSS Classes',
        scope: ['entity.other.attribute-name.class'],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: "CSS ID's",
        scope: ['source.sass keyword.control'],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'Inserted',
        scope: ['markup.inserted'],
        settings: {
          foreground: '#C3E88D'
        }
      },
      {
        name: 'Deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: '#FF5370'
        }
      },
      {
        name: 'Changed',
        scope: ['markup.changed'],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'Regular Expressions',
        scope: ['string.regexp'],
        settings: {
          foreground: '#89DDFF'
        }
      },
      {
        name: 'Escape Characters',
        scope: ['constant.character.escape'],
        settings: {
          foreground: '#89DDFF'
        }
      },
      {
        name: 'URL',
        scope: ['*url*', '*link*', '*uri*'],
        settings: {
          fontStyle: 'underline'
        }
      },
      {
        name: 'Decorators',
        scope: [
          'tag.decorator.js entity.name.tag.js',
          'tag.decorator.js punctuation.definition.tag.js'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: '#82AAFF'
        }
      },
      {
        name: 'ES7 Bind Operator',
        scope: [
          'source.js constant.other.object.key.js string.unquoted.label.js'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: '#FF5370'
        }
      },
      {
        name: 'JSON Key - Level 0',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'JSON Key - Level 1',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'JSON Key - Level 2',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#F78C6C'
        }
      },
      {
        name: 'JSON Key - Level 3',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#FF5370'
        }
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#C17E70'
        }
      },
      {
        name: 'JSON Key - Level 5',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'JSON Key - Level 6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#f07178'
        }
      },
      {
        name: 'JSON Key - Level 7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'JSON Key - Level 8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
        ],
        settings: {
          foreground: '#C3E88D'
        }
      },
      {
        name: 'Markdown - Plain',
        scope: [
          'text.html.markdown',
          'punctuation.definition.list_item.markdown'
        ],
        settings: {
          foreground: '#EEFFFF'
        }
      },
      {
        name: 'Markdown - Markup Raw Inline',
        scope: ['text.html.markdown markup.inline.raw.markdown'],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'Markdown - Markup Raw Inline Punctuation',
        scope: [
          'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
        ],
        settings: {
          foreground: '#65737E'
        }
      },
      {
        name: 'Markdown - Line Break',
        scope: ['text.html.markdown meta.dummy.line-break'],
        settings: {
          foreground: ''
        }
      },
      {
        name: 'Markdown - Heading',
        scope: [
          'markdown.heading',
          'markup.heading | markup.heading entity.name',
          'markup.heading.markdown punctuation.definition.heading.markdown'
        ],
        settings: {
          foreground: '#C3E88D'
        }
      },
      {
        name: 'Markup - Italic',
        scope: ['markup.italic'],
        settings: {
          fontStyle: 'italic',
          foreground: '#f07178'
        }
      },
      {
        name: 'Markup - Bold',
        scope: ['markup.bold', 'markup.bold string'],
        settings: {
          fontStyle: 'bold',
          foreground: '#f07178'
        }
      },
      {
        name: 'Markup - Bold-Italic',
        scope: [
          'markup.bold markup.italic',
          'markup.italic markup.bold',
          'markup.quote markup.bold',
          'markup.bold markup.italic string',
          'markup.italic markup.bold string',
          'markup.quote markup.bold string'
        ],
        settings: {
          fontStyle: 'bold',
          foreground: '#f07178'
        }
      },
      {
        name: 'Markup - Underline',
        scope: ['markup.underline'],
        settings: {
          fontStyle: 'underline',
          foreground: '#F78C6C'
        }
      },
      {
        name: 'Markup - Strike',
        scope: ['markup.strike'],
        settings: {
          fontStyle: 'strike',
          foreground: ''
        }
      },
      {
        name: 'Markdown - Blockquote',
        scope: ['markup.quote punctuation.definition.blockquote.markdown'],
        settings: {
          background: '#65737E',
          foreground: '#65737E'
        }
      },
      {
        name: 'Markup - Quote',
        scope: ['markup.quote'],
        settings: {
          fontStyle: 'italic',
          foreground: ''
        }
      },
      {
        name: 'Markdown - Link',
        scope: ['string.other.link.title.markdown'],
        settings: {
          foreground: '#82AAFF'
        }
      },
      {
        name: 'Markdown - Link Description',
        scope: ['string.other.link.description.title.markdown'],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'Markdown - Link Anchor',
        scope: ['constant.other.reference.link.markdown'],
        settings: {
          foreground: '#FFCB6B'
        }
      },
      {
        name: 'Markup - Raw Block',
        scope: ['markup.raw.block'],
        settings: {
          foreground: '#C792EA'
        }
      },
      {
        name: 'Markdown - Raw Block Fenced',
        scope: ['markup.raw.block.fenced.markdown'],
        settings: {
          foreground: '#00000050'
        }
      },
      {
        name: 'Markdown - Fenced Bode Block',
        scope: ['punctuation.definition.fenced.markdown'],
        settings: {
          foreground: '#00000050'
        }
      },
      {
        name: 'Markdown - Fenced Bode Block Variable',
        scope: [
          'markup.raw.block.fenced.markdown',
          'variable.language.fenced.markdown',
          'punctuation.section.class.end'
        ],
        settings: {
          foreground: '#EEFFFF'
        }
      },
      {
        name: 'Markdown - Fenced Language',
        scope: ['variable.language.fenced.markdown'],
        settings: {
          foreground: '#65737E'
        }
      },
      {
        name: 'Markdown - Separator',
        scope: ['meta.separator'],
        settings: {
          fontStyle: 'bold',
          background: '#00000050',
          foreground: '#65737E'
        }
      },
      {
        name: 'Markup - Table',
        scope: ['markup.table'],
        settings: {
          foreground: '#EEFFFF'
        }
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: '#6796e6'
        }
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: '#cd9731'
        }
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: '#f44747'
        }
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: '#b267e6'
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

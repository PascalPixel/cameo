const fs = require('fs')
const packageJson = require('./package.json')
const defaultDark = require('./submodules/default/extensions/theme-defaults/themes/dark_vs.json')
const defaultDarkPlus = require('./submodules/default/extensions/theme-defaults/themes/dark_plus.json')
const nord = require('./submodules/nord/themes/nord.json')
const oneDark = require('./submodules/one-dark/themes/OneDark-Pro.json')

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

// Override each theme's UI with Cameo's
const THEMES = {
  'default-dark': {
    type: 'dark',
    name: 'Cameo Dark (Visual Studio)',
    include: "./_ui.json",
    tokenColors: defaultDark.tokenColors
  },
  'default-dark-plus': {
    type: 'dark',
    name: 'Cameo Dark+ (default dark)',
    include: "./_ui.json",
    tokenColors: [ ...defaultDark.tokenColors, ...defaultDarkPlus.tokenColors ]
  },
  nord: {
    type: 'dark',
    name: 'Cameo Nord',
    include: "./_ui.json",
    tokenColors: nord.tokenColors
  },
  'one-dark': {
    type: 'dark',
    name: 'Cameo One Dark',
    include: "./_ui.json",
    tokenColors: oneDark.tokenColors
  }
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

// Export the themes
Object.keys(THEMES).forEach(key => {
  const theme = THEMES[key]
  const fileName = `cameo-${key}-color-theme.json`
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
packageJson.contributes.themes = Object.keys(THEMES).map(key => ({
  label: THEMES[key].name,
  uiTheme: 'vs-dark',
  path: `./themes/cameo-${key}-color-theme.json`
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

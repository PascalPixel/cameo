const fs = require('fs')
const Color = require('color')
const packageJson = require('./package.json')
const defaultDark = require('./submodules/default/extensions/theme-defaults/themes/dark_vs.json')
const defaultDarkPlus = require('./submodules/default/extensions/theme-defaults/themes/dark_plus.json')
const nord = require('./submodules/nord/themes/nord.json')
const oneDark = require('./submodules/one-dark/themes/OneDark-Pro.json')

const COLORS = {
  c000000000: 'hsl(000,   0%,   0%)',
  c000000010: 'hsl(000,   0%,  10%)',
  c000000020: 'hsl(000,   0%,  20%)',
  c000000030: 'hsl(000,   0%,  30%)',
  c000000040: 'hsl(000,   0%,  40%)',
  c000000050: 'hsl(000,   0%,  50%)',
  c000000060: 'hsl(000,   0%,  60%)',
  c000000070: 'hsl(000,   0%,  70%)',
  c000000080: 'hsl(000,   0%,  80%)',
  c000000090: 'hsl(000,   0%,  90%)',
  c000000100: 'hsl(000,   0%, 100%)',
  c000075020: 'hsl(000,  75%,  20%)',
  c000075030: 'hsl(000,  75%,  30%)',
  c000075040: 'hsl(000,  75%,  40%)',
  c000075050: 'hsl(000,  75%,  50%)',
  c000075060: 'hsl(000,  75%,  60%)',
  c000075070: 'hsl(000,  75%,  70%)',
  c020075030: 'hsl(020,  75%,  30%)',
  c020075050: 'hsl(020,  75%,  50%)',
  c050075010: 'hsl(050,  75%,  10%)',
  c050075040: 'hsl(050,  75%,  40%)',
  c050075050: 'hsl(050,  75%,  50%)',
  c050075060: 'hsl(050,  75%,  60%)',
  c050075070: 'hsl(050,  75%,  70%)',
  c080075030: 'hsl(080,  75%,  30%)',
  c080075050: 'hsl(080,  75%,  50%)',
  c120025050: 'hsl(120,  25%,  50%)',
  c120025060: 'hsl(120,  25%,  60%)',
  c120075020: 'hsl(120,  75%,  20%)',
  c120075030: 'hsl(120,  75%,  30%)',
  c120075040: 'hsl(120,  75%,  40%)',
  c120075060: 'hsl(120,  75%,  60%)',
  c170075040: 'hsl(170,  75%,  40%)',
  c170075050: 'hsl(170,  75%,  50%)',
  c190075020: 'hsl(190,  75%,  20%)',
  c190075030: 'hsl(190,  75%,  30%)',
  c190075040: 'hsl(190,  75%,  40%)',
  c190075050: 'hsl(190,  75%,  50%)',
  c200075010: 'hsl(200,  75%,  10%)',
  c200075020: 'hsl(200,  75%,  20%)',
  c200075030: 'hsl(200,  75%,  30%)',
  c200075040: 'hsl(200,  75%,  40%)',
  c200075050: 'hsl(200,  75%,  50%)',
  c200075060: 'hsl(200,  75%,  60%)',
  c200075070: 'hsl(200,  75%,  70%)',
  c200075080: 'hsl(200,  75%,  80%)',
  c240075030: 'hsl(240,  75%,  30%)',
  c240075060: 'hsl(240,  75%,  60%)',
  c300025070: 'hsl(300,  25%,  70%)',
  c300075030: 'hsl(300,  75%,  30%)',
  c300075050: 'hsl(300,  75%,  50%)',
  c300075060: 'hsl(300,  75%,  60%)',
}

const DEFAULTS = {
  'listFilterWidget.outline': {
    c: COLORS.c000000000,
    a: '00',
    o: '#000000',
  },
  'editorUnnecessaryCode.opacity': {
    c: COLORS.c000000000,
    a: 'aa',
    o: '#000000',
  },
  'scrollbar.shadow': {
    c: COLORS.c000000000,
    a: 'ff',
    o: '#000000',
  },
  'terminal.ansiBlack': {
    c: COLORS.c000000000,
    a: 'ff',
    o: '#000000',
  },
  'widget.shadow': {
    c: COLORS.c000000000,
    a: 'ff',
    o: '#000000',
  },
  'textCodeBlock.background': {
    c: COLORS.c000000010,
    a: '66',
    o: '#0a0a0a',
  },
  'breadcrumb.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'editor.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'editorGroupHeader.noTabsBackground': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'editorGutter.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'editorPane.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'panel.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'peekViewTitle.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'tab.activeBackground': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'terminal.background': {
    c: COLORS.c000000010,
    a: 'ff',
    o: '#1e1e1e',
  },
  'breadcrumbPicker.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'editorGroupHeader.tabsBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'editorHoverWidget.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'editorSuggestWidget.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'editorWidget.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'menu.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'notifications.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'peekViewResult.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'sideBar.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'tab.border': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#252526',
  },
  'editor.lineHighlightBorder': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#282828',
  },
  'settings.numberInputBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#292929',
  },
  'settings.textInputBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#292929',
  },
  'list.hoverBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#2a2d2e',
  },
  'editorHoverWidget.statusBarBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#2c2c2d',
  },
  'tab.inactiveBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#2d2d2d',
  },
  'editorMarkerNavigation.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#2d2d30',
  },
  'notificationCenterHeader.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#303031',
  },
  'notifications.border': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#303031',
  },
  'list.inactiveFocusBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#313135',
  },
  'activityBar.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#333333',
  },
  'debugToolBar.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#333333',
  },
  'list.inactiveSelectionBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#37373d',
  },
  'list.dropBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#383b3d',
  },
  'editor.findRangeHighlightBackground': {
    c: COLORS.c000000020,
    a: '66',
    o: '#3a3d41',
  },
  'editor.inactiveSelectionBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3a3d41',
  },
  'titleBar.inactiveBackground': {
    c: COLORS.c000000020,
    a: '99',
    o: '#3c3c3c',
  },
  'dropdown.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'dropdown.border': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'input.background': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'settings.checkboxBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'settings.checkboxBorder': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'settings.dropdownBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'settings.dropdownBorder': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'titleBar.activeBackground': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3c3c3c',
  },
  'pickerGroup.border': {
    c: COLORS.c000000020,
    a: 'ff',
    o: '#3f3f46',
  },
  'editorIndentGuide.background': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#404040',
  },
  'editorGroup.border': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#444444',
  },
  'editorHoverWidget.border': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#454545',
  },
  'editorSuggestWidget.border': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#454545',
  },
  'editorWidget.border': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#454545',
  },
  'settings.dropdownListBorder': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#454545',
  },
  'badge.background': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#4d4d4d',
  },
  'editor.snippetFinalTabstopHighlightBorder': {
    c: COLORS.c000000030,
    a: 'ff',
    o: '#525252',
  },
  'editor.wordHighlightBackground': {
    c: COLORS.c000000030,
    a: 'b8',
    o: '#575757',
  },
  'editor.findMatchBackground': {
    c: COLORS.c000000040,
    a: 'ff',
    o: '#515c6a',
  },
  'editorGroup.dropBackground': {
    c: COLORS.c000000040,
    a: '80',
    o: '#53595d',
  },
  'editorRuler.foreground': {
    c: COLORS.c000000040,
    a: 'ff',
    o: '#5a5a5a',
  },
  'merge.commonContentBackground': {
    c: COLORS.c000000040,
    a: '29',
    o: '#606060',
  },
  'editorOverviewRuler.commonContentForeground': {
    c: COLORS.c000000040,
    a: '66',
    o: '#606060',
  },
  'merge.commonHeaderBackground': {
    c: COLORS.c000000040,
    a: '66',
    o: '#606060',
  },
  'scrollbarSlider.hoverBackground': {
    c: COLORS.c000000040,
    a: 'b3',
    o: '#646464',
  },
  'terminal.ansiBrightBlack': {
    c: COLORS.c000000040,
    a: 'ff',
    o: '#666666',
  },
  'editorIndentGuide.activeBackground': {
    c: COLORS.c000000040,
    a: 'ff',
    o: '#707070',
  },
  'scrollbarSlider.background': {
    c: COLORS.c000000050,
    a: '66',
    o: '#797979',
  },
  'editor.snippetTabstopHighlightBackground': {
    c: COLORS.c000000050,
    a: '4d',
    o: '#7c7c7c',
  },
  'textBlockQuote.background': {
    c: COLORS.c000000050,
    a: '1a',
    o: '#7f7f7f',
  },
  'editorOverviewRuler.border': {
    c: COLORS.c000000050,
    a: '4d',
    o: '#7f7f7f',
  },
  'sideBarSectionHeader.background': {
    c: COLORS.c000000050,
    a: '33',
    o: '#808080',
  },
  'panel.border': {
    c: COLORS.c000000050,
    a: '59',
    o: '#808080',
  },
  'panelTitle.activeBorder': {
    c: COLORS.c000000050,
    a: '59',
    o: '#808080',
  },
  'terminal.border': {
    c: COLORS.c000000050,
    a: '59',
    o: '#808080',
  },
  'editorLineNumber.foreground': {
    c: COLORS.c000000050,
    a: 'ff',
    o: '#858585',
  },
  'editorBracketMatch.border': {
    c: COLORS.c000000050,
    a: 'ff',
    o: '#888888',
  },
  'gitDecoration.ignoredResourceForeground': {
    c: COLORS.c000000060,
    a: 'ff',
    o: '#8c8c8c',
  },
  'editorCodeLens.foreground': {
    c: COLORS.c000000060,
    a: 'ff',
    o: '#999999',
  },
  'editorOverviewRuler.selectionHighlightForeground': {
    c: COLORS.c000000060,
    a: 'cc',
    o: '#a0a0a0',
  },
  'editorOverviewRuler.wordHighlightForeground': {
    c: COLORS.c000000060,
    a: 'cc',
    o: '#a0a0a0',
  },
  'editorOverviewRuler.bracketMatchForeground': {
    c: COLORS.c000000060,
    a: 'ff',
    o: '#a0a0a0',
  },
  'input.placeholderForeground': {
    c: COLORS.c000000070,
    a: 'ff',
    o: '#a6a6a6',
  },
  'editorCursor.foreground': {
    c: COLORS.c000000070,
    a: 'ff',
    o: '#aeafad',
  },
  'menu.separatorBackground': {
    c: COLORS.c000000070,
    a: 'ff',
    o: '#bbbbbb',
  },
  'peekViewResult.lineForeground': {
    c: COLORS.c000000070,
    a: 'ff',
    o: '#bbbbbb',
  },
  'sideBarTitle.foreground': {
    c: COLORS.c000000070,
    a: 'ff',
    o: '#bbbbbb',
  },
  'scrollbarSlider.activeBackground': {
    c: COLORS.c000000080,
    a: '66',
    o: '#bfbfbf',
  },
  'editorGutter.commentRangeForeground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#c5c5c5',
  },
  'editorActiveLineNumber.foreground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#c6c6c6',
  },
  'editorLineNumber.activeForeground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#c6c6c6',
  },
  'titleBar.inactiveForeground': {
    c: COLORS.c000000080,
    a: '99',
    o: '#cccccc',
  },
  descriptionForeground: {
    c: COLORS.c000000080,
    a: 'b3',
    o: '#cccccc',
  },
  'peekViewTitleDescription.foreground': {
    c: COLORS.c000000080,
    a: 'b3',
    o: '#cccccc',
  },
  'breadcrumb.foreground': {
    c: COLORS.c000000080,
    a: 'cc',
    o: '#cccccc',
  },
  foreground: {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'input.foreground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'menu.foreground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'menubar.selectionForeground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'settings.numberInputForeground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'settings.textInputForeground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'terminal.foreground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'titleBar.activeForeground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#cccccc',
  },
  'editor.foreground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#d4d4d4',
  },
  'editorSuggestWidget.foreground': {
    c: COLORS.c000000080,
    a: 'ff',
    o: '#d4d4d4',
  },
  'breadcrumb.activeSelectionForeground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#e0e0e0',
  },
  'breadcrumb.focusForeground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#e0e0e0',
  },
  'editorWhitespace.foreground': {
    c: COLORS.c000000090,
    a: '29',
    o: '#e3e4e2',
  },
  'terminal.ansiBrightWhite': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#e5e5e5',
  },
  'terminal.ansiWhite': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#e5e5e5',
  },
  'panelTitle.inactiveForeground': {
    c: COLORS.c000000090,
    a: '99',
    o: '#e7e7e7',
  },
  'panelTitle.activeForeground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#e7e7e7',
  },
  'settings.headerForeground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#e7e7e7',
  },
  'editorHint.foreground': {
    c: COLORS.c000000090,
    a: 'b3',
    o: '#eeeeee',
  },
  'dropdown.foreground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#f0f0f0',
  },
  'settings.checkboxForeground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#f0f0f0',
  },
  'settings.dropdownForeground': {
    c: COLORS.c000000090,
    a: 'ff',
    o: '#f0f0f0',
  },
  'editor.rangeHighlightBackground': {
    c: COLORS.c000000100,
    a: '0b',
    o: '#ffffff',
  },
  'menubar.selectionBackground': {
    c: COLORS.c000000100,
    a: '1a',
    o: '#ffffff',
  },
  'activityBar.dropBackground': {
    c: COLORS.c000000100,
    a: '1f',
    o: '#ffffff',
  },
  'panel.dropBackground': {
    c: COLORS.c000000100,
    a: '1f',
    o: '#ffffff',
  },
  'sideBar.dropBackground': {
    c: COLORS.c000000100,
    a: '1f',
    o: '#ffffff',
  },
  'statusBarItem.hoverBackground': {
    c: COLORS.c000000100,
    a: '1f',
    o: '#ffffff',
  },
  'statusBarItem.activeBackground': {
    c: COLORS.c000000100,
    a: '2e',
    o: '#ffffff',
  },
  'textSeparator.foreground': {
    c: COLORS.c000000100,
    a: '2e',
    o: '#ffffff',
  },
  'tab.unfocusedInactiveForeground': {
    c: COLORS.c000000100,
    a: '40',
    o: '#ffffff',
  },
  'terminal.selectionBackground': {
    c: COLORS.c000000100,
    a: '40',
    o: '#ffffff',
  },
  'tab.inactiveForeground': {
    c: COLORS.c000000100,
    a: '80',
    o: '#ffffff',
  },
  'tab.unfocusedActiveForeground': {
    c: COLORS.c000000100,
    a: '80',
    o: '#ffffff',
  },
  'activityBar.inactiveForeground': {
    c: COLORS.c000000100,
    a: '99',
    o: '#ffffff',
  },
  'activityBar.foreground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'activityBarBadge.foreground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'badge.foreground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'button.foreground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'extensionButton.prominentForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'list.activeSelectionForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'menu.selectionForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'peekViewResult.fileForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'peekViewResult.selectionForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'peekViewTitleLabel.foreground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'statusBar.debuggingForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'statusBar.foreground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'statusBar.noFolderForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'tab.activeForeground': {
    c: COLORS.c000000100,
    a: 'ff',
    o: '#ffffff',
  },
  'debugExceptionWidget.background': {
    c: COLORS.c000075020,
    a: 'ff',
    o: '#420b0d',
  },
  'inputValidation.errorBackground': {
    c: COLORS.c000075020,
    a: 'ff',
    o: '#5a1d1d',
  },
  'editorGutter.deletedBackground': {
    c: COLORS.c000075030,
    a: 'ff',
    o: '#94151b',
  },
  'debugExceptionWidget.border': {
    c: COLORS.c000075040,
    a: 'ff',
    o: '#a31515',
  },
  'inputValidation.errorBorder': {
    c: COLORS.c000075040,
    a: 'ff',
    o: '#be1100',
  },
  'listFilterWidget.noMatchesOutline': {
    c: COLORS.c000075040,
    a: 'ff',
    o: '#be1100',
  },
  'gitDecoration.deletedResourceForeground': {
    c: COLORS.c000075050,
    a: 'ff',
    o: '#c74e39',
  },
  'terminal.ansiRed': {
    c: COLORS.c000075050,
    a: 'ff',
    o: '#cd3131',
  },
  'diffEditor.removedTextBackground': {
    c: COLORS.c000075050,
    a: '33',
    o: '#ff0000',
  },
  'editorOverviewRuler.errorForeground': {
    c: COLORS.c000075050,
    a: 'b3',
    o: '#ff1212',
  },
  'editorError.foreground': {
    c: COLORS.c000075060,
    a: 'ff',
    o: '#ea4646',
  },
  'editorMarkerNavigationError.background': {
    c: COLORS.c000075060,
    a: 'ff',
    o: '#ea4646',
  },
  'terminal.ansiBrightRed': {
    c: COLORS.c000075060,
    a: 'ff',
    o: '#f14c4c',
  },
  errorForeground: {
    c: COLORS.c000075070,
    a: 'ff',
    o: '#f48771',
  },
  'list.errorForeground': {
    c: COLORS.c000075070,
    a: 'ff',
    o: '#f88070',
  },
  'listFilterWidget.background': {
    c: COLORS.c020075030,
    a: 'ff',
    o: '#653723',
  },
  'statusBar.debuggingBackground': {
    c: COLORS.c020075050,
    a: 'ff',
    o: '#cc6633',
  },
  'peekViewResult.matchHighlightBackground': {
    c: COLORS.c020075050,
    a: '4d',
    o: '#ea5c00',
  },
  'editor.findMatchHighlightBackground': {
    c: COLORS.c020075050,
    a: '55',
    o: '#ea5c00',
  },
  'peekViewEditor.matchHighlightBackground': {
    c: COLORS.c020075050,
    a: '99',
    o: '#ff8f00',
  },
  'inputValidation.warningBackground': {
    c: COLORS.c050075010,
    a: 'ff',
    o: '#352a05',
  },
  'inputValidation.warningBorder': {
    c: COLORS.c050075040,
    a: 'ff',
    o: '#b89500',
  },
  'list.invalidItemForeground': {
    c: COLORS.c050075040,
    a: 'ff',
    o: '#b89500',
  },
  'terminal.ansiYellow': {
    c: COLORS.c050075050,
    a: 'ff',
    o: '#e5e510',
  },
  'editor.stackFrameHighlightBackground': {
    c: COLORS.c050075050,
    a: '33',
    o: '#ffff00',
  },
  'terminal.ansiBrightYellow': {
    c: COLORS.c050075060,
    a: 'ff',
    o: '#f5f543',
  },
  'editorOverviewRuler.findMatchForeground': {
    c: COLORS.c050075060,
    a: 'b3',
    o: '#f6b94d',
  },
  'textPreformat.foreground': {
    c: COLORS.c050075070,
    a: 'ff',
    o: '#d7ba7d',
  },
  'gitDecoration.modifiedResourceForeground': {
    c: COLORS.c050075070,
    a: 'ff',
    o: '#e2c08d',
  },
  'editorGutter.addedBackground': {
    c: COLORS.c080075030,
    a: 'ff',
    o: '#587c0c',
  },
  'diffEditor.insertedTextBackground': {
    c: COLORS.c080075050,
    a: '33',
    o: '#9bb955',
  },
  'editorMarkerNavigationWarning.background': {
    c: COLORS.c120025050,
    a: 'ff',
    o: '#4d9e4d',
  },
  'editorWarning.foreground': {
    c: COLORS.c120025050,
    a: 'ff',
    o: '#4d9e4d',
  },
  'list.warningForeground': {
    c: COLORS.c120025050,
    a: 'ff',
    o: '#4d9e4d',
  },
  'editor.focusedStackFrameHighlightBackground': {
    c: COLORS.c120025060,
    a: '4d',
    o: '#7abd7a',
  },
  'gitDecoration.addedResourceForeground': {
    c: COLORS.c120025060,
    a: 'ff',
    o: '#81b88b',
  },
  'editorBracketMatch.background': {
    c: COLORS.c120075020,
    a: '1a',
    o: '#006400',
  },
  'editorInfo.foreground': {
    c: COLORS.c120075030,
    a: 'ff',
    o: '#008000',
  },
  'editorMarkerNavigationInfo.background': {
    c: COLORS.c120075030,
    a: 'ff',
    o: '#008000',
  },
  'editorOverviewRuler.warningForeground': {
    c: COLORS.c120075030,
    a: 'b3',
    o: '#128812',
  },
  'extensionButton.prominentHoverBackground': {
    c: COLORS.c120075030,
    a: 'ff',
    o: '#28632b',
  },
  'extensionButton.prominentBackground': {
    c: COLORS.c120075040,
    a: 'ff',
    o: '#327e36',
  },
  'statusBarItem.prominentHoverBackground': {
    c: COLORS.c120075040,
    a: 'ff',
    o: '#369432',
  },
  'statusBarItem.hostBackground': {
    c: COLORS.c120075040,
    a: 'ff',
    o: '#388a34',
  },
  'statusBarItem.prominentBackground': {
    c: COLORS.c120075040,
    a: 'ff',
    o: '#388a34',
  },
  'gitDecoration.untrackedResourceForeground': {
    c: COLORS.c120075060,
    a: 'ff',
    o: '#73c991',
  },
  'terminal.ansiGreen': {
    c: COLORS.c170075040,
    a: 'ff',
    o: '#0dbc79',
  },
  'terminal.ansiBrightGreen': {
    c: COLORS.c170075050,
    a: 'ff',
    o: '#23d18b',
  },
  'merge.currentContentBackground': {
    c: COLORS.c170075050,
    a: '33',
    o: '#40c8ae',
  },
  'editorOverviewRuler.currentContentForeground': {
    c: COLORS.c170075050,
    a: '80',
    o: '#40c8ae',
  },
  'merge.currentHeaderBackground': {
    c: COLORS.c170075050,
    a: '80',
    o: '#40c8ae',
  },
  'inputValidation.infoBackground': {
    c: COLORS.c190075020,
    a: 'ff',
    o: '#063b49',
  },
  'editorGutter.modifiedBackground': {
    c: COLORS.c190075030,
    a: 'ff',
    o: '#0c7d9d',
  },
  'settings.modifiedItemIndicator': {
    c: COLORS.c190075030,
    a: 'ff',
    o: '#0c7d9d',
  },
  'terminal.ansiCyan': {
    c: COLORS.c190075040,
    a: 'ff',
    o: '#11a8cd',
  },
  'terminal.ansiBrightCyan': {
    c: COLORS.c190075050,
    a: 'ff',
    o: '#29b8db',
  },
  'peekViewEditor.background': {
    c: COLORS.c200075010,
    a: 'ff',
    o: '#001f33',
  },
  'peekViewEditorGutter.background': {
    c: COLORS.c200075010,
    a: 'ff',
    o: '#001f33',
  },
  'editor.wordHighlightStrongBackground': {
    c: COLORS.c200075020,
    a: 'b8',
    o: '#004972',
  },
  'editorSuggestWidget.selectedBackground': {
    c: COLORS.c200075020,
    a: 'ff',
    o: '#062f4a',
  },
  'list.focusBackground': {
    c: COLORS.c200075020,
    a: 'ff',
    o: '#062f4a',
  },
  'list.activeSelectionBackground': {
    c: COLORS.c200075020,
    a: 'ff',
    o: '#094771',
  },
  'menu.selectionBackground': {
    c: COLORS.c200075020,
    a: 'ff',
    o: '#094771',
  },
  focusBorder: {
    c: COLORS.c200075030,
    a: 'cc',
    o: '#0e639c',
  },
  'button.background': {
    c: COLORS.c200075030,
    a: 'ff',
    o: '#0e639c',
  },
  'editor.hoverHighlightBackground': {
    c: COLORS.c200075030,
    a: '40',
    o: '#264f78',
  },
  'editor.selectionBackground': {
    c: COLORS.c200075030,
    a: 'ff',
    o: '#264f78',
  },
  'textBlockQuote.border': {
    c: COLORS.c200075040,
    a: '80',
    o: '#007acc',
  },
  'editorOverviewRuler.addedForeground': {
    c: COLORS.c200075040,
    a: '99',
    o: '#007acc',
  },
  'editorOverviewRuler.deletedForeground': {
    c: COLORS.c200075040,
    a: '99',
    o: '#007acc',
  },
  'editorOverviewRuler.modifiedForeground': {
    c: COLORS.c200075040,
    a: '99',
    o: '#007acc',
  },
  'editorOverviewRuler.rangeHighlightForeground': {
    c: COLORS.c200075040,
    a: '99',
    o: '#007acc',
  },
  'activityBarBadge.background': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#007acc',
  },
  'inputOption.activeBorder': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#007acc',
  },
  'inputValidation.infoBorder': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#007acc',
  },
  'peekView.border': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#007acc',
  },
  'statusBar.background': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#007acc',
  },
  'progressBar.background': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#0e70c0',
  },
  'button.hoverBackground': {
    c: COLORS.c200075040,
    a: 'ff',
    o: '#1177bb',
  },
  'editorSuggestWidget.highlightForeground': {
    c: COLORS.c200075050,
    a: 'ff',
    o: '#0097fb',
  },
  'list.highlightForeground': {
    c: COLORS.c200075050,
    a: 'ff',
    o: '#0097fb',
  },
  'terminal.ansiBlue': {
    c: COLORS.c200075050,
    a: 'ff',
    o: '#2472c8',
  },
  'tab.unfocusedInactiveModifiedBorder': {
    c: COLORS.c200075050,
    a: '40',
    o: '#3399cc',
  },
  'tab.inactiveModifiedBorder': {
    c: COLORS.c200075050,
    a: '80',
    o: '#3399cc',
  },
  'tab.unfocusedActiveModifiedBorder': {
    c: COLORS.c200075050,
    a: '80',
    o: '#3399cc',
  },
  'tab.activeModifiedBorder': {
    c: COLORS.c200075050,
    a: 'ff',
    o: '#3399cc',
  },
  'peekViewResult.selectionBackground': {
    c: COLORS.c200075060,
    a: '33',
    o: '#3399ff',
  },
  'notificationLink.foreground': {
    c: COLORS.c200075060,
    a: 'ff',
    o: '#3794ff',
  },
  'pickerGroup.foreground': {
    c: COLORS.c200075060,
    a: 'ff',
    o: '#3794ff',
  },
  'textLink.activeForeground': {
    c: COLORS.c200075060,
    a: 'ff',
    o: '#3794ff',
  },
  'textLink.foreground': {
    c: COLORS.c200075060,
    a: 'ff',
    o: '#3794ff',
  },
  'terminal.ansiBrightBlue': {
    c: COLORS.c200075060,
    a: 'ff',
    o: '#3b8eea',
  },
  'merge.incomingContentBackground': {
    c: COLORS.c200075060,
    a: '33',
    o: '#40a6ff',
  },
  'editorOverviewRuler.incomingContentForeground': {
    c: COLORS.c200075060,
    a: '80',
    o: '#40a6ff',
  },
  'merge.incomingHeaderBackground': {
    c: COLORS.c200075060,
    a: '80',
    o: '#40a6ff',
  },
  'editorLink.activeForeground': {
    c: COLORS.c200075060,
    a: 'ff',
    o: '#4e94ce',
  },
  'gitDecoration.submoduleResourceForeground': {
    c: COLORS.c200075070,
    a: 'ff',
    o: '#8db9e2',
  },
  'editor.selectionHighlightBackground': {
    c: COLORS.c200075080,
    a: '26',
    o: '#add6ff',
  },
  'editorOverviewRuler.infoForeground': {
    c: COLORS.c240075030,
    a: 'b3',
    o: '#121288',
  },
  'gitDecoration.conflictingResourceForeground': {
    c: COLORS.c240075060,
    a: 'ff',
    o: '#6c6cc4',
  },
  'editorOverviewRuler.wordHighlightStrongForeground': {
    c: COLORS.c300025070,
    a: 'cc',
    o: '#c0a0c0',
  },
  'statusBar.noFolderBackground': {
    c: COLORS.c300075030,
    a: 'ff',
    o: '#68217a',
  },
  'terminal.ansiMagenta': {
    c: COLORS.c300075050,
    a: 'ff',
    o: '#bc3fbc',
  },
  'terminal.ansiBrightMagenta': {
    c: COLORS.c300075060,
    a: 'ff',
    o: '#d670d6',
  },
}

let UI = { colors: {} }

Object.keys(DEFAULTS).forEach(key => {
  UI.colors[key] = `${Color(DEFAULTS[key].c).hex()}${
    DEFAULTS[key].a === 'ff' ? '' : DEFAULTS[key].a
  }`.toUpperCase()
})

// Override each theme's UI with Cameo's
const THEMES = {
  'default-dark': {
    type: 'dark',
    name: 'Cameo Dark (Visual Studio)',
    include: './_ui.json',
    tokenColors: defaultDark.tokenColors,
  },
  'default-dark-plus': {
    type: 'dark',
    name: 'Cameo Dark+ (default dark)',
    include: './_ui.json',
    tokenColors: [...defaultDark.tokenColors, ...defaultDarkPlus.tokenColors],
  },
  nord: {
    type: 'dark',
    name: 'Cameo Nord',
    include: './_ui.json',
    tokenColors: nord.tokenColors,
  },
  'one-dark': {
    type: 'dark',
    name: 'Cameo One Dark',
    include: './_ui.json',
    tokenColors: oneDark.tokenColors,
  },
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
  path: `./themes/cameo-${key}-color-theme.json`,
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

const fs = require('fs')
const Color = require('color')
const packageJson = require('./package.json')
const defaultDark = require('./submodules/default/extensions/theme-defaults/themes/dark_vs.json')
const defaultDarkPlus = require('./submodules/default/extensions/theme-defaults/themes/dark_plus.json')
const nord = require('./submodules/nord/themes/nord.json')
const oneDark = require('./submodules/one-dark/themes/OneDark-Pro.json')

const COLOR = {
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
  c000050020: 'hsl(000,  50%,  20%)',
  c000060050: 'hsl(000,  60%,  50%)',
  c000070020: 'hsl(000,  70%,  20%)',
  c000080030: 'hsl(000,  80%,  30%)',
  c000080040: 'hsl(000,  80%,  40%)',
  c000080060: 'hsl(000,  80%,  60%)',
  c000090060: 'hsl(000,  90%,  60%)',
  c000090070: 'hsl(000,  90%,  70%)',
  c000100040: 'hsl(000, 100%,  40%)',
  c000100050: 'hsl(000, 100%,  50%)',
  c020050030: 'hsl(020,  50%,  30%)',
  c020060050: 'hsl(020,  60%,  50%)',
  c020100050: 'hsl(020, 100%,  50%)',
  c050050070: 'hsl(050,  50%,  70%)',
  c050060070: 'hsl(050,  60%,  70%)',
  c050080010: 'hsl(050,  80%,  10%)',
  c050090050: 'hsl(050,  90%,  50%)',
  c050090060: 'hsl(050,  90%,  60%)',
  c050100040: 'hsl(050, 100%,  40%)',
  c050100050: 'hsl(050, 100%,  50%)',
  c080040050: 'hsl(080,  40%,  50%)',
  c080080030: 'hsl(080,  80%,  30%)',
  c090000070: 'hsl(090,   0%,  70%)',
  c090000090: 'hsl(090,   0%,  90%)',
  c120030050: 'hsl(120,  30%,  50%)',
  c120030060: 'hsl(120,  30%,  60%)',
  c120040030: 'hsl(120,  40%,  30%)',
  c120040040: 'hsl(120,  40%,  40%)',
  c120040060: 'hsl(120,  40%,  60%)',
  c120050040: 'hsl(120,  50%,  40%)',
  c120080030: 'hsl(120,  80%,  30%)',
  c120100020: 'hsl(120, 100%,  20%)',
  c120100030: 'hsl(120, 100%,  30%)',
  c160070050: 'hsl(160,  70%,  50%)',
  c160090040: 'hsl(160,  90%,  40%)',
  c170060050: 'hsl(170,  60%,  50%)',
  c190070050: 'hsl(190,  70%,  50%)',
  c190090020: 'hsl(190,  90%,  20%)',
  c190090030: 'hsl(190,  90%,  30%)',
  c190090040: 'hsl(190,  90%,  40%)',
  c200000020: 'hsl(200,   0%,  20%)',
  c200000040: 'hsl(200,   0%,  40%)',
  c200060050: 'hsl(200,  60%,  50%)',
  c200080030: 'hsl(200,  80%,  30%)',
  c200080040: 'hsl(200,  80%,  40%)',
  c200090020: 'hsl(200,  90%,  20%)',
  c200100010: 'hsl(200, 100%,  10%)',
  c200100020: 'hsl(200, 100%,  20%)',
  c200100040: 'hsl(200, 100%,  40%)',
  c200100050: 'hsl(200, 100%,  50%)',
  c210010020: 'hsl(210,  10%,  20%)',
  c210010040: 'hsl(210,  10%,  40%)',
  c210050030: 'hsl(210,  50%,  30%)',
  c210060060: 'hsl(210,  60%,  60%)',
  c210060070: 'hsl(210,  60%,  70%)',
  c210070050: 'hsl(210,  70%,  50%)',
  c210080060: 'hsl(210,  80%,  60%)',
  c210090040: 'hsl(210,  90%,  40%)',
  c210100060: 'hsl(210, 100%,  60%)',
  c210100080: 'hsl(210, 100%,  80%)',
  c240000020: 'hsl(240,   0%,  20%)',
  c240010020: 'hsl(240,  10%,  20%)',
  c240010030: 'hsl(240,  10%,  30%)',
  c240040060: 'hsl(240,  40%,  60%)',
  c240080030: 'hsl(240,  80%,  30%)',
  c300020070: 'hsl(300,  20%,  70%)',
  c300050050: 'hsl(300,  50%,  50%)',
  c300060030: 'hsl(300,  60%,  30%)',
  c300060060: 'hsl(300,  60%,  60%)',
}

const DEFAULTS = {
  'activityBar.background': {
    cameo: COLOR['c000000020'],
    o: '#333333',
    a: 'ff',
  },
  'activityBar.dropBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '1f',
  },
  'activityBar.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'activityBar.inactiveForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '99',
  },
  'activityBarBadge.background': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: 'ff',
  },
  'activityBarBadge.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'badge.background': {
    cameo: COLOR['c000000030'],
    o: '#4d4d4d',
    a: 'ff',
  },
  'badge.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'breadcrumb.activeSelectionForeground': {
    cameo: COLOR['c000000090'],
    o: '#e0e0e0',
    a: 'ff',
  },
  'breadcrumb.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'breadcrumb.focusForeground': {
    cameo: COLOR['c000000090'],
    o: '#e0e0e0',
    a: 'ff',
  },
  'breadcrumb.foreground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'cc',
  },
  'breadcrumbPicker.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'button.background': {
    cameo: COLOR['c200080030'],
    o: '#0e639c',
    a: 'ff',
  },
  'button.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'button.hoverBackground': {
    cameo: COLOR['c200080040'],
    o: '#1177bb',
    a: 'ff',
  },
  'debugExceptionWidget.background': {
    cameo: COLOR['c000070020'],
    o: '#420b0d',
    a: 'ff',
  },
  'debugExceptionWidget.border': {
    cameo: COLOR['c000080040'],
    o: '#a31515',
    a: 'ff',
  },
  'debugToolBar.background': {
    cameo: COLOR['c000000020'],
    o: '#333333',
    a: 'ff',
  },
  descriptionForeground: {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'b3',
  },
  'diffEditor.insertedTextBackground': {
    cameo: COLOR['c080040050'],
    o: '#9bb955',
    a: '33',
  },
  'diffEditor.removedTextBackground': {
    cameo: COLOR['c000100050'],
    o: '#ff0000',
    a: '33',
  },
  'dropdown.background': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'dropdown.border': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'dropdown.foreground': {
    cameo: COLOR['c000000090'],
    o: '#f0f0f0',
    a: 'ff',
  },
  'editor.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'editor.findMatchBackground': {
    cameo: COLOR['c210010040'],
    o: '#515c6a',
    a: 'ff',
  },
  'editor.findMatchHighlightBackground': {
    cameo: COLOR['c020100050'],
    o: '#ea5c00',
    a: '55',
  },
  'editor.findRangeHighlightBackground': {
    cameo: COLOR['c210010020'],
    o: '#3a3d41',
    a: '66',
  },
  'editor.focusedStackFrameHighlightBackground': {
    cameo: COLOR['c120030060'],
    o: '#7abd7a',
    a: '4d',
  },
  'editor.foreground': {
    cameo: COLOR['c000000080'],
    o: '#d4d4d4',
    a: 'ff',
  },
  'editor.hoverHighlightBackground': {
    cameo: COLOR['c210050030'],
    o: '#264f78',
    a: '40',
  },
  'editor.inactiveSelectionBackground': {
    cameo: COLOR['c210010020'],
    o: '#3a3d41',
    a: 'ff',
  },
  'editor.lineHighlightBorder': {
    cameo: COLOR['c000000020'],
    o: '#282828',
    a: 'ff',
  },
  'editor.rangeHighlightBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '0b',
  },
  'editor.selectionBackground': {
    cameo: COLOR['c210050030'],
    o: '#264f78',
    a: 'ff',
  },
  'editor.selectionHighlightBackground': {
    cameo: COLOR['c210100080'],
    o: '#add6ff',
    a: '26',
  },
  'editor.snippetFinalTabstopHighlightBorder': {
    cameo: COLOR['c000000030'],
    o: '#525252',
    a: 'ff',
  },
  'editor.snippetTabstopHighlightBackground': {
    cameo: COLOR['c000000050'],
    o: '#7c7c7c',
    a: '4d',
  },
  'editor.stackFrameHighlightBackground': {
    cameo: COLOR['c050100050'],
    o: '#ffff00',
    a: '33',
  },
  'editor.wordHighlightBackground': {
    cameo: COLOR['c000000030'],
    o: '#575757',
    a: 'b8',
  },
  'editor.wordHighlightStrongBackground': {
    cameo: COLOR['c200100020'],
    o: '#004972',
    a: 'b8',
  },
  'editorActiveLineNumber.foreground': {
    cameo: COLOR['c000000080'],
    o: '#c6c6c6',
    a: 'ff',
  },
  'editorBracketMatch.background': {
    cameo: COLOR['c120100020'],
    o: '#006400',
    a: '1a',
  },
  'editorBracketMatch.border': {
    cameo: COLOR['c000000050'],
    o: '#888888',
    a: 'ff',
  },
  'editorCodeLens.foreground': {
    cameo: COLOR['c000000060'],
    o: '#999999',
    a: 'ff',
  },
  'editorCursor.foreground': {
    cameo: COLOR['c090000070'],
    o: '#aeafad',
    a: 'ff',
  },
  'editorError.foreground': {
    cameo: COLOR['c000080060'],
    o: '#ea4646',
    a: 'ff',
  },
  'editorGroup.border': {
    cameo: COLOR['c000000030'],
    o: '#444444',
    a: 'ff',
  },
  'editorGroup.dropBackground': {
    cameo: COLOR['c200000040'],
    o: '#53595d',
    a: '80',
  },
  'editorGroupHeader.noTabsBackground': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'editorGroupHeader.tabsBackground': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'editorGutter.addedBackground': {
    cameo: COLOR['c080080030'],
    o: '#587c0c',
    a: 'ff',
  },
  'editorGutter.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'editorGutter.commentRangeForeground': {
    cameo: COLOR['c000000080'],
    o: '#c5c5c5',
    a: 'ff',
  },
  'editorGutter.deletedBackground': {
    cameo: COLOR['c000080030'],
    o: '#94151b',
    a: 'ff',
  },
  'editorGutter.modifiedBackground': {
    cameo: COLOR['c190090030'],
    o: '#0c7d9d',
    a: 'ff',
  },
  'editorHint.foreground': {
    cameo: COLOR['c000000090'],
    o: '#eeeeee',
    a: 'b3',
  },
  'editorHoverWidget.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'editorHoverWidget.border': {
    cameo: COLOR['c000000030'],
    o: '#454545',
    a: 'ff',
  },
  'editorHoverWidget.statusBarBackground': {
    cameo: COLOR['c240000020'],
    o: '#2c2c2d',
    a: 'ff',
  },
  'editorIndentGuide.activeBackground': {
    cameo: COLOR['c000000040'],
    o: '#707070',
    a: 'ff',
  },
  'editorIndentGuide.background': {
    cameo: COLOR['c000000030'],
    o: '#404040',
    a: 'ff',
  },
  'editorInfo.foreground': {
    cameo: COLOR['c120100030'],
    o: '#008000',
    a: 'ff',
  },
  'editorLineNumber.activeForeground': {
    cameo: COLOR['c000000080'],
    o: '#c6c6c6',
    a: 'ff',
  },
  'editorLineNumber.foreground': {
    cameo: COLOR['c000000050'],
    o: '#858585',
    a: 'ff',
  },
  'editorLink.activeForeground': {
    cameo: COLOR['c210060060'],
    o: '#4e94ce',
    a: 'ff',
  },
  'editorMarkerNavigation.background': {
    cameo: COLOR['c240000020'],
    o: '#2d2d30',
    a: 'ff',
  },
  'editorMarkerNavigationError.background': {
    cameo: COLOR['c000080060'],
    o: '#ea4646',
    a: 'ff',
  },
  'editorMarkerNavigationInfo.background': {
    cameo: COLOR['c120100030'],
    o: '#008000',
    a: 'ff',
  },
  'editorMarkerNavigationWarning.background': {
    cameo: COLOR['c120030050'],
    o: '#4d9e4d',
    a: 'ff',
  },
  'editorOverviewRuler.addedForeground': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: '99',
  },
  'editorOverviewRuler.border': {
    cameo: COLOR['c000000050'],
    o: '#7f7f7f',
    a: '4d',
  },
  'editorOverviewRuler.bracketMatchForeground': {
    cameo: COLOR['c000000060'],
    o: '#a0a0a0',
    a: 'ff',
  },
  'editorOverviewRuler.commonContentForeground': {
    cameo: COLOR['c000000040'],
    o: '#606060',
    a: '66',
  },
  'editorOverviewRuler.currentContentForeground': {
    cameo: COLOR['c170060050'],
    o: '#40c8ae',
    a: '80',
  },
  'editorOverviewRuler.deletedForeground': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: '99',
  },
  'editorOverviewRuler.errorForeground': {
    cameo: COLOR['c000100050'],
    o: '#ff1212',
    a: 'b3',
  },
  'editorOverviewRuler.findMatchForeground': {
    cameo: COLOR['c050090060'],
    o: '#f6b94d',
    a: 'b3',
  },
  'editorOverviewRuler.incomingContentForeground': {
    cameo: COLOR['c210100060'],
    o: '#40a6ff',
    a: '80',
  },
  'editorOverviewRuler.infoForeground': {
    cameo: COLOR['c240080030'],
    o: '#121288',
    a: 'b3',
  },
  'editorOverviewRuler.modifiedForeground': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: '99',
  },
  'editorOverviewRuler.rangeHighlightForeground': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: '99',
  },
  'editorOverviewRuler.selectionHighlightForeground': {
    cameo: COLOR['c000000060'],
    o: '#a0a0a0',
    a: 'cc',
  },
  'editorOverviewRuler.warningForeground': {
    cameo: COLOR['c120080030'],
    o: '#128812',
    a: 'b3',
  },
  'editorOverviewRuler.wordHighlightForeground': {
    cameo: COLOR['c000000060'],
    o: '#a0a0a0',
    a: 'cc',
  },
  'editorOverviewRuler.wordHighlightStrongForeground': {
    cameo: COLOR['c300020070'],
    o: '#c0a0c0',
    a: 'cc',
  },
  'editorPane.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'editorRuler.foreground': {
    cameo: COLOR['c000000040'],
    o: '#5a5a5a',
    a: 'ff',
  },
  'editorSuggestWidget.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'editorSuggestWidget.border': {
    cameo: COLOR['c000000030'],
    o: '#454545',
    a: 'ff',
  },
  'editorSuggestWidget.foreground': {
    cameo: COLOR['c000000080'],
    o: '#d4d4d4',
    a: 'ff',
  },
  'editorSuggestWidget.highlightForeground': {
    cameo: COLOR['c200100050'],
    o: '#0097fb',
    a: 'ff',
  },
  'editorSuggestWidget.selectedBackground': {
    cameo: COLOR['c200090020'],
    o: '#062f4a',
    a: 'ff',
  },
  'editorUnnecessaryCode.opacity': {
    cameo: COLOR['c000000000'],
    o: '#000000',
    a: 'aa',
  },
  'editorWarning.foreground': {
    cameo: COLOR['c120030050'],
    o: '#4d9e4d',
    a: 'ff',
  },
  'editorWhitespace.foreground': {
    cameo: COLOR['c090000090'],
    o: '#e3e4e2',
    a: '29',
  },
  'editorWidget.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'editorWidget.border': {
    cameo: COLOR['c000000030'],
    o: '#454545',
    a: 'ff',
  },
  errorForeground: {
    cameo: COLOR['c000090070'],
    o: '#f48771',
    a: 'ff',
  },
  'extensionButton.prominentBackground': {
    cameo: COLOR['c120040040'],
    o: '#327e36',
    a: 'ff',
  },
  'extensionButton.prominentForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'extensionButton.prominentHoverBackground': {
    cameo: COLOR['c120040030'],
    o: '#28632b',
    a: 'ff',
  },
  focusBorder: {
    cameo: COLOR['c200080030'],
    o: '#0e639c',
    a: 'cc',
  },
  foreground: {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'gitDecoration.addedResourceForeground': {
    cameo: COLOR['c120030060'],
    o: '#81b88b',
    a: 'ff',
  },
  'gitDecoration.conflictingResourceForeground': {
    cameo: COLOR['c240040060'],
    o: '#6c6cc4',
    a: 'ff',
  },
  'gitDecoration.deletedResourceForeground': {
    cameo: COLOR['c000060050'],
    o: '#c74e39',
    a: 'ff',
  },
  'gitDecoration.ignoredResourceForeground': {
    cameo: COLOR['c000000060'],
    o: '#8c8c8c',
    a: 'ff',
  },
  'gitDecoration.modifiedResourceForeground': {
    cameo: COLOR['c050060070'],
    o: '#e2c08d',
    a: 'ff',
  },
  'gitDecoration.submoduleResourceForeground': {
    cameo: COLOR['c210060070'],
    o: '#8db9e2',
    a: 'ff',
  },
  'gitDecoration.untrackedResourceForeground': {
    cameo: COLOR['c120040060'],
    o: '#73c991',
    a: 'ff',
  },
  'input.background': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'input.foreground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'input.placeholderForeground': {
    cameo: COLOR['c000000070'],
    o: '#a6a6a6',
    a: 'ff',
  },
  'inputOption.activeBorder': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: 'ff',
  },
  'inputValidation.errorBackground': {
    cameo: COLOR['c000050020'],
    o: '#5a1d1d',
    a: 'ff',
  },
  'inputValidation.errorBorder': {
    cameo: COLOR['c000100040'],
    o: '#be1100',
    a: 'ff',
  },
  'inputValidation.infoBackground': {
    cameo: COLOR['c190090020'],
    o: '#063b49',
    a: 'ff',
  },
  'inputValidation.infoBorder': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: 'ff',
  },
  'inputValidation.warningBackground': {
    cameo: COLOR['c050080010'],
    o: '#352a05',
    a: 'ff',
  },
  'inputValidation.warningBorder': {
    cameo: COLOR['c050100040'],
    o: '#b89500',
    a: 'ff',
  },
  'list.activeSelectionBackground': {
    cameo: COLOR['c200090020'],
    o: '#094771',
    a: 'ff',
  },
  'list.activeSelectionForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'list.dropBackground': {
    cameo: COLOR['c200000020'],
    o: '#383b3d',
    a: 'ff',
  },
  'list.errorForeground': {
    cameo: COLOR['c000090070'],
    o: '#f88070',
    a: 'ff',
  },
  'list.focusBackground': {
    cameo: COLOR['c200090020'],
    o: '#062f4a',
    a: 'ff',
  },
  'list.highlightForeground': {
    cameo: COLOR['c200100050'],
    o: '#0097fb',
    a: 'ff',
  },
  'list.hoverBackground': {
    cameo: COLOR['c200000020'],
    o: '#2a2d2e',
    a: 'ff',
  },
  'list.inactiveFocusBackground': {
    cameo: COLOR['c240000020'],
    o: '#313135',
    a: 'ff',
  },
  'list.inactiveSelectionBackground': {
    cameo: COLOR['c240010020'],
    o: '#37373d',
    a: 'ff',
  },
  'list.invalidItemForeground': {
    cameo: COLOR['c050100040'],
    o: '#b89500',
    a: 'ff',
  },
  'list.warningForeground': {
    cameo: COLOR['c120030050'],
    o: '#4d9e4d',
    a: 'ff',
  },
  'listFilterWidget.background': {
    cameo: COLOR['c020050030'],
    o: '#653723',
    a: 'ff',
  },
  'listFilterWidget.noMatchesOutline': {
    cameo: COLOR['c000100040'],
    o: '#be1100',
    a: 'ff',
  },
  'listFilterWidget.outline': {
    cameo: COLOR['c000000000'],
    o: '#000000',
    a: '00',
  },
  'menu.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'menu.foreground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'menu.selectionBackground': {
    cameo: COLOR['c200090020'],
    o: '#094771',
    a: 'ff',
  },
  'menu.selectionForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'menu.separatorBackground': {
    cameo: COLOR['c000000070'],
    o: '#bbbbbb',
    a: 'ff',
  },
  'menubar.selectionBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '1a',
  },
  'menubar.selectionForeground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'merge.commonContentBackground': {
    cameo: COLOR['c000000040'],
    o: '#606060',
    a: '29',
  },
  'merge.commonHeaderBackground': {
    cameo: COLOR['c000000040'],
    o: '#606060',
    a: '66',
  },
  'merge.currentContentBackground': {
    cameo: COLOR['c170060050'],
    o: '#40c8ae',
    a: '33',
  },
  'merge.currentHeaderBackground': {
    cameo: COLOR['c170060050'],
    o: '#40c8ae',
    a: '80',
  },
  'merge.incomingContentBackground': {
    cameo: COLOR['c210100060'],
    o: '#40a6ff',
    a: '33',
  },
  'merge.incomingHeaderBackground': {
    cameo: COLOR['c210100060'],
    o: '#40a6ff',
    a: '80',
  },
  'notificationCenterHeader.background': {
    cameo: COLOR['c240000020'],
    o: '#303031',
    a: 'ff',
  },
  'notificationLink.foreground': {
    cameo: COLOR['c210100060'],
    o: '#3794ff',
    a: 'ff',
  },
  'notifications.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'notifications.border': {
    cameo: COLOR['c240000020'],
    o: '#303031',
    a: 'ff',
  },
  'panel.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'panel.border': {
    cameo: COLOR['c000000050'],
    o: '#808080',
    a: '59',
  },
  'panel.dropBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '1f',
  },
  'panelTitle.activeBorder': {
    cameo: COLOR['c000000050'],
    o: '#808080',
    a: '59',
  },
  'panelTitle.activeForeground': {
    cameo: COLOR['c000000090'],
    o: '#e7e7e7',
    a: 'ff',
  },
  'panelTitle.inactiveForeground': {
    cameo: COLOR['c000000090'],
    o: '#e7e7e7',
    a: '99',
  },
  'peekView.border': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: 'ff',
  },
  'peekViewEditor.background': {
    cameo: COLOR['c200100010'],
    o: '#001f33',
    a: 'ff',
  },
  'peekViewEditor.matchHighlightBackground': {
    cameo: COLOR['c020100050'],
    o: '#ff8f00',
    a: '99',
  },
  'peekViewEditorGutter.background': {
    cameo: COLOR['c200100010'],
    o: '#001f33',
    a: 'ff',
  },
  'peekViewResult.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'peekViewResult.fileForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'peekViewResult.lineForeground': {
    cameo: COLOR['c000000070'],
    o: '#bbbbbb',
    a: 'ff',
  },
  'peekViewResult.matchHighlightBackground': {
    cameo: COLOR['c020100050'],
    o: '#ea5c00',
    a: '4d',
  },
  'peekViewResult.selectionBackground': {
    cameo: COLOR['c210100060'],
    o: '#3399ff',
    a: '33',
  },
  'peekViewResult.selectionForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'peekViewTitle.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'peekViewTitleDescription.foreground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'b3',
  },
  'peekViewTitleLabel.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'pickerGroup.border': {
    cameo: COLOR['c240010030'],
    o: '#3f3f46',
    a: 'ff',
  },
  'pickerGroup.foreground': {
    cameo: COLOR['c210100060'],
    o: '#3794ff',
    a: 'ff',
  },
  'progressBar.background': {
    cameo: COLOR['c210090040'],
    o: '#0e70c0',
    a: 'ff',
  },
  'scrollbar.shadow': {
    cameo: COLOR['c000000000'],
    o: '#000000',
    a: 'ff',
  },
  'scrollbarSlider.activeBackground': {
    cameo: COLOR['c000000080'],
    o: '#bfbfbf',
    a: '66',
  },
  'scrollbarSlider.background': {
    cameo: COLOR['c000000050'],
    o: '#797979',
    a: '66',
  },
  'scrollbarSlider.hoverBackground': {
    cameo: COLOR['c000000040'],
    o: '#646464',
    a: 'b3',
  },
  'settings.checkboxBackground': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'settings.checkboxBorder': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'settings.checkboxForeground': {
    cameo: COLOR['c000000090'],
    o: '#f0f0f0',
    a: 'ff',
  },
  'settings.dropdownBackground': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'settings.dropdownBorder': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'settings.dropdownForeground': {
    cameo: COLOR['c000000090'],
    o: '#f0f0f0',
    a: 'ff',
  },
  'settings.dropdownListBorder': {
    cameo: COLOR['c000000030'],
    o: '#454545',
    a: 'ff',
  },
  'settings.headerForeground': {
    cameo: COLOR['c000000090'],
    o: '#e7e7e7',
    a: 'ff',
  },
  'settings.modifiedItemIndicator': {
    cameo: COLOR['c190090030'],
    o: '#0c7d9d',
    a: 'ff',
  },
  'settings.numberInputBackground': {
    cameo: COLOR['c000000020'],
    o: '#292929',
    a: 'ff',
  },
  'settings.numberInputForeground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'settings.textInputBackground': {
    cameo: COLOR['c000000020'],
    o: '#292929',
    a: 'ff',
  },
  'settings.textInputForeground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'sideBar.background': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'sideBar.dropBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '1f',
  },
  'sideBarSectionHeader.background': {
    cameo: COLOR['c000000050'],
    o: '#808080',
    a: '33',
  },
  'sideBarTitle.foreground': {
    cameo: COLOR['c000000070'],
    o: '#bbbbbb',
    a: 'ff',
  },
  'statusBar.background': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: 'ff',
  },
  'statusBar.debuggingBackground': {
    cameo: COLOR['c020060050'],
    o: '#cc6633',
    a: 'ff',
  },
  'statusBar.debuggingForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'statusBar.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'statusBar.noFolderBackground': {
    cameo: COLOR['c300060030'],
    o: '#68217a',
    a: 'ff',
  },
  'statusBar.noFolderForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'statusBarItem.activeBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '2e',
  },
  'statusBarItem.hostBackground': {
    cameo: COLOR['c120050040'],
    o: '#388a34',
    a: 'ff',
  },
  'statusBarItem.hoverBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '1f',
  },
  'statusBarItem.prominentBackground': {
    cameo: COLOR['c120050040'],
    o: '#388a34',
    a: 'ff',
  },
  'statusBarItem.prominentHoverBackground': {
    cameo: COLOR['c120050040'],
    o: '#369432',
    a: 'ff',
  },
  'tab.activeBackground': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'tab.activeForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: 'ff',
  },
  'tab.activeModifiedBorder': {
    cameo: COLOR['c200060050'],
    o: '#3399cc',
    a: 'ff',
  },
  'tab.border': {
    cameo: COLOR['c240000020'],
    o: '#252526',
    a: 'ff',
  },
  'tab.inactiveBackground': {
    cameo: COLOR['c000000020'],
    o: '#2d2d2d',
    a: 'ff',
  },
  'tab.inactiveForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '80',
  },
  'tab.inactiveModifiedBorder': {
    cameo: COLOR['c200060050'],
    o: '#3399cc',
    a: '80',
  },
  'tab.unfocusedActiveForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '80',
  },
  'tab.unfocusedActiveModifiedBorder': {
    cameo: COLOR['c200060050'],
    o: '#3399cc',
    a: '80',
  },
  'tab.unfocusedInactiveForeground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '40',
  },
  'tab.unfocusedInactiveModifiedBorder': {
    cameo: COLOR['c200060050'],
    o: '#3399cc',
    a: '40',
  },
  'terminal.ansiBlack': {
    cameo: COLOR['c000000000'],
    o: '#000000',
    a: 'ff',
  },
  'terminal.ansiBrightBlack': {
    cameo: COLOR['c000000040'],
    o: '#666666',
    a: 'ff',
  },
  'terminal.ansiBlue': {
    cameo: COLOR['c210070050'],
    o: '#2472c8',
    a: 'ff',
  },
  'terminal.ansiBrightBlue': {
    cameo: COLOR['c210080060'],
    o: '#3b8eea',
    a: 'ff',
  },
  'terminal.ansiCyan': {
    cameo: COLOR['c190090040'],
    o: '#11a8cd',
    a: 'ff',
  },
  'terminal.ansiBrightCyan': {
    cameo: COLOR['c190070050'],
    o: '#29b8db',
    a: 'ff',
  },
  'terminal.ansiGreen': {
    cameo: COLOR['c160090040'],
    o: '#0dbc79',
    a: 'ff',
  },
  'terminal.ansiBrightGreen': {
    cameo: COLOR['c160070050'],
    o: '#23d18b',
    a: 'ff',
  },
  'terminal.ansiMagenta': {
    cameo: COLOR['c300050050'],
    o: '#bc3fbc',
    a: 'ff',
  },
  'terminal.ansiBrightMagenta': {
    cameo: COLOR['c300060060'],
    o: '#d670d6',
    a: 'ff',
  },
  'terminal.ansiRed': {
    cameo: COLOR['c000060050'],
    o: '#cd3131',
    a: 'ff',
  },
  'terminal.ansiBrightRed': {
    cameo: COLOR['c000090060'],
    o: '#f14c4c',
    a: 'ff',
  },
  'terminal.ansiWhite': {
    cameo: COLOR['c000000090'],
    o: '#e5e5e5',
    a: 'ff',
  },
  'terminal.ansiBrightWhite': {
    cameo: COLOR['c000000100'],
    o: '#e5e5e5',
    a: 'ff',
  },
  'terminal.ansiYellow': {
    cameo: COLOR['c050090050'],
    o: '#e5e510',
    a: 'ff',
  },
  'terminal.ansiBrightYellow': {
    cameo: COLOR['c050090060'],
    o: '#f5f543',
    a: 'ff',
  },
  'terminal.background': {
    cameo: COLOR['c000000010'],
    o: '#1e1e1e',
    a: 'ff',
  },
  'terminal.border': {
    cameo: COLOR['c000000050'],
    o: '#808080',
    a: '59',
  },
  'terminal.foreground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'terminal.selectionBackground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '40',
  },
  'textBlockQuote.background': {
    cameo: COLOR['c000000050'],
    o: '#7f7f7f',
    a: '1a',
  },
  'textBlockQuote.border': {
    cameo: COLOR['c200100040'],
    o: '#007acc',
    a: '80',
  },
  'textCodeBlock.background': {
    cameo: COLOR['c000000010'],
    o: '#0a0a0a',
    a: '66',
  },
  'textLink.activeForeground': {
    cameo: COLOR['c210100060'],
    o: '#3794ff',
    a: 'ff',
  },
  'textLink.foreground': {
    cameo: COLOR['c210100060'],
    o: '#3794ff',
    a: 'ff',
  },
  'textPreformat.foreground': {
    cameo: COLOR['c050050070'],
    o: '#d7ba7d',
    a: 'ff',
  },
  'textSeparator.foreground': {
    cameo: COLOR['c000000100'],
    o: '#ffffff',
    a: '2e',
  },
  'titleBar.activeBackground': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: 'ff',
  },
  'titleBar.activeForeground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: 'ff',
  },
  'titleBar.inactiveBackground': {
    cameo: COLOR['c000000020'],
    o: '#3c3c3c',
    a: '99',
  },
  'titleBar.inactiveForeground': {
    cameo: COLOR['c000000080'],
    o: '#cccccc',
    a: '99',
  },
  'widget.shadow': {
    cameo: COLOR['c000000000'],
    o: '#000000',
    a: 'ff',
  },
}

// // Override each theme's UI with Cameo's
// const THEMES = {
//   'default-dark': {
//     type: 'dark',
//     name: 'Cameo Dark (Visual Studio)',
//     include: './_ui.json',
//     tokenColors: defaultDark.tokenColors,
//   },
//   'default-dark-plus': {
//     type: 'dark',
//     name: 'Cameo Dark+ (default dark)',
//     include: './_ui.json',
//     tokenColors: [...defaultDark.tokenColors, ...defaultDarkPlus.tokenColors],
//   },
//   nord: {
//     type: 'dark',
//     name: 'Cameo Nord',
//     include: './_ui.json',
//     tokenColors: nord.tokenColors,
//   },
//   'one-dark': {
//     type: 'dark',
//     name: 'Cameo One Dark',
//     include: './_ui.json',
//     tokenColors: oneDark.tokenColors,
//   },
// }

// // Export the UI
// fs.writeFile(`./themes/_ui.json`, JSON.stringify(UI, null, 2), 'utf8', (msg, err) => {
//   if (err) {
//     console.error(err)
//   }

//   console.log('Exported _ui.json')
// })

// // Export the themes
// Object.keys(THEMES).forEach(key => {
//   const theme = THEMES[key]
//   const fileName = `cameo-${key}-color-theme.json`
//   fs.writeFile(`./themes/${fileName}`, JSON.stringify(theme, null, 2), 'utf8', (msg, err) => {
//     if (err) {
//       console.error(err)
//     }

//     console.log(`Exported ${fileName}`)
//   })
// })

// // Put themes in package.json
// packageJson.contributes.themes = Object.keys(THEMES).map(key => ({
//   label: THEMES[key].name,
//   uiTheme: 'vs-dark',
//   path: `./themes/cameo-${key}-color-theme.json`,
// }))

// // Export package.json
// fs.writeFile(`./package.json`, JSON.stringify(packageJson, null, 2), 'utf8', (msg, err) => {
//   if (err) {
//     console.error(err)
//   }

//   console.log('Exported package.json')
// })

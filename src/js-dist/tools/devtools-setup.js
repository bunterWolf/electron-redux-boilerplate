'use strict';

exports.__esModule = true;
exports.DevToolsSetup = DevToolsSetup;

var _electronDevtoolsInstaller = require('electron-devtools-installer');

var _electronDevtoolsInstaller2 = _interopRequireDefault(_electronDevtoolsInstaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DevToolsSetup() {
    require('devtron').install();

    (0, _electronDevtoolsInstaller2.default)(_electronDevtoolsInstaller.REDUX_DEVTOOLS).then(name => console.log(`Added Extension:  ${ name }`)).catch(err => console.log('An error occurred: ', err));

    (0, _electronDevtoolsInstaller2.default)(_electronDevtoolsInstaller.REACT_DEVELOPER_TOOLS).then(name => console.log(`Added Extension:  ${ name }`)).catch(err => console.log('An error occurred: ', err));
}
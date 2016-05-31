'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = require('react-relay');

var Relay = _interopRequireWildcard(_reactRelay);

var _app = require('./../components/app');

var _app2 = _interopRequireDefault(_app);

var _header = require('./../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Relay.createContainer(_app2.default, {
    fragments: {
        viewer: function viewer() {
            return function (RQL_0) {
                return {
                    children: [].concat.apply([], [{
                        fieldName: 'token',
                        kind: 'Field',
                        metadata: {},
                        type: 'String'
                    }, Relay.QL.__frag(RQL_0)]),
                    id: Relay.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'App_ViewerRelayQL',
                    type: 'Viewer'
                };
            }(_header2.default.getFragment('viewer'));
        }
    }
});
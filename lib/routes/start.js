'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = require('react-relay');

var Relay = _interopRequireWildcard(_reactRelay);

var _start = require('./../components/start');

var _start2 = _interopRequireDefault(_start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = Relay.createContainer(_start2.default, {
    fragments: {
        viewer: function viewer() {
            return function () {
                return {
                    children: [{
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'first',
                            value: {
                                kind: 'CallValue',
                                callValue: 10
                            }
                        }],
                        children: [{
                            children: [{
                                children: [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'address',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }],
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    inferredRootCallName: 'node',
                                    inferredPrimaryKey: 'id',
                                    isRequisite: true
                                },
                                type: 'Bloodstation'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'BloodstationEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        fieldName: 'bloodstations',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true
                        },
                        type: 'BloodstationConnection'
                    }],
                    id: Relay.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'Start_ViewerRelayQL',
                    type: 'Viewer'
                };
            }();
        }
    } });
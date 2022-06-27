var Equipment = require('./data/equipment.json')
var Model = require('./data/equipmentModel.json')
var PositionHistory = require('./data/equipmentPositionHistory.json')
var State = require('./data/equipmentState.json')
var StateHistory = require('./data/equipmentStateHistory.json')

module.exports = function () {
  return {
    Equipment: Equipment,
    Model: Model,
    PositionHistory: PositionHistory,
    State: State,
    StateHistory: StateHistory
  }
}

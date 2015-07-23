"use strict";
"use strict";
var specStrings = require("../common/specStrings");
var InstIdPaths = require("./instIdPaths");
function KnownInstaStore() {
  this._instances = new Map();
}
KnownInstaStore.prototype.add = function(workflowName, insta) {
  this._instances.set(specStrings.hosting.doubleKeys(workflowName, insta.id), insta);
};
KnownInstaStore.prototype.get = function(workflowName, instanceId) {
  return this._instances.get(specStrings.hosting.doubleKeys(workflowName, instanceId));
};
KnownInstaStore.prototype.exists = function(workflowName, instanceId) {
  return this._instances.has(specStrings.hosting.doubleKeys(workflowName, instanceId));
};
KnownInstaStore.prototype.remove = function(workflowName, instanceId) {
  this._instances.delete(specStrings.hosting.doubleKeys(workflowName, instanceId));
};
module.exports = KnownInstaStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtub3duSW5zdGFTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLFdBQVcsQ0FBQztBQUVaLEFBQUksRUFBQSxDQUFBLFdBQVUsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLHVCQUFzQixDQUFDLENBQUM7QUFDbEQsQUFBSSxFQUFBLENBQUEsV0FBVSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsZUFBYyxDQUFDLENBQUM7QUFFMUMsT0FBUyxnQkFBYyxDQUFFLEFBQUQsQ0FBRztBQUN2QixLQUFHLFdBQVcsRUFBSSxJQUFJLElBQUUsQUFBQyxFQUFDLENBQUM7QUFDL0I7QUFBQSxBQUVBLGNBQWMsVUFBVSxJQUFJLEVBQUksVUFBVSxZQUFXLENBQUcsQ0FBQSxLQUFJLENBQUc7QUFDM0QsS0FBRyxXQUFXLElBQUksQUFBQyxDQUFDLFdBQVUsUUFBUSxXQUFXLEFBQUMsQ0FBQyxZQUFXLENBQUcsQ0FBQSxLQUFJLEdBQUcsQ0FBQyxDQUFHLE1BQUksQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFFRCxjQUFjLFVBQVUsSUFBSSxFQUFJLFVBQVUsWUFBVyxDQUFHLENBQUEsVUFBUyxDQUFHO0FBQ2hFLE9BQU8sQ0FBQSxJQUFHLFdBQVcsSUFBSSxBQUFDLENBQUMsV0FBVSxRQUFRLFdBQVcsQUFBQyxDQUFDLFlBQVcsQ0FBRyxXQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFFRCxjQUFjLFVBQVUsT0FBTyxFQUFJLFVBQVUsWUFBVyxDQUFHLENBQUEsVUFBUyxDQUFHO0FBQ25FLE9BQU8sQ0FBQSxJQUFHLFdBQVcsSUFBSSxBQUFDLENBQUMsV0FBVSxRQUFRLFdBQVcsQUFBQyxDQUFDLFlBQVcsQ0FBRyxXQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ3hGLENBQUM7QUFFRCxjQUFjLFVBQVUsT0FBTyxFQUFJLFVBQVUsWUFBVyxDQUFHLENBQUEsVUFBUyxDQUFHO0FBQ25FLEtBQUcsV0FBVyxPQUFPLEFBQUMsQ0FBQyxXQUFVLFFBQVEsV0FBVyxBQUFDLENBQUMsWUFBVyxDQUFHLFdBQVMsQ0FBQyxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVELEtBQUssUUFBUSxFQUFJLGdCQUFjLENBQUM7QUFDaEMiLCJmaWxlIjoiaG9zdGluZy9rbm93bkluc3RhU3RvcmUuanMiLCJzb3VyY2VSb290IjoibGliL2VzNiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5sZXQgc3BlY1N0cmluZ3MgPSByZXF1aXJlKFwiLi4vY29tbW9uL3NwZWNTdHJpbmdzXCIpO1xubGV0IEluc3RJZFBhdGhzID0gcmVxdWlyZShcIi4vaW5zdElkUGF0aHNcIik7XG5cbmZ1bmN0aW9uIEtub3duSW5zdGFTdG9yZSgpIHtcbiAgICB0aGlzLl9pbnN0YW5jZXMgPSBuZXcgTWFwKCk7XG59XG5cbktub3duSW5zdGFTdG9yZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHdvcmtmbG93TmFtZSwgaW5zdGEpIHtcbiAgICB0aGlzLl9pbnN0YW5jZXMuc2V0KHNwZWNTdHJpbmdzLmhvc3RpbmcuZG91YmxlS2V5cyh3b3JrZmxvd05hbWUsIGluc3RhLmlkKSwgaW5zdGEpO1xufTtcblxuS25vd25JbnN0YVN0b3JlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlcy5nZXQoc3BlY1N0cmluZ3MuaG9zdGluZy5kb3VibGVLZXlzKHdvcmtmbG93TmFtZSwgaW5zdGFuY2VJZCkpO1xufTtcblxuS25vd25JbnN0YVN0b3JlLnByb3RvdHlwZS5leGlzdHMgPSBmdW5jdGlvbiAod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlcy5oYXMoc3BlY1N0cmluZ3MuaG9zdGluZy5kb3VibGVLZXlzKHdvcmtmbG93TmFtZSwgaW5zdGFuY2VJZCkpO1xufTtcblxuS25vd25JbnN0YVN0b3JlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSB7XG4gICAgdGhpcy5faW5zdGFuY2VzLmRlbGV0ZShzcGVjU3RyaW5ncy5ob3N0aW5nLmRvdWJsZUtleXMod29ya2Zsb3dOYW1lLCBpbnN0YW5jZUlkKSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtub3duSW5zdGFTdG9yZTtcbiJdfQ==
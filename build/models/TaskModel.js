"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var TaskSchema = new mongoose_1.Schema({
    taskId: { type: String, required: "Without we can not index this", unique: true },
    name: { type: String },
    assignedTo: { type: String },
    priority: { type: Number },
});
exports.default = mongoose_1.default.model('Task', TaskSchema);

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
    id: { type: Number, required: true, autoIndex: true },
    name: { type: String, required: true, autoIndex: false },
    assignedTo: { type: String, required: true, autoIndex: false },
    priority: { type: Number, required: true, autoIndex: false },
});
exports.default = mongoose_1.default.model('Task', TaskSchema);

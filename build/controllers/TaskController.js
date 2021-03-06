"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var TaskService_1 = __importDefault(require("../services/TaskService"));
var TaskController = /** @class */ (function () {
    function TaskController() {
        var _this = this;
        this.router = express_1.default.Router();
        this.getTasks = function (req, resp, next) { return __awaiter(_this, void 0, void 0, function () {
            var taskService, task, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskService = new TaskService_1.default();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, taskService.getAllTasks()];
                    case 2:
                        task = _a.sent();
                        resp.json(task);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getTask = function (req, resp, next) { return __awaiter(_this, void 0, void 0, function () {
            var taskService, task, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskService = new TaskService_1.default();
                        console.log("getting task");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        console.log(req.params.taskId);
                        return [4 /*yield*/, taskService.getTask(req)];
                    case 2:
                        task = _a.sent();
                        console.log(task);
                        resp.json(task);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        next(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.createTask = function (req, resp, next) { return __awaiter(_this, void 0, void 0, function () {
            var taskService, task, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskService = new TaskService_1.default();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, taskService.createTask(req)];
                    case 2:
                        task = _a.sent();
                        resp.send(task);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        next(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.updateTask = function (req, resp, next) { return __awaiter(_this, void 0, void 0, function () {
            var taskService, task, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskService = new TaskService_1.default();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, taskService.updateTask(req)];
                    case 2:
                        task = _a.sent();
                        if (task == null) {
                            resp.status(400).send("Something went wrong");
                        }
                        resp.status(200).json(task);
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        next(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.deleteTask = function (req, resp, next) { return __awaiter(_this, void 0, void 0, function () {
            var taskService, task, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskService = new TaskService_1.default();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, taskService.deleteTaskById(req)];
                    case 2:
                        task = _a.sent();
                        if (task == null) {
                            resp.status(400).send("Something went wrong");
                        }
                        resp.status(200).json({ task: task, message: "This task has been deleted succesfully" });
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        next(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.initRoutes();
    }
    TaskController.prototype.initRoutes = function () {
        console.log("Init routes");
        this.router.get('/', this.getTasks);
        this.router.get('/task/:taskId', this.getTask);
        this.router.post('/create', this.createTask);
        this.router.put('/update/:taskId', this.updateTask);
        this.router.delete('/remove/:taskId', this.deleteTask);
    };
    return TaskController;
}());
exports.default = TaskController;

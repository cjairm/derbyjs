"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const derby_1 = __importDefault(require("derby"));
const app = derby_1.default.createApp("shop", __filename);
app.loadViews(`${__dirname}/pages`);
app.get("/", (page) => {
    page.render();
});
exports.default = app;

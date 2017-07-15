"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(lastware) {
    return function (req, res, next) {
        req.on("end", function () {
            lastware(req, res, false);
        });
        res.on("close", function () {
            lastware(req, res, true);
        });
        next();
    };
}
exports.get = get;

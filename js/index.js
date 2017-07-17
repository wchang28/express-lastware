"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(lastware) {
    return function (req, res, next) {
        res.on("finish", function () {
            if (typeof lastware === "function")
                lastware(req, res, false);
        }).on("close", function () {
            if (typeof lastware === "function")
                lastware(req, res, true);
        });
        next();
    };
}
exports.get = get;

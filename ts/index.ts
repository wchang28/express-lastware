import * as express from "express";

export type Lastware = (req: express.Request, res: express.Response, aborted: boolean) => void;

export function get(lastware: Lastware) : express.RequestHandler {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.on("finish", () => {
            if (typeof lastware === "function") lastware(req, res, false);
        }).on("close", () => {
            if (typeof lastware === "function") lastware(req, res, true);
        });
        next();
    }
}
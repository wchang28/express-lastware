import * as express from "express";

export type Lastware = (req: express.Request, res: express.Response, aborted: boolean) => void;

export function get(lastware: Lastware) : express.RequestHandler {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        req.on("end", () => {
            lastware(req, res, false);
        });
        res.on("close", () => {
            lastware(req, res, true);
        });
        next();
    }
}
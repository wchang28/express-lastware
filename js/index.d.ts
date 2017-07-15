/// <reference types="express" />
import * as express from "express";
export declare type Lastware = (req: express.Request, res: express.Response, aborted: boolean) => void;
export declare function get(lastware: Lastware): express.RequestHandler;

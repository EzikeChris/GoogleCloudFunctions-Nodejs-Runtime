import * as express from 'express';
import { HandlerFunction } from './functions';
import { SignatureType } from './types';
/**
 * Registers handler functions for route paths.
 * @param app Express application object.
 * @param userFunction User's function.
 * @param functionSignatureType Type of user's function signature.
 */
export declare function registerFunctionRoutes(app: express.Application, userFunction: HandlerFunction, functionSignatureType: SignatureType): void;

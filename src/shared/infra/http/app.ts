/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/errors/AppError";
import * as path from 'path'; 
import * as fs from 'fs';
import * as https from 'https';

import { router } from "./router";



export const app = express();

const certPath = path.resolve(__dirname, '../../../../certificado.cert'); 
const keyPath = path.resolve(__dirname, '../../../../certificado.key');

const options: https.ServerOptions = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
};

export const server = https.createServer(options, app);


app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  },
);

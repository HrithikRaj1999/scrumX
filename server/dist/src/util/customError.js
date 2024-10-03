"use strict";
// customError.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode, details) {
        super(message); // Call the parent constructor (Error)
        this.name = this.constructor.name; // Set the error name to the class name
        this.statusCode = statusCode; // Custom status code for error
        this.details = details; // Optional additional details
        // Ensures the proper stack trace is maintained (only available on V8 engines like Node.js)
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.CustomError = CustomError;

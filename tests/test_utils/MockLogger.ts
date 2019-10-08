import { Logger } from "@azure/functions";

export default class MockLogger implements Logger {
    error(...args: any[]): void {
        jest.fn(args => console.log(args))
    } 
    warn(...args: any[]): void {
        jest.fn(args => console.log(args))
    }
    info(...args: any[]): void {
        jest.fn(args => console.log(args))
    }
    verbose(...args: any[]): void {
        jest.fn(args => console.log(args))
    }

}
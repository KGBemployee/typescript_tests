import { Context } from '@azure/functions';

export default class MockContext implements Context {
    invocationId: string;    executionContext: import("@azure/functions").ExecutionContext;
    bindings: { [key: string]: any; };
    bindingData: { [key: string]: any; };
    bindingDefinitions: import("@azure/functions").BindingDefinition[];
    log: import("@azure/functions").Logger;
    done(err?: string | Error, result?: any): void {
        throw new Error("Method not implemented.");
    }
    req?: import("@azure/functions").HttpRequest;
    res?: { [key: string]: any; };
}


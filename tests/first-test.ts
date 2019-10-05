interface LogEvent {
    event: string,
    paramenters: object
}

interface WrongLogEvent {
    event: string,
    parameters: Map<string, any>,
}

describe("Testing interface composition ", () => {
    test("proper object notation and declaration", () => {

        let event: LogEvent = {
            event: "an Event",
            paramenters: {
                "one": 1
            }
        };

        console.log(JSON.stringify(event));

        expect(JSON.stringify(event.paramenters).length).toBeGreaterThan(2);
    });

    test("not good!", () => {

        let params = new Map<string, any>();

        params.set("entry", 1);
        params.set('entry2', "another entry");

        let event: WrongLogEvent = {
            event: "a wrong event",
            parameters: params
        };

        console.log(JSON.stringify(event));

        expect(JSON.stringify(event.parameters).length).toBeGreaterThan(2);
    });
})
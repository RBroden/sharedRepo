export class TestTSClass {
    public testProperty: string;

    constructor() {
        this.testProperty = "test string";
    }

    getTestProperty(): string {
        return this.testProperty;
    }

    setTestProperty(value: string): void {
        this.testProperty = value;
    }

}

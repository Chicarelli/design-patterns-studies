export class PaperSingleton {
    static instance: PaperSingleton;
    lines: Array<string> = [];
    private constructor() {}

    
    public static getInstance(): PaperSingleton {
        if (!this.instance) {
            this.instance = new PaperSingleton();
        }

        return this.instance;
    }

    addLine(line: string) {
        this.lines.push(line);

        return line;
    }
}
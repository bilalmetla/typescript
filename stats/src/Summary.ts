import { MatchData } from "./MatchData";


interface Analyzer {
    run(matches: MatchData[]): string;
}

interface OutPutTarget {
    print(report: string): void;
}


export class Summary{
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutPutTarget
    ) { }
    

    buildAndPrint(matches: MatchData[]): void{
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }
}
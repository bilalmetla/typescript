import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { Summary } from "./Summary";
import { OutPutConsole } from "./analyzers/OutPutConsole";

const csvfilereader = new CsvFileReader('../football.csv')
const matchReader = new MatchReader(csvfilereader)
matchReader.load()

const summary = new Summary(
    new WinAnalysis('Man United'),
    new OutPutConsole()
)
summary.buildAndPrint(matchReader.matches)
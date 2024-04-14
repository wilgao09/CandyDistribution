import { Scenario } from "../app/types";
import split from "../test/split.cd.json";

interface CandyTest {
    name: string;
    scenario: Scenario;
    answer: number[][][];
}

function getTests(): CandyTest[] {
    return [split];
}

export default getTests;

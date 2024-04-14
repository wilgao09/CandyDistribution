import { Scenario } from "../app/types";
import split from "../test/split.cd.json";

interface CandyTest {
    scenario: Scenario;
    answer: number[][][];
}

function bundleTests(): CandyTest[] {
    return [split];
}

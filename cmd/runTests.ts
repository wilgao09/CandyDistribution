import getTests from "./testReader";
import basicAlgorithm from "../algorithm/basic";

const DISTRIBUTOR = basicAlgorithm;
const SOLVE = basicAlgorithm.solve;

function main() {
    let tests = getTests();
    for (let i = 0; i < tests.length; i++) {
        let t = tests[i];
        let ans = SOLVE(t.scenario);
        function pass() {
            console.log(`Passed ${t.name}`);
        }
        function fail(reason: string) {
            console.error(`Failed ${t.name}: ${reason}`);
        }

        // compare outputs
        let sol = t.answer;
        if (sol.length !== ans.length) {
            fail(
                `Different number of rounds; expected ${sol.length}, got ${ans.length}`
            );
            continue;
        }
        for (let i = 0; i < sol.length; i++) {
            if (sol[i].length != ans[i].length) {
                fail(`Different number of moves in round ${i}`);
                continue;
            }
            let ansset = new Set<string>(ans[i].map((i) => JSON.stringify(i)));
            let solset = new Set<string>(sol[i].map((i) => JSON.stringify(i)));
            if (![...solset].every((x) => ansset.has(x))) {
                fail(
                    `Different moves found in round ${i}; expected ${solset}, found ${ansset}`
                );
                continue;
            }
        }
        pass();
    }
}

main();

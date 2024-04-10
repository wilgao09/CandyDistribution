import { CandyID, ChildID, Scenario } from "./types";

interface Distributor {
    solve(s: Scenario): [ChildID, CandyID][][];
}

export default Distributor;

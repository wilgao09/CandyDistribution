// enum CandyState {
//     STICKY = "STICKY",
//     SMOOTH = "SMOOTH",
//     SLIPPERY = "SLIPPERY",
// }

// enum CandyType {
//     PVS = "PVS",
//     DMZ = "DMZ",
//     FDR = "FDR",
//     JFK = "JFK",
//     CARROT = "CARROT",
// }

type CandyID = number;
type ChildID = number;

interface Candy {
    id: CandyID;
    naturalSugar: number;
    HFCS: number;
    favoriteChild: ChildID;
    // state: CandyState;
    state: string;
    owner: ChildID;
    // type: CandyType;
    type: string;
}

interface Child {
    id: ChildID;
    sugarTolerance: number;
    HFCSTolerance: number;
    pvsLimit: number;
}

interface Scenario {
    children: Child[];
    candy: Candy[];
    // badCombinations: [CandyType, CandyType][];
    badCombinations: [string, string][];
    carrot: Candy;
}

const CARROT: Candy = {
    id: -1,
    naturalSugar: 0,
    HFCS: 0,
    favoriteChild: -1,
    // state: CandyState.SLIPPERY,
    state: "SLIPPERY",
    owner: -1,
    // type: CandyType.CARROT,
    type: "CARROT",
};

export {
    // CandyState,
    // CandyType,
    CandyID,
    ChildID,
    Candy,
    Child,
    Scenario,
    CARROT,
};

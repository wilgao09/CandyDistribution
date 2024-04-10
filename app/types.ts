enum CandyState {
    STICKY = "STICKY",
    SMOOTH = "SMOOTH",
    SLIPPERY = "SLIPPERY",
}

enum CandyType {
    AAA,
    BBB,
    PVS,
    DMZ,
    FDR,
    JFK,
    CARROT,
}

type CandyID = number;
type ChildID = number;

interface Candy {
    id: CandyID;
    naturalSugar: number;
    HFCS: number;
    favoriteChild: ChildID;
    state: CandyState;
    owner: ChildID;
    type: CandyType;
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
    badCombinations: [CandyType, CandyType][];
    carrot: Candy;
}

const CARROT: Candy = {
    id: -1,
    naturalSugar: 0,
    HFCS: 0,
    favoriteChild: -1,
    state: CandyState.SLIPPERY,
    owner: -1,
    type: CandyType.CARROT,
};

export {
    CandyState,
    CandyType,
    CandyID,
    ChildID,
    Candy,
    Child,
    Scenario,
    CARROT,
};

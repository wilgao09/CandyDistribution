enum CandyState {
    FRESH,
    GOING_BAD,
    BAD,
}

enum CandyType {
    AAA,
    BBB,
    PVS,
}

type ChildID = number;

interface Candy {
    HFCS: number;
    naturalSugar: number;
    favoriteChild: ChildID;
    state: CandyState;
    owner: ChildID;
    type: CandyType;
}

interface Child {
    id: ChildID;
    sugerTolerance: number;
    HFCSTolerance: number;
    pvsLimit: number;
}

import {
    CARROT,
    Candy,
    CandyState,
    CandyType,
    Child,
    ChildID,
    Scenario,
} from "./types";

export default class ScenarioBuilder {
    private scenario: Scenario;
    constructor(
        carrot: Candy = CARROT,
        badCombinations: [CandyType, CandyType][] = []
    ) {
        this.scenario = {
            candy: [],
            children: [],
            badCombinations: badCombinations,
            carrot,
        };
    }

    public addChild(sugarTol: number, HFCSTol: number, pvsLimit: number) {
        let nChild: Child = {
            id: this.scenario.children.length,
            sugarTolerance: sugarTol,
            HFCSTolerance: HFCSTol,
            pvsLimit: pvsLimit,
        };
        this.scenario.children.push(nChild);
    }

    public addCandy(
        sugar: number,
        HFCS: number,
        favoriteChild: ChildID,
        state: CandyState,
        owner: ChildID,
        type: CandyType
    ) {
        let nCandy: Candy = {
            id: this.scenario.candy.length,
            naturalSugar: sugar,
            HFCS,
            favoriteChild,
            state,
            owner,
            type,
        };
        this.scenario.candy.push(nCandy);
    }

    public getScenario(): Scenario {
        return this.scenario;
    }
}

import {IChallenge} from "@/interfaces/IChallenge";

export interface ICompany {
    guid: string;
    name: string;
    description: string;
    imageUrl: string;
    challenge?: {
        time: string;
        difficulty: string;
        language: string;
        challenges: IChallenge[];
    };
}

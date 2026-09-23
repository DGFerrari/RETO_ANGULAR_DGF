export class Minecraft {
    NomMundo: string;
    DescMundo?: string;
    Seed: number;
    Version: string;
    Multiplayer: boolean;

    constructor(NomMundo: string, Seed: number, Version: string, Multiplayer: boolean, DescMundo?: string) {
        this.NomMundo = NomMundo;
        this.Seed = Seed;
        this.Version = Version;
        this.Multiplayer = Multiplayer;
        this.DescMundo = DescMundo; 
    }

    GetNomMundo() {
        return this.NomMundo;
    }

    GetDescMundo() {
        return this.DescMundo;
    }

    GetSeed() {
        return this.Seed;
    }   

    GetVersion() {
        return this.Version;
    }

    GetMultiplayer() {
        return this.Multiplayer;
    }
}
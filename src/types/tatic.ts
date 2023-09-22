import { FieldZoneID } from "./field";

export type PlayerNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 8 | 9 | 10 | 11;

export type PlayerNumberWithoutGoalkeeper = Exclude<PlayerNumber, 1>;

export type InitialTaticPositions = Record<PlayerNumber, { col: number; row: number }>;

export type TaticPositions = Record<PlayerNumberWithoutGoalkeeper, { col: number; row: number }>;

export type AllTaticPositions = Record<FieldZoneID, TaticPositions>;

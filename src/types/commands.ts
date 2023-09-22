import { GameSnapshotReader, Lugo, Mapper } from "@lugobots/lugo4node";

export type COMMANDS = "ON_SUPPORTING" | "ON_HOLDING" | "ON_DEFENDING" | "ON_DISPUTING" | "AS_GOALKEEPER";

export type CommandProps = {
    me: Lugo.Player;
    game: GameSnapshotReader;
    mapper: Mapper;
    orderSet: Lugo.OrderSet;
    log: (text: string) => void;
};

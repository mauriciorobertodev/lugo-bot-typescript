export type FieldZoneID =
    | "LEFT_DEFENSIVE"
    | "CENTER_DEFENSIVE"
    | "RIGHT_DEFENSIVE"
    | "LEFT_DEFENSIVE_MIDFIELD"
    | "CENTER_DEFENSIVE_MIDFIELD"
    | "RIGHT_DEFENSIVE_MIDFIELD"
    | "LEFT_OFENSIVE_MIDFIELD"
    | "CENTER_OFENSIVE_MIDFIELD"
    | "RIGHT_OFENSIVE_MIDFIELD"
    | "LEFT_OFENSIVE"
    | "CENTER_OFENSIVE"
    | "RIGHT_OFENSIVE";

export type FieldZone = { start_col: number; end_col: number; start_row: number; end_row: number; id: FieldZoneID };

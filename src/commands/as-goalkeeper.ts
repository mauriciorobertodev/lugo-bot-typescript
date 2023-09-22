import { Lugo, PLAYER_STATE } from "@lugobots/lugo4node";
import { CommandProps } from "../types";

/**
 * asGoleiro só é chamado quando esse bot é o goleiro (número 1). Este método é chamado a cada turno.
 */
export default function asGoalkeeper({ orderSet, log }: CommandProps & { state: PLAYER_STATE }): Lugo.OrderSet {
    const orders: Lugo.Order[] = [];

    log("Hakuna matata !!!");

    return orderSet.setOrdersList(orders);
}

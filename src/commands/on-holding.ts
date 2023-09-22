import { Lugo } from "@lugobots/lugo4node";
import { CommandProps } from "../types";

/**
 * onHolding é chamado quando este bot tem a posse de bola
 */
export default function onHolding({ orderSet, log }: CommandProps): Lugo.OrderSet {
    const orders: Lugo.Order[] = [];

    log("Hakuna matata !!!");

    return orderSet.setOrdersList(orders);
}

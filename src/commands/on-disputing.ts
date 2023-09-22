import { Lugo } from "@lugobots/lugo4node";
import { CommandProps } from "../types";

/**
 * onDisputing é chamado quando ninguém tem a posse de bola
 */
export default function onDisputing({ orderSet, log }: CommandProps): Lugo.OrderSet {
    const orders: Lugo.Order[] = [];

    log("Hakuna matata !!!");

    return orderSet.setOrdersList(orders);
}

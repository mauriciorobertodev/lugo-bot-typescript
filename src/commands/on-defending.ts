import { Lugo } from "@lugobots/lugo4node";
import { CommandProps } from "../types";

/**
 * onDefending é chamado quando um jogador adversário tem a posse de bola
 */
export default function onDefending({ orderSet, log }: CommandProps): Lugo.OrderSet {
    const orders: Lugo.Order[] = [];

    log("Hakuna matata !!!");

    return orderSet.setOrdersList(orders);
}

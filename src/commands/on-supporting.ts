import { Lugo } from "@lugobots/lugo4node";
import { CommandProps } from "../types";

/**
 * onSupporting é chamado quando um jogador companheiro de equipe tem a posse de bola
 */
export default function onSupporting({ orderSet, log }: CommandProps): Lugo.OrderSet {
    const orders: Lugo.Order[] = [];

    log("Hakuna matata !!!");

    return orderSet.setOrdersList(orders);
}

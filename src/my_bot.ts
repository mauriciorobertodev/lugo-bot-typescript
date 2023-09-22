import { GameSnapshotReader, PLAYER_STATE, Lugo, Bot, Mapper } from "@lugobots/lugo4node";
import onDisputing from "./commands/on-disputing";
import onDefending from "./commands/on-defending";
import onHolding from "./commands/on-holding";
import onSupporting from "./commands/on-supporting";
import asGoalkeeper from "./commands/as-goalkeeper";
import { error, logger } from "./helpers";

export class MyBot implements Bot {
    constructor(
        public side: Lugo.Team.Side,
        public number: number,
        public initPosition: Lugo.Point,
        public mapper: Mapper,
    ) {}

    /**
     * onDisputing é chamado quando ninguém tem a posse de bola
     */
    onDisputing(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onDisputing({ me, game: reader, mapper: this.mapper, orderSet, log: logger(me.getNumber(), "ON_DISPUTING") });
        } catch (e) {
            error(`não jogou neste turno`, e);
        }
    }

    /**
     * onDefending é chamado quando um jogador adversário tem a posse de bola
     */
    onDefending(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onDefending({ me, game: reader, mapper: this.mapper, orderSet, log: logger(me.getNumber(), "ON_DEFENDING") });
        } catch (e) {
            error(`não jogou neste turno`, e);
        }
    }

    /**
     * onHolding é chamado quando este bot tem a posse de bola
     */
    onHolding(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onHolding({ me, game: reader, mapper: this.mapper, orderSet, log: logger(me.getNumber(), "ON_HOLDING") });
        } catch (e) {
            error(`não jogou neste turno`, e);
        }
    }

    /**
     * onSupporting é chamado quando um jogador companheiro de equipe tem a posse de bola
     */
    onSupporting(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onSupporting({ me, game: reader, mapper: this.mapper, orderSet, log: logger(me.getNumber(), "ON_SUPPORTING") });
        } catch (e) {
            error(`não jogou neste turno`, e);
        }
    }

    /**
     * asGoalkeeper só é chamado quando esse bot é o goleiro (número 1). Este método é chamado a cada turno.
     */
    asGoalkeeper(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot, state: PLAYER_STATE): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return asGoalkeeper({ me, game: reader, mapper: this.mapper, orderSet, state, log: logger(me.getNumber(), "AS_GOALKEEPER") });
        } catch (e) {
            error(`não jogou neste turno`, e);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    gettingReady(): void {
        /**
         * Este método é chamado quando a pontuação é alterada ou antes do início do jogo.
         * Podemos mudar a estratégia da equipe ou fazer qualquer outra coisa com base no resultado do jogo até agora.
         * por enquanto, não vamos fazer nada aqui.
         */
    }

    /**
     * Este método cria o reader e pega meu bot atual
     * Por exemplo. Jogadores, a bola, etc.
     */
    private makeReader(snapshot: Lugo.GameSnapshot): { reader: GameSnapshotReader; me: Lugo.Player } {
        const reader = new GameSnapshotReader(snapshot, this.side);
        const me = reader.getPlayer(this.side, this.number);
        if (!me) throw new Error("não me encontrei no jogo");
        return { reader, me };
    }
}

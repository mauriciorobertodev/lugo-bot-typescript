import { COMMANDS } from "../types";

export function logger(me: number, command: COMMANDS): (text: string) => void {
    if (!process.env.BOT_LOG_ON || process.env.BOT_LOG_ON != "true") return () => null;

    const logOrNot: Record<COMMANDS, boolean> = {
        AS_GOALKEEPER: process.env.LOG_GOALKEEPER && process.env.LOG_GOALKEEPER == "true",
        ON_DEFENDING: process.env.LOG_ON_DEFENDING && process.env.LOG_ON_DEFENDING == "true",
        ON_DISPUTING: process.env.LOG_ON_DISPUTING && process.env.LOG_ON_DISPUTING == "true",
        ON_HOLDING: process.env.LOG_ON_HOLDING && process.env.LOG_ON_HOLDING == "true",
        ON_SUPPORTING: process.env.LOG_ON_SUPPORTING && process.env.LOG_ON_SUPPORTING == "true",
    };

    const LOG_COLORS = [
        "\x1b[33m", //1
        "\x1b[32m", //2
        "\x1b[35m", //3
        "\x1b[34m", //4
        "\x1b[1m\x1b[36m", //5
        "\x1b[1m\x1b[33m", //6
        "\x1b[1m\x1b[32m", //7
        "\x1b[1m\x1b[35m", //8
        "\x1b[1m\x1b[34m", //9
        "\x1b[36m", //10
        "\x1b[1m\x1b[31m", //11
    ];

    if (!logOrNot[command]) return () => null;

    const suffix: Record<COMMANDS, string> = {
        AS_GOALKEEPER: "SOU O GOLEIRO -> ",
        ON_DEFENDING: "DEFENDENDO    -> ",
        ON_DISPUTING: "DISPUTANDO    -> ",
        ON_HOLDING: "COM A BOLA    -> ",
        ON_SUPPORTING: "DANDO SUPORTE -> ",
    };

    const allowedBots: number[] = [];

    if (process.env.LOG_BOT_NUNBER) {
        allowedBots.push(...process.env.LOG_BOT_NUNBER.split(",").map((n) => parseInt(n)));
    }

    return (text: string) => {
        if (allowedBots.length === 0 || allowedBots.includes(me)) {
            console.log(LOG_COLORS[me - 1] + `#${me < 10 ? "0" + me : me} ${suffix[command]} \x1b[0m\x1b[1m ${text}\x1b[0m`);
        }
    };
}

export function error(...texts: string[]): void {
    console.log(`
        \x1b[31mEROR -> ${texts[0]}
    `);

    if (texts[1]) {
        console.log(`
            \x1b[31mEROR -> ${texts[1]}
        `);
    }
}

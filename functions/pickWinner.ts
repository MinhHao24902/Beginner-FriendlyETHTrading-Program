import { Validator } from "../types/validator.ts";

export function pickWinner(): Validator {
    const v1: Validator = {
        addr: "HuongWallet",
        signature: "Toi chiu trach nhiem kiem tra cac giao dich",
        token: 1,
    };
    const v2: Validator = {
        addr: "HuyWallet",
        signature: "Toi chiu trach nhiem kiem tra cac giao dich",
        token: 2,
    };
    const v3: Validator = {
        addr: "TriWallet",
        signature: "Toi chiu trach nhiem kiem tra cac giao dich",
        token: 3,
    };
    const v4: Validator = {
        addr: "HungWallet",
        signature: "Toi chiu trach nhiem kiem tra cac giao dich",
        token: 4,
    };

    const candidates = [v1,v2,v2,v3,v3,v3,v4,v4,v4,v4];

    const randomIndex = Math.floor(Math.random() * candidates.length);
    
    const winner = candidates[randomIndex];

    console.log(`${winner.addr}`);
    return winner;
}
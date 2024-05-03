import { Input } from "../types/input.ts";
import { Output } from "../types/output.ts";
import { Tx } from "../types/tx.ts";

export function createTx(): Tx {
    const txId = crypto.randomUUID();
    const now = new Date().toISOString();
    const inputs: Input[] = [
        {
            time: now,
            from: "HaoWallet",
            signature: "Ten toi la Hao. Toi dong y chuyen tien cho Thay Tan"
        },
    ];
    const outputs: Output[] = [
        {
            to: "ThayTanWallet",
            amount: 20,
            fee: 3,
        },
    ];
    const tx: Tx = {
        id: txId,
        inputs: inputs,
        outputs: outputs,
    };

    return tx;
}
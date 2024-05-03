import { Tx } from "./tx.ts";
import { Validator } from "./validator.ts";

export type Block = {
    index: number, //STT
    timestamp: string,
    pre_hash: string,
    hash: string,
    tx: Tx, //dữ liệu giao dịch (data)
    validator: Validator,
}
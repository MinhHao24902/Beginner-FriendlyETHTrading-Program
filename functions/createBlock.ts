import { Validator } from "../types/validator.ts";
import { Tx } from "../types/tx.ts";
import { calcBlockHash } from "./calcBlockHash.ts";
import { Block } from "../types/block.ts";

export async function createBlock (
    prevBlock: Block,
    tx: Tx,
    validator: Validator,
) : Promise<Block> {
    const time = new Date().toLocaleTimeString();
    const index = prevBlock.index + 1;
    const hash = await calcBlockHash (
        index,
        time,
        prevBlock.hash,
        tx,
        validator,
    );
    const newBlock: Block = {
        index : index,
        timestamp: time,
        pre_hash: prevBlock.hash,
        hash: hash,
        tx: tx,
        validator: validator,
    }
    return newBlock;
}
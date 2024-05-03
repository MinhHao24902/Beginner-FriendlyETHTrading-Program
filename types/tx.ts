//Bản ghi các giao dịch sẽ đc khoá trong khối
import { Input } from "./input.ts";
import { Output } from "./output.ts";

export type Tx = {
    id: string; //id gdich
    inputs: Input[] //Tiền để gd đến từ đâu
    outputs: Output[] //Điều gì xảy ra với số tiền từ giao dịch?
};
import { HttpException } from "@nestjs/common";
export declare class Conclusion extends HttpException {
    bro: number;
    text: string;
    constructor(bro: number, text: string);
}

import { ObjectId } from "mongodb";

export class CryptoCoinModel {
  constructor(
    public code: string,
    public rate: number,
    public volume: number,
    public cap: number,
    public delta: object,
    public liquidity: number,
    public id?: ObjectId
  ) {}
}
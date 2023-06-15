import { type Types } from "../../src";
import { stringifyAuction } from "../../src/string-parser";

const stringContestedAuction =
  "1S-2D-3D-P-5C-P-5D-P-5NT-P-6H-P-7S-X-P-P-XX-P-P-P";
const stringUncontestedAuction = "1H-2C-2H-2NT-3C-3NT";

const listContestedAuction: Types.AuctionCall[] = [
  { call: { level: 1, suit: "S" } },
  { call: { level: 2, suit: "D" } },
  { call: { level: 3, suit: "D" } },
  { call: "P" },
  { call: { level: 5, suit: "C" } },
  { call: "P" },
  { call: { level: 5, suit: "D" } },
  { call: "P" },
  { call: { level: 5, suit: "NT" } },
  { call: "P" },
  { call: { level: 6, suit: "H" } },
  { call: "P" },
  { call: { level: 7, suit: "S" } },
  { call: "X" },
  { call: "P" },
  { call: "P" },
  { call: "XX" },
  { call: "P" },
  { call: "P" },
  { call: "P" },
];
const listUncontestedAuction: Types.AuctionCall[] = [
  { call: { level: 1, suit: "H" } },
  { call: "P" },
  { call: { level: 2, suit: "C" } },
  { call: "P" },
  { call: { level: 2, suit: "H" } },
  { call: "P" },
  { call: { level: 2, suit: "NT" } },
  { call: "P" },
  { call: { level: 3, suit: "C" } },
  { call: "P" },
  { call: { level: 3, suit: "NT" } },
  { call: "P" },
];

const invalidUncontestedAuction: Types.AuctionCall[] = [
  { call: { level: 1, suit: "H" } },
  { call: { level: 2, suit: "C" } },
  { call: { level: 2, suit: "H" } },
  { call: { level: 2, suit: "NT" } },
  { call: { level: 3, suit: "C" } },
  { call: { level: 3, suit: "NT" } },
];

describe("Testing StringParser.stringifyAuction", () => {
  it("Testing contested auction", () => {
    expect(stringifyAuction(listContestedAuction)).toStrictEqual(
      stringContestedAuction
    );
  });
  it("Testing uncontested auction", () => {
    expect(stringifyAuction(listUncontestedAuction, false)).toStrictEqual(
      stringUncontestedAuction
    );
    expect(() =>
      stringifyAuction(invalidUncontestedAuction, false)
    ).toThrowError();
  });
});

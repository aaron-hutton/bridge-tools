import { parseAuction } from "../../src/string-parser";

const stringContestedAuction =
  "1S-2D-3D-P-5C-P-5D-P-5NT-P-6H-P-7S-X-P-P-XX-P-P-P";
const stringUncontestedAuction = "1H-2C-2H-2N-3C-3NT";

const listContestedAuction = [
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
const listUncontestedAuction = [
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

describe("Testing StringParser.parseAuction", () => {
  it("Testing contested auction", () => {
    expect(parseAuction(stringContestedAuction)).toStrictEqual(
      listContestedAuction
    );
  });
  it("Testing uncontested auction", () => {
    expect(parseAuction(stringUncontestedAuction, false)).toStrictEqual(
      listUncontestedAuction
    );
  });
});

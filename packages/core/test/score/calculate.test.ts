import { Score, type Types } from "../../src";

describe("Testing Score.calculate passout", () => {
  it("Testing passout", () => {
    expect(Score.calculate("Passout", "NvNv", 0)).toStrictEqual({
      result: 0,
      tricksTaken: 0,
      score: 0,
    });
  });
});

describe("Testing Score.calculate specific contracts", () => {
  it("Testing N 1m+2 NV", () => {
    expect(
      Score.calculate(
        {
          level: 1,
          strain: "C",
          declarer: "N",
        },
        "NvNv",
        9
      )
    ).toStrictEqual({ result: 2, tricksTaken: 9, score: 110 });
  });

  it("Testing N 1N= NV", () => {
    expect(
      Score.calculate(
        {
          level: 1,
          strain: "NT",
          declarer: "N",
        },
        "NvNv",
        7
      )
    ).toStrictEqual({ result: 0, tricksTaken: 7, score: 90 });
  });

  it("Testing N 3N= NV", () => {
    expect(
      Score.calculate(
        {
          level: 3,
          strain: "NT",
          declarer: "N",
        },
        "NvNv",
        9
      )
    ).toStrictEqual({ result: 0, tricksTaken: 9, score: 400 });
  });

  it("Testing E 3mx+2 NV", () => {
    expect(
      Score.calculate(
        {
          level: 3,
          strain: "C",
          declarer: "E",
          doubled: true,
        },
        "NvNv",
        11
      )
    ).toStrictEqual({ result: 2, tricksTaken: 11, score: -670 });
  });

  it("Testing E 3mx+2 V", () => {
    expect(
      Score.calculate(
        {
          level: 3,
          strain: "C",
          declarer: "E",
          doubled: true,
        },
        "VV",
        11
      )
    ).toStrictEqual({ result: 2, tricksTaken: 11, score: -1070 });
  });

  it("Testing N 3mxx+2 NV", () => {
    expect(
      Score.calculate(
        {
          level: 3,
          strain: "C",
          declarer: "N",
          redoubled: true,
        },
        "NvNv",
        11
      )
    ).toStrictEqual({ result: 2, tricksTaken: 11, score: 1040 });
  });

  it("Testing N 3mxx+2 V", () => {
    expect(
      Score.calculate(
        {
          level: 3,
          strain: "C",
          declarer: "N",
          redoubled: true,
        },
        "VV",
        11
      )
    ).toStrictEqual({ result: 2, tricksTaken: 11, score: 1640 });
  });

  it("Testing N 6M= NV", () => {
    expect(
      Score.calculate(
        {
          level: 6,
          strain: "S",
          declarer: "N",
        },
        "NvNv",
        12
      )
    ).toStrictEqual({ result: 0, tricksTaken: 12, score: 980 });
  });

  it("Testing N 6M= V", () => {
    expect(
      Score.calculate(
        {
          level: 6,
          strain: "S",
          declarer: "N",
        },
        "VV",
        12
      )
    ).toStrictEqual({ result: 0, tricksTaken: 12, score: 1430 });
  });

  it("Testing N 7N= NV", () => {
    expect(
      Score.calculate(
        {
          level: 7,
          strain: "NT",
          declarer: "N",
        },
        "NvNv",
        13
      )
    ).toStrictEqual({ result: 0, tricksTaken: 13, score: 1520 });
  });

  it("Testing N 7N= V", () => {
    expect(
      Score.calculate(
        {
          level: 7,
          strain: "NT",
          declarer: "N",
        },
        "VV",
        13
      )
    ).toStrictEqual({ result: 0, tricksTaken: 13, score: 2220 });
  });
});

describe("Testing Score.calculate undertricks", () => {
  it("Testing NV undertricks for North", () => {
    const contract: Types.Contract = {
      level: 6,
      strain: "S",
      declarer: "N",
    };

    expect(Score.calculate(contract, "NvNv", 11)).toStrictEqual({
      result: -1,
      tricksTaken: 11,
      score: -50,
    });

    expect(Score.calculate(contract, "NvNv", 10)).toStrictEqual({
      result: -2,
      tricksTaken: 10,
      score: -100,
    });
  });

  it("Testing V undertricks for East", () => {
    const contract: Types.Contract = {
      level: 6,
      strain: "S",
      declarer: "E",
    };

    expect(Score.calculate(contract, "VV", 11)).toStrictEqual({
      result: -1,
      tricksTaken: 11,
      score: 100,
    });

    expect(Score.calculate(contract, "VV", 10)).toStrictEqual({
      result: -2,
      tricksTaken: 10,
      score: 200,
    });
  });

  it("Testing NV doubled undertricks", () => {
    const contract: Types.Contract = {
      level: 6,
      strain: "S",
      declarer: "N",
      doubled: true,
    };

    expect(Score.calculate(contract, "NvNv", 11)).toStrictEqual({
      result: -1,
      tricksTaken: 11,
      score: -100,
    });

    expect(Score.calculate(contract, "NvNv", 10)).toStrictEqual({
      result: -2,
      tricksTaken: 10,
      score: -300,
    });

    expect(Score.calculate(contract, "NvNv", 9)).toStrictEqual({
      result: -3,
      tricksTaken: 9,
      score: -500,
    });

    expect(Score.calculate(contract, "NvNv", 8)).toStrictEqual({
      result: -4,
      tricksTaken: 8,
      score: -800,
    });
  });

  it("Testing V doubled undertricks", () => {
    const contract: Types.Contract = {
      level: 6,
      strain: "S",
      declarer: "N",
      doubled: true,
    };

    expect(Score.calculate(contract, "VV", 11)).toStrictEqual({
      result: -1,
      tricksTaken: 11,
      score: -200,
    });

    expect(Score.calculate(contract, "VV", 10)).toStrictEqual({
      result: -2,
      tricksTaken: 10,
      score: -500,
    });

    expect(Score.calculate(contract, "VV", 9)).toStrictEqual({
      result: -3,
      tricksTaken: 9,
      score: -800,
    });
  });

  it("Testing NV redoubled undertricks", () => {
    const contract: Types.Contract = {
      level: 6,
      strain: "S",
      declarer: "N",
      redoubled: true,
    };

    expect(Score.calculate(contract, "NvNv", 11)).toStrictEqual({
      result: -1,
      tricksTaken: 11,
      score: -200,
    });
  });

  it("Testing V redoubled undertricks", () => {
    const contract: Types.Contract = {
      level: 6,
      strain: "S",
      declarer: "N",
      redoubled: true,
    };

    expect(Score.calculate(contract, "VV", 11)).toStrictEqual({
      result: -1,
      tricksTaken: 11,
      score: -400,
    });
  });
});

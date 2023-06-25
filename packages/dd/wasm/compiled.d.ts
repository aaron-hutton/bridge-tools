/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */

// This will merge to the existing EmscriptenModule interface from @types/emscripten
export interface DDSModule extends EmscriptenModule {
  // _free and _malloc are included in EmscriptenModule

  allocateUTF8: typeof allocateUTF8;
  getValue: typeof getValue;
  setValue: typeof setValue;
  ccall: typeof ccall;

  _dds_init: () => void;

  _dds_solve_board: (
    trump: number,
    direction: number,
    card0_suit: number,
    card0_rank: number,
    card1_suit: number,
    card1_rank: number,
    card2_suit: number,
    card2_rank: number,
    deal: number,
    output_array: number
  ) => number;
}

// If someone can work out if it's possible to type this automatically that would be great :D
export default function create_dds_module(): Promise<DDSModule>;

#!/bin/bash

if command -v emcc &> /dev/null; then
	rm wasm/compiled.js
	rm wasm/compiled.wasm

	# -s EXPORT_ES6=1
    emcc -s EXPORT_NAME="create_dds_module" -s MODULARIZE=1 -s INITIAL_MEMORY=52428800 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS="_free,_malloc,_dds_solve_board,_dds_init" -s EXPORTED_RUNTIME_METHODS="setValue,getValue,ccall,allocateUTF8" src/dds/dds_wrapper.c dds/src/ABsearch.cpp dds/src/ABstats.cpp dds/src/CalcTables.cpp  dds/src/dds.cpp dds/src/DealerPar.cpp dds/src/dump.cpp dds/src/File.cpp dds/src/Init.cpp dds/src/LaterTricks.cpp dds/src/Memory.cpp dds/src/Moves.cpp dds/src/PBN.cpp dds/src/PlayAnalyser.cpp dds/src/QuickTricks.cpp dds/src/Scheduler.cpp dds/src/SolveBoard.cpp dds/src/SolverIF.cpp dds/src/System.cpp dds/src/ThreadMgr.cpp dds/src/Timer.cpp dds/src/TimerGroup.cpp dds/src/TimerList.cpp dds/src/TimeStat.cpp dds/src/TimeStatList.cpp dds/src/TransTableL.cpp dds/src/TransTableS.cpp -I ./dds/src -o wasm/compiled.js
else
	echo "'emcc' is not in the path. It must be installed and sourced before it can be used. We are skipping building the DDS wasm."
    exit 0
fi

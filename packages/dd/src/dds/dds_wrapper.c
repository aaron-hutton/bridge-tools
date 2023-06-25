#include <stdbool.h>
#include "dds.h"
#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>

EMSCRIPTEN_KEEPALIVE int dds_init()
{
	SetResources(40, 1);
	return 0;
}

EMSCRIPTEN_KEEPALIVE int dds_solve_board(int trump,
										 int direction,
										 int card0_suit,
										 int card0_rank,
										 int card1_suit,
										 int card1_rank,
										 int card2_suit,
										 int card2_rank,
										 char *deal,
										 int *output_array)
{
	// Build deal struct
	struct dealPBN d;
	d.trump = trump;
	d.first = direction;

	d.currentTrickSuit[0] = card0_suit;
	d.currentTrickRank[0] = card0_rank;

	d.currentTrickSuit[1] = card1_suit;
	d.currentTrickRank[1] = card1_rank;

	d.currentTrickSuit[2] = card2_suit;
	d.currentTrickRank[2] = card2_rank;

	memcpy(d.remainCards, deal, strlen(deal) + 1);

	// Invoke DDS
	struct futureTricks result;
	SolveBoardPBN(d, 0, 3, 1, &result, 0);

	// Output
	for (int i = 0; i < result.cards; i++)
	{
		int index = i * 3;
		output_array[index] = result.rank[i];
		output_array[index + 1] = result.suit[i];
		output_array[index + 2] = result.score[i];
	}

	return result.nodes;
}

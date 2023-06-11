# @bridge-tools/core components

The library is split into 3 primary components:

-   [types](#types) - Which contains all of the types and enums which are used by the `@bridge-tools` framework. Modifications to these types are considered breaking behaviour and will result in a new major version.
-   [string-parser](#string-parser) - Which includes functions for parsing and stringifying most of the types used by the library.
-   [The rest](#functions), which are separated into folders, make up the functions for manipulating the library components.

The library also has a `utils` directory which contains util functions which are not exposed by the library at this time.

---

## Types

The types can be imported and used like:

```typescript
import { Types } from '@bridge-tools/core';

// An object representing the ace of spades
const card: Types.Card = { suit: Types.Suit.Spade, rank: Types.Rank.Ace };
```

---

## String-Parser

The string-parser functions can be used to convert strings into the library objects. The formats are:

-   Rank - uppercase or lowercase, T or 10: e.g. `A`, `j`, `T`, `10`, `4`
-   Suit - uppercase or lowercase: e.g. `S`, `d`,
-   Card - Suit + Rank: e.g. `SK`, `D2`
-   Hand - Suits in SHDC order separated by a full-stop (period): e.g. `KQT7.KJ3.A65.J98`
-   Trick - Consecutive cards: e.g. `SKS3S2SA`
-   Cardplay - Consecutive tricks separated by a comma: e.g. `SKS3S2SA, DJDQDKDA`

Usage

```typescript
import { Types, StringParser } from '@bridge-tools/core';

// An object representing the ace of spades
const hand: Types.Hand = StringParser.parseHand('KQT7.KJ3.A65.J98');
```

---

## Functions

The functions are split into categories:

-   Auction
-   Board
-   Card
-   Deal
-   Hand
-   Score
-   Trick

See the documentation for individual functions for more details

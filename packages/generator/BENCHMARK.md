# @bridge-tools/generator benchmarks

All of these benchmarks have been run single-threaded on an Intel i7-9700K @ 3.6 GHz with 32 GB total RAM inside [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install). If anyone would like to add their own results, please submit a pull request. Please also ensure you submit the specs of the computer as part of the PR.

The code used to generate these benchmarks can be seen in `examples/benchmarks`.

---

## Deal generation

| Test                                           | i7-9700K WSL2 |
| ---------------------------------------------- | ------------- |
| `node-math-random`<sup>1</sup> (deals/s)       | 25179         |
| `ts-node-math-random`<sup>1</sup> (deals/s)    | 23815         |
| `browserify-math-random`<sup>1</sup> (deals/s) | 22129         |
| `node-crypto`<sup>1</sup> (deals/s)            | 23898         |

<sup>1</sup>_Tested over 100,000 deals. Testing more deals in a single batch results in a slow-down, presumably due to the greater memory usage._

---

## Suit distributions

We also tested the suit distribution over 10,000,000 hands (rounded to 6 decimals):

| Shape    | Wikipedia<sup>1</sup> | `math.random` | `node-crypto` |
| -------- | --------------------- | ------------- | ------------- |
| 4-4-3-2  | 0.21551               | 0.215549      | 0.215525      |
| 5-3-3-2  | 0.15517               | 0.155092      | 0.154937      |
| 5-4-3-1  | 0.12931               | 0.129292      | 0.129412      |
| 5-4-2-2  | 0.10580               | 0.105874      | 0.105773      |
| 4-3-3-3  | 0.10536               | 0.105338      | 0.105442      |
| 6-3-2-2  | 0.05642               | 0.056361      | 0.056457      |
| 6-4-2-1  | 0.04702               | 0.047115      | 0.046986      |
| 6-3-3-1  | 0.03448               | 0.034577      | 0.034511      |
| 5-5-2-1  | 0.03174               | 0.031679      | 0.031800      |
| 4-4-4-1  | 0.02993               | 0.029952      | 0.029944      |
| 7-3-2-1  | 0.01881               | 0.018825      | 0.018746      |
| 6-4-3-0  | 0.01326               | 0.013245      | 0.013268      |
| 5-4-4-0  | 0.01243               | 0.012414      | 0.012410      |
| 5-5-3-0  | 0.00895               | 0.008921      | 0.008987      |
| 6-5-1-1  | 0.00705               | 0.007082      | 0.007053      |
| 6-5-2-0  | 0.00651               | 0.006503      | 0.006543      |
| 7-2-2-2  | 0.00513               | 0.005143      | 0.005123      |
| 7-4-1-1  | 0.00392               | 0.003895      | 0.003890      |
| 7-4-2-0  | 0.00362               | 0.003614      | 0.003637      |
| 7-3-3-0  | 0.00265               | 0.002650      | 0.002640      |
| 8-2-2-1  | 0.00192               | 0.001919      | 0.001914      |
| 8-3-1-1  | 0.00118               | 0.001171      | 0.001175      |
| 7-5-1-0  | 0.00109               | 0.001071      | 0.001079      |
| 8-3-2-0  | 0.00109               | 0.001086      | 0.001089      |
| 6-6-1-0  | 0.00072               | 0.000707      | 0.000723      |
| 8-4-1-0  | 0.00045               | 0.000449      | 0.000456      |
| 9-2-1-1  | 0.00018               | 0.000178      | 0.000181      |
| 9-3-1-0  | 0.00010               | 0.000100      | 0.000101      |
| 9-2-2-0  | 0.000082              | 0.000088      | 0.000081      |
| 7-6-0-0  | 0.000056              | 0.000055      | 0.000057      |
| 8-5-0-0  | 0.000031              | 0.000030      | 0.000031      |
| 10-2-1-0 | 0.000011              | 0.000011      | 0.000010      |
| 9-4-0-0  | 0.0000097             | 0.000009      | 0.000011      |
| 10-1-1-1 | 0.0000040             | 0.000004      | 0.000004      |
| 10-3-0-0 | 0.0000015             | 0.000002      | 0.000001      |
| 11-1-1-0 | 0.00000025            | 0.000000      | 0.000001      |
| 11-2-0-0 | 0.00000011            | 0.000000      | 0.000000      |
| 12-1-0-0 | 0.0000000032          | 0             | 0             |
| 13-0-0-0 | 0.0000000000063       | 0             | 0             |

<sup>1</sup>_[https://en.wikipedia.org/wiki/Contract_bridge_probabilities](https://en.wikipedia.org/wiki/Contract_bridge_probabilities)_

# New game contribution template

Use this template when proposing a new game page for Open Fiches. Copy the outline into your pull request description and use it to structure the game page at `src/pages/games/<game>.astro`.

The goal is to document the mathematics honestly and reproducibly—not to promote gambling. State assumptions clearly, show the derivation behind every published figure, and distinguish exact results from simulation estimates.

## Contribution checklist

- [ ] Added `src/pages/games/<game>.astro` using the existing game pages as layout/style references.
- [ ] Added a `<GameCard />` to `src/pages/index.astro`.
- [ ] Used exact probabilities where feasible; otherwise documented the model or simulation method.
- [ ] Derived EV, RTP, and house edge from the stated rules and paytable.
- [ ] Covered strategies and demonstrated their mathematical effect (or lack of effect).
- [ ] Covered every featured side bet, including its rules, paytable, probability, and EV.
- [ ] Added reliable sources and a methodology note at the bottom of the page.
- [ ] Added the bottom edit/contribution link.
- [ ] If a simulator is included, made it seeded/reproducible and checked it against the theoretical result.

## Page outline

Replace every item in angle brackets, verify the calculations for the exact rule set, and remove sections that truly do not apply. Do **not** substitute rounded marketing figures for the underlying math.

```md
# <Game name>

> <One-sentence, plain-language description of the game and the decision or wager being analysed.>

**Category:** <table / card / dice / other>  
**Rules analysed:** <casino rules, deck/shoe count, number of players, payout rules, commissions, etc.>  
**Main result:** <house edge / player edge / other relevant headline metric>  
**Variance:** <low / medium / high, with a short justification or a quantitative measure where available>  
**Strategy status:** <e.g. “No player decisions”, “Basic strategy reduces the edge”, “Counting is model-dependent”>

## How the game works

Explain the game before presenting results:

1. State the objective and the win/lose/push conditions.
2. List the sequence of play and the choices available to the player.
3. State the exact rule set being modelled. Include variants that change the result (deck count, drawing rules, commissions, maximum odds, surrender, dealer rules, and so on).
4. Define every term and notation used in the formulas.

> **Rule caveat:** <Explain which common rule changes affect the results and where the reader should verify the table rules.>

## Main wagers and mathematics

For each main wager, show the payout convention, exact probability model, expected-value derivation, and the resulting RTP/house edge. Use a separate subsection/table for each wager when appropriate.

### <Main wager name>

**Stake:** 1 unit  
**Win payout:** <net profit, e.g. +1 unit>  
**Loss:** <net loss, e.g. −1 unit>  
**Push/tie treatment:** <if applicable>

Let:

- `p_win = <exact probability or formula>`
- `p_lose = <exact probability or formula>`
- `p_push = <exact probability or formula, if applicable>`

The expected value per 1-unit wager is:

```text
EV = (p_win × net win) + (p_lose × net loss) + (p_push × 0)
   = <substitution>
   = <result> units
```

```text
RTP = <expected return> × 100% = <result>%
House edge = −EV × 100% = <result>%
```

Explain how the probabilities were obtained: <enumeration / combinatorics / conditional probability / published rule table / verified simulation>. Link to the detailed derivation or source below.

| Outcome | Probability | Net result on 1 unit | EV contribution |
| --- | ---: | ---: | ---: |
| <win> | <value> | <value> | <value> |
| <loss> | <value> | <value> | <value> |
| <push, if any> | <value> | 0 | 0 |
| **Total** | **1** |  | **<EV>** |

## Probability model and derivation

Show enough working for a reader to reproduce the headline figures. Prefer exact fractions/counts before rounded decimals.

1. Define the sample space: `<all equally likely hands/outcomes/etc.>`.
2. Count or calculate each relevant outcome: `<derivation>`.
3. Check that all mutually exclusive outcome probabilities sum to 1.
4. Apply the stated payout, including commissions, rounding, caps, and tie/push handling.

```text
<Full derivation, for example>
Number of favourable outcomes = ...
Number of possible outcomes = ...
p = favourable / possible = ...
EV = Σ(probability × net payout) = ...
```

If the result is modelled rather than exact, state why exact enumeration is impractical, the model’s assumptions, random seed policy, sample size, confidence interval/error measure, and validation checks.

## Strategy and its mathematics

Describe decisions only when the player can actually make them. Never present a progression or “system” as overcoming a negative expectation.

### Recommended decision strategy

- **Decision:** <e.g. hit/stand, take odds, split, choose a wager>
- **Rule:** <the recommended action and the conditions where it applies>
- **Objective:** <maximise EV / minimise house edge / reduce variance / exploit a stated promotion>
- **Assumptions:** <rules, composition/deck count, bankroll constraints, etc.>

Show the calculation supporting the rule:

```text
EV(action A) = <derivation> = <value>
EV(action B) = <derivation> = <value>
Choose <action> because <comparison>.
```

Give the total effect relative to a baseline strategy:

| Strategy | Assumptions | EV / house edge | Variance or risk note |
| --- | --- | ---: | --- |
| <recommended strategy> | <rules> | <value> | <note> |
| <common alternative> | <rules> | <value> | <note> |

### Betting systems and bankroll strategies

Discuss common systems readers may encounter (for example, flat betting, Martingale, Paroli, stop-loss rules, or card counting) only with their mathematical limitations made explicit.

For each system, state:

- What changes: <bet size, wager selection, timing, etc.>
- What does **not** change: <the per-wager outcome probabilities / negative EV under the stated rules>
- The relevant math: <expected loss, ruin risk, variance, table limit effect, or count-based conditional EV>

```text
If every wager has EV = −h per unit, then for stakes b₁, b₂, …, bₙ:
E[total result] = −h × (b₁ + b₂ + … + bₙ).
```

If presenting an advantage-play or counting approach, include the count definition, true-count/conversion method where applicable, penetration/rule assumptions, bet spread, frequency of advantageous situations, and a full conditional-EV calculation. Clearly label it as model-dependent.

> **Reality check:** <Explain why the strategy cannot guarantee profit and the practical limitations.>

## Side bets and their mathematics

Give each side bet its own subsection. Do not quote a house edge without the specific paytable: side-bet returns often vary substantially by casino.

### <Side bet name>

**Rules:** <trigger/qualification conditions>  
**Paytable analysed:** <all qualifying outcomes and net payouts>  
**Rule/paytable dependence:** <where it varies and how the result changes>

| Outcome | Exact probability | Net payout on 1 unit | EV contribution |
| --- | ---: | ---: | ---: |
| <outcome 1> | <value> | <value> | <value> |
| <outcome 2> | <value> | <value> | <value> |
| <all other outcomes> | <value> | −1 | <value> |
| **Total** | **1** |  | **<EV>** |

```text
EV_side bet = Σ(p_outcome × net payout_outcome)
            = <substitution>
            = <result> units
House edge = −EV_side bet × 100% = <result>%
```

Explain whether the main-game strategy changes the side bet’s probability. If it does, calculate the conditional probability using the stated decision strategy; if it does not, say so.

> **Side-bet warning:** <State the variance and rule/paytable caveat plainly.>

## Simulator (if included)

Add `src/pages/games/<game>/simulator.astro` when a simulation is useful for demonstrating the model. It must run client-side and be reproducible.

Document:

- The random-number generator and seed input/default.
- Each simulated rule and payout.
- Number of trials and displayed uncertainty/statistics.
- The theoretical value used as the validation target.
- Why any simulated and exact results differ within sampling error.

```text
Theoretical EV: <value>
Simulation setup: <seed, trials, rules>
Observed EV: <value>
Difference / expected sampling error: <value>
```

## Sources & methodology

Place this section at the bottom of the game page. Cite primary rules/paytables where possible, then methodology and verification references. Links must lead directly to the source used.

- <Rules/paytable source — title, publisher/casino/regulator, URL, access date if useful>
- <Probability or methodology source — author/title, URL>
- <Independent verification source — URL>
- <Code/calculation notebook or reproducible script, if available — URL>

**Methodology:** <State which results are exact, how they were derived, what was simulated, the rule version/date, and how rounding is handled.>

## Bottom links

After the sources/methodology section, add a visible invitation to report an error or improve the analysis. Include a link to the repository, and use a direct GitHub edit link when the repository branch/path are known.

```md
---

Spot an error or want to improve this analysis? [Open an issue or contribute on GitHub](https://github.com/Suste69/OpenFiches).

[Edit this page on GitHub](https://github.com/Suste69/OpenFiches/edit/main/src/pages/games/<game>.astro)
```

Then render the shared `<SiteFooter />`. The footer carries the project-wide educational framing and contribution link; do not replace it with a game-specific disclaimer.
```

## Site integration

In addition to the game page itself:

1. Register the game in `src/pages/index.astro` by adding a `<GameCard />` at the marked insertion point. Ensure its title, route, house edge, variance, tags, and status agree with the page.
2. Follow the existing game pages for `BaseLayout`, `SiteHeader`, breadcrumbs, callouts, formula blocks, edit link styling, and `<SiteFooter />`.
3. Add `src/pages/games/<game>/simulator.astro` only when the simulation can be fully described and validated against the documented theory.
4. Run `npm run build` before opening a pull request.

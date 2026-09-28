# LeagueForge VM 1.4 — Dynamic Clubs & Smart Market

VM 1.4 is compatible with your VM 1.3.1 save.

## Updating without losing the save
Keep the SAME GitHub Pages repository and the SAME public URL/origin.

1. Export JSON from the current version as a backup.
2. Replace the repo-root files with the contents of `LeagueForge_VM_1_4`.
3. Commit/push and let GitHub Pages deploy.
4. Fully close the PWA on the iPhone.
5. Reopen LeagueForge from the Home Screen icon.

The VM 1.3.1 autosave hotfix is preserved. IndexedDB and the emergency local save remain compatible.

## Save migration
- Loads VM 1.3.1 / schema 5.3.1 automatically.
- Saves as schema 5.4 / VM1.4.
- Existing players receive deterministic potential based on current age/OVR.
- Historical seasons are not retroactively rewritten.
- Old club OVR/ATA/DEF is retained only as `initialRatings`; it no longer determines current match strength.

## Dynamic club strength
Current strength comes from the real best available XI, positional OVR, injuries and coach modifiers. The old fixed 25% ATA/DEF contribution is gone.

Club pages now show dynamic XI, ATA, DEF and squad average.

## Player potential and development
Players now have:
- `POT` (40–99 ceiling)
- visible trend `▲ +3` to `▼ -3`

Development uses age, potential gap, minutes, accumulated injury burden, Cantera coaching and a small random variation.

## Smart market
There is NO hard five-move cap. Activity falls progressively as a club completes more business, but clubs can go beyond five moves if their plan still calls for it.

Each player can change club only ONCE per transfer window. This applies to normal transfers, free agents and exchanges.

### Protected core, not sacred cows
At market opening every club identifies an original core from current quality + future value.
- Core players cannot move directly to a worse sporting destination.
- Segunda cannot normally poach a Primera core player.
- At most one original core player is sold directly in a summer.
- After a core sale, healthy non-declining starters receive extra protection.
- Clubs that have already weakened materially stop selling useful starters.
- Declining veterans and surplus players remain easier to move.

A Segunda star can still leave for a clearly stronger Primera club.

## Market plans
Each club uses one plan: `Competir`, `Ascenso`, `Consolidación`, `Estable` or `Reconstrucción`.

Division, recent finish, actual XI, promotion/relegation and stagnation affect the plan. A historically stagnant D2 club that now owns an elite squad is treated as an Ascenso project rather than being dismantled.

## Smarter valuation
Market decisions consider current positional gain, future development, age/decline, sporting destination, seller surplus, plan, protected status and budget.

This allows the AI to prefer, for example, a 75 OVR youngster with strong growth over an 81 OVR veteran already declining.

## Exchanges
Rare coherent deals can be:
- 1 player ↔ 1 player + cash
- occasional 2 players ↔ 1 player + cash

Both final squads must remain legal by total size and position limits.

## Economy
Potential affects transfer value but NOT operating cost. Squad maintenance uses current squad/XI quality and roster size, preventing future potential from draining budgets artificially.

## Validation summary
- Core engine: 60/60
- VM 1.1 market/economy: 9/9
- VM 1.2 draft: 8/8
- VM 1.3 balance: 7/7
- VM 1.4 smart market/development: 9/9
- Gameplay/balance total: 93/93 PASS

The autosave suite is preserved from VM 1.3.1. In the opaque browser sandbox, 5/6 diagnostics execute; the only unavailable test directly accesses `localStorage`, which that sandbox blocks.

Long-run stress:
- 3 independent universes × 30 seasons
- ~70.4 player movements per summer on average
- clubs reached 11–12 movement legs in a summer
- 0 roster/position violations
- final average XI ≈ 83.3
- final budget median across the three runs ≈ 105M

Real T23 save probe:
- Juglares: legacy 66 → dynamic XI ≈82.6 / displayed OVR 83
- plan becomes Ascenso
- one smart-market probe ended at XI ≈82.8
- Jinetes: XI ≈76.9 → ≈78.1 in the same probe
- duplicate same-window player moves: 0

Mobile layout: no horizontal overflow at 320, 390 or 430 px.

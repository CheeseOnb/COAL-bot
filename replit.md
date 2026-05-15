# COAL Bot

A Discord bot that delivers Bible verses by category with slash commands and daily scheduled verse delivery.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server + Discord bot (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Required secrets: `DISCORD_TOKEN`, `DISCORD_CLIENT_ID`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- Discord: discord.js v14
- Scheduler: node-cron (fires every minute, checks UTC hour/minute against stored schedules)
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/api-server/src/bot/verses.ts` — all verse data (NLT + KJV) across 12 categories
- `artifacts/api-server/src/bot/embed.ts` — Discord embed builders
- `artifacts/api-server/src/bot/commands/verse.ts` — `/verse` command
- `artifacts/api-server/src/bot/commands/dailyverse.ts` — `/dailyverse` command (set/now/stop/status)
- `artifacts/api-server/src/bot/scheduler.ts` — cron job that sends scheduled daily verses
- `artifacts/api-server/src/bot/registerCommands.ts` — registers slash commands with Discord on startup
- `lib/db/src/schema/dailyVerseSchedules.ts` — DB table for daily verse schedules

## Architecture decisions

- Bot runs inside the same Express process — no separate worker needed for this scale.
- Slash commands are registered globally on every startup (Discord caches them; redundant re-registration is harmless and simpler than detecting drift).
- Scheduler uses a 1-minute cron tick and matches UTC hour+minute — no per-schedule cron jobs, so adding thousands of servers doesn't create memory issues.
- Daily verse channel scheduling requires `Manage Channels` permission to prevent spam abuse.
- Schedules are stored per guild+channel so multiple channels in one server can have independent schedules.

## Product

- `/verse [category]` — Get a Bible verse from a specific category (or random if none chosen). Both NLT and KJV translations shown.
- `/dailyverse now` — Get a random verse immediately.
- `/dailyverse set <hour> [minute]` — Schedule a daily verse for this channel at the given UTC time.
- `/dailyverse stop` — Stop the daily verse for this channel.
- `/dailyverse status` — Check the current schedule for this channel.

**Categories:** Afraid, Anxious, Forgiveness, Joy, Overwhelmed, Protection, Wisdom, Understanding, Rest & Renewal, Authority, Identity in Christ, Covenant with Jesus.

## User preferences

- Bible translations: NLT (New Living Translation) and KJV (King James Version) — both shown side by side.

## Gotchas

- Discord slash commands take up to 1 hour to propagate globally after first registration.
- Daily verse times are in UTC. Consider adding a timezone-aware field in a future iteration.
- The `bufferutil` and `utf-8-validate` native modules are externalized in esbuild — discord.js works fine without them (they're optional performance upgrades).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

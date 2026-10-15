export const TIERS = [
  {
    id: 'tier1',
    label: 'Tier 1: Desk Node',
    name: 'Desk Node',
    base: 1850,
    desc: 'Designed for the common person. Includes mandatory local Router Ad Blocker and private local backup.',
  },
  {
    id: 'tier2',
    label: 'Tier 2: SOHO Vault',
    name: 'SOHO Vault',
    base: 5500,
    desc: 'Everything in Desk Node plus small office / home office server infrastructure and multi-VLAN isolation.',
  },
  {
    id: 'tier3',
    label: 'Tier 3: Home Core',
    name: 'Home Core',
    base: 14500,
    desc: 'For the gurus. A personal data center built to run local LLMs and offline private AI sandboxes.',
  },
]

export const UPGRADES = [
  {
    key: 'routerModem',
    title: 'Hardware Router / Modem Replacement',
    desc: 'Pre-configured custom gateway setup for ISP bridging',
    price: 250,
  },
  {
    key: 'smartHomeHub',
    title: 'Local Smart Home Hub',
    desc: 'Dedicated local automation node (Home Assistant local-first core, zero cloud telemetry)',
    price: 350,
  },
  {
    key: 'cloudBackupOpt',
    title: 'Zero-Knowledge Off-Site Cloud Mirror',
    desc: 'Optional encrypted secondary backup sync for disaster recovery',
    price: 150,
  },
  {
    key: 'upsUpgrade',
    title: 'Automated Battery UPS Fail-Safe',
    desc: '1500VA Smart-UPS with automated graceful Linux shutdown scripts',
    price: 650,
  },
  {
    key: 'dualGpu',
    title: 'Dual-GPU Local AI Array',
    desc: '2x RTX local inference GPUs (Combined 48GB VRAM) for running private offline LLMs',
    price: 2200,
  },
]

export const STORAGE_OPTIONS = [
  { size: '4TB', price: 200, label: '4TB Mirrored Pair' },
  { size: '8TB', price: 340, label: '8TB Mirrored Pair' },
  { size: '16TB', price: 500, label: '16TB Mirrored Pair' },
]

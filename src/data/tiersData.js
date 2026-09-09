export const TIERS = [
  {
    id: 'tier1',
    label: 'Tier 1: Sovereign Desk Node',
    name: 'Sovereign Desk Node',
    base: 2450,
    desc: 'Private desktop cloud backup, local VLAN containment, and air-gapped file vault.',
  },
  {
    id: 'tier2',
    label: 'Tier 2: SOHO Vault',
    name: 'SOHO Vault',
    base: 7800,
    desc: '12U rack-mount chassis, 10Gbps switch, battery failover, and local AI/NVR sandbox.',
  },
  {
    id: 'tier3',
    label: 'Tier 3: Omniscient Home Core',
    name: 'Omniscient Home Core',
    base: 18500,
    desc: '24U silent enclosure, dual-GPU acceleration (48GB VRAM), closed-loop liquid cooling, and full local Frigate NVR integration.',
  },
]

export const UPGRADES = [
  {
    key: 'upsUpgrade',
    title: 'Automated Battery UPS Fail-Safe',
    desc: '1500VA Smart-UPS with automated graceful Linux shutdown scripts',
    price: 650,
  },
  {
    key: 'dualGpu',
    title: 'Dual-GPU Local AI Array',
    desc: '2x RTX local inference GPUs (Combined 48GB VRAM) for offline LLMs',
    price: 2200,
  },
  {
    key: 'liquidCooling',
    title: 'Whisper-Quiet Fluid Cooling Loop',
    desc: 'Custom copper liquid loop for continuous 100% silent compute load',
    price: 1200,
  },
  {
    key: 'acousticPanels',
    title: 'AC Infinity Quiet Exhaust & Insulation',
    desc: 'Acoustic dampening panels + digital thermal fan control profile',
    price: 450,
  },
  {
    key: 'tenGbSwitch',
    title: '10Gbps Managed SFP+ Switch & Firewall',
    desc: 'Enterprise routing engine with dedicated physical local VLAN isolation',
    price: 850,
  },
]

export const STORAGE_OPTIONS = [
  { size: '16TB', price: 0, label: 'Included ZFS' },
  { size: '32TB', price: 550, label: '+$550' },
  { size: '64TB', price: 1400, label: '+$1,400' },
  { size: '128TB', price: 3200, label: '+$3,200' },
]

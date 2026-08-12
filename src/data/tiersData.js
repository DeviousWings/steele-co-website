export const TIERS = [
  {
    id: 'tier1',
    label: 'Tier 1: Desk Node',
    name: 'Desk Node',
    base: 2450,
    desc: 'Private desktop cloud backup & local VLAN containment.',
  },
  {
    id: 'tier2',
    label: 'Tier 2: SOHO Vault',
    name: 'SOHO Vault',
    base: 7800,
    desc: '12U rack-mount chassis, 10Gbps switch, battery failover, local AI sandbox.',
  },
  {
    id: 'tier3',
    label: 'Tier 3: Home Core',
    name: 'Home Core',
    base: 18500,
    desc: '24U silent enclosure, dual-GPU acceleration (48GB VRAM), closed-loop liquid cooling.',
  },
]

export const UPGRADES = [
  {
    key: 'upsUpgrade',
    title: 'Automated Battery UPS Fail-Safe',
    desc: '1500VA Smart-UPS with automated graceful Linux shutdown',
    price: 650,
  },
  {
    key: 'dualGpu',
    title: 'Dual-GPU Acceleration Array',
    desc: '2x RTX local inference GPUs (Combined 48GB VRAM) for offline AI',
    price: 2200,
  },
  {
    key: 'liquidCooling',
    title: 'Whisper-Quiet Fluid Cooling Loop',
    desc: 'Custom copper liquid loop for continuous 100% compute load silently',
    price: 1200,
  },
  {
    key: 'acousticPanels',
    title: 'AC Infinity Quiet Exhaust & Insulation',
    desc: 'Acoustic dampening panels + digital thermal fan control',
    price: 450,
  },
  {
    key: 'tenGbSwitch',
    title: '10Gbps Managed SFP+ Switch & Firewall',
    desc: 'Enterprise routing engine with dedicated physical VLAN isolation',
    price: 850,
  },
]

export const STORAGE_OPTIONS = [
  { size: '16TB', price: 0, label: 'Included' },
  { size: '32TB', price: 550, label: '+$550' },
  { size: '64TB', price: 1400, label: '+$1,400' },
  { size: '128TB', price: 3200, label: '+$3,200' },
]

// Desk Node — Tier 1. Prices are averages (hours × $150).
// Parts on the base are recovered inside the base hours, not as a separate hardware total.

export const LABOR_RATE = 150

export const DESK_NODE_BASE = {
  label: 'Base Build & Ad-Blocking Core',
  hours: 4,
  price: 600,
  desc: 'Network core assembly, Raspberry Pi 5 + AdGuard Home imaging and configuration, TP-Link switch install, full system test. Average 4 hours.',
  hardwareDesc: 'Raspberry Pi 5 (board/case/PSU/microSD) + TP-Link TL-SG108 8-port switch',
}

export const DESK_NODE_OPTIONS = [
  {
    key: 'router',
    label: 'Router / Firewall',
    hours: 2,
    price: 300,
    desc: 'Flat average for a typical router or firewall placement, configuration, and Wi-Fi check.',
  },
  {
    key: 'smartHome',
    label: 'Smart Home Setup',
    hours: 3,
    price: 450,
    desc: 'Home Assistant install and a typical device set. Scope moves with device count.',
  },
]

export const DESK_NODE_STORAGE = [
  { size: '4TB', drivePairCost: 200, label: '4TB Mirrored' },
  { size: '8TB', drivePairCost: 330, label: '8TB Mirrored' },
  { size: '16TB', drivePairCost: 510, label: '16TB Mirrored' },
]

export const SIMPLISAFE_INSTALL = {
  key: 'surveillance',
  label: 'SimpliSafe Install',
  hours: 2.5,
  price: 375,
  desc: 'Install and setup only. Client buys the SimpliSafe kit and any monitoring plan.',
}

export const DESK_NODE_CARE = [
  { id: 'none', label: 'Self-Managed (No Plan)', monthly: 0, desc: 'Full root access. You handle OS updates and backups.' },
  { id: 'sentinel', label: 'Sentinel Care', monthly: 49, desc: '24/7 read-only thermals and client-gated patch tunnels.' },
  { id: 'enterprise', label: 'Enterprise Care', monthly: 149, desc: 'Priority drive swap, cluster care, and local AI tuning.' },
]

// Desk Node — Tier 1 pricing data
// Model: labor (hours × rate) is additive per selected option.
// Hardware costs are separate line items, no labor impact except where noted.

export const LABOR_RATE = 150 // $/hr

export const DESK_NODE_BASE = {
  label: 'Desk Node Base Build',
  hours: 4, // Pi 5 / AdGuard Home programming (~1hr) + core assembly, switch install, testing (~3hr)
  desc: 'Network core assembly, Raspberry Pi 5 + AdGuard Home imaging & configuration, TP-Link switch install, full system test.',
  hardwareCost: 100, // Pi 5 kit (~90) + TL-SG108 switch (20), rounded
  hardwareDesc: 'Raspberry Pi 5 (board/case/PSU/microSD) + TP-Link TL-SG108 8-port switch',
}

export const DESK_NODE_OPTIONS = [
  {
    key: 'smartHome',
    label: 'Smart Home Setup',
    hours: 3,
    hardwareCost: 0,
    desc: 'Home Assistant install, configuration, and integration of a typical device set (thermostat, smart plugs/lights). Actual scope varies by device count.',
    isAverage: true,
  },
  {
    key: 'surveillance',
    label: 'Surveillance (SimpliSafe Install)',
    hours: 2.5,
    hardwareCost: 0, // client purchases SimpliSafe kit directly
    desc: 'Professional install & setup of a SimpliSafe security system. Client purchases hardware/monitoring plan directly; this covers install & configuration labor only.',
    isAverage: true,
  },
]

export const DESK_NODE_STORAGE = [
  { size: '4TB', drivePairCost: 200, label: '4TB Mirrored' },
  { size: '8TB', drivePairCost: 330, label: '8TB Mirrored' },
  { size: '16TB', drivePairCost: 510, label: '16TB Mirrored' },
]
// NOTE: NAS enclosure cost not yet finalized — add to drivePairCost once selected.

export const DESK_NODE_ROUTER_NOTE =
  'Router priced separately based on household size, coverage needs, and whether mesh/whole-home Wi-Fi is required. Quoted individually after consultation.'

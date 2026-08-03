export const tiers = [
  {
    id: 'tier1',
    name: 'Tier 1: Desk Node',
    basePrice: 2450,
    description: 'Ultra-quiet, compact desktop form-factor engineered for private local cloud backup and personal file containment.',
    features: [
      'Encrypted On-Prem NAS Vault',
      'Local VLAN Segmentation',
      'Whisper-Quiet Air Thermal Array',
      'Zero Cloud Telemetry Egress'
    ]
  },
  {
    id: 'tier2',
    name: 'Tier 2: SOHO Vault',
    basePrice: 7800,
    description: 'Armored 12U rack-mount chassis for home offices and trade operations requiring continuous local AI compute and isolated storage.',
    features: [
      'Full 10Gbps Internal Network Switch',
      'Redundant Battery Failover Array',
      'Local LLM & Vision Model Inference Sandbox',
      'Hardened Local Firewall Security Engine'
    ]
  },
  {
    id: 'tier3',
    name: 'Tier 3: Home Core',
    basePrice: 18500,
    description: 'Enterprise-grade 24U silent server enclosure designed for total property data sovereignty and high-density local storage.',
    features: [
      'Dual-GPU Acceleration Node (48GB VRAM)',
      'Closed-Loop Fluid Liquid Cooling',
      'Hot-Swappable Redundant Power Supply',
      'Full Property Telemetry & Camera Containment'
    ]
  }
];

export const upgradeOptions = {
  upsUpgrade: 650,
  dualGpu: 2200,
  liquidCooling: 1200,
  acousticPanels: 450,
  tenGbSwitch: 850
};

export const storagePrices = {
  '16TB': 0,
  '32TB': 550,
  '64TB': 1400,
  '128TB': 3200
};

export const TERMINAL_INITIAL_LOGS = [
  { id: 1, type: 'info', text: 'STEELE_CO Local Firewall Engine v4.12 initialized.' },
  { id: 2, type: 'success', text: 'On-premise NAS vault mounted on 10Gbps isolated VLAN.' },
  { id: 3, type: 'warning', text: 'BLOCKED: Smart TV attempted outbound telemetry sync to [vendor-ad-tracker.cloud].' },
  { id: 4, type: 'success', text: 'Local LLM Inference Sandbox ready. Zero cloud network egress detected.' },
]

export const TERMINAL_ROTATING_LOGS = [
  'Encrypted backup verification complete (0 errors, 100% data integrity).',
  'Homomorphic compute sandbox: 14 encrypted packets processed locally.',
  'BLOCKED: Cloud Ring doorbell attempt to upload unencrypted stream packet.',
  'UPS Status: Nominal (100% capacity, 48 min runtime on grid failure).',
]

export const PACKET_LOGS = {
  cloud: [
    { id: 1, time: '12:04:11', device: 'Smart TV', dest: 'ad-collector.samsung.cloud', payload: 'Keystroke & Audio Fingerprint', status: 'TRANSMITTED', color: 'text-alert' },
    { id: 2, time: '12:04:12', device: 'Cloud Doorbell', dest: 's3-video-bucket.aws.com', payload: 'Unencrypted 1080p Stream', status: 'TRANSMITTED', color: 'text-alert' },
    { id: 3, time: '12:04:14', device: 'Smart Vacuum', dest: 'telemetry.robot.io', payload: 'Floorplan Spatial Map JSON', status: 'TRANSMITTED', color: 'text-alert' },
    { id: 4, time: '12:04:18', device: 'Voice Assistant', dest: 'audio-listen.cloud.net', payload: 'Ambient Audio Sample', status: 'TRANSMITTED', color: 'text-alert' },
  ],
  steele: [
    { id: 1, time: '12:04:11', device: 'Smart TV', dest: 'ad-collector.samsung.cloud', payload: 'Keystroke & Audio Fingerprint', status: 'DROP (CONTAINED)', color: 'text-emerald' },
    { id: 2, time: '12:04:12', device: 'Cloud Doorbell', dest: 's3-video-bucket.aws.com', payload: 'Local NAS Vault Sync Only', status: 'LOCAL LAN ONLY', color: 'text-cyan' },
    { id: 3, time: '12:04:14', device: 'Smart Vacuum', dest: 'telemetry.robot.io', payload: 'Spatial Map Saved Locally', status: 'DROP (CONTAINED)', color: 'text-emerald' },
    { id: 4, time: '12:04:18', device: 'Voice Assistant', dest: 'audio-listen.cloud.net', payload: 'Local Voice AI Engine', status: 'LOCAL LAN ONLY', color: 'text-cyan' },
  ],
}

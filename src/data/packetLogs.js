export const packetLogs = [
  {
    id: 1,
    device: 'Smart TV (Living Room)',
    protocol: 'HTTPS / PORT 443',
    destination: 'telemetry.vendor-analytics.cloud',
    payload: '{ user_activity: "watching_channel_4", audio_fingerprint_hash: "a8f921d" }'
  },
  {
    id: 2,
    device: 'Cloud Doorbell Camera',
    protocol: 'RTSP / PORT 554',
    destination: 'stream-upload.ring-cloud-servers.net',
    payload: '{ frame_rate: 30, video_chunk_enc: false, motion_vector_map: "zone_2" }'
  },
  {
    id: 3,
    device: 'Smart Thermostat',
    protocol: 'MQTT / PORT 8883',
    destination: 'ingest.home-iot-monopoly.io',
    payload: '{ occupancy_sensor: true, ambient_temp: 72, wifi_bssid_map: [...] }'
  },
  {
    id: 4,
    device: 'Robot Vacuum',
    protocol: 'TCP / PORT 9001',
    destination: 'spatial-map.robotics-cloud.cn',
    payload: '{ floorplan_mesh_vertices: 1420, wifi_signal_strength_heatmap: [...] }'
  }
];

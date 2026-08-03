# steele-co-website

steele-co-website/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/                    # Images, hardware diagrams, branding graphics
│   │   └── server-rack-matrix.svg
│   │
│   ├── components/                # Reusable UI components & modals
│   │   ├── Navbar.jsx             # Top bar, navigation tabs, mobile menu
│   │   ├── Footer.jsx             # Footer with the uplifting AI disclaimer
│   │   ├── TerminalMonitor.jsx    # Simulated "STEELE_DEFENSE_MONITOR" widget
│   │   ├── PacketInspector.jsx    # Interactive packet auditor simulator
│   │   ├── QuoteModal.jsx         # "Secure Space" deployment intake modal
│   │   └── ContractModal.jsx      # "No Data, No Fee" trade code modal
│   │
│   ├── pages/                     # Main view pages
│   │   ├── Home.jsx               # Anti-cloud hero, manifesto & Rossmann code
│   │   ├── SovereignTiers.jsx     # Interactive Configurator, BOM & Tiers
│   │   ├── SdiActVault.jsx        # Bill reading room & Constituent letter builder
│   │   ├── TechExpose.jsx         # Teardowns & Packet audit articles
│   │   └── CloudRoi.jsx           # Financial cloud bleed calculator
│   │
│   ├── data/                      # Hardcoded text, bill statutes & price lists
│   │   ├── tiersData.js           # Baseline hardware BOMs and upgrade pricing
│   │   ├── sdiActText.js          # Full statutory text for Titles I, II, & III
│   │   └── packetLogs.js          # Simulated packet payloads for auditor
│   │
│   ├── styles/                    # Stylesheets and custom CSS variables
│   │   ├── globals.css            # Tailwind directives, color tokens, scrollbars
│   │   └── terminal.css           # Custom terminal glow & matrix effects
│   │
│   ├── App.jsx                    # Root app component (handles active state/tabs)
│   └── main.jsx                   # React entry point
│
├── index.html                     # HTML shell
├── tailwind.config.js             # Tailwind CSS configuration (custom colors)
├── package.json                   # Dependencies (lucide-react, react, etc.)
└── README.md

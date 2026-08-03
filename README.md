# steele-co-website

steele-co-website/ </br>
├── public/</br>
│   ├── favicon.ico</br>
│   └── robots.txt</br>
├── src/</br>
│   ├── assets/                    # Images, hardware diagrams, branding graphics</br>
│   │   └── server-rack-matrix.svg</br>
│   │</br>
│   ├── components/                # Reusable UI components & modals</br>
│   │   ├── Navbar.jsx             # Top bar, navigation tabs, mobile menu</br>
│   │   ├── Footer.jsx             # Footer with the uplifting AI disclaimer</br>
│   │   ├── TerminalMonitor.jsx    # Simulated "STEELE_DEFENSE_MONITOR" widget</br>
│   │   ├── PacketInspector.jsx    # Interactive packet auditor simulator</br>
│   │   ├── QuoteModal.jsx         # "Secure Space" deployment intake modal</br>
│   │   └── ContractModal.jsx      # "No Data, No Fee" trade code modal</br>
│   │</br>
│   ├── pages/                     # Main view pages</br>
│   │   ├── Home.jsx               # Anti-cloud hero, manifesto & Rossmann code</br>
│   │   ├── SovereignTiers.jsx     # Interactive Configurator, BOM & Tiers</br>
│   │   ├── SdiActVault.jsx        # Bill reading room & Constituent letter builder</br>
│   │   ├── TechExpose.jsx         # Teardowns & Packet audit articles</br>
│   │   └── CloudRoi.jsx           # Financial cloud bleed calculator</br>
│   │</br>
│   ├── data/                      # Hardcoded text, bill statutes & price lists</br>
│   │   ├── tiersData.js           # Baseline hardware BOMs and upgrade pricing</br>
│   │   ├── sdiActText.js          # Full statutory text for Titles I, II, & III</br>
│   │   └── packetLogs.js          # Simulated packet payloads for auditor</br>
│   │</br>
│   ├── styles/                    # Stylesheets and custom CSS variables</br>
│   │   ├── globals.css            # Tailwind directives, color tokens, scrollbars</br>
│   │   └── terminal.css           # Custom terminal glow & matrix effects</br>
│   │</br>
│   ├── App.jsx                    # Root app component (handles active state/tabs)</br>
│   └── main.jsx                   # React entry point</br>
│</br>
├── index.html                     # HTML shell</br>
├── tailwind.config.js             # Tailwind CSS configuration (custom colors)</br>
├── package.json                   # Dependencies (lucide-react, react, etc.)</br>
└── README.md</br>
</br>

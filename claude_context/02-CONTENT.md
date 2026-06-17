# 02 — Content (single source of truth)

All copy below is final unless marked TODO. Do not invent metrics or claims
not listed here. No em dashes anywhere on the site.

## Identity
- Name: **Noah Thomas**
- Tagline (hero h1): **Mechanical engineer building hardware at the
  intersection of humans and machines.**
- Hero subline: Second-year Mechanical Engineering student at the University
  of Waterloo, Option in Biomechanics. I build neural interface hardware and
  wearable sensing systems, and I am looking for a Fall 2026 co-op in
  surgical robotics, humanoid robotics, or medtech.
- Email: nethomas@uwaterloo.ca
- LinkedIn: https://linkedin.com/in/noah-thomas-7a13892a9
- GitHub: https://github.com/noaht155
- Notion portfolio (do not link prominently; site replaces it): noah-thomas.notion.site
- Resume: link to `/assets/Noah_Thomas_Resume.pdf` (owner will drop file in)

## Hero metrics strip (3 items, JetBrains Mono)
- `2` co-op terms completed
- `0/30` misclassifications (NeuroGrip validation)
- `$110K` annual savings delivered (Mondelez)

---

## PROJECT 1 — NeuroGrip
- One-liner: EMG-controlled, tendon-driven 3D printed robotic hand.
- Card metrics: `0/30 misclassifications` · `5x MG90D servos`
- Tech tags: SolidWorks, C++, Arduino, EMG, DFM, Bambu P1S
- Detail page sections, mirroring `portfolio_context.md` structure
  (Goal / Build / The Call That Mattered / Result / Next / Repo / Skills):
  - **Goal:** Model and fabricate a 3D printed hand with individual finger
    movement, controlled non-invasively via surface EMG, proving feasibility
    of low-cost neurological prosthetic control.
  - **Build:** SolidWorks design with DFM principles: press-fit filament
    joints, zero hardware fasteners. Each finger driven by one
    continuous-rotation MG90D servo through an antagonistic dual nylon
    tendon drive (one direction flexes, the other extends, zero return
    springs), powered and commanded through a PWM driver board. EMG module
    detects muscular voltage, passes through a rolling-average/threshold
    noise-rejection algorithm on an Arduino UNO R3, classification output
    drives the PWM board.
  - **The Call That Mattered:** Two calls kept the project inside its
    low-cost requirement. (1) Cheap EMG sensors have high sampling rate but
    no noise filtering, so a rolling average plus threshold value determines
    contracted vs relaxed. (2) Standard positional servos cap at 180-270
    degrees, requiring a spool too large for the compact forearm form
    factor; continuous-rotation servos pull arbitrary tendon length in a
    small package, with each finger driving to stall against the gripped
    object (stall current under 3A for under half a second) so fingers
    conform independently to irregular shapes.
  - **Result:** Zero misclassifications across 30 trials (success defined
    as clench on contraction, release on relaxation). Hand assembly
    completed without any hardware, joints press-fit with filament. Grip
    capability enhanced by the dual tendon design.
  - **Next:** Implement wrist actuation and lateral finger actuation.
    Replace the R3, EMG module, and PWM driver with a custom PCB so
    electronics fit inside the arm enclosure. Add current sensing to
    prevent servo burnout under stall, or move to stepper motors.
  - **Repo:** https://github.com/noaht155/project_neurogrip
  - **Skills:** SolidWorks, C++, Arduino, Electromyography, Bambu Studio,
    3MF, DFM
- Images: pull from owner's PDF portfolio (hand photos, CAD renders).
  Placeholder paths: `/assets/neurogrip/hero.jpg`, `/assets/neurogrip/cad.jpg`,
  `/assets/neurogrip/assembly.jpg`

## PROJECT 2 — StrideSync
- One-liner: Bilateral wearable gait analysis system for distance runners.
- Card metrics: `8 IMUs + FSRs` · `2x ESP32`
- Tech tags: ESP32, C++, I2C, Mahony filter, Python, Plotly Dash, SolidWorks
- Detail page sections, mirroring `portfolio_context.md` structure
  (Goal / Build / The Call That Mattered / Progress / Next / Repo / Skills;
  uses "Progress" rather than "Result" because the project is ongoing):
  - **Goal:** Low-cost wearable gait analysis measuring cadence, ground
    contact time, flight time, left/right symmetry, knee flexion, and trunk
    lean, with a post-run dashboard and 3D simulation.
  - **Build:** Two ESP32 modules (one per leg), developed in PlatformIO
    with GitHub for version control. Six MPU-6050 IMUs (thigh, shank, foot
    per leg) on an I2C bus through a TCA9548A multiplexer, fused with a
    Mahony filter, plus FSR sensors along each leg tracking joint angle and
    foot contact. Python dashboard (Plotly, Pandas, NumPy, Matplotlib)
    visualizes run data and 3D gait simulation. Custom SolidWorks housings.
  - **The Call That Mattered:** Mahony filter over raw gyro integration or a
    full Kalman filter. Raw gyro integration compounds drift error on cheap
    MPU-6050s; a full Kalman filter is too heavy to tune and leaves no
    compute headroom on an ESP32 juggling multiple IMUs over a multiplexed
    bus in real time. Mahony uses the accelerometer's gravity vector as an
    absolute reference to correct the gyro, with an integral term that
    removes gyro bias, the actual source of drift, at a fraction of a
    Kalman filter's compute cost.
  - **Progress:** Test circuit initializing MPU-6050s verified; calibration
    protocol and Mahony filter implemented successfully. Dashboard complete
    (metric graphs, 3D gait simulation, running data string outputs, Garmin
    FIT file comparison), verified against a generated test run file.
    Hardware moving from breadboard to soldered perfboard modules next.
    *(Keep honest: label as "In active development".)*
  - **Next:** Fabricate perfboard circuits and enclosures. Design the device
    mounting mechanism and complete a real test run.
  - **Repo:** https://github.com/noaht155/project_stridesync
  - **Skills:** C++, PlatformIO, GitHub, Python, ESP32, Soldering,
    SolidWorks, 3MF
- Images: system architecture diagram, workflow diagram, breadboard photo from
  PDF portfolio. Paths: `/assets/stridesync/architecture.png`,
  `/assets/stridesync/breadboard.jpg`, `/assets/stridesync/dashboard.png`

---

## EXPERIENCE (timeline, newest first)
1. **Engineering Co-op — Mondelez International**, Hamilton ON,
   Jan 2026 - May 2026
   - Led a $350,000 process improvement project delivering $110,000 in
     annual cost savings
   - Prepared CFD geometry in Autodesk Inventor for a $1,000,000 oven
     upgrade focused on explosion risk prevention
   - Drove a facility project from ideation to implementation in 2 months:
     +20% capacity, +80% satisfaction
2. **Assistant QA Inspector — S&C Electric Canada Ltd**, May 2025 - Aug 2025
   - Identified defects on high-voltage switches using GD&T
   - Supported ISO 9001 retention through metrology and calibration
   - Eliminated 20 hours of bimonthly downtime via production inspections

## SKILLS (grouped, render as tag grids)
- **CAD / Manufacturing:** SolidWorks, Autodesk Inventor, AutoCAD,
  Bambu Studio, DFM, GD&T, 3D printing
- **Code:** C, C++, Python, MATLAB + Simulink, Simscape Multibody
- **Embedded / Hardware:** ESP32, Arduino, I2C, PWM, EMG, IMU sensor fusion,
  soldering (fine pitch)
- **Tools:** Git/GitHub, VS Code, PlatformIO, Docker

## CONTACT section
- Heading: **Let's build something.**
- Line: Looking for Fall 2026 co-op roles in surgical robotics, humanoid
  robotics, and medtech wearables. Open to Waterloo, Toronto, Boston, and
  the Bay Area.
- Buttons: Email me (primary, mailto), LinkedIn (secondary), Resume (secondary)

## Footer
- "Noah Thomas · Built with plain HTML/CSS and stubbornness · 2026 · GitHub"
  (GitHub links to https://github.com/noaht155)

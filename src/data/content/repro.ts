import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  sti: [
    {
      heading: 'Sexually transmitted infections at a glance',
      body: 'Chlamydia — Bacteria (C. trachomatis) — Often asymptomatic; discharge, dysuria; #1 reportable STI — Antibiotics; treat partners; NAAT screening\nGonorrhea — Bacteria (N. gonorrhoeae) — Purulent discharge, dysuria; can infect eyes/throat/joints — Antibiotics (often with chlamydia coverage)\nSyphilis — T. pallidum (bacteria) — Painless chancre (primary) → rash (secondary) → organ damage — Penicillin; RPR/VDRL screen, FTA-ABS confirm\nGenital herpes — HSV-1/2 (virus) — Painful recurrent vesicles/ulcers — Antivirals (acyclovir) — suppress, not cure; Tzanck/serology\nHPV — Virus — Genital warts; oncogenic types → cervical cancer — Wart removal; HPV vaccine prevents it',
    },
    {
      heading: 'Teaching',
      body: 'Teaching across all STIs: complete medication, treat/notify partners, safer-sex practices, limit partners, regular screening, follow-up.',
    },
    {
      heading: 'Complications',
      body: 'Complications: PID, ectopic pregnancy, infertility, neonatal infection, ↑ HIV risk; syphilis → congenital syphilis + neuro/cardiac damage.',
    },
    {
      heading: 'Confidentiality',
      body: 'Confidentiality + nonjudgmental care with adolescents is essential.',
    },
  ],

  menstrual: [
    {
      heading: 'Menstrual note',
      body: 'Amenorrhea: primary = no menses by age 16; secondary = no menses ≥3 months. First test = pregnancy test.',
    },
  ],
}

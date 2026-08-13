import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  'poisonings': [
    { heading: '1. Poisoning — General management', body: '• Assess ABCs first; call Poison Control (1-800-222-1222) before treating; identify the substance + amount + time.' },
    { body: '• Do NOT induce vomiting routinely (ipecac is no longer recommended). Activated charcoal for select ingestions; give the specific antidote; supportive care, IV fluids, monitor VS + I&O.' },
    { heading: 'Antidotes', body: 'Poison — Antidote / treatment' },
    { body: 'Acetaminophen — Acetylcysteine (Mucomyst) — check acetaminophen level + LFTs' },
    { body: 'Opioids — Naloxone' },
    { body: 'Iron — Deferoxamine (chelation)' },
    { body: 'Lead — Chelation (succimer, EDTA, dimercaprol)' },
    { body: 'Anticoagulant (warfarin) — Vitamin K' },
    { body: 'Benzodiazepines — Flumazenil' },
    { heading: 'Lead poisoning', body: 'From old paint/soil/dust; often asymptomatic; causes cognitive impairment + developmental delay. Screen blood lead level; remove the source; chelation for high levels; iron-rich diet.' },
  ],
  'drowning': [
    { heading: '2. Drowning & Respiratory Emergencies', body: '• Drowning (leading injury death in young children): prognosis depends on hypoxia duration; airway/breathing first; C-spine precautions. Prevention: never leave a child unattended near water, pool fencing/gates, life jackets, lock toilet seats (a child can drown in 1 inch of water).' },
    { body: '• Respiratory emergency: early distress = tachypnea, tachycardia, nasal flaring, retractions, grunting; late/ominous = bradypnea, bradycardia, cyanosis, stupor. Choking → back blows/chest thrusts (infant) or abdominal thrusts (child); teach CPR.' },
  ],
  'sids': [
    { heading: '3. Sudden Infant Death Syndrome (SIDS)', body: 'Risk factors' },
    { body: 'Prone/side sleeping, soft bedding/co-sleeping, maternal smoking/secondhand smoke, prematurity/low birth weight, overheating, male infant.' },
    { heading: 'Prevention teaching (the \'Safe Sleep\' ABCs)', body: 'Alone, on the Back, in a Crib. Firm flat mattress, no soft objects/loose bedding, avoid overheating, no tobacco exposure, keep immunizations current, offer a pacifier. Support the grieving family after a loss.' },
  ],
  'burns': [
    { heading: '4. Burns', body: '• Depth: 1st (superficial) red/dry/painful; 2nd (partial) blistered/moist/very painful; 3rd (full) dry/waxy/leathery, painless. Inhalation injury (facial burns, singed nares, soot, hoarseness) = airway priority.' },
    { body: '• Management: ABCs first; stop the burning (remove clothing); cool with saline (not ice); leave blisters intact; silver sulfadiazine; sterile dressing; pain control; fluids; tetanus. Estimate %TBSA with a pediatric-modified Rule of Nines or Lund-Browder chart. Assess for abuse (stocking/glove or patterned burns).' },
  ],
  'home-safety': [
    { heading: '5. Injury Prevention by mechanism (teaching)', body: '• Water heater <120°F; smoke detectors + fire drills; safe cribs (slats ≤2 3/8 in apart, firm mattress, no gaps); stair gates, no baby walkers; window guards; lock meds/chemicals; car seats (rear-facing until ≥2 yr).' },
  ],
  'accident': [
    { heading: 'Injury Prevention by mechanism (teaching)', body: '• Most injuries happen after a stressful event, when the caregiver is tired/ill, or during routine changes (holidays, travel). Not all injuries are accidents — consider abuse.' },
  ],
  'med-mgmt': [],
  'trauma': [
    { heading: 'Chapter 52 — Unintentional Injury & Emergencies', body: 'Poisoning, drowning, SIDS, burns, respiratory emergencies, injury prevention' },
    { body: 'Not all injuries are accidents — consider abuse.' },
  ],
  'head-injury-trauma': [],
  'resp-failure': [
    { heading: 'Respiratory emergency', body: 'Respiratory emergency: early distress = tachypnea, tachycardia, nasal flaring, retractions, grunting; late/ominous = bradypnea, bradycardia, cyanosis, stupor. Choking → back blows/chest thrusts (infant) or abdominal thrusts (child); teach CPR.' },
  ],
}

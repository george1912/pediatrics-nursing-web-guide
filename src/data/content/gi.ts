import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  'gi-assess': [
    {
      heading: 'Fluid status indicators',
      body: 'Infants dehydrate FAST — small extracellular reserve; diarrhea in an infant is always serious. Best indicators of fluid status: daily weight, urine output (<1 mL/kg/h = concern), and activity level.',
    },
    {
      heading: 'High-yield GI obstruction / surgical disorders — hallmark signs',
      body: 'Disorder — Hallmark sign — Key nursing point\nPyloric stenosis — Projectile NON-bilious vomiting, olive-shaped mass RUQ, always hungry — Metabolic alkalosis; correct fluids/lytes BEFORE pyloromyotomy\nIntussusception — ‘Currant-jelly’ (blood+mucus) stool, sausage mass, drawing knees to chest — Air/contrast enema (non-surgical) first; watch for recurrence\nHirschsprung disease — No meconium in 24–48 h, ribbon-like foul stool, distention — Aganglionic colon; dx by biopsy; complication = enterocolitis\nMalrotation / volvulus — Bilious vomiting + abdominal pain (life-threatening) — Surgical emergency; NPO, NGT, IV fluids\nNecrotizing enterocolitis — Distended discolored abdomen, bloody stool, feeding intolerance (preemie) — NPO to rest bowel, TPN, NGT; ostomy care\nAppendicitis — RLQ pain (McBurney), then rigid abdomen if ruptured — Rigid abdomen = peritonitis → notify provider; NPO\nMeckel diverticulum — Painless rectal bleeding, currant/bloody stool — ‘Rule of 2s’; radionuclide scan; watch for hemorrhage',
    },
    {
      heading: 'Two ‘don’t miss’ emergencies',
      body: 'Two ‘don’t miss’ emergencies: bilious vomiting (malrotation/volvulus) and a rigid abdomen (perforation/peritonitis) → both need immediate provider notification. NEC → stop feeds (NPO).',
    },
    {
      heading: 'Appendicitis signs (professor)',
      body: 'McBurney point: tenderness at RLQ (1/3 from the anterior iliac spine to umbilicus) — the classic localized appendicitis pain. Rovsing sign: pressing the LEFT lower quadrant causes pain in the RIGHT lower quadrant. Psoas sign: pain when the right hip is extended (or the child raises the right thigh against resistance). Obturator sign: pain with internal rotation of the flexed right hip. Board-like / rigid abdomen = PERITONITIS (ruptured appendix) — a surgical emergency; also watch for sudden relief of pain then worsening (rupture). Appendicitis itself is an emergency: NPO, IV fluids/antibiotics, appendectomy.',
    },
  ],

  fluid: [
    {
      heading: 'Dehydration signs',
      body: 'Dehydration signs: dry mucous membranes, sunken fontanel (infant), no tears, ↓skin turgor (tenting), tachycardia, delayed cap refill, ↓dark urine, lethargy.',
    },
    {
      heading: 'Dehydration types',
      body: 'Isotonic — Normal Na (130–150) — Water + electrolytes lost equally; most common\nHypotonic — ↓ Na (<130) — More electrolyte than water lost; shock risk earlier\nHypertonic — ↑ Na (>150) — More water than electrolyte lost; seizure risk with rehydration',
    },
    {
      heading: 'Classic link',
      body: 'Classic link: persistent VOMITING (pyloric stenosis) → metabolic ALKALOSIS + hypokalemia + dehydration. Persistent DIARRHEA → metabolic ACIDOSIS. Oral rehydration therapy (ORT) is first-line for mild/moderate dehydration; IV for severe.',
    },
    {
      heading: 'Foodborne illness (quick hit)',
      body: 'Foodborne illness: vomiting/diarrhea → electrolyte imbalance + acid-base disturbance + dehydration (oral rehydration first).',
    },
  ],

  'gi-acid': [
    {
      heading: 'Acid-base',
      body: 'Metabolic acidosis — ↓ pH, ↓ HCO3 — Diarrhea (loss of bicarb), DKA, shock; rapid deep breathing (Kussmaul)\nMetabolic alkalosis — ↑ pH, ↑ HCO3 — Vomiting (loss of acid) — e.g., pyloric stenosis; slow shallow breathing, hypokalemia\nRespiratory acidosis — ↓ pH, ↑ CO2 — Hypoventilation / respiratory failure\nRespiratory alkalosis — ↑ pH, ↓ CO2 — Hyperventilation, anxiety, early salicylate toxicity',
    },
  ],

  'n-v': [
    {
      heading: 'Classic link (vomiting)',
      body: 'Classic link: persistent VOMITING (pyloric stenosis) → metabolic ALKALOSIS + hypokalemia + dehydration. Persistent DIARRHEA → metabolic ACIDOSIS. Oral rehydration therapy (ORT) is first-line for mild/moderate dehydration; IV for severe.',
    },
    {
      heading: 'Foodborne illness',
      body: 'Foodborne illness: vomiting/diarrhea → electrolyte imbalance + acid-base disturbance + dehydration (oral rehydration first).',
    },
    {
      heading: 'Metabolic alkalosis (vomiting clue)',
      body: 'Metabolic alkalosis — ↑ pH, ↑ HCO3 — Vomiting (loss of acid) — e.g., pyloric stenosis; slow shallow breathing, hypokalemia',
    },
  ],

  pyloric: [
    {
      heading: '1. Pyloric Stenosis (Hypertrophic) — Patho',
      body: 'Hypertrophy of the pyloric sphincter narrows the stomach outlet → progressive obstruction, usually 2–8 weeks of age.',
    },
    {
      heading: 'S&S',
      body: 'Projectile, non-bilious vomiting after feeds, constant hunger, palpable olive-shaped mass in RUQ, visible peristaltic wave, dehydration, poor weight gain.',
    },
    {
      heading: 'Diagnostics',
      body: 'Ultrasound; labs show metabolic alkalosis, hypokalemia, hypochloremia.',
    },
    {
      heading: 'Management',
      body: 'Correct dehydration + electrolytes FIRST (NPO, IV fluids, I&O, daily weight) before surgery. Surgery = pyloromyotomy; post-op: begin small frequent feeds, monitor tolerance, pain control.',
    },
    {
      heading: 'Professor quick hit',
      body: 'Pyloric stenosis: projectile vomiting, malnourished, dehydrated, metabolic alkalosis → correct fluids/electrolytes before surgery.',
    },
    {
      heading: 'Olive-shaped mass (RUQ)',
      body: 'Olive-shaped mass (RUQ) — Palpable hypertrophied pylorus → pyloric stenosis.',
    },
  ],

  intussusception: [
    {
      heading: '2. Intussusception — Patho',
      body: 'One segment of bowel telescopes into another → obstruction + compromised blood flow.',
    },
    {
      heading: 'S&S',
      body: 'Sudden episodic abdominal pain with drawing knees to chest + screaming, sausage-shaped mass, ‘currant-jelly’ stool (blood + mucus), vomiting, distention.',
    },
    {
      heading: 'Management',
      body: 'Air (or contrast) enema is diagnostic AND therapeutic (reduces it non-surgically). IV fluids, NGT; surgery if enema fails or bowel perforated. Passage of normal brown stool may indicate reduction. Watch for recurrence.',
    },
    {
      heading: 'Dance sign',
      body: 'Dance sign — Empty/soft RLQ on palpation because bowel telescoped away → intussusception.',
    },
    {
      heading: 'Currant-jelly stool',
      body: 'Currant-jelly stool — Blood + mucus stool → intussusception (also HUS).',
    },
    {
      heading: 'Sausage-shaped mass',
      body: 'Sausage-shaped mass — Telescoped bowel → intussusception.',
    },
  ],

  hirschsprung: [
    {
      heading: '3. Hirschsprung Disease',
      body: 'Professor said Hirschsprung is NOT on the final — included briefly for completeness only.',
    },
    {
      heading: 'Patho',
      body: 'Absence of ganglion (nerve) cells in a segment of colon → no peristalsis → functional obstruction + stool backup.',
    },
    {
      heading: 'S&S',
      body: 'Failure to pass meconium within 24–48 h of birth, abdominal distention, bile-stained/bilious vomiting, ribbon-like foul-smelling stool, FTT.',
    },
    {
      heading: 'Diagnostics',
      body: 'Rectal biopsy (absence of ganglion cells = definitive).',
    },
    {
      heading: 'Management',
      body: 'Surgical removal of aganglionic segment (often temporary colostomy). Ostomy care teaching. Complication: enterocolitis (fever, explosive diarrhea, distention) — a life-threatening emergency.',
    },
  ],

  gerd: [
    {
      heading: '4. GERD — Patho / S&S',
      body: 'Relaxed lower esophageal sphincter → stomach acid refluxes. Infants: spitting up, forceful vomiting, irritability, arching/stiffening, poor weight gain; older children: heartburn.',
    },
    {
      heading: 'Management',
      body: 'Thicken feeds (1 tsp–1 tbsp rice cereal per oz formula), small frequent feeds, keep upright/semi-Fowler after feeds, burp frequently, avoid trigger foods. Meds: H2 blocker or proton pump inhibitor. Severe/refractory: Nissen fundoplication. Complications: aspiration pneumonia, FTT.',
    },
    {
      heading: 'Quick hit',
      body: 'GERD: semi-Fowler/upright after feeds, thicken the formula.',
    },
  ],

  cleft: [
    {
      heading: '5. Cleft Lip / Cleft Palate — Patho / cause',
      body: 'Failure of facial structures to fuse in utero; genetic + environmental + folate deficiency.',
    },
    {
      heading: 'Management & nursing priorities',
      body: 'Feeding is the priority: special wide/cross-cut nipples or squeeze bottles, upright position, frequent burping; promote bonding. Post-op cleft LIP: protect the suture line — no prone position, elbow (no-no) restraints, avoid sucking/straws, clean the site, minimize crying. Post-op cleft PALATE: nothing hard in the mouth (no straws, utensils, pacifiers); soft/liquid diet. Complications: ear infections, hearing loss, speech + dental problems → multidisciplinary team.',
    },
  ],

  gastritis: [
    {
      heading: 'Peptic ulcer disease',
      body: 'Peptic ulcer disease: H. pylori, NSAIDs, stress; epigastric pain relieved by eating (older kids); PPIs/H2 blockers, avoid NSAIDs.',
    },
  ],

  'newborn-nutrition': [
    {
      heading: 'NEC (newborn / preemie feeding)',
      body: 'Necrotizing enterocolitis — Distended discolored abdomen, bloody stool, feeding intolerance (preemie) — NPO to rest bowel, TPN, NGT; ostomy care',
    },
    {
      heading: 'NEC (Other GI)',
      body: 'NEC: preemie; distended discolored abdomen, bloody stool → NPO, TPN, NGT decompression.',
    },
    {
      heading: 'Professor quick hit — NEC',
      body: 'NEC: common in newborns/preemies → NPO, TPN, NGT.',
    },
  ],

  'other-gi': [
    {
      heading: '6. Other GI: Acute gastroenteritis',
      body: 'Acute gastroenteritis: viral/bacterial/parasitic; ORT is first-line, monitor I&O + weight, skin care; avoid anti-motility agents in children.',
    },
    {
      heading: 'Appendicitis',
      body: 'Appendicitis: periumbilical → RLQ pain (McBurney point), fever, guarding; a suddenly rigid abdomen = peritonitis (perforation) → report immediately; NPO, IV fluids/antibiotics, appendectomy.',
    },
    {
      heading: 'NEC',
      body: 'NEC: preemie; distended discolored abdomen, bloody stool → NPO, TPN, NGT decompression.',
    },
    {
      heading: 'Meckel diverticulum',
      body: 'Meckel diverticulum: painless rectal bleeding; radionuclide scan; monitor for hemorrhage.',
    },
    {
      heading: 'Constipation',
      body: 'Constipation: fiber + fluids + activity, scheduled toileting; laxatives/stool softeners.',
    },
  ],

  hepatitis: [
    {
      heading: '7. Hepatitis',
      body: 'HAV — Fecal-oral — contaminated food/water, shellfish, food handlers — Self-limited; vaccine-preventable; good hand hygiene\nHBV — Blood + body fluids, perinatal (mother→infant), sexual (STI) — Vaccine at birth; HBIG for exposed newborn; can become chronic\nHCV — Blood (needles, transfusion, dialysis) — Often chronic → cirrhosis/liver cancer',
    },
    {
      heading: 'S&S / labs',
      body: 'Low fever, dark urine, fatigue, N/V, anorexia, RUQ pain, hepatomegaly, jaundice; ↑LFTs. HBsAg positive = active infection; HBsAb positive = immune (past infection or vaccinated).',
    },
    {
      heading: 'Management',
      body: 'Prevention is key (hand hygiene, immunization, no sharing personal items, safe sex, needle safety); supportive care, rest, hydration; avoid hepatotoxic drugs/alcohol. Note: acetaminophen overdose is a classic cause of acute drug-induced hepatitis (antidote = acetylcysteine).',
    },
  ],

  'gi-nursing-dx': [
    {
      heading: 'Nursing Diagnoses (GI)',
      body: 'Deficient fluid volume r/t vomiting/diarrhea AEB dry mucous membranes and decreased urine output. Imbalanced nutrition: less than body requirements r/t malabsorption/vomiting AEB poor weight gain. Acute pain r/t inflammation/surgical incision AEB guarding and irritability.',
    },
  ],
}

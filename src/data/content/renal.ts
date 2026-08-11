import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  uti: [
    {
      heading: '1. Urinary Tract Infection (UTI) — Patho / risk',
      body: 'Bacterial infection (often E. coli); risk from reflux, constipation, poor hygiene, sexual activity, toilet-training, urinary anomalies. Girls > boys (shorter urethra).',
    },
    {
      heading: 'S&S',
      body: 'Fever, dysuria, frequency/urgency, foul-smelling/cloudy urine, abdominal or flank pain, enuresis, vomiting; infants: nonspecific — fever, poor feeding, irritability.',
    },
    {
      heading: 'Diagnostics',
      body: 'UA + urine culture & sensitivity (clean catch/cath); imaging (renal US, VCUG for reflux, DMSA scan).',
    },
    {
      heading: 'Management / teaching',
      body: 'Antibiotics (complete the full course), analgesia, encourage fluids, frequent voiding, monitor output. Prevention teaching: wipe front-to-back, cotton underwear, avoid bubble baths, void after intercourse, adequate fluids, don’t hold urine. Complications: pyelonephritis, urosepsis, kidney scarring.',
    },
  ],

  enuresis: [
    {
      heading: '2. Enuresis',
      body: 'Involuntary urination past the age of expected control (usually nocturnal). Rule out UTI/pathology (UA + culture). Management: limit evening fluids, scheduled voiding, bed-wetting (enuresis) alarm, positive reinforcement, protect self-esteem; meds = desmopressin, oxybutynin, imipramine. Complication: emotional distress.',
    },
  ],

  agn: [
    {
      heading: '3. Acute Glomerulonephritis (AGN) — Patho',
      body: 'Immune-mediated inflammation of the glomeruli, classically post-streptococcal (1–2 weeks after strep throat/skin infection).',
    },
    {
      heading: 'S&S',
      body: 'Tea/cola-colored (hematuria) urine, decreased urine output, proteinuria (mild), periorbital edema, hypertension, headache, fatigue; ↑ASO titer, ↑BUN/creatinine.',
    },
    {
      heading: 'Management',
      body: 'Monitor strict I&O + daily weight + BP + neuro status; sodium/fluid restriction; diuretics + antihypertensives; antibiotics if strep persists; bed rest during acute phase; prevent infection. Complications: hypertensive encephalopathy, circulatory overload, acute renal failure.',
    },
    {
      heading: 'Post-strep glomerulonephritis (from strep complications)',
      body: 'Group A strep left untreated can lead to: impetigo, scarlet fever, peritonsillar abscess (hot-potato voice), acute poststreptococcal glomerulonephritis, rheumatic fever, and sepsis. This is why strep pharyngitis gets a FULL antibiotic course. Post-strep glomerulonephritis appears 1–2 weeks after the strep infection (tea-colored urine, edema, hypertension, ↑ASO).',
    },
  ],

  nephrotic: [
    {
      heading: '4. Nephrotic Syndrome — Patho',
      body: 'Glomerular membrane becomes permeable to protein → massive proteinuria → hypoalbuminemia → generalized edema.',
    },
    {
      heading: 'S&S',
      body: 'Massive proteinuria, frothy urine, severe edema/anasarca, ascites, weight gain, pallor, hypoalbuminemia, hyperlipidemia; normal or low BP; oliguria.',
    },
    {
      heading: 'Management',
      body: 'Corticosteroids (prednisone) are the mainstay; diuretics; 25% albumin (plasma expander); immunosuppressants for steroid-resistant cases. Strict I&O, daily weight, measure abdominal girth, weigh diapers, monitor edema (elevate legs), skin care, cluster care/rest, prevent infection, low-sodium diet, keep immunizations current.',
    },
    {
      heading: 'AGN vs Nephrotic syndrome',
      body: 'Feature — Acute glomerulonephritis — Nephrotic syndrome\nHallmark urine — Gross hematuria (tea/cola) — Massive proteinuria (frothy)\nEdema — Mild, periorbital — Severe, generalized (anasarca)\nBlood pressure — Hypertension — Normal / low\nKey treatment — Fluid/Na restriction, antihypertensives — Corticosteroids',
    },
  ],

  hus: [
    {
      heading: '5. Hemolytic Uremic Syndrome (HUS)',
      body: 'Small-vessel kidney damage, often after E. coli O157:H7 (undercooked meat) or diarrheal illness. Triad = hemolytic anemia + thrombocytopenia + acute kidney injury. S&S: bloody diarrhea then pallor, bruising/purpura, ↓urine output, irritability/lethargy. Manage: strict I&O, treat HTN, correct electrolytes/acidosis, dialysis, transfusion, seizure precautions. Teach: avoid undercooked foods. [txt]',
    },
  ],

  'renal-failure': [
    {
      heading: '6. Acute & Chronic Renal Failure / Dialysis / Transplant',
      body: 'Acute renal failure: sudden ↓ kidney function (dehydration, shock, nephrotoxins). Oliguria, edema, ↑BUN/creatinine, hyperkalemia. Treat the cause; strict I&O, fluid restriction, daily weights; meds for hyperkalemia (calcium gluconate, insulin+glucose, sodium polystyrene sulfonate); dialysis.',
    },
    {
      body: 'Chronic renal failure: progressive, irreversible; growth failure, anemia, bone disease, HTN. Dialysis, diet (adequate calories, controlled protein/K+/phosphorus), erythropoietin, vitamin D, transfusion.',
    },
    {
      body: 'Dialysis access infection sign = erythema + pain at the site. Transplant: immunosuppressants (cyclosporine) prevent rejection; rising BUN/creatinine = the new kidney is failing/rejecting.',
    },
  ],

  transplant: [
    {
      heading: 'Organ transplant / immunosuppression (professor)',
      body: 'Transplant patients take lifelong immunosuppressants (cyclosporine, tacrolimus) to prevent rejection → they are immunocompromised.',
    },
    {
      body: 'Infection precautions: NO fresh flowers/plants in the room, no live vaccines, avoid crowds + sick contacts, strict hand hygiene, private room.',
    },
    {
      body: 'Monitor for BOTH infection (fever) and rejection (↑ BUN/creatinine, fever, ↓ urine output, pain/tenderness at the graft site, hypertension).',
    },
    {
      heading: 'From renal failure section',
      body: 'Transplant: immunosuppressants (cyclosporine) prevent rejection; rising BUN/creatinine = the new kidney is failing/rejecting.',
    },
  ],

  hypospadias: [
    {
      heading: 'Hypospadias / epispadias',
      body: 'Hypospadias / epispadias — Urethral opening on underside (hypo) / top (epi) of penis; surgical repair; do NOT circumcise (foreskin used in repair)',
    },
  ],

  'male-gu': [
    {
      heading: '7. Male GU & Structural Defects',
      body: 'Cryptorchidism — Undescended testis; may need orchiopexy; risk of infertility/cancer\nHydrocele — Fluid around testis; often resolves; surgical repair if persistent\nVaricocele — Dilated scrotal veins (‘bag of worms’); may affect fertility\nTesticular torsion — SURGICAL EMERGENCY — sudden severe groin/scrotal pain; save the testis within ~6 h\nPhimosis — Foreskin can’t retract; do NOT forcibly retract; hygiene; possible circumcision\nBladder exstrophy — Bladder outside abdomen; cover with sterile non-adherent moist dressing; surgical repair',
    },
    {
      heading: 'Testicular torsion note',
      body: 'Testicular torsion = the GU emergency. Sudden, severe, unilateral scrotal pain ± nausea/vomiting → immediate surgery (detorsion) to salvage the testis. Time-critical.',
    },
  ],

  circumcision: [
    {
      heading: 'Circumcision note (hypospadias repair)',
      body: 'do NOT circumcise (foreskin used in repair)',
    },
  ],

  diarrhea: [
    {
      heading: 'HUS diarrheal trigger',
      body: 'Small-vessel kidney damage, often after E. coli O157:H7 (undercooked meat) or diarrheal illness. S&S: bloody diarrhea then pallor, bruising/purpura, ↓urine output, irritability/lethargy.',
    },
    {
      heading: 'Diarrhea → metabolic acidosis',
      body: 'Persistent DIARRHEA → metabolic ACIDOSIS.',
    },
    {
      heading: 'Metabolic acidosis (diarrhea clue)',
      body: 'Metabolic acidosis — ↓ pH, ↓ HCO3 — Diarrhea (loss of bicarb), DKA, shock; rapid deep breathing (Kussmaul)',
    },
  ],

  'renal-acid': [
    {
      heading: 'HUS — correct electrolytes/acidosis',
      body: 'Manage: strict I&O, treat HTN, correct electrolytes/acidosis, dialysis, transfusion, seizure precautions.',
    },
  ],

  'renal-assess': [
    {
      heading: 'Cystitis vs pyelonephritis (quick hit)',
      body: 'Cystitis = lower UTI (bladder): dysuria, frequency, urgency, suprapubic pain; vs pyelonephritis (flank pain, high fever). Antibiotics, fluids, perineal hygiene.',
    },
    {
      heading: 'UTI assessment cues',
      body: 'Fever, dysuria, frequency/urgency, foul-smelling/cloudy urine, abdominal or flank pain, enuresis, vomiting; infants: nonspecific — fever, poor feeding, irritability. Diagnostics: UA + urine culture & sensitivity (clean catch/cath); imaging (renal US, VCUG for reflux, DMSA scan).',
    },
  ],
}

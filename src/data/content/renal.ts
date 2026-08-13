import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  uti: [
    {
      heading: 'Urinary tract infection — Pathophysiology and risk',
      body: 'Bacterial infection (often E. coli); risk from reflux, constipation, poor hygiene, sexual activity, toilet-training, urinary anomalies. Girls > boys (shorter urethra).',
    },
    {
      heading: 'Signs and symptoms',
      body: 'Fever, dysuria, frequency/urgency, foul-smelling/cloudy urine, abdominal or flank pain, enuresis, vomiting; infants: nonspecific — fever, poor feeding, irritability.',
    },
    {
      heading: 'Diagnostics',
      body: 'UA + urine culture & sensitivity (clean catch/cath); imaging (renal US, VCUG for reflux, DMSA scan).',
    },
    {
      heading: 'Management and education',
      body: 'Antibiotics (complete the full course), analgesia, encourage fluids, frequent voiding, monitor output. Prevention teaching: wipe front-to-back, cotton underwear, avoid bubble baths, void after intercourse, adequate fluids, don’t hold urine. Complications: pyelonephritis, urosepsis, kidney scarring.',
    },
  ],

  enuresis: [
    {
      heading: 'Enuresis',
      body: 'Involuntary urination past the age of expected control (usually nocturnal). Rule out UTI/pathology (UA + culture). Management: limit evening fluids, scheduled voiding, bed-wetting (enuresis) alarm, positive reinforcement, protect self-esteem; meds = desmopressin, oxybutynin, imipramine. Complication: emotional distress.',
    },
  ],

  agn: [
    {
      heading: 'Acute glomerulonephritis — Pathophysiology',
      body: 'Immune-mediated inflammation of the glomeruli, classically post-streptococcal (1–2 weeks after strep throat/skin infection).',
    },
    {
      heading: 'Signs and symptoms',
      body: 'Tea/cola-colored (hematuria) urine, decreased urine output, proteinuria (mild), periorbital edema, hypertension, headache, fatigue; ↑ASO titer, ↑BUN/creatinine.',
    },
    {
      heading: 'Management',
      body: 'Monitor strict I&O + daily weight + BP + neuro status; sodium/fluid restriction; diuretics + antihypertensives; antibiotics if strep persists; bed rest during acute phase; prevent infection. Complications: hypertensive encephalopathy, circulatory overload, acute renal failure.',
    },
    {
      heading: 'Post-streptococcal complications',
      body: 'Untreated group A strep can lead to impetigo, scarlet fever, peritonsillar abscess (hot-potato voice), acute poststreptococcal glomerulonephritis, rheumatic fever, and sepsis. Strep pharyngitis requires a FULL antibiotic course. Post-streptococcal glomerulonephritis appears 1–2 weeks after the infection, with tea-colored urine, edema, hypertension, and ↑ASO.',
    },
  ],

  nephrotic: [
    {
      heading: 'Nephrotic syndrome — Pathophysiology',
      body: 'Glomerular membrane becomes permeable to protein → massive proteinuria → hypoalbuminemia → generalized edema.',
    },
    {
      heading: 'Signs and symptoms',
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
      heading: 'Hemolytic uremic syndrome — Pathophysiology',
      body: 'Small-vessel kidney damage, often after E. coli O157:H7 (undercooked meat) or diarrheal illness. Triad = hemolytic anemia + thrombocytopenia + acute kidney injury.',
    },
    {
      heading: 'Signs and symptoms',
      body: 'Bloody diarrhea followed by pallor, bruising/purpura, ↓urine output, and irritability/lethargy.',
    },
    {
      heading: 'Management and prevention',
      body: 'Strict I&O, treat HTN, correct electrolytes/acidosis, dialysis, transfusion, and seizure precautions. Avoid undercooked foods.',
    },
  ],

  'renal-failure': [
    {
      heading: 'Acute renal failure',
      body: 'Acute renal failure: sudden ↓ kidney function (dehydration, shock, nephrotoxins). Oliguria, edema, ↑BUN/creatinine, hyperkalemia. Treat the cause; strict I&O, fluid restriction, daily weights; meds for hyperkalemia (calcium gluconate, insulin+glucose, sodium polystyrene sulfonate); dialysis.',
    },
    {
      heading: 'Chronic renal failure',
      body: 'Chronic renal failure: progressive, irreversible; growth failure, anemia, bone disease, HTN. Dialysis, diet (adequate calories, controlled protein/K+/phosphorus), erythropoietin, vitamin D, transfusion.',
    },
    {
      heading: 'Dialysis and transplant monitoring',
      body: 'Dialysis access infection sign = erythema + pain at the site. Transplant: immunosuppressants (cyclosporine) prevent rejection; rising BUN/creatinine = the new kidney is failing/rejecting.',
    },
  ],

  transplant: [
    {
      heading: 'Organ transplant and immunosuppression',
      body: 'Transplant patients take lifelong immunosuppressants (cyclosporine, tacrolimus) to prevent rejection → they are immunocompromised.',
    },
    {
      heading: 'Infection precautions',
      body: 'Infection precautions: NO fresh flowers/plants in the room, no live vaccines, avoid crowds + sick contacts, strict hand hygiene, private room.',
    },
    {
      heading: 'Infection and rejection monitoring',
      body: 'Monitor for BOTH infection (fever) and rejection (↑ BUN/creatinine, fever, ↓ urine output, pain/tenderness at the graft site, hypertension). Rising BUN/creatinine indicates that the new kidney is failing or being rejected.',
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
      heading: 'Male GU and structural defects',
      body: 'Cryptorchidism — Undescended testis; may need orchiopexy; risk of infertility/cancer\nHydrocele — Fluid around testis; often resolves; surgical repair if persistent\nVaricocele — Dilated scrotal veins (‘bag of worms’); may affect fertility\nTesticular torsion — SURGICAL EMERGENCY — sudden, severe, unilateral groin/scrotal pain ± nausea/vomiting; immediate surgery (detorsion) is needed to salvage the testis within ~6 h\nPhimosis — Foreskin can’t retract; do NOT forcibly retract; hygiene; possible circumcision\nBladder exstrophy — Bladder outside abdomen; cover with sterile non-adherent moist dressing; surgical repair',
    },
  ],

  circumcision: [
    {
      heading: 'Hypospadias repair',
      body: 'Do NOT circumcise; the foreskin is used in repair.',
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
      heading: 'Cystitis vs pyelonephritis',
      body: 'Cystitis = lower UTI (bladder): dysuria, frequency, urgency, suprapubic pain; vs pyelonephritis (flank pain, high fever). Antibiotics, fluids, perineal hygiene.',
    },
    {
      heading: 'UTI assessment cues',
      body: 'Fever, dysuria, frequency/urgency, foul-smelling/cloudy urine, abdominal or flank pain, enuresis, vomiting; infants: nonspecific — fever, poor feeding, irritability. Diagnostics: UA + urine culture & sensitivity (clean catch/cath); imaging (renal US, VCUG for reflux, DMSA scan).',
    },
  ],
}

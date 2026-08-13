import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  "diabetes": [
    {
      heading: "Patho",
      body: `Type 1 = autoimmune destruction of pancreatic beta cells → absolute insulin deficiency (needs insulin for life). Type 2 = insulin resistance + relative deficiency (linked to obesity/inactivity).`,
    },
    {
      heading: "Signs & Symptoms",
      body: `The 3 P’s: polyuria, polydipsia, polyphagia + weight loss (T1), fatigue, blurred vision; T2 may show acanthosis nigricans.`,
    },
    {
      heading: "Diagnostics",
      body: `• Random glucose, 8-h fasting glucose, oral glucose tolerance test.
• Glycosylated hemoglobin (HbA1c) = average glucose over ~3 months (the T1-specific/monitoring test); self-monitored blood glucose (SMBG).`,
    },
    {
      heading: "Diabetic Ketoacidosis (DKA) \u2014 emergency \u2014 Patho / triggers",
      body: `Severe insulin deficiency → body burns fat → ketones → metabolic acidosis. Triggered by illness/infection, missed insulin, stress. T1 > T2.`,
    },
    {
      heading: "DKA \u2014 S&S",
      body: `Hyperglycemia (>300), fruity (acetone) breath, Kussmaul respirations (deep rapid), N/V, abdominal pain, dehydration (sunken eyes, dry membranes), lethargy → coma; ketones in urine, low pH/HCO3.`,
    },
    {
      heading: "DKA \u2014 Management \u2014 order matters",
      body: `• Fluids FIRST (NS or LR) to rehydrate + restore perfusion.
• IV regular insulin infusion to lower glucose gradually.
• Add glucose to the IV once serum glucose falls (~250–300) to prevent hypoglycemia while clearing ketones.
• Monitor potassium closely — insulin drives K+ into cells; replace K+ as ordered. Monitor VS, neuro status, glucose, and ketones.`,
    }
  ],
  "hypo-hyper": [
    {
      heading: "Hypoglycemia vs Hyperglycemia / DKA",
      body: `Hypoglycemia | Hyperglycemia / DKA
Onset: Sudden | Gradual
Skin: Cool, clammy, diaphoretic | Warm, dry, flushed
Key signs: Shaky, tachycardia, confusion, hunger, headache, irritable | 3 P’s, fruity breath, Kussmaul breathing, N/V
Cause: Too much insulin, skipped meal, exercise | Too little insulin, illness, overeating
Treatment: 15:15 rule | IV fluids + insulin + K+ monitoring`,
    },
    {
      heading: "Key point",
      body: `■ Exercise LOWERS glucose → a soccer game can precipitate hypoglycemia unless insulin/carbs are adjusted. When hypoglycemia cannot be distinguished from hyperglycemia, treat as HYPOglycemia (give sugar) — hypoglycemia kills faster.`,
    },
    {
      heading: "15:15 rule",
      body: `Hypoglycemia = the 15:15 rule: give 15 g of fast carbohydrate (juice/glucose tablets), wait 15 min, recheck; repeat if still <70.`,
    }
  ],
  "bolus": [
    {
      heading: "Exogenous insulin",
      body: `‘Exogenous’ insulin = insulin given from OUTSIDE the body (injected/pump), vs endogenous (made by the pancreas). Type 1 diabetics require exogenous insulin for life.`,
    },
    {
      heading: "Basal-bolus insulin",
      body: `Children do NOT use sliding-scale insulin (reactive dosing). They use basal-bolus: a long-acting basal + rapid-acting boluses with carb counting + a correction factor.`,
    },
    {
      heading: "Meal insulin timing",
      body: `Children get their meal (bolus) insulin AFTER eating so the carbohydrates they ACTUALLY ate can be counted and dosed accurately (young children may not finish a meal). Timing/dose depend on the child’s age + weight.`,
    },
    {
      heading: "Basal insulin safety",
      body: `Basal insulin (Lantus/glargine) = long-acting ‘background’ insulin, usually given at night, steady 24 h; do not mix it with other insulins. Bolus = rapid-acting (lispro/aspart, or regular) given for meals (meal bolus = carb coverage) + a correction bolus for a high reading.`,
    },
    {
      heading: "Insulin types",
      body: `Type | Examples | Timing
Rapid/fast-acting (meal bolus) | Lispro, aspart (Novolog), Novolin R | With meals; covers carbs + corrects highs
Long-acting (basal) | Glargine (Lantus) | Once daily (often bedtime); steady background — do NOT mix`,
    }
  ],
  "isf": [
    {
      heading: "Insulin Sensitivity (Correction) Factor (ISF)",
      body: `Insulin Sensitivity (Correction) Factor (ISF): ISF = 1700 ÷ total daily insulin. The result indicates how far 1 unit drops blood glucose.`,
    },
    {
      heading: "Correction dose",
      body: `Correction dose = (current BG − target BG) ÷ Insulin Sensitivity Factor (ISF) = units now.`,
    },
    {
      heading: "Carbohydrate coverage",
      body: `Carbohydrate coverage = grams of carbohydrate in the meal ÷ the insulin-to-carb ratio (I:C).`,
    },
    {
      heading: "Total meal dose",
      body: `Total meal dose = correction dose + carbohydrate coverage.`,
    },
    {
      heading: "Worked example 1",
      body: `BG 141, target 100, ISF 50, meal 60 g carbohydrate, I:C 1 unit per 20 g. Correction = (141−100)÷50 = 0.82. Carbohydrate coverage = 60÷20 = 3.0. Total ≈ 3.8 units.`,
    },
    {
      heading: "Worked example 2",
      body: `BG 250, target 120, ISF 50, meal 76 g carbohydrate, I:C 1 unit per 15 g. Correction = (250−120)÷50 = 2.6. Carbohydrate coverage = 76÷15 = 5.1. Total ≈ 7.7 units.`,
    },
    {
      heading: "Worked example 3 (carb coverage only)",
      body: `I:C = 1:10. Lunch = hotdog/bun 24 g + soup 7 g + apple 19 g + milk 25 g = 75 g total. Dose = 75÷10 = 7.5 units.`,
    },
    {
      heading: "Calculating ISF example",
      body: `14 units basal + 16 units bolus = 30 units total daily. 1700÷30 = ISF of 50.`,
    }
  ],
  "target-bg": [
    {
      heading: "Target blood glucose by age",
      body: `Age group | Target blood glucose
Young children <5 yr | 80–180 mg/dL
Older children >5 yr | 80–150 mg/dL
Adolescent | 70–150 mg/dL
Adult | 70–100 mg/dL`,
    }
  ],
  "bg-monitor": [
    {
      heading: "Blood glucose monitoring",
      body: `Glycosylated hemoglobin (HbA1c) = average glucose over ~3 months (the T1-specific/monitoring test); self-monitored blood glucose (SMBG).`,
    },
    {
      body: `■ Insulin doses must be timed ≥3 h apart. Check for ketones if glucose >300 mg/dL, or with vomiting/fever >100.5°F. Treat hypoglycemia with a rapid carb (juice/glucose tabs), recheck in 15 min (‘rule of 15’).`,
    }
  ],
  "thyroid": [
    {
      heading: "Thyroid Disorders",
      body: `Hypothyroidism | Hyperthyroidism (Graves)
Metabolism: Slowed | Speeded up
Signs: Fatigue/lethargy, weight GAIN, cold intolerance, constipation, dry skin, bradycardia, delayed growth; newborn: prolonged jaundice, macroglossia, poor feeding, large fontanels | Weight LOSS, tachycardia/palpitations, heat intolerance, diaphoresis, diarrhea, tremor, exophthalmos (protruding eyes), goiter, agitation
Labs: ↑ TSH | ↓ TSH, ↑ T3/T4
Treatment: Levothyroxine (lifelong; give same time daily, empty stomach) | Antithyroid drugs, beta-blockers, radioactive iodine, thyroidectomy`,
    },
    {
      body: `■ Congenital hypothyroidism is on the newborn screen — early levothyroxine prevents intellectual disability. Complication of untreated hypothyroidism = myxedema coma; of hyperthyroidism = thyroid storm.`,
    }
  ],
  "adrenal": [
    {
      heading: "Adrenal Disorders",
      body: `• Acute adrenocortical insufficiency (adrenal crisis): emergency; can follow abrupt stop of long-term steroids. Weak pulse, hypotension, dehydration, hypoglycemia, hyperkalemia → IV hydrocortisone + fluids. Teach: never stop steroids abruptly (taper).
• Congenital adrenal hyperplasia (CAH): autosomal recessive enzyme defect → ↓cortisol/aldosterone + androgen excess → ambiguous genitalia (girls); salt-wasting form → vomiting, dehydration, hyponatremia, hyperkalemia, shock → IV steroids. Lifelong hydrocortisone/fludrocortisone.
• Cushing syndrome: excess cortisol (tumor or high-dose steroids). Moon face, buffalo hump, truncal obesity with thin limbs, striae, bruising, hirsutism, hyperglycemia, HTN. Do not stop steroids abruptly.`,
    }
  ],
  "pituitary": [
    {
      heading: "Pituitary Disorders",
      body: `• Growth hormone deficiency: short stature, delayed bone age/dentition; treat with somatropin (GH) injections — give before growth plates close.
• Growth hormone excess (pituitary adenoma): excessive height/gigantism; treat tumor.
• Diabetes insipidus (DI): ↓ ADH → polyuria + polydipsia, very dilute urine (low specific gravity), risk of dehydration; treat with desmopressin (DDAVP).
• SIADH: ↑ ADH → water retention, concentrated urine, hyponatremia, weight gain, risk of seizures; treat with fluid restriction.`,
    },
    {
      body: `■ DI vs SIADH are opposites: DI = too little ADH → lots of dilute urine → give DDAVP. SIADH = too much ADH → fluid overload + low sodium → restrict fluids.`,
    }
  ],
  "precocious": [
    {
      heading: "Precocious Puberty",
      body: `Sexual development before age 8 (girls) / 9 (boys). Categories: premature thelarche (breast buds), premature adrenarche (pubic hair), central (gonadotropin-dependent) vs peripheral (from exogenous hormones). Workup: LH/FSH, GnRH, thyroid, bone-age X-ray, imaging. Treatment: GnRH analog (leuprolide/Lupron) to halt progression until appropriate age. Support the child’s + family’s emotional needs.`,
    }
  ],
  "metab-genetic": [
    {
      heading: "Metabolic / Genetic Disorders",
      body: `• PKU (phenylketonuria): autosomal recessive — missing enzyme to convert phenylalanine; detected on newborn screen; untreated → intellectual disability. Treatment = lifelong low-phenylalanine diet (no high-protein: no milk, cheese, eggs, meat, aspartame).
• Maple syrup urine disease: autosomal recessive amino-acid defect; sweet-smelling urine, poor feeding, seizures; strict diet.
• Galactosemia: can’t metabolize galactose; jaundice, cataracts, hepatomegaly; galactose/lactose-free (no milk) diet.
• Hypocalcemia: neuromuscular irritability, tetany, jitteriness, seizures; give calcium + vitamin D; seizure precautions.`,
    }
  ],
  "metab-findings": [
    {
      heading: "DI vs SIADH",
      body: `■ DI vs SIADH are opposites: DI = too little ADH → lots of dilute urine → give DDAVP. SIADH = too much ADH → fluid overload + low sodium → restrict fluids.`,
    },
    {
      heading: "Expected findings\u2013style hallmark lines (endocrine / metabolic)",
      body: `Fruity breath + Kussmaul breathing → Diabetic ketoacidosis
Cold/clammy + shaky + confused (diabetic) → Hypoglycemia
Moon face, buffalo hump, striae → Cushing syndrome
Dilute urine + polyuria + polydipsia → Diabetes insipidus`,
    }
  ],
  "endo-nursing-dx": [
    {
      heading: "Nursing Diagnoses (endocrine)",
      body: `• Deficient fluid volume r/t osmotic diuresis from hyperglycemia AEB polyuria and dehydration.
• Risk for unstable blood glucose r/t insulin imbalance and variable intake/activity.
• Deficient knowledge r/t complex long-term diabetes management AEB questions about insulin dosing.`,
    }
  ]
}

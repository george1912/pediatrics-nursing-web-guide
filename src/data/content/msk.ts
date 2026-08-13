import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  "msk-assess": [
    {
      heading: "Signs and assessment",
      body: `Pain, deformity, edema, ecchymosis, warmth/redness, ↓ROM; confirm with X-ray. Evaluate unexplained injuries for child maltreatment (esp. spiral fractures, injuries inconsistent with the story or the child’s developmental stage).`,
    },
    {
      heading: "Neurovascular checks \u2014 the 6 P\u2019s (do frequently on any cast/injury)",
      body: `Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia (coolness). Also compare to the other limb; check cap refill + movement distal to the injury/cast.`,
    }
  ],
  "fractures": [
    {
      heading: "Fracture types",
      body: `Type | Description
Greenstick | Incomplete — bone bends and cracks on one side (common in children)
Buckle / torus | Bone buckles/compresses (common in children)
Spiral | Twisting force — raises suspicion of abuse in non-ambulatory infants
Transverse / oblique | Straight-across / angled break
Comminuted | Bone shattered into ≥3 fragments
Complete | Broken all the way through
Open (compound) | Bone breaks the skin → infection risk (osteomyelitis)
Epiphyseal (growth plate) | Salter-Harris; can affect future growth`,
    },
    {
      heading: "Interventions",
      body: `Interventions: immobilize + neurovascular checks (6 P’s), reduce (closed/open), cast or traction, ice + elevation early, analgesia, protein for healing. Watch for compartment syndrome (pain out of proportion + with passive stretch).`,
    },
    {
      heading: "Fracture signs and assessment",
      body: `Pain, deformity, edema, ecchymosis, warmth/redness, ↓ROM; confirm with X-ray. Evaluate unexplained injuries for child maltreatment (esp. spiral fractures, injuries inconsistent with the story or the child’s developmental stage).`,
    }
  ],
  "casts-traction": [
    {
      heading: "Cast care teaching",
      body: `• Elevate + ice initially to reduce swelling; assess neurovascular status distal to the cast; keep the cast clean and dry; nothing inside the cast (no scratching with objects).
• Report the 6 P’s, foul odor, drainage, hot spots, or increasing pain (possible infection or compartment syndrome).`,
    },
    {
      heading: "Traction",
      body: `Skin traction (Buck, Bryant) uses tape/boots; skeletal traction uses pins. Maintain proper body alignment + continuous pull; weights hang freely and never touch the floor; pin-site care; monitor neurovascular status + skin.`,
    },
    {
      heading: "Nutrition note",
      body: `For a child in traction/on bed rest, encourage protein for healing; avoid excess calcium (immobility + high calcium → renal calculi risk).`,
    }
  ],
  "compartment": [
    {
      heading: "Compartment syndrome",
      body: `■ Compartment syndrome = increased pressure in a muscle compartment → ischemia. EARLIEST + most reliable sign is pain out of proportion, unrelieved by analgesia + worse with passive stretch. Later: pallor, paresthesia, pulselessness. It is a limb-threatening EMERGENCY → notify provider immediately, do NOT elevate above heart level, loosen/bivalve the cast; may need fasciotomy.`,
    }
  ],
  "mobility": [
    {
      heading: "Mobility techniques \u2014 positioning & transfers (MSK)",
      body: `• Crutches: fit = 2–3 finger-widths below the axilla, elbows slightly flexed; bear weight on the HANDS, not the axillae (axillary pressure → nerve/brachial-plexus injury). Tripod stance. Stairs: ‘up with the good, down with the bad’ (good leg leads going up; crutches + bad leg lead going down).
• Cane: hold on the strong/unaffected side; advance the cane with the weak leg.
• Walker: pick it up, set it down, then step into it; don’t push it too far ahead.
• Transfers: lock the wheelchair, move toward the patient’s strong side, use a gait belt, and keep the back straight and knees bent.`,
    }
  ],
  "assistive": [
    {
      heading: "Use of Assistive Mobility Devices",
      body: `• Crutches: fit = 2–3 finger-widths below the axilla, elbows slightly flexed; bear weight on the HANDS, not the axillae (axillary pressure → nerve/brachial-plexus injury). Tripod stance. Stairs: ‘up with the good, down with the bad’ (good leg leads going up; crutches + bad leg lead going down).
• Cane: hold on the strong/unaffected side; advance the cane with the weak leg.
• Walker: pick it up, set it down, then step into it; don’t push it too far ahead.`,
    }
  ],
  "immobility": [
    {
      heading: "Immobility / bedridden complications (MSK focus)",
      body: `• Virchow triad (why immobile patients clot): venous stasis + hypercoagulability + endothelial (vessel) injury → DVT → risk of pulmonary embolism (PE).
• Other hazards of inactivity: constipation/bowel issues, pressure injuries, muscle atrophy + contractures, pneumonia (atelectasis), renal calculi, disuse osteoporosis; neuro and respiratory function can be affected.
• Prevention: reposition q2h, ROM exercises, encourage fluids + fiber, sequential compression devices, early mobilization, incentive spirometry, protein for healing.`,
    }
  ],
  "ddh": [
    {
      heading: "Developmental Dysplasia of the Hip (DDH) \u2014 S&S",
      body: `Positive Ortolani (clunk on abduction) and Barlow (dislocation on adduction) signs, asymmetric/unequal thigh & gluteal skin folds, limited hip abduction, shortened femur (Galeazzi sign).`,
    },
    {
      heading: "Management",
      body: `Treat early. Pavlik harness (keeps hips flexed + abducted) for infants; older: Bryant traction, closed reduction + hip spica cast. Teach harness/cast care, skin checks, and how to hold/diaper. Encourage bonding + development.`,
    }
  ],
  "scoliosis": [
    {
      heading: "Scoliosis",
      body: `Lateral curvature of the spine. Screen with the Adams forward-bend test (asymmetry of scapulae/ribs/flanks/hips, uneven shoulders/hips, ill-fitting clothes); confirm with X-ray (Cobb angle). Management by degree: observation → bracing (worn ~23 h/day; teach skin care + adherence, wear a cotton shirt under it) → surgical spinal fusion. Post-op: log-roll, pain control, neurovascular checks. Complications: respiratory compromise, self-esteem.`,
    }
  ],
  "other-bone": [
    {
      heading: "Other bone/joint conditions",
      body: `Condition | Key feature / management
Legg-Calvé-Perthes | Aseptic necrosis of femoral head; painless limp, hip stiffness; NSAIDs, limit weight-bearing
Slipped capital femoral epiphysis | Classic obese ~12-yr-old, hip/knee pain + antalgic gait; ‘ice cream cone’ sign on imaging; surgical pinning; non-weight-bearing
Osgood-Schlatter | Painful swelling of tibial tubercle after a growth spurt/activity; rest, NSAIDs, activity modification
Clubfoot (talipes) | Foot inverted/plantarflexed at birth; serial casting (Ponseti); neurovascular + skin checks
Osteogenesis imperfecta | Autosomal dominant collagen defect → fragile bones/multiple fractures, blue sclera; handle gently, bisphosphonates; suspect abuse mimic
Nursemaid’s elbow | Radial head subluxation from a sudden pull on the arm (<5 yr); arm held flexed/pronated
Little League elbow | Overuse throwing injury; rest, training modification
Sprains vs strains | Sprain = ligament injury; strain = muscle/tendon injury. Treat with PRICE: Protection, Rest, Ice, Compression, Elevation. MRI is the imaging test of choice for soft tissue.`,
    },
    {
      heading: "Named signs \u2014 Antalgic gait",
      body: `Antalgic gait — A limp that shortens time on the painful leg to avoid pain → hip/leg pain: SCFE, Legg-Calvé-Perthes, septic hip, fracture`,
    },
    {
      heading: "Named signs \u2014 \u2018Ice cream cone\u2019 sign",
      body: `‘Ice cream cone’ sign — Imaging look of the femoral head slipping off the neck → Slipped Capital Femoral Epiphysis (SCFE) — classic obese ~12-yr-old, hip/knee pain, out-toeing gait`,
    }
  ],
  "md": [
    {
      heading: "Muscular Dystrophy (Duchenne) \u2014 Patho",
      body: `X-linked recessive progressive degeneration of skeletal muscle (Duchenne is most common/severe; affects boys).`,
    },
    {
      heading: "S&S",
      body: `Progressive muscle weakness starting in the lower extremities, Gowers sign (child ‘walks’ hands up the legs to stand), waddling gait, calf pseudohypertrophy, frequent falls; later respiratory + cardiac involvement. Labs: ↑ creatine kinase, gene testing, muscle biopsy/EMG.`,
    },
    {
      heading: "Management",
      body: `• Maximize function + independence; PT/OT, ROM, bracing to prevent contractures; adequate protein with a moderate/low-calorie diet to prevent obesity (staying lean keeps the child ambulatory longer).
• Respiratory care (cough-assist device), monitor cardiac status; genetic counseling. Complications: contractures, scoliosis, respiratory infection, cardiomyopathy.`,
    }
  ],
  "cp": [
    {
      heading: "Cerebral Palsy",
      body: `Non-progressive motor impairment from brain injury (often hypoxia). Delayed milestones, persistent primitive reflexes, spasticity/hypertonia, scissoring gait, feeding difficulty, possible seizures. Interdisciplinary care (PT/OT/speech), prevent contractures, aspiration precautions, baclofen/botulinum toxin for spasticity, support nutrition + self-esteem.`,
    }
  ],
  "spina-bifida": [
    {
      heading: "Spina Bifida (neural tube defect)",
      body: `• Prevention: maternal folic acid before + during pregnancy. Types: occulta (hidden, hair tuft/dimple) vs cystica (meningocele/myelomeningocele — visible sac).
• Pre-op myelomeningocele: cover the sac with a sterile, moist, non-adherent dressing, position prone, protect the sac, no diaper over it.
• Latex allergy precautions (high risk). Neurogenic bladder → clean intermittent catheterization; monitor for ↑ICP/hydrocephalus. Assess head circumference + fontanels.`,
    }
  ],
  "jia": [
    {
      heading: "Juvenile Idiopathic Arthritis (JIA)",
      body: `Autoimmune joint inflammation. Fever, swollen/stiff joints (worse in the morning), rash, limp. Labs: ↑ESR/CRP, ANA, RF. Manage: NSAIDs, corticosteroids, biologics (etanercept); heat/warm compresses + ROM + activity (not immobility); ophthalmology follow-up (uveitis risk).`,
    }
  ],
  "msk-nursing-dx": [
    {
      heading: "Nursing Diagnoses (MSK)",
      body: `• Impaired physical mobility r/t cast/traction and musculoskeletal injury AEB limited ROM.
• Risk for peripheral neurovascular dysfunction r/t cast compression / compartment syndrome.
• Acute pain r/t inflammation/injury AEB guarding and reports of pain.`,
    },
    {
      body: `Myasthenia Gravis full text is under neuro topic \`mg\` (not duplicated here).`,
    }
  ]
}

import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  "seizures": [
    {
      heading: "Seizures",
      body: `Seizures: during a seizure, protect the airway + prevent injury → side-lying, don’t restrain, nothing in the mouth, time it. Status epilepticus → IV benzodiazepine. Never stop AEDs abruptly.`,
    },
    {
      heading: "Newborn seizures",
      body: `Newborn seizures: often subtle (lip-smacking, eye deviation, bicycling, apnea); causes = metabolic (hypoglycemia, hypocalcemia), infection, birth trauma, maternal substance use. Check glucose + calcium + CSF.`,
    },
    {
      heading: "Professor quick hit",
      body: `Seizures need OXYGEN — airway + O2 during/after; side-lying; suction.`,
    }
  ],
  "head-injury-neuro": [
    {
      heading: "Head injury",
      body: `Head injury: monitor LOC (most sensitive), pupils, VS; teach return-to-ED signs (worsening headache, repeated vomiting, unequal pupils, drowsiness/confusion).`,
    }
  ],
  "sci": [
    {
      heading: "Spinal cord injury",
      body: `Spinal cord injury: immobilize before moving; log-roll; keep head neutral; don’t remove helmet/brace.`,
    }
  ],
  "mg": [
    {
      heading: "Myasthenia Gravis",
      body: `Autoimmune interference with acetylcholine → progressive muscle weakness, ptosis, diplopia, weak suck/cry, weak respiratory effort. Dx: Tensilon (edrophonium) test. Meds: neostigmine/pyridostigmine (anticholinesterase). Priority = monitor respiratory status (weakness can cause respiratory arrest); teach when to call 911; plasmapheresis for crisis.`,
    },
    {
      body: `Ptosis + diplopia + weakness, +Tensilon → Myasthenia gravis`,
    }
  ],
  "meningitis": [
    {
      heading: "Meningitis",
      body: `Meningitis: nuchal rigidity, +Kernig/+Brudzinski, fever, photophobia; LP is definitive (bacterial: ↑WBC/↑protein/↓glucose); droplet precautions first 24 h of antibiotics.`,
    },
    {
      heading: "Professor quick hit",
      body: `Meningitis: droplet precautions first 24 h of antibiotics; nuchal rigidity, +Kernig/+Brudzinski.`,
    }
  ],
  "icp": [
    {
      heading: "Increased ICP",
      body: `Increased ICP: infant — bulging fontanel, high-pitched cry, setting-sun eyes; child — morning headache, vomiting, altered LOC. LATE = Cushing triad (↑BP/wide pulse pressure, bradycardia, irregular respirations). Elevate HOB midline.`,
    }
  ],
  "neuro-assess": [
    {
      heading: "Assessment of the Neurological System",
      body: `Full neuro detail (seizures, head injury, spinal cord injury, meningitis, ↑ICP, GCS) is in your Exam 2 guide — the essentials are repeated here for the final.`,
    },
    {
      body: `Head injury: monitor LOC (most sensitive), pupils, VS; teach return-to-ED signs (worsening headache, repeated vomiting, unequal pupils, drowsiness/confusion).`,
    },
    {
      body: `Increased ICP: infant — bulging fontanel, high-pitched cry, setting-sun eyes; child — morning headache, vomiting, altered LOC. LATE = Cushing triad (↑BP/wide pulse pressure, bradycardia, irregular respirations). Elevate HOB midline.`,
    },
    {
      body: `Meningitis: nuchal rigidity, +Kernig/+Brudzinski, fever, photophobia; LP is definitive (bacterial: ↑WBC/↑protein/↓glucose); droplet precautions first 24 h of antibiotics.`,
    },
    {
      body: `Spinal cord injury: immobilize before moving; log-roll; keep head neutral; don’t remove helmet/brace.`,
    }
  ],
  "mental-status": [
    {
      heading: "Assessment of Mental Status",
      body: `Head injury: monitor LOC (most sensitive), pupils, VS; teach return-to-ED signs (worsening headache, repeated vomiting, unequal pupils, drowsiness/confusion).`,
    },
    {
      body: `Increased ICP: infant — bulging fontanel, high-pitched cry, setting-sun eyes; child — morning headache, vomiting, altered LOC. LATE = Cushing triad (↑BP/wide pulse pressure, bradycardia, irregular respirations). Elevate HOB midline.`,
    },
    {
      body: `Newborn seizures: often subtle (lip-smacking, eye deviation, bicycling, apnea); causes = metabolic (hypoglycemia, hypocalcemia), infection, birth trauma, maternal substance use. Check glucose + calcium + CSF.`,
    }
  ],
  "sensory": [
    {
      heading: "Expected Findings for Sensory Perceptual",
      body: `Meningitis: nuchal rigidity, +Kernig/+Brudzinski, fever, photophobia; LP is definitive (bacterial: ↑WBC/↑protein/↓glucose); droplet precautions first 24 h of antibiotics.`,
    },
    {
      body: `Increased ICP: infant — bulging fontanel, high-pitched cry, setting-sun eyes; child — morning headache, vomiting, altered LOC. LATE = Cushing triad (↑BP/wide pulse pressure, bradycardia, irregular respirations). Elevate HOB midline.`,
    }
  ],
  "otitis": [
    {
      heading: "Otitis media",
      body: `Otitis media: middle-ear infection; bulging/red immobile tympanic membrane, fever, ear tugging, irritability. Position upright; antibiotics + analgesia; feed infants upright (not flat with a propped bottle); avoid secondhand smoke; keep PCV up to date; recurrent → tympanostomy tubes.`,
    }
  ],
  "conjunctivitis": [
    {
      heading: "Conjunctivitis (pink eye)",
      body: `Conjunctivitis (pink eye): red sclera, discharge, morning crusting; bacterial = antibiotic drops; highly contagious → contact precautions + hand hygiene; out of school ~24 h after starting treatment.`,
    }
  ],
  "eye-injury": [
    {
      heading: "Eye injuries",
      body: `Eye injuries: chemical splash → immediate copious irrigation; penetrating/foreign object → do NOT remove, stabilize + shield both eyes, seek care; give nothing to touch/rub the eye. [txt]`,
    }
  ],
  "amblyopia": [
    {
      heading: "Amblyopia / strabismus",
      body: `Amblyopia / strabismus: patch or correct the stronger eye to strengthen the weaker; treat early to preserve vision. [txt]`,
    }
  ],
  "eyes-ears": [
    {
      heading: "Assessment of the Eyes and Ears \u2014 Vision & hearing (Ch 50)",
      body: `Otitis media: middle-ear infection; bulging/red immobile tympanic membrane, fever, ear tugging, irritability. Position upright; antibiotics + analgesia; feed infants upright (not flat with a propped bottle); avoid secondhand smoke; keep PCV up to date; recurrent → tympanostomy tubes.
Conjunctivitis (pink eye): red sclera, discharge, morning crusting; bacterial = antibiotic drops; highly contagious → contact precautions + hand hygiene; out of school ~24 h after starting treatment.
Eye injuries: chemical splash → immediate copious irrigation; penetrating/foreign object → do NOT remove, stabilize + shield both eyes, seek care; give nothing to touch/rub the eye. [txt]
Amblyopia / strabismus: patch or correct the stronger eye to strengthen the weaker; treat early to preserve vision. [txt]`,
    }
  ]
}

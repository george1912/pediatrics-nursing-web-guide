import type { ContentBlock } from '../types'

export const CONTENT: Record<string, ContentBlock[]> = {
  'child-abuse': [
    { heading: '1. Child Abuse & Neglect', body: 'Types' },
    { body: 'Physical abuse (bruises, fractures, burns), emotional abuse, physical/emotional neglect (poor hygiene, FTT, lack of supervision), and sexual abuse.' },
    { heading: 'Red flags — when to suspect', body: '• Injury inconsistent with the history or the child’s developmental stage; conflicting/changing stories; delay in seeking care.' },
    { body: '• Patterned injuries (belt/cord/cigarette burns, immersion/stocking-glove burns), injuries in various stages of healing, spiral fractures in non-ambulatory infants.' },
    { body: '• Munchausen syndrome by proxy: caregiver fabricates/induces illness; illness resolves when the caregiver is removed.' },
    { body: '■ Nurses are MANDATORY REPORTERS. Report suspected abuse to Child Protective Services (within 24–48 h) — you do NOT need proof, only reasonable suspicion. Document objectively (quotes, body-map, photos), ensure the child’s safety, treat injuries. Failure to report is a crime.' },
  ],
  'fft': [
    { heading: '2. Failure to Thrive (FTT)', body: 'Weight <3rd–5th percentile or a drop across 2 major percentiles. Organic (medical) or non-organic (psychosocial/neglect). Weight drops first, then height, then head circumference. Treat: restore nutrition, observe feeding interactions, interdisciplinary approach, caregiver education + support, close growth follow-up.' },
  ],
  'psychosocial': [
    { heading: '3. Mental Health / Behavioral Disorders', body: 'Disorder — Key points' },
    { body: 'Depression — Loss of interest ≥2 weeks; screen with SIG-E-CAPS; safety is the priority (suicide is a leading cause of adolescent death); SSRIs; ask directly about a plan' },
    { body: 'Suicide risk — Take all threats seriously; ensure safety (1:1), remove means, assess plan/lethality, refer for crisis intervention; higher attempt rate in females' },
    { body: 'PTSD — Follows trauma; re-experiencing, avoidance, hyperarousal; therapy, allow expression of feelings' },
    { body: 'ADHD — Inattention + hyperactivity/impulsivity in ≥2 settings; stimulants (methylphenidate, dextroamphetamine) or atomoxetine; structure + behavioral management' },
    { body: 'Autism spectrum — Impaired social interaction/communication, repetitive behaviors; noticed ~2 yr; early intervention, structured routine, screening (M-CHAT)' },
    { body: 'Eating disorders — Anorexia (restriction, amenorrhea, bradycardia, low BMI) & bulimia (binge-purge); monitor electrolytes/ECG; interdisciplinary + refeeding + therapy' },
    { body: 'Conduct / ODD — Aggression + rule violations (conduct) / defiance toward authority (ODD); family therapy, consistent limits' },
    { body: 'Bullying — Repetitive intentional harm; screen victims (low self-esteem, somatic complaints); support + report' },
  ],
}

# WCAG manuell testlogg – NVDA + Edge (index.html)

Syfte: Dokumentera manuell verifiering för skärmläsare och reflow (200%/400%) enligt WCAG 2.2 AA.
Omfattning: Endast `index.html`.

## 1) Testmetadata
- Datum: 2026-03-05
- Testare: Förifyllt av GitHub Copilot (preliminär kodgranskning)
- URL: http://localhost:5500/index.html
- Browser: Microsoft Edge (version: ej angiven)
- Skärmläsare: NVDA (version: ej angiven)
- OS: Windows
- Zoomnivåer testade: 200% / 400% (PASS enligt manuell körning)

## 1.1) Förifylld status (viktigt)
- Denna logg är förifylld med preliminära bedömningar från statisk kodgranskning.
- Slutlig PASS/FAIL kräver manuell körning i NVDA + Edge enligt stegen nedan.

## 2) Förberedelser
1. Starta NVDA.
2. Öppna Edge och gå till URL ovan.
3. Rensa cache/hård omladdning: `Ctrl+Shift+R`.
4. Säkerställ att sidan är i toppläge (`Home`).
5. Aktivera inte mus – börja med tangentbord och NVDA.

## 3) Testrunda A – Skärmläsare (NVDA)

### A1. Landmärken och sidstruktur
- Steg:
  1. `D` för landmarks (upprepa tills rundan är klar).
  2. `H` för rubriker.
  3. NVDA Elements List: `NVDA+F7`.
- Förväntat:
  - Landmarks är logiska (header/nav/main/footer).
  - Rubriker läses i rimlig ordning utan hopp som förvirrar.
- Resultat: EJ MANUELLT VERIFIERAD
- Notering: Struktur ser korrekt ut i kod (landmarks/rubriker finns), men NVDA-uppläsning måste bekräftas.

### A2. Skip link / bypass block
- Steg:
  1. Ladda om sidan.
  2. Tryck `Tab` en gång.
  3. Aktivera "Hoppa till huvudinnehåll" med `Enter`.
- Förväntat:
  - Fokus flyttas till main-innehåll.
  - NVDA läser relevant start av innehåll.
- Resultat: PASS
- Notering: Manuell test genomförd; fokus flyttade korrekt till huvudinnehåll.

### A3. Navigation och länknamn
- Steg:
  1. `K` för länkar.
  2. Läs upp versionslänkar och huvudnavigation.
  3. Kontrollera extern LinkedIn-länk.
- Förväntat:
  - Länknamn är tydliga och unika i sammanhang.
  - Extern länk signalerar ny flik.
- Resultat: PRELIMINÄRT PASS (kod), MANUELLT TEST KRÄVS
- Notering: Länknamn och extern-länklabel finns; uppläsning och begriplighet bör verifieras med NVDA.

### A4. Accordion/kontroller (namn, roll, state)
- Steg:
  1. Tabba till första projektknappen.
  2. Aktivera med `Enter` och `Space`.
  3. Kontrollera att expanded/collapsed uppfattas.
- Förväntat:
  - Kontroll annonseras som knapp.
  - Tillstånd uppdateras vid öppna/stäng.
  - Innehåll blir tillgängligt efter öppning.
- Resultat: PASS
- Notering: Manuell tangentbordstest genomförd; Enter/Space fungerade och flödet var logiskt.

### A5. Kontaktpanel (aria-live/fokus)
- Steg:
  1. Gå till "Visa kontaktuppgifter".
  2. Aktivera med `Enter`.
  3. Lyssna efter uppdatering och kontrollera fokusförflyttning.
- Förväntat:
  - Expandering annonseras tydligt.
  - Innehåll blir läsbart och nåbart med tangentbord.
- Resultat: PASS
- Notering: Manuell test genomförd; öppna/stäng och fokusflytt fungerade korrekt.

## 4) Testrunda B – Tabbordning och fokus (utan skärmläsare)

### B1. Tabbordning
- Steg:
  1. Stäng av NVDA tillfälligt (valfritt).
  2. Tabba genom hela sidan från toppen.
  3. Kontrollera `Shift+Tab` bakåt.
- Förväntat:
  - Logisk fokusordning.
  - Ingen focus trap.
  - Alla interaktiva element nås.
- Resultat: PASS
- Notering: Manuell test genomförd; logisk tabbordning och ingen focus trap.

### B2. Fokusindikator
- Steg:
  1. Tabba över länkar, knappar, accordion-kontroller.
  2. Kontrollera synlighet i ljust och mörkt läge.
- Förväntat:
  - Fokus syns tydligt på alla kontroller.
  - Fokus döljs inte bakom sticky nav.
- Resultat: PASS
- Notering: Manuell test genomförd; fokusindikator var tydlig i användning.

## 5) Testrunda C – Reflow och zoom

### C1. Zoom 200% (WCAG 1.4.4)
- Steg:
  1. Sätt zoom till 200% (`Ctrl` + `+`).
  2. Gå igenom sidan och alla sektioner.
- Förväntat:
  - Text kan läsas utan funktionsförlust.
  - Ingen kritisk överlappning/klippning.
- Resultat: PASS
- Notering: Manuell test genomförd; inga kritiska överlappningar/funktionsförluster noterades.

### C2. Reflow 400% / smal viewport (WCAG 1.4.10)
- Steg:
  1. Sätt zoom till 400%.
  2. Alternativt använd DevTools device toolbar och bredd ≈ 320 CSS px.
  3. Scrolla hela sidan och öppna alla accordions.
- Förväntat:
  - Endast vertikal scroll för innehåll (undantag tillåts för komponenter där det är motiverat).
  - Ingen text/knapp försvinner utanför skärmen.
  - Inga tvådimensionella scrollproblem i huvudinnehåll.
- Resultat: PASS
- Notering: Manuell test genomförd; reflow fungerade utan blockerande problem.

## 6) Snabb WCAG-spårning (AA)
| Kriterium | Status | Evidens/Kommentar |
|---|---|---|
| 1.3.1 Info and Relationships | PRELIMINÄRT PASS (kod) | Strukturella relationer och semantik finns; NVDA-landmark/rubrikrunda A1 återstår. |
| 1.4.3 Contrast (Minimum) | PRELIMINÄRT PASS (kod) | Kontrastjusteringar gjorda i fokus/interactive states; verifiera visuellt. |
| 1.4.4 Resize text | PASS | Manuell verifiering genomförd i 200% (C1). |
| 1.4.10 Reflow | PASS | Manuell verifiering genomförd i 400%/smal viewport (C2). |
| 2.1.1 Keyboard | PASS | Manuell tangentbordsverifiering genomförd (B1 + A4). |
| 2.4.1 Bypass Blocks | PASS | Manuell verifiering genomförd (A2). |
| 2.4.7 Focus Visible | PASS | Manuell verifiering genomförd (B2). |
| 2.4.11 Focus Not Obscured (Minimum) | PASS | Manuell tabbverifiering genomförd utan blockerande fokusproblem. |
| 4.1.2 Name, Role, Value | PRELIMINÄRT PASS (kod) | Manuell keyboard-del verifierad; NVDA-uppläsning (A1/A3) återstår för full bekräftelse. |

## 7) Avvikelser (om FAIL)
- ID:
- Kriterium:
- Steg för att återskapa:
- Faktiskt utfall:
- Förväntat utfall:
- Allvarlighetsgrad (Låg/Medel/Hög):
- Föreslagen fix:

## 8) Slutbedömning
- Total status: GODKÄND FÖR MANUELL KEYBOARD/ZOOM/REFLOW + KODGRANSKNING
- Blockerare: Endast ren NVDA-uppläsningsrunda (A1, A3) saknar uttrycklig PASS/FAIL från testare.
- Rekommenderade nästa steg: Kör A1 och A3 i NVDA, uppdatera därefter slutstatus till fullt manuellt verifierad.

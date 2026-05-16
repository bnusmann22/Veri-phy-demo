const screens=[
  {t:"Splash Screen",d:"Brand intro with animated logo reveal and progress bar. Auto-proceeds after 2.5s.",notes:["Spring-easing logo entrance at 0.2s delay","Progress bar fills over 2.5s","Auto-navigate on complete","No user interaction required"]},
  {t:"Welcome Screen",d:"First human touchpoint. Establishes value prop with illustration and two CTAs.",notes:["Illustration feels warm and local","Get Started goes to Product Explanation","Sign In goes to login flow","Dots indicate onboarding depth"]},
  {t:"Product Explanation",d:"3-step flow explainer. Visual diagram shows Alert → Verify → Verdict.",notes:["Swipeable carousel with 3 slides","Progress dots update on swipe","'Got it' skips to Merchant Type","Keep copy minimal and visual"]},
  {t:"Merchant Type Selection",d:"Grid of 6 merchant categories. POS Agent pre-selected. Drives personalized protection setup.",notes:["Selected state: teal border + checkmark","CTA label updates on selection","Multi-select supported","Drives onboarding customization downstream"]},
  {t:"Payment Channel Setup",d:"Toggles for each payment channel. Bank SMS pre-enabled as most critical.",notes:["SMS on by default — most critical","WhatsApp needs additional permission","USSD and POS are optional","Each toggle enables monitoring for that channel"]},
  {t:"Bank Account Connection",d:"Bank grid + BVN entry. Emphasizes read-only, security-first access.",notes:["Bank grid shows top 5 + More","BVN masked after 4 digits","Verify triggers OTP flow","Lock icon reinforces trust throughout"]},
  {t:"Virtual Account Setup",d:"Auto-generated Providus Bank virtual account. Copy, share, and 3-step how-it-works.",notes:["Account auto-generated on sign-up","Copy triggers clipboard + toast notification","Share opens Android share sheet","This is the safest way to receive payments"]},
  {t:"SMS Protection Permission",d:"Human-language permission request. Explains scope clearly. No tech jargon.",notes:["Never say 'Grant SMS permission'","'Enable payment alert protection' instead","3 bullets explain what IS and ISN'T read","Android dialog fires on CTA tap"]},
  {t:"Notification Access",d:"Explains notification types. Shows what you'll receive. Never promotional.",notes:["Fraud alerts: Always","Promotional: Never (shown explicitly)","Table format builds trust","Tone: calm, informative, not demanding"]},
  {t:"Overlay Permission",d:"Most critical permission. Draw-over-apps enables real-time warnings.",notes:["Amber callout explains risk of skipping","'Enable Fraud Warnings' taps into Android Settings","Without this, overlays cannot appear","Explain why this matters to the merchant"]},
  {t:"Battery Optimization",d:"Request to disable battery saver for Veri-phy. Quantifies battery usage concretely.",notes:["Lead with the benefit","'Less than 1% battery per day' reassures","Skip available but lower hierarchy","Auto-triggers on most Android OEMs"]},
  {t:"Protection Activated",d:"Celebratory confirmation on dark teal. Pulsing rings. Three stats. One CTA.",notes:["Pulse animation on outer rings","Stats: 0.8s avg, Active, 24/7","Marks end of onboarding flow","Can auto-transition after 3s"]},
  {t:"Home Screen",d:"Main dashboard. Dark teal header fades to surface. Status card, quick stats, recent activity.",notes:["Status card shows real-time protection state","Red badge when fraud detected","Bottom nav: Home, Activity, Shield, Profile","Activity items tap through to details"]},
  {t:"Protection Status",d:"Detailed permission checklist + today's stats. Accessible from home status card.",notes:["All 4 permissions shown with active states","Stats: Checked, Verified, Blocked","Tap permission row goes to Android settings","Quick health-check view"]},
  {t:"Overlay Interactions",d:"Intermediate state. Alert arrives. Verification in progress. Compact bottom sheet.",notes:["First thing user sees after SMS arrives","Animated dots show verification in progress","Bottom sheet auto-expands to full overlay","Compact form for quick market glance"]},
  {t:"VERIFIED Overlay",d:"Full green VERIFIED state. Confirmed transaction details. 'Safe to Release Goods' CTA.",notes:["Green circle + checkmark dominates visually","Transaction: amount, bank, sender, ref, time","'Safe to Release Goods' is primary action","Dismiss on swipe down or tap anywhere"]},
  {t:"PENDING Overlay",d:"Amber PENDING state. Transfer processing. ETA displayed. Auto-refreshes when settled.",notes:["Amber palette throughout — clear but not alarming","'PENDING' not 'UNKNOWN' — specific language","ETA pulls from NIBSS processing estimate","Auto-upgrades to VERIFIED when cleared"]},
  {t:"FAKE Overlay",d:"Red high-risk state for unmatched transactions. Clear warning. 'Do Not Release Goods'.",notes:["Red but not panic-inducing visual design","'NOT FOUND' language — calm but firm","Risk level: CRITICAL in details","Links to report fraud and explainability"]},
  {t:"DUPLICATE Overlay",d:"Purple state for a real but already-counted receipt. Two chat bubbles show the resend. Non-alarm warning.",notes:["Purple palette — distinct from green, amber, and red","Two chat bubbles illustrate the resent receipt","'ALREADY VERIFIED' not 'ERROR' — transaction is genuine","Shows first-verified time and how many times presented"]},
  {t:"Activity History",d:"Full history with filter chips. Date grouping. Tap to view detail. Swipe shortcut for report.",notes:["Filter chips update list in real-time","Date headers: Today, Yesterday, etc.","Swipe left on item = report fraud shortcut","Export option in top right corner"]},
  {t:"Fraud Details",d:"Detail view for a fake/fraud alert. Red gradient header. Full data. Action buttons.",notes:["Red gradient header signals danger clearly","Alert details in structured card table","'Why This Verdict?' leads to explainability","'Report Fraud' opens report flow"]},
  {t:"Why This Verdict?",d:"3 verification signals with individual pass/fail status. Plain language per signal.",notes:["Signals: Ledger Check, Ref Format, Sender ID","Each has PASSED/SUSPECT/FAILED badge","Plain English explanation for each signal","Ends with 'What you should do' section"]},
  {t:"Screenshot Upload",d:"Manual screenshot verification. Gallery and camera options. Works with 15+ banks.",notes:["Large drag-drop zone — mobile optimized","Camera for instant capture in-market","1–2 second analysis time","Works best with clear unedited screenshots"]},
  {t:"Receipt Verification Result",d:"Result after screenshot OCR and ledger check. Data extracted and shown clearly.",notes:["Extracted data shows OCR confidence","Full detail card shows matched transaction","CTA changes based on verdict outcome","'Verify another screenshot' at bottom"]},
  {t:"Fraud Report",d:"Structured report form with radio options and optional description. Community benefit explained.",notes:["4 fraud type radios — pre-select most common","Optional free-text field","Submits → confirmation toast","Reports shared anonymously with partner banks"]},
  {t:"Settings",d:"Full settings screen. Protection toggles. Account rows. Sign Out. Version badge.",notes:["SMS, Overlay, Notifications are toggleable","Profile, Privacy, Help are tap-through rows","Sign Out is separated into own card","NDPR badge at bottom — builds trust"]},
  {t:"Privacy Controls",d:"Granular data collection toggles. Export and Delete Account options. Plain English.",notes:["3 toggles: fraud patterns, analytics, marketing","Marketing is OFF by default","Export → email with JSON data","Delete requires confirmation dialog"]},
  {t:"Error State",d:"Verification failed. Bank API unreachable. Do-not-release guidance. Try Again CTA.",notes:["Hold-goods warning is prominent","Try Again retriggers the API call","Error is non-blocking — dismissible","Consider retry count after 3 failures"]},
  {t:"Empty State",d:"First-time activity screen. No verifications yet. Protection is active and monitoring.",notes:["'Protection is active' reassures new users","Animated dot shows real-time monitoring","Temporary — disappears after first check","Don't show tutorial tips here — just reassure"]},
  {t:"Offline State",d:"No internet. Cached verdicts available. Last sync timestamp. Try Reconnecting CTA.",notes:["Amber banner signals reduced functionality","Cached count reassures merchant","Last sync time builds confidence","Auto-retries on network restore"]},
  {t:"Realtime Notification",d:"Veri-phy notification toast over WhatsApp + compact overlay chip. Shows in-the-wild UX.",notes:["Toast slides in from top Android-style","Bottom chip shows compact VERIFIED state","Both dismissible independently","This is what merchants see mid-conversation"]}
];
let cur=0;
function go(i){
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.si').forEach(s=>s.classList.remove('on'));
  document.getElementById('s'+i).classList.add('on');
  document.querySelectorAll('.si')[i].classList.add('on');
  cur=i;update();
  document.querySelectorAll('.si')[i].scrollIntoView({block:'nearest',behavior:'smooth'});
}
function update(){
  const s=screens[cur];
  const n=(cur<9?'0':'')+(cur+1);
  document.getElementById('scrTitle').textContent=n+' — '+s.t;
  document.getElementById('ctr').textContent=(cur+1)+' / 31';
  document.getElementById('ipNum').textContent='Screen '+n+' / 31';
  document.getElementById('ipTitle').textContent=s.t;
  document.getElementById('ipDesc').textContent=s.d;
  document.getElementById('ipNotes').innerHTML=s.notes.map(n=>'<div class="ip-note"><div class="ip-dot"></div><div class="ip-nt">'+n+'</div></div>').join('');
}
function next(){go(Math.min(cur+1,30))}
function prev(){go(Math.max(cur-1,0))}
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown')next();
  if(e.key==='ArrowLeft'||e.key==='ArrowUp')prev();
});
update();
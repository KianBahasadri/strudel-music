setcpm(140/4)
$: sound("bd*4, [~ sd]*2, [~ hh]*4, - - - [cp cp]")
.bank("RolandTR909")

//$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>")
$: note(
`<[c2 - c2 - f2 - c2 - ] [bb1 - bb1 - eb2 - bb1 - ] [f2 - f2 - bb2 - f2 -] [eb2 - eb2 - ab2 - eb2 -]>`)
  .sound("sawtooth").cutoff(180).lpa(.3).lpenv(6).decay(2).release(1).resonance(5)

$: note(`
<
[[- c4] [- c4] g4 eb4] [bb3 f4 eb4 d4] [[- f4] [- ab4] c5 c5] [eb4 g4 bb4 bb4]
[[- c4] [- c4] g4 eb4] [bb3 [f4 -] [eb4 -] [d4 -]] [[- f4] [- ab4] c5 c5] [eb4 g4 bb4 bb4]
[[- c4] [- c4] g4 eb4] [bb3 f4 eb4 d4] [[- f4] [- ab4] [c5 c5] [c5 c5]] [eb4 g4 [bb4 bb4] bb4]
[c4 c4 g4 eb4] [bb3 f4 eb4 d4] [f4 ab4 - c5] [eb4 g4 bb4 bb4]
>`       
  ).pan(1).sound("square").cutoff(2000).decay(.2).sustain(.3).gain(0.5)

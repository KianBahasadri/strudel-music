// Kian's Custom made sounds and tunes and stuff for later re-use

setcpm(90/4)


_$: note("<[c1 c2 c3 c4] [d1 d2 d3 d4] c2 d2*2 e2*4 [f2 -]*4 [g2 -]*8 -@4>")
// sound used in sloppyguy
//.sound("sawtooth").cutoff(180).lpa(.3).lpenv(6).decay(2).release(1).resonance(5)

// sick bassline
.sound("sawtooth").lpf(100)


// --- Compare the following ---

// Basic Note - https://strudel.cc/learn/effects/#amplitude-envelope
note("c2 eb2 g1 bb1").s("sawtooth")

// Amplitude Envelope
note("<c2 eb2 g1 bb1>").s("sawtooth")
  .attack(.01)    // start of the curve
  .decay(.1)     // midpoint of the curve
  .sustain(.5)  // plateau the last note of the curve
  .release(1)  // dropoff before the plateau

// Without the amp envelope, the note feels boring and flat, an amp envelope gives it like a "bouncy" feeling and without it our notes feel robotic and fake.

// Filters
note("c2 eb2 g1 bb1").s("sawtooth")
  .lpf("<200 500 3000 10000>") // .lpf() is also called .cutoff() and .ctf()

note("c2 eb2 g1 bb1").s("sawtooth")
  .hpf("<200 500 3000 10000>")

// Resonance
// boosts the value just before the cutoff point of a filter
note("c2 eb2 g1 bb1").s("sawtooth")
  .lpf("<400 3000>/2").lpq("<0 15>") // .lpq() is also called resonance()

note("c2 eb2 g1 bb1").s("sawtooth")
  .lpf("400").lpq("<5 10 15 20>")

// Filter Envelope - https://strudel.cc/learn/effects/#filter-envelope
note("c2 eb2 g1 bb1").s("sawtooth")
  .lpf(1000).lpq(15)
  .lpattack(0.01).lpdecay(0.2).lpsustain(0).lprelease(0)
  //.lpenv(5)

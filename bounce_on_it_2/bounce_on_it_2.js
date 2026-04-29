let kick = sound("<[bd - bd - bd] [bd [- bd] - bd]!6 [bd [- bd] - -]>*2").bank("RolandTR909").gain("0.3")
let hh = sound("hh*8").bank("RolandTR909").gain("[0.4 0.8]*4").swingBy(0.6,4)
let snare = sound("- sd - sd").bank("RolandTR909")
let shaker = sound("[- sh]*4").bank("akaixr10").gain("0.3 0.5 0.3 0.5").pan("0.3 0.7 0.3 0.7")
let clap = sound("- cp - cp").bank("RolandTR909").gain(0.5)
let bassline = note("<[c2 - c2 - -] [- - - -]!6 -, [c1 - c1 - -] [- - - -]!6 ->*2").s("sawtooth, square")
.lpf(100).lpq(10)
.lpattack(0).lpdecay(0.3).lpsustain(0.2).lprelease(0.4)
.lpenv(2)
.gain(0.3)

let intro = stack(
sound("hh*8").bank("RolandTR909").gain(tri.slow(16)),
snare, shaker, clap
)

let drums = stack( kick, hh, snare, shaker, clap, bassline)
let drumsNoHH = stack( kick, snare, shaker, clap, bassline)

let tension = note("c6").sound("supersaw").legato(1).room(0.8).sz(0.5).lpf(4000).gain(0.1)

let rythym = stack(note("<[[c2 -]*3 [- eb2]] [[g1 -]*3 -] [[g1 -]*3 [- bb1]] [[c2 -]*3 -]>")
  .s("gm_synth_bass_2").gain("4")
  .attack(.1)    // start of the curve
  .decay(.2)     // midpoint of the curve
  .sustain(.2)  // plateau the last note of the curve
  .release(.5)  // dropoff before the plateau
    .lpf(100)
  .lpa(0.5)
  .resonance(5)
  .lpenv(5),
               note("<[[c2 -]*3 [- eb2]] [[g1 -]*3 -] [[g1 -]*3 [- bb1]] [[c2 -]*3 -]>")
  .s("supersaw").gain("4")
  .attack(.1)    // start of the curve
  .decay(.3)     // midpoint of the curve
  .sustain(.3)  // plateau the last note of the curve
  .release(0)  // dropoff before the plateau
   .hpf(100)
  .hpa(0.5)
  .resonance(5)
  .hpenv(5)
  .room("1"),
              note("<[[c2 -]*3 [- eb2]] [[g1 -]*3 -] [[g1 -]*3 [- bb1]] [[c2 -]*3 -]>")
  .s("triangle").gain("4")
  .attack(.1)    // start of the curve
  .decay(.3)     // midpoint of the curve
  .sustain(.3)  // plateau the last note of the curve
  .release(0)  // dropoff before the plateau
   .hpf(100)
  .hpa(0.5)
  .resonance(5)
  .hpenv(5)
  .room("1")
)


// let riser = sound("pink").seg(16).gain(tri.range(0, 1).slow(16))._pianoroll()
//   .attack(0.1)
//   .decay(.1)     // midpoint of the curve
//   .sustain(.5)  // plateau the last note of the curve
//   .release(1) 

setcpm(140/4)
arrange(
  // [200000, riser],
  [8, stack(intro)],
  [4, stack(drums)],
  [4, stack(drums, tension)],
  [4, stack(drums, tension)],
  [4, stack(drums, tension, tension)],
  [8, stack(drumsNoHH, rythym)],
  [8, stack(drums, rythym)],
  [8, stack(drums, rythym, tension)],
  [8, stack(drums, rythym)],
  [8, stack(drums, rythym, tension)],
)



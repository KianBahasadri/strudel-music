// Kian's Custom made sounds and tunes and stuff for later re-use
let drums = stack(
sound("<[[bd - - bd bd - bd - ]*2]>").bank("RolandTR909").gain("<0.7 0.4>"),
sound("hh*8").bank("RolandTR909").gain("[0.4 0.8]*4").swingBy(0.6,4),
sound("- sd - sd").bank("RolandTR909"),
sound("[- sh]*4").bank("akaixr10").gain("0.3 0.5 0.3 0.5"),
sound("- cp - cp").bank("RolandTR909").gain(0.5)
)

let drumsNoKick = stack(
sound("hh*8").bank("RolandTR909").gain("[0.4 0.8]*4").swingBy(0.6,4),
sound("- sd - sd").bank("RolandTR909"),
sound("[- sh]*4").bank("akaixr10").gain("0.3 0.5 0.3 0.5"),
sound("- cp - cp").bank("RolandTR909").gain(0.5)
)

let tension = note("c6").sound("supersaw").legato(1).room(0.8).sz(0.5).lpf(4000).gain(0.1)

let rythym = note("<[[c2 -]*3 [- eb2]] [[g1 -]*3 -] [[g1 -]*3 [- bb1]] [[c2 -]*3 -]>")
  .s("gm_synth_bass_2").gain("4")
  .attack(.1)    // start of the curve
  .decay(.2)     // midpoint of the curve
  .sustain(.2)  // plateau the last note of the curve
  .release(.5)  // dropoff before the plateau

setcpm(120/4)
arrange(
  [2, stack(drumsNoKick)],
  [4, stack(drums, tension)],
  [8, stack(drumsNoKick, rythym)],
  [4, stack(drums, rythym, tension)],
  [4, stack(drums, rythym)],
  [4, stack(drums, rythym, tension)],
  [4, stack(drums, rythym)],
)


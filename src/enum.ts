enum DaysOfWeek {
  SUN,
  MON,
  TUE,
  WEB,
  THU,
  FRI,
  SAT,
}

export function enumTutorial() {
  let day: DaysOfWeek;
  day = DaysOfWeek.MON;

  if (day === DaysOfWeek.MON) {
    console.log('equal');
  }
}

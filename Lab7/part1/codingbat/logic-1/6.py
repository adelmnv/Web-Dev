def alarm_clock(day, vacation):
  if not vacation:
    return '7:00' if day >= 1 and day <= 5 else '10:00'
  else:
    return '10:00' if day >= 1 and day <= 5 else 'off'
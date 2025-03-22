def caught_speeding(speed, is_birthday):
  if is_birthday:
    speed -= 5
  return 0 if speed <= 60 else 1 if speed <= 80 else 2
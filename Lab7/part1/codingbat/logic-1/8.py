def in1to10(n, outside_mode):
  if not outside_mode:
    return n >= 1 and n <= 10
  else:
    return n <= 1 or n >= 10
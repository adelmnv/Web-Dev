def lucky_sum(a, b, c):
  if 13 in [a, b ,c]:
    if a == 13:
      return 0
    if b == 13:
      return a
    return  a + b
  else:
    return a + b + c
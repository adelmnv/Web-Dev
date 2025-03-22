def make_chocolate(small, big, goal):
  num_b = goal // 5
  if num_b>big:
    num_b=big
  goal -= (num_b*5)
  if goal <= small:
    return goal
  else:
    return -1

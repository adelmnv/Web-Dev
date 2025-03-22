def make_bricks(small, big, goal):
  max_big_used = min(big, goal // 5)
  remaining_length = goal - (max_big_used * 5)
  return remaining_length <= small
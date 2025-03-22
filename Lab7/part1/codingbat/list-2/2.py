def big_diff(nums):
  max = 0
  min = 10000000000
  for i in nums:
    if i > max:
      max = i
    if i < min:
      min = i
  return max - min
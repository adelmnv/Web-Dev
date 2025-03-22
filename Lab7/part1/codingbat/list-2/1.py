def count_evens(nums):
  evens  = 0
  for i in nums:
    if i % 2 == 0 :
      evens += 1
  return evens
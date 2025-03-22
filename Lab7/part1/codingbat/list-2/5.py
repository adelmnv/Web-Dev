def sum67(nums):
    sum = 0
    skip = False
    for i in nums:
        if i == 6:
            skip = True
        if not skip:
            sum += i
        if i == 7:
            skip = False
    return sum
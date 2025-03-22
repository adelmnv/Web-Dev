def sum13(nums):
    sum = 0
    was = False
    for i in nums:
        if was:
            was = False
            continue
        if i != 13:
            sum += i
        else:
            was = True
            continue
    return sum
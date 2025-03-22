def count_code(s):
  counter = 0
  for i in range(len(s) - 3): 
    if s[i:i+2] == "co" and s[i+3] == "e": 
      counter += 1
  return counter
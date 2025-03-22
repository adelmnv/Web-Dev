def string_splosion(str):
  cur = ""
  for i in range(len(str)):
    cur+=str[:i+1]
  return cur
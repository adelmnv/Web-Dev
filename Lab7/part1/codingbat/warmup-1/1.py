def sleep_in(weekday, vacation):
  if(weekday==False or vacation == True):
    return True
  elif(weekday==True and vacation == False):
    return False
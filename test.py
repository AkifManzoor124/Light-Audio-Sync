from pyHS100 import SmartBulb
import time
import random

bulb = SmartBulb("192.168.2.10")

#bulb.turn_on()

#I can set the values of the bulb before it's even turned on
#bulb.brightness = 100

while(True):
    randhue = random.randint(0,360)
    randsat = random.randint(0,100)
    randval = random.randint(0,100)
    print(bulb.hsv)
    bulb.hsv = (randhue, randsat, randval)
    print(bulb.hsv)
    time.sleep(3)

#Gradually go up temperature in the morning
#Gradually go down in temperature in the evening
#Rave Mode
#Romantic Mode
#https://github.com/GadgetReactor/pyHS100



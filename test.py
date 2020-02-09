from pyHS100 import SmartBulb
import time
import random

bulb_ip = "192.168.2.10"
bulb = SmartBulb(bulb_ip)
print("Hardware: %s" % pf(plug.hw_info))
print("Full sysinfo: %s" % pf(plug.get_sysinfo()))
print("Current time: %s" % bulb.time)
print("Timezone: %s" % bulb.timezone)

def turn_off_bulb():
    bulb.turn_off()

def turn_on_bulb():
    bulb.turn_on()

def get_brightness():
    return bulb.brightness

def set_brightness(brightness):
    bulb.brightness = brightness

def get_color_temp():
    return bulb.color_temp

def set_color_temp(temperature):
    bulb.color_temp = temperature

def get_color():
    return bulb.hsv

def set_color(degree, saturation, percentage):
    bulb.hsv = (degree, saturation, percentage)

# Gradually increase the brightness of the room
# Gradually change the temperature to a blueish colour
def sunrise_mode():
    for i in range(0,100):
        set_brightness(i)
        time.sleep(1)

    set_color(190,100,100)

# Gradually decrease the brightness of the room
# Gradually change the temperature to an orange
def sundown_mode():
    for i in range(100,0):
        set_brightness(i)
        time.sleep(1)

    set_color(10,0,1)

# instantaneous change of the colour
# Brightness will remain the same
def rave_mode(interval):
    random.ranadint(0,360)
    time.sleep(interval)

# Gradually change the colour of the bulb to a purple-ish red
# Decrease the brightness over an hour to low 
def romantic_mode():
    set_color(350,100,100)
    for i in range(100,0):
        set_brightness(i)
        time.sleep(36)
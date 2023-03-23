import pyautogui as pg
import time

print("program will rn i 5 sec")
time.sleep(5)

for i range(1):
    pg.write("hi")
    time.sleep(0.5)
    pg.press("Enter")
    
import pyautogui
import keyboard 
import time

pyautogui.PAUSE = 0.01

click = 'false'

while True: 
    if click == 'true':
        x, y = pyautogui.position()
        pyautogui.rightClick(x, y)

    if keyboard.is_pressed('c'): 
        click = 'true'

    if keyboard.is_pressed('x'): 
        click = 'false'

    elif keyboard.is_pressed('v'): 
        break
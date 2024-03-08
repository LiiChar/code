import pyautogui
import keyboard 
import time

pyautogui.PAUSE = 0.5


while True: 
    try:
        if keyboard.is_pressed('q'): 
            pyautogui.click(101, 751)
            pyautogui.click(89, 19)
            pyautogui.click(647, 115)
            pyautogui.click(200, 110)
            pyautogui.typewrite('youtube', interval = 0.1)
            pyautogui.click(690, 114)
            time.sleep(3)
            pyautogui.click(174, 200)
            break
            
        elif keyboard.is_pressed('c'):
            break
        elif keyboard.is_pressed('p'): 
            time.sleep(1)
            print(pyautogui.position())
    except:
        break
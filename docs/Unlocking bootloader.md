---
hide:
  - navigation
---
# **Unlocking bootloader**
**It's the first step before doing anything, whether it's flashing custom ROM or rooting your device.**

## Requirements:

* A PC/Laptop

* A SIM card

* An internet connection

* A Mi account with a phone number registered

* A USB cable

## Steps on phone:
* You have to connect your account with the Mi Unlock authorization tab, which you can find in the developer settings.

* Open the device settings > Tap on About phone > Scroll down and tap on MIUI version five times. This will unlock the developer options in your device, which can be located in “Additional Settings” tab.

**So, Xiaomi has decided to make the unlocking process more difficult if you want to follow the new process you can go [here](https://xdaforums.com/t/how-to-unlock-bootloader-on-xiaomi-hyperos-all-devices.4654009/), meanwhile there is a neat hack to use the old method which will save you a whole lot of time. Follow this GitHub [Project](https://github.com/TheAirBlow/HyperSploit) and download the script for your particular Operating System from the [release](https://github.com/TheAirBlow/HyperSploit/releases) page. Make sure to read the [README.md](https://github.com/TheAirBlow/HyperSploit?tab=readme-ov-file#hypersploit) first. After this you can continue the next steps.**

!!! warning "New Method issues"
    
    Just agree to MI user agreement in the next step is you are using the new method. 
    Also, it may give an error promiting you to use Xiaomi community app if you 
    are not using the script above.

* In the Developer options, go to the “Mi Unlock status” and tap on “Add account and device” in order to authorize Xiaomi to unlock the device associated with the account. Note that it can take up to 168 hours to finish this, you will have to wait for the week before unlocking your bootloader.

* The authorization process will use the mobile data of the carrier. Therefore, make sure you have turned off Wi-Fi before adding the account.

* Before moving ahead with the next step, enable OEM unlocking and USB debugging while you are in the developer options settings.

## Steps on PC:

*** 
Download bootloader interface driver from here:- [Bootloader drivers](https://t.me/XAGASupport/446550)

Get the official Xiaomi Unlock Tool from here:- [Mi Unlock tool](https://miuirom.org/updates/mi-flash-unlock)
***

* Extract the zip file and open the application named “miflash_unlock.exe”. Log in using the same Mi account which is being used on the phone.

* Before starting with the bootloader unlocking process, tap on the top-right gear icon to check if there is an update for USB drivers. If this step doesn't work, just skip it.

## Final Steps:

* As instructed on the app screen, switch off your smartphone. Take a moment and hold the power button and lower volume button simultaneously. This will open up the fastboot mode in your device. Now, connect the phone with the computer via USB cable.

* A new message will appear on the screen, “Phone connected”. Now, click on the “Unlock” button to unlock the bootloader. Note that it will **erase all the data in your phone.**

* Done, your device is now unlocked. Enjoy flashing stuff and always read guides provided in the group or ask people in the group for help if you're not sure about something to avoid bricks :).

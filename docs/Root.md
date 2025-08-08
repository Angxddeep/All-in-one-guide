---
hide:
  - navigation
---
# **Rooting your device**
**You will need a laptop/PC for this. Bootloader must be unlocked for this.**


*You can skip straight to step 6 if you have already patched a **boot.img**. You can find a patched **boot.img** in your device group's respective notes or channels, wherever they may be.* 

## Finding boot image:

1. Download and copy the respective **boot.img** on your phone. Can be found in your respective device's group or inside fastboot ROM in images folder, or you can use payload dumper to pull **boot.img**. Refer to [this](https://telegra.ru/Payload-Dumper-Guide-02-15) note for that guide.

2. Download and Install the Magisk (or KernelSU) apk on your phone. 

3. Open Magisk (or KernelSU) App, and go to install option, choose, "select and patch a file", select the **boot.img** that you copied onto the phone before. Patching process will start.

4. A new patched Magisk (or KernelSU) **boot.img** should be saved in downloads folder. 

***
**Download Platform tools on your PC/ Laptop from [here](https://developer.android.com/studio/releases/platform-tools)**

**Install universal ADB Drivers as well from, [here](https://adb.clockworkmod.com/)**
***

## Flashing boot image

1. Copy the patched Magisk (or KernelSU) **boot.img** to platform tools folder in your laptop or PC. You can rename the patched image for your own convenience. 

2. Open a Command Window from inside platform tools folder. As follows: -
![image](/img/images/miflash.png)
![image](/img/images/miflashcmd.png)



3. Reboot device in fastboot mode by pressing and holding volume down and power button. 

4. Type the following commands in CMD window.

```
fastboot devices
```

Your device should be detected in CMD.

```
fastboot flash boot <patched boot.img> 
```
**patched boot.img** = Your respective patched image.

Command window should show a finished indication. 

From here, you can go ahead and restart using the command: 
```
fastboot reboot
```


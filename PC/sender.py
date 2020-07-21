import socket
import time
from imutils.video import VideoStream
from time import sleep
import cv2
import imagezmq

sender = imagezmq.ImageSender(connect_to='tcp://192.168.0.2'
                                         '8:5555')

rpi_name = socket.gethostname() # send RPi hostname with each image
print(rpi_name)
cap = cv2.VideoCapture(0)

# picam = VideoStream().start()
time.sleep(2.0)
cnt = 0
while True:
  # sleep(5)
  ret, fram = cap.read()
  if ret:
    gray = cv2.cvtColor(fram, cv2.COLOR_BGR2GRAY)
    cv2.imshow('heu', gray)
    print(fram.shape)
    print("계속 보내는중")
    try:
      sender.send_image('computer', gray)
    except:
      print("error")
  # cnt = cnt + 1
  # image = picam.read()
  # cv2.waitKey(0)


  # try:
  #   rpi_name = rpi_name+str(cnt)
  #   print(rpi_name)
  #   sender.send_image(rpi_name, image)
  #   print("sending image")
  # except: # odroid is died
  #   pass

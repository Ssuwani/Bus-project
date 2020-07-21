import os
import cv2
from base_camera import BaseCamera
import imagezmq
image_hub = imagezmq.ImageHub()

print("이게 또 실행되진 않을 꺼 아니야..")
class Camera(BaseCamera):
    @staticmethod
    def frames():
        print("이거도 한번이겠지?")
        # camera = cv2.VideoCapture(0)

        while True:

            rpi_name, img = image_hub.recv_image()
            image_hub.send_reply(b'OK')
            # ret, img = camera.read()
            cv2.imwrite("image.jpg",img)
            print(img.shape)
            # encode as a jpeg image and return it
            yield cv2.imencode('.jpg', img)[1].tobytes()

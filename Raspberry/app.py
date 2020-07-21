#!/usr/bin/env python
from importlib import import_module
import os
from flask import Flask, render_template, Response
import cv2
from opencv import Camera

app = Flask(__name__)


def gen(camera):
    while True:
        frame = camera.get_frame()
        # print(frame.shape)
        print("이거는 계속일듯.")
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/video_feed')
def video_feed():
    print("실행?")

    return Response(gen(Camera()), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':

    # app.run(host='192.168.0.8')
    app.run(host='192.168.0.8',port=3000, threaded=True)

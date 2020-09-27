from fastai.vision.all import *
from flask import Flask, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)


learn_inf = load_learner('bears.pkl')
#ims = ['http://3.bp.blogspot.com/-S1scRCkI3vY/UHzV2kucsPI/AAAAAAAAA-k/YQ5UzHEm9Ss/s1600/Grizzly%2BBear%2BWildlife.jpg']
#dest = 'grizzly.jpg'
#download_url(ims[0], dest)
#learn_inf.predict('grizzly.jpg')
#learn_inf.predict('grizzly.jpg')[0]
#learn_inf.dls.vocab

def search_by_url(url):
    dest = 'temp.jpg'
    download_url(url, dest)
    val = learn_inf.predict('temp.jpg')
    return [val[0], val[2][0].item(), val[2][1].item(), val[2][2].item()]


@app.route('/')
@cross_origin()
def hello_world():
    return 'Hello, World!'


@app.route('/api/bear/url', methods=['POST'])
@cross_origin()
def bear_hunt():
    data = request.json
    ans = search_by_url(data['url'])
    return {"prediction":ans}


@app.route('/api/bear/image', methods=['POST'])
@cross_origin()
def bear_hunt_image():
    data = request.json
    ans = search_by_url(data['url'])
    return {"prediction":ans}

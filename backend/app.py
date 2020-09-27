from fastai.vision.all import *
from flask import Flask


app = Flask(__name__)


learn_inf = load_learner('bears.pkl')
ims = ['http://3.bp.blogspot.com/-S1scRCkI3vY/UHzV2kucsPI/AAAAAAAAA-k/YQ5UzHEm9Ss/s1600/Grizzly%2BBear%2BWildlife.jpg']
dest = 'grizzly.jpg'
download_url(ims[0], dest)
learn_inf.predict('grizzly.jpg')
learn_inf.predict('grizzly.jpg')[0]
learn_inf.dls.vocab


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/api/bear')
def bear_hunt():

    

    return 'Hello, World!'

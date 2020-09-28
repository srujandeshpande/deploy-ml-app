FROM fastdotai/fastai:latest
WORKDIR /app
RUN conda install -c fastai -c pytorch -c anaconda fastai gh anaconda
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY bears.pkl .
COPY app.py .
ENV PORT=8000
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app

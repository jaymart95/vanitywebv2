FROM python:3.11.8

RUN apt-get update
WORKDIR /usr/app

COPY  requirements.txt .

RUN pip install -r requirements.txt

COPY app/ .

CMD [ "python", "main.py" ]

# Use the official Python image as a base
FROM python:3.10 AS builder

# Set the working directory in the container
WORKDIR /

# for our nltk data folder
ENV NLTK_DATA /usr/share/nltk_data

# Install dependencies
COPY requirements_compact.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements_compact.txt

# download punkt
RUN python3 -m nltk.downloader punkt -d /usr/share/nltk_data
# download stopwords
RUN python3 -m nltk.downloader stopwords -d /usr/share/nltk_data

RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    libsm6 \
    libxext6 \
    g++ \
    openjdk-17-jdk && \
    rm -rf /var/lib/apt/lists/*

# Mecab 설치
COPY mecab_install.sh .
RUN python3.10 -m pip install konlpy JPype1-py3
RUN bash mecab_install.sh
RUN python3.10 -m pip install mecab-python3

RUN pip install spacy

# Install AWS CLI
RUN pip install awscli

FROM builder AS app

# Copy the current directory contents into the container at /app
COPY app /app

# Set the working directory in the container
WORKDIR /app

# Expose the port that uvicorn will run on
EXPOSE 7999

# Command to run uvicorn with auto-reload
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7999", "--reload"]
#  Base image
FROM alpine:latest

# Install  python + pip
RUN apk add --update python3 py3-pip

# Install python modules for the app
COPY requirements.txt  /usr/src/app/
RUN pip3 install --no-cache-dir --break-system-packages -r /usr/src/app/requirements.txt

# Copy App
COPY app.py /usr/src/app/
COPY templates/index.html /usr/src/app/templates/

# Expose flask port
EXPOSE 5000

# Run App
CMD ["python3", "/usr/src/app/app.py"]
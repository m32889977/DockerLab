#  Base image
FROM alpine:latest

# Install  python + pip
RUN apk add --update py2-pip

# Install python modules for the app
COPY requirements.txt  /usr/src/app/
RUN pip install --no-cache-dir -r /usr/src/app/requirements.txt

# Copy App
COPY app.py /usr/src/app/
COPY templates/index.html /usr/src/app/templates/

# Expose flask port
EXPOSE 5000

# Run App
CMD ["python", "/usr/src/app/app.py"]
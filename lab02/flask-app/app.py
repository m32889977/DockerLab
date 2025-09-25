from flask import Flask, render_template
import random

app = Flask(__name__)

# list of cat images
images = [
   "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy1-2-320x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy2-2-250x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy3-2-320x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy4-1-320x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy5-4-300x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy6-2-320x183.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy7-2-320x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy8-1.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy9-1-320x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy11-1-320x190.gif",
    "https://cdn.petcarerx.com/blog/wp-content-uploads-2016-01-giphy12-2-320x190.gif"
    ]

@app.route('/')
def index():
    url = random.choice(images)
    return render_template('index.html', url=url)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
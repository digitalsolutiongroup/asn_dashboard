import os
import logging
from flask import Flask, render_template

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev_key_for_testing")

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/curriculum')
def curriculum():
    return render_template('curriculum.html')

@app.route('/performance')
def performance():
    return render_template('performance.html')

@app.route('/promotion')
def promotion():
    return render_template('promotion.html')

@app.route('/analytics')
def analytics():
    return render_template('analytics.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

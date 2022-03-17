from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/more-stuff")
def another_page():
    return "<p>This is another page!</p>"
from flask import render_template

from app import app


@app.errorhandler(404)
def err_404(e):
  return render_template('404.html')

@app.errorhandler(500)
def err_500(e):
  return render_template('500.html')

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/about')
def about():
  return render_template("about.html")

@app.route('/bubble')
def bubble():
  return render_template("bubble.html")

@app.route('/insertion')
def insertion():
  return render_template("insertion.html")


@app.route('/quick')
def quick():
  return render_template("quick.html")

@app.route('/merge')
def merge():
  return render_template("merge.html")

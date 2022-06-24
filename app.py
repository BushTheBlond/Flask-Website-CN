# flask is a python-based framework
# web frmaework - used for back-end or full stack development
# micro framework - lacks many tools by default
# uses Werkzeug and Jinja2
# Has been used by Netflix, Reddit, Linkedin



from flask import Flask
from views import views
#we import our views from the views file

app = Flask(__name__)
#we instantiate the app object


app.register_blueprint(views)

if __name__ == "__main__":
    app.run(debug=True, port=8000)


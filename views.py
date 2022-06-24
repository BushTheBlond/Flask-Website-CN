from flask import render_template, Blueprint, request

views = Blueprint ("views", __name__)

# view in this instance is a Blueprint , SQL Alchemy

task_list = []

@views.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html'), 404

@views.route("/")
def home ():
    return render_template("index.html")

@views.route("/contact")
def contact ():
    return render_template("contact.html")

@views.route("/about")
def about ():
    return render_template("about.html")

@views.route("/todos", methods=["GET","POST"])
def todos ():
    if request.method == "POST":
        task = request.form.get("task-input")
        task_list.append(task)
        print(task_list)
        return render_template("todos.html", task_list=task_list)
    return render_template("todos.html")

@views.route("/band", methods=["GET","POST"])
def band ():
    if request.method == "POST":
        task = request.form.get("task-input")
        task_list.append(task)
        print(task_list)
        return render_template("band.html", task_list=task_list)
    return render_template("band.html")
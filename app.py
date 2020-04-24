from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    passwd = db.Column(db.String(60), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.email}','{self.passwd}')"

    def __init__(self, email, password):
        self.email = email
        self.passwd = password


@app.route('/')
@app.route('/login')
def index():
    return render_template('login.html', info="Don’t have an account?", link="Sign Up", sname="script.js")


@app.route('/signup')
def signup():
    return render_template('signup.html', sname="script2.js")


@app.route('/submit', methods=['POST'])
def submit():
    email = request.form.get('email')
    password = request.form.get('password')
    user = User.query.filter_by(email=email).first()
    if user != None and bcrypt.check_password_hash(user.passwd, password):
        return render_template('greet.html')
    else:
        return render_template('error.html')


@app.route('/registered', methods=['POST'])
def reg():
    info = "You have been Registered!"
    weight = 500
    email = request.form.get('email')
    password = bcrypt.generate_password_hash(request.form.get('password'))
    print(email, password)
    db.session.add(User(email, password))
    db.session.commit()
    return render_template('login.html', info=info, weight=weight)

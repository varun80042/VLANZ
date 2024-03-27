from flask import Flask, render_template, request, redirect, url_for, session, g
from werkzeug.urls import url_quote
import mysql.connector

app = Flask(__name__, template_folder='../templates', static_folder='../static')
app.secret_key = "vlanz"

AUTHENTICATION_MICROSERVICE_URL = "http://127.0.0.1:5001"
CUSTOMER_MICROSERVICE_URL = "http://127.0.0.1:5002"
FREELANCER_MICROSERVICE_URL = "http://127.0.0.1:5003"

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tree2003",
    database="253_265_284_309"
)

cursor = db.cursor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():        
    try:
        if request.method == 'POST':
                username = request.form['username']
                password = request.form['password']
                user_type = request.form['user_type']
                LName = request.form['LName']
                FName = request.form['FName']
                PhoneNo = request.form['PhoneNo']
                Location = request.form['Location']

                if user_type == 'customer':
                    cursor.execute("INSERT INTO customer (username, password, LName, FName, PhoneNo, Location) VALUES (%s, %s, %s, %s, %s, %s)", (username, password, LName, FName, PhoneNo, Location))

                elif user_type == 'freelancer':
                    cursor.execute("INSERT INTO freelancer (username, password, LName, FName, PhoneNo, Location) VALUES (%s, %s, %s, %s, %s, %s)", (username, password, LName, FName, PhoneNo, Location))

                db.commit()
                return redirect(url_for('login'))
    
    except Exception as e:
        return str(e)

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    try:
        if request.method == 'POST':
            username = request.form['username']
            password = request.form['password']

            cursor.execute("SELECT * FROM customer WHERE username = %s AND password = %s", (username, password))
            customer = cursor.fetchone()

            if customer:
                cursor.fetchall()

                session['user_id'] = customer[0]
                session['user_type'] = 'customer'
                return redirect(f"{CUSTOMER_MICROSERVICE_URL}/customer_home/{customer[0]}")

            cursor.execute("SELECT * FROM freelancer WHERE username = %s AND password = %s", (username, password))
            freelancer = cursor.fetchone()

            if freelancer:
                cursor.fetchall()

                session['user_id'] = freelancer[0]
                session['user_type'] = 'freelancer'
                return redirect(f"{FREELANCER_MICROSERVICE_URL}/freelancer_home/{freelancer[0]}")
            
    except Exception as e:
        return str(e)

    return render_template('login.html')

if __name__ == '__main__':
    app.run(port=5001, debug=True)
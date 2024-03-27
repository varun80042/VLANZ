from flask import Flask, render_template, request, redirect, url_for, session, g
from werkzeug.urls import url_quote
import mysql.connector

app = Flask(__name__, template_folder='../../templates', static_folder='../../static')
app.secret_key = "vlanz"

AUTHENTICATION_MICROSERVICE_URL = "http://127.0.0.1:5001"
CUSTOMER_MICROSERVICE_URL = "http://127.0.0.1:5002"
FREELANCER_MICROSERVICE_URL = "http://127.0.0.1:5003"

db = mysql.connector.connect(
    host="mysql-db",
    user="root",
    password="password",
    database="253_265_284_309"
)

cursor = db.cursor()

@app.route('/freelancer_home/<int:freelancer_id>', methods=['GET', 'POST'])
def freelancer_home(freelancer_id):
    try:
        db.commit()
        g.freelancer_id = freelancer_id

        cursor.execute("SELECT get_freelancer_name(%s)", (freelancer_id,))
        freelancer_info = cursor.fetchone()[0]

        cursor.execute("SELECT ROUND(AVG(cost), 2) FROM service WHERE freelancer_id = %s AND deleted = 0", (freelancer_id,))
        average_cost = cursor.fetchone()[0]

        if request.method == 'POST':
            name = request.form['name']
            domain = request.form['domain']
            description = request.form['description']
            cost = request.form['cost']

            cursor.execute("INSERT INTO service (freelancer_id, name, domain, description, cost) VALUES (%s, %s, %s, %s, %s)", (freelancer_id, name, domain, description, cost))
            db.commit()

        cursor.execute("SELECT * FROM service WHERE freelancer_id = %s AND deleted = 0", (freelancer_id,))
        services = cursor.fetchall()

    except Exception as e:
        return str(e)

    return render_template('freelancer_home.html', freelancer_info=freelancer_info, freelancer_id=freelancer_id, services=services, average_cost=average_cost)

@app.route('/add_service/<int:freelancer_id>', methods=['GET', 'POST'])
def add_service(freelancer_id):
    try:
        if request.method == 'POST':
            name = request.form['name']
            domain = request.form['domain']
            description = request.form['description']
            cost = request.form['cost']

            cursor.execute("INSERT INTO service (freelancer_id, name, domain, description, cost) VALUES (%s, %s, %s, %s, %s)", (freelancer_id, name, domain, description, cost))
            db.commit()

            return redirect(url_for('freelancer_home', freelancer_id=freelancer_id))
    
    except Exception as e:
        return str(e)

    return render_template('add_service.html', freelancer_id=freelancer_id)

@app.route('/update_service/<int:freelancer_id>/<int:service_id>', methods=['GET', 'POST'])
def update_service(freelancer_id, service_id):
    try:
        g.freelancer_id = freelancer_id

        cursor.execute("SELECT * FROM service WHERE id = %s", (service_id,))
        service = cursor.fetchone()

        if request.method == 'POST':
            name = request.form['name']
            domain = request.form['domain']
            description = request.form['description']
            cost = request.form['cost']

            cursor.callproc('update_service', (service_id, name, domain, description, cost))
            db.commit()

            return redirect(url_for('freelancer_home', freelancer_id=freelancer_id))
    
    except Exception as e:
        return str(e)
    
    return render_template('update_service.html', freelancer_id=freelancer_id, service=service)

@app.route('/delete_service/<int:freelancer_id>/<int:service_id>')
def delete_service(freelancer_id, service_id):
    try:
        cursor.callproc('delete_service', (service_id,))
        db.commit()
    
    except Exception as e:
        return str(e)

    return redirect(url_for('freelancer_home', freelancer_id=freelancer_id))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('user_type', None)
    return redirect(AUTHENTICATION_MICROSERVICE_URL)

if __name__ == '__main__':
    app.run(port=5003, debug=True)
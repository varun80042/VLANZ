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
    password="tree2003",
    database="253_265_284_309"
)

cursor = db.cursor()

@app.route('/customer_home/<int:customer_id>')
def customer_home(customer_id):
    try:
        db.commit()
        g.customer_id = customer_id 

        cursor.execute("SELECT get_customer_name(%s)", (customer_id,))
        customer_info = cursor.fetchone()[0]

        cursor.execute("SELECT COUNT(*) FROM orders WHERE customer_id = %s", (customer_id,))
        total_orders = cursor.fetchone()[0]

        cursor.execute("SELECT * FROM service WHERE id NOT IN (SELECT service_id FROM orders WHERE customer_id = %s) AND deleted = 0", (customer_id,))
        services = cursor.fetchall()

        cursor.execute("SELECT s.name, s.domain, s.description, o.date_and_time, o.service_id FROM orders o JOIN service s ON o.service_id = s.id WHERE o.customer_id = %s", (customer_id,))
        order_history = cursor.fetchall()
    
    except Exception as e:
        return str(e)

    return render_template('customer_home.html', customer_info=customer_info, services=services, order_history=order_history, total_orders=total_orders)

@app.route('/buy_service/<int:customer_id>/<int:service_id>')
def buy_service(customer_id, service_id):
    try:
        cursor.execute("INSERT INTO orders (customer_id, service_id) VALUES (%s, %s)", (customer_id, service_id))
        db.commit()
    
    except Exception as e:
        return str(e)

    return redirect(url_for('customer_home', customer_id=customer_id))

@app.route('/cancel_order/<int:customer_id>/<int:service_id>')
def cancel_order(customer_id, service_id):
    try:
        cursor.execute("DELETE FROM orders WHERE customer_id = %s AND service_id = %s", (customer_id, service_id))
        db.commit()

        return redirect(url_for('customer_home', customer_id=customer_id))

    except Exception as e:
        return str(e)
    
@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('user_type', None)
    return redirect(AUTHENTICATION_MICROSERVICE_URL)
    
if __name__ == '__main__':
    app.run(port=5002, debug=True)
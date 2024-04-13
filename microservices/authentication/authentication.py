from flask import Flask, render_template, request, redirect, url_for, session, g
from werkzeug.urls import url_quote
import mysql.connector

app = Flask(__name__)
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

def create_tables(cursor):
    try:
        cursor.execute("CREATE DATABASE IF NOT EXISTS 253_265_284_309")
        cursor.execute("USE 253_265_284_309")

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS customer (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(128) NOT NULL,
                num_orders INT DEFAULT 0,
                PastOrders INT DEFAULT 0,
                LName VARCHAR(50),
                FName VARCHAR(50),
                PhoneNo VARCHAR(15),
                Location VARCHAR(100)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS freelancer (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(128) NOT NULL,
                LName VARCHAR(50),
                FName VARCHAR(50),
                PhoneNo VARCHAR(15),
                Location VARCHAR(100)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS service (
                id INT AUTO_INCREMENT PRIMARY KEY,
                freelancer_id INT,
                name VARCHAR(50) NOT NULL,
                domain VARCHAR(50) NOT NULL,
                description VARCHAR(200) NOT NULL,
                rating INT,
                cost DECIMAL(10, 2),
                deleted BOOLEAN DEFAULT 0,
                FOREIGN KEY (freelancer_id) REFERENCES freelancer(id)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS orders (
                id INT AUTO_INCREMENT PRIMARY KEY,
                customer_id INT,
                service_id INT,
                payment_type VARCHAR(50),
                payment_status VARCHAR(50),
                date_and_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                placed_by_id INT,
                FOREIGN KEY (customer_id) REFERENCES customer(id),
                FOREIGN KEY (service_id) REFERENCES service(id),
                FOREIGN KEY (placed_by_id) REFERENCES customer(id)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS customer_phone (
                customer_id INT,
                phone_no VARCHAR(15),
                PRIMARY KEY (customer_id, phone_no),
                FOREIGN KEY (customer_id) REFERENCES customer(id)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS seller_phone (
                freelancer_id INT,
                phone_no VARCHAR(15),
                PRIMARY KEY (freelancer_id, phone_no),
                FOREIGN KEY (freelancer_id) REFERENCES freelancer(id)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS services (
                freelancer_id INT,
                service_id INT,
                PRIMARY KEY (freelancer_id, service_id),
                FOREIGN KEY (freelancer_id) REFERENCES freelancer(id),
                FOREIGN KEY (service_id) REFERENCES service(id)
            )
        """)

        cursor.execute("""
            CREATE TABLE IF NOT EXISTS past_orders (
                customer_id INT,
                order_id INT,
                PRIMARY KEY (customer_id, order_id),
                FOREIGN KEY (customer_id) REFERENCES customer(id),
                FOREIGN KEY (order_id) REFERENCES orders(id)
            )
        """)

        cursor.execute("""
            CREATE TRIGGER before_insert_service
            BEFORE INSERT ON service
            FOR EACH ROW
            BEGIN
                IF NEW.cost < 500 THEN
                    SET NEW.cost = 500;
                END IF;
            END;
        """)

        cursor.execute("""
            CREATE FUNCTION get_customer_name(customer_id INT) RETURNS VARCHAR(100) DETERMINISTIC
            BEGIN
                DECLARE customer_name VARCHAR(100);
                SELECT CONCAT(FName, ' ', LName) INTO customer_name FROM customer WHERE id = customer_id;
                RETURN customer_name;
            END;
        """)

        cursor.execute("""
            CREATE FUNCTION get_freelancer_name(freelancer_id INT) RETURNS VARCHAR(100) DETERMINISTIC
            BEGIN
                DECLARE freelancer_name VARCHAR(100);
                SELECT CONCAT(FName, ' ', LName) INTO freelancer_name FROM freelancer WHERE id = freelancer_id;
                RETURN freelancer_name;
            END;
        """)

        cursor.execute("""
            CREATE PROCEDURE delete_service(IN service_id INT)
            BEGIN
                UPDATE service SET deleted = 1 WHERE id = service_id;
            END;
        """)

        cursor.execute("""
            CREATE PROCEDURE update_service(IN service_id INT, IN new_name VARCHAR(100), IN new_domain VARCHAR(100), IN new_description TEXT, IN new_cost DECIMAL(10, 2))
            BEGIN
                UPDATE service
                SET name = new_name, domain = new_domain, description = new_description, cost = new_cost
                WHERE id = service_id;
            END;
        """)

        db.commit()
    except Exception as e:
        print(f"Error creating tables: {e}")

create_tables(cursor)

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
    app.run(port=5001, host='0.0.0.0', debug=True)
# Import necessary libraries
import pytest
from authentication import app

# Test user registration functionality
def test_user_registration():
    client = app.test_client()
    response = client.post('/register', data={'username': 'testuser', 'password': 'password', 'user_type': 'customer', 'LName': 'Doe', 'FName': 'John', 'PhoneNo': '1234567890', 'Location': 'New York'})
    assert response.status_code == 302  # Check if registration redirects to login page

# Test user login functionality
def test_user_login():
    client = app.test_client()
    response = client.post('/login', data={'username': 'testuser', 'password': 'password'})
    assert response.status_code == 302  # Check if login redirects to user homepage

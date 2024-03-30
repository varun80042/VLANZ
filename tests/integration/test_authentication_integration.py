# Import necessary libraries
import pytest
import requests
from authentication import app

# Test user registration endpoint
def test_user_registration_endpoint():
    response = requests.post('http://127.0.0.1:5001/register', data={'username': 'testuser', 'password': 'password', 'user_type': 'customer', 'LName': 'Doe', 'FName': 'John', 'PhoneNo': '1234567890', 'Location': 'New York'})
    assert response.status_code == 302  # Check if registration redirects to login page

# Test user login endpoint
def test_user_login_endpoint():
    response = requests.post('http://127.0.0.1:5001/login', data={'username': 'testuser', 'password': 'password'})
    assert response.status_code == 302  # Check if login redirects to user homepage

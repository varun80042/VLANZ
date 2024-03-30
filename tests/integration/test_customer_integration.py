import pytest
import requests

# Test case for customer_home endpoint
def test_customer_home_endpoint():
    response = requests.get('http://127.0.0.1:5002/customer_home/1')
    assert response.status_code == 200  # Check if the endpoint returns status code 200 (OK)

# Test case for buy_service endpoint
def test_buy_service_endpoint():
    response = requests.get('http://127.0.0.1:5002/buy_service/1/1')
    assert response.status_code == 302  # Check if the endpoint redirects after buying a service

# Test case for cancel_order endpoint
def test_cancel_order_endpoint():
    response = requests.get('http://127.0.0.1:5002/cancel_order/1/1')
    assert response.status_code == 302  # Check if the endpoint redirects after cancelling an order

import pytest
from customer import app

# Test case for customer_home route
def test_customer_home_route():
    client = app.test_client()
    response = client.get('/customer_home/1')
    assert response.status_code == 200  # Check if the route returns status code 200 (OK)

# Test case for buy_service route
def test_buy_service_route():
    client = app.test_client()
    response = client.get('/buy_service/1/1')
    assert response.status_code == 302  # Check if the route redirects after buying a service

# Test case for cancel_order route
def test_cancel_order_route():
    client = app.test_client()
    response = client.get('/cancel_order/1/1')
    assert response.status_code == 302  # Check if the route redirects after cancelling an order
import pytest
from freelancer import app

# Test case for freelancer_home route
def test_freelancer_home_route():
    client = app.test_client()
    response = client.get('/freelancer_home/1')
    assert response.status_code == 200  # Check if the route returns status code 200 (OK)

# Test case for add_service route
def test_add_service_route():
    client = app.test_client()
    response = client.post('/add_service/1', data={'name': 'Service 1', 'domain': 'Domain 1', 'description': 'Description 1', 'cost': 100})
    assert response.status_code == 302  # Check if the route redirects after adding a service

# Test case for update_service route
def test_update_service_route():
    client = app.test_client()
    response = client.post('/update_service/1/1', data={'name': 'Updated Service', 'domain': 'Updated Domain', 'description': 'Updated Description', 'cost': 200})
    assert response.status_code == 302  # Check if the route redirects after updating a service

# Test case for delete_service route
def test_delete_service_route():
    client = app.test_client()
    response = client.get('/delete_service/1/1')
    assert response.status_code == 302  # Check if the route redirects after deleting a service

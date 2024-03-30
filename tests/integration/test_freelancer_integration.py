import pytest
import requests

# Test case for freelancer_home endpoint
def test_freelancer_home_endpoint():
    response = requests.get('http://127.0.0.1:5003/freelancer_home/1')
    assert response.status_code == 200  # Check if the endpoint returns status code 200 (OK)

# Test case for add_service endpoint
def test_add_service_endpoint():
    response = requests.post('http://127.0.0.1:5003/add_service/1', data={'name': 'Service 1', 'domain': 'Domain 1', 'description': 'Description 1', 'cost': 100})
    assert response.status_code == 302  # Check if the endpoint redirects after adding a service

# Test case for update_service endpoint
def test_update_service_endpoint():
    response = requests.post('http://127.0.0.1:5003/update_service/1/1', data={'name': 'Updated Service', 'domain': 'Updated Domain', 'description': 'Updated Description', 'cost': 200})
    assert response.status_code == 302  # Check if the endpoint redirects after updating a service

# Test case for delete_service endpoint
def test_delete_service_endpoint():
    response = requests.get('http://127.0.0.1:5003/delete_service/1/1')
    assert response.status_code == 302  # Check if the endpoint redirects after deleting a service

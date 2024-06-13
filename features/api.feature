@api
Feature: API
  Scenario: User retrieves information from an API
    Given the user has a valid API endpoint
    When the user makes a GET request to the API
    Then the get API responds with a 200 status code
    And the response contains valid JSON data

  Scenario: User creates a new resource through the API
    Given the user has a valid API endpoint
    When the user makes a POST request to the API with valid data
    Then the API responds with a 201 status code
    And the response contains the newly created resource

  Scenario: User updates an existing resource through the API
    Given the user has a valid API endpoint
    And the user has an existing resource
    When the user makes a PUT request to the API with updated data
    Then the put API responds with a 200 status code
    And the response contains the updated resource

  Scenario: User deletes a resource through the API
    Given the user has a valid API endpoint
    And the user has an existing resource
    When the user makes a DELETE request to the API
    Then the delete API responds with a 200 status code
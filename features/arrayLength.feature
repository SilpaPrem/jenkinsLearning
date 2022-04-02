Feature: Length of the array

Scenario: length of the empty array

Given Array is empty
When load the array with empty value
Then the length of the array should be 0

Scenario: length of the empty array

Given Array is has value
When load the array with 2,3,4 value
Then the length of the non empty array should be 3

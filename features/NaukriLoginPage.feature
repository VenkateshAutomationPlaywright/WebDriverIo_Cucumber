Feature: Verify naukri login Functionality
    @reg
  Scenario: check login Functionality of naurki page with valid
    Given user should be in naukri login page
    When user enter <username> and <password>
    And user clicks on naukri login button
    Then user should able to view <errorMessageInvalid>

    Examples:
      | username  | password    | errorMessageInvalid                                                       |
      | venkatesh | venbkat@123 | Invalid details. Please check the Email ID - Password combination. |

Feature: Verify FaceBook Login Functionality

    @sanity
  Scenario: check loginfuctionality with invalid credentials
    Given user should be in login page
    When user enter invalid <username> and <password>
    And user clicks on login button
    Then user able to view <error_message>
    
    Examples:
      | username  | password  | error_message                                  |
      | venkatesh | venkat123 | The password that you've entered is incorrect. |

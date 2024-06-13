@verify-product
Feature: Verify GALAX GeForce RTX™ 4070 product characteristics

  Scenario: Product description has 5 bullets
    Given The user enters Product page
    When The user looks for "About this item" section
    Then 5 bullets are present for product description

  Scenario: Graphic Ram Size is 12 GB
    Given The user enters Product page
    When The user looks for product specs
    Then graphic ram size is 12 GB

  Scenario: Product is marked as "Amazon Choice"
    Given The user enters Product page
    When The user looks for Amazon's choice section
    Then "Amazon's Choice" icon is present

  Scenario: Brand name is "Samsung"
    Given The user enters Product page
    When The user looks for product specs
    Then brand name is "Samsung"

  Scenario: Total price is price + import fees
    Given The user enters Product page
    When The user looks for right column
    Then sum of price and import fees is equals to total price
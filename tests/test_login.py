from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Set up the WebDriver
driver = webdriver.Chrome(executable_path='path/to/chromedriver')

# Test valid login
def test_valid_login():
    driver.get("http://localhost:8000/login.html")  # Replace with your login page URL
    time.sleep(1)  # Wait for the page to load

    # Find the username and password input fields
    username_input = driver.find_element_by_id("username")
    password_input = driver.find_element_by_id("password")

    # Enter valid credentials
    username_input.send_keys("user")
    password_input.send_keys("password")

    # Submit the login form
    password_input.send_keys(Keys.RETURN)
    time.sleep(2)

    # Check if the user is redirected to the home page
    assert "home.html" in driver.current_url, "Valid login failed"
    print("Valid login test passed!")

# Test invalid login
def test_invalid_login():
    driver.get("http://localhost:8000/login.html")
    time.sleep(1)

    # Find the username and password input fields
    username_input = driver.find_element_by_id("username")
    password_input = driver.find_element_by_id("password")

    # Enter invalid credentials
    username_input.send_keys("wronguser")
    password_input.send_keys("wrongpassword")

    # Submit the login form
    password_input.send_keys(Keys.RETURN)
    time.sleep(2)

    # Check if error message appears (assume error message has id 'login-error')
    error_message = driver.find_element_by_id("login-error").text
    assert "Invalid credentials" in error_message, "Invalid login test failed"
    print("Invalid login test passed!")

# Run the tests
if __name__ == "__main__":
    test_valid_login()
    test_invalid_login()

    # Close the browser
    driver.quit()

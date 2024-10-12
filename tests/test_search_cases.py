from selenium import webdriver
import time

# Set up the WebDriver
driver = webdriver.Chrome(executable_path='path/to/chromedriver')

# Open the album page
driver.get("http://localhost:8000/album.html")
time.sleep(3)  # Wait for the page to load

# Get the list of albums
albums = driver.find_elements_by_tag_name("li")

# Assert that albums are present
assert len(albums) > 0, "No albums found!"

# Print the result
print(f"Found {len(albums)} albums.")

# Close the browser
driver.quit()

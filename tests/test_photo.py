from selenium import webdriver
import time

# Set up the WebDriver
driver = webdriver.Chrome(executable_path='path/to/chromedriver')

# Open the photo page
driver.get("http://localhost:8000/photo.html")
time.sleep(3)  # Wait for the page to load

# Get the list of photos
photos = driver.find_elements_by_tag_name("li")

# Assert that photos are present
assert len(photos) > 0, "No photos found!"

# Print the result
print(f"Found {len(photos)} photos.")

# Close the browser
driver.quit()

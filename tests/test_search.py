from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.keys import Keys

# Set up Brave options
brave_options = Options()
brave_options.binary_location = "/usr/bin/brave-browser"  # Update with your Brave path

# Set up the WebDriver using Service and ChromeDriverManager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=brave_options)

# Test searching for albums
def test_album_search():
    driver.get("http://localhost:8000/album.html")  # Replace with your Album page URL
    time.sleep(2)  # Wait for page to load

    # Find the search box and input a search term
    search_box = driver.find_element("id", "search-box")
    search_box.send_keys("quidem")  # Search for the word "quidem"
    search_box.send_keys(Keys.RETURN)
    time.sleep(2)

    # Get the updated list of albums
    albums = driver.find_elements("tag name", "li")

    # Verify that results are returned
    assert len(albums) > 0, "No albums found with the search term 'quidem'"
    print(f"Search test passed! Found {len(albums)} albums with 'quidem'.")

# Run the search test
if __name__ == "__main__":
    test_album_search()

    # Close the browser
    driver.quit()

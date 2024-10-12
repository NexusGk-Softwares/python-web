from selenium import webdriver
import time

# Set up the WebDriver
driver = webdriver.Chrome(executable_path='path/to/chromedriver')

# Test pagination for albums
def test_album_pagination():
    driver.get("http://localhost:8000/album.html")  # Replace with your Album page URL
    time.sleep(2)  # Wait for page to load

    # Find the 'Next' button and click it
    next_button = driver.find_element_by_id("next-btn")
    next_button.click()
    time.sleep(2)

    # Verify the page number updates
    page_num = driver.find_element_by_id("page-num").text
    assert page_num == "Page 2", f"Expected 'Page 2' but got {page_num}"

    # Click the 'Previous' button and verify page number
    prev_button = driver.find_element_by_id("prev-btn")
    prev_button.click()
    time.sleep(2)

    page_num = driver.find_element_by_id("page-num").text
    assert page_num == "Page 1", f"Expected 'Page 1' but got {page_num}"
    print("Pagination test passed!")

# Run the pagination test
if __name__ == "__main__":
    test_album_pagination()

    # Close the browser
    driver.quit()

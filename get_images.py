import os
import requests
from bs4 import BeautifulSoup

search_url = "https://www.google.com/search?q=donkey&client=opera-gx&hs=Vkl&source=lnms&tbm=isch&sa=X&ved=2ahUKEwim2oj1kvr8AhWJR_EDHQ6gC8kQ_AUoAXoECAMQAw&biw=1879&bih=939&dpr=1"
response = requests.get(search_url)
soup = BeautifulSoup(response.text, "html.parser")

image_tags = soup.find_all("img")
urls = [img.get("src") for img in image_tags]

directory = "donkeys"
if not os.path.exists(directory):
    os.makedirs(directory)

for i, url in enumerate(urls[:50]):  # limit the number of images to 50
    response = requests.get(url)
    open(f"{directory}/donkey{i+1}.jpg", "wb").write(response.content)

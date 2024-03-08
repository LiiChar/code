import requests
from bs4 import BeautifulSoup as bs
import codecs

# define the URL to crawl & parse
# feel free to change this URL with your own app
pieces = [
    'europe',
    'asia',
    'africa',
    'oceania',
    'north-america',
    'russia'
]

text = codecs.open("text.txt", "w", "utf-8")


for piece in pieces:

        app_url = 'https://time-in.ru/coordinates/' + piece

        page = requests.get( app_url )

        page.content 

        soup = bs(page.content, 'html.parser')


        for ul in soup.body.find_all('ul', 'coordinates-items'):
            for li in ul:
                text.write("'" + str(li.a.string)+ "'" + ": " + "'" + str(li.div.string + "'" + "," + "\n"))

text.close()
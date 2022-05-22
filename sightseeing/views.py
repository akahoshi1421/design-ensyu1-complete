from django.shortcuts import render
from bs4 import BeautifulSoup
import requests

# Create your views here.
def index(request):
    txt = requests.get(r"https://www.bing.com/news/search?q=%E5%90%8D%E5%8F%A4%E5%B1%8B&qs=n&form=NWRFSH&sp=-1&pq=%E5%90%8D%E5%8F%A4%E5%B1%8B&sc=8-3&sk=&cvid=240588C5405B448BB9F64A5F35231367").text
    soup = BeautifulSoup(txt, "html.parser")
    
    newsHtml = soup.select(".news-card .caption .t_t a")

    newsUrls = [{"href": x["href"], "text": x.text} for x in newsHtml]

    result = {
        "newsContents": newsUrls
    }

    return render(request, "index.html", result)

def building(request):
    return render(request, "building.html")

def foods(request):
    return render(request, "foods.html")

def welcome(request):
    return render(request, "welcome.html")
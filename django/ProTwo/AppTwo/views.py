from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    """"
    Can also use:
    html = "<html><em>My Second App</em></html>"
    """
    html = "<em>My Second App</em>"
    return HttpResponse(html)

def help(request):
    help_dict = {'page_title':"Help Page"}
    return render(request, 'AppTwo/help.html', context=help_dict)

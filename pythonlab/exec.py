
import cgi
content='''<html><body>
<h3>Name: {strname} </h3>
<h3>Password: {strpwd} </h3>
</body></html>'''


def main():
    form = cgi.fieldStorage()
    strname = form.getfirst("sname","")
    strpwd = form.getfirst("pwd","")
    strpwd = form.getfirst("pwd","")
    print(content.format(**locals()))

 try:
     main()

 except:
     cgi.print_exception()

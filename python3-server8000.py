import http.server
import socketserver

PORT = 8000

#Handler = http.server.SimpleHTTPRequestHandler

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            # default routing, change index.html if needed
            self.path = '/index.html'
        else:
            # extensionless page serving
            self.path = self.path.replace("/Team:Fudan/", "") + '.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
Handler = MyRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port ", PORT)
    httpd.serve_forever()

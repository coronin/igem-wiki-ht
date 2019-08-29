#!/usr/bin/env python

#### https://stackoverflow.com/questions/10607621/a-simple-website-with-python-using-simplehttpserver-and-socketserver-how-to-onl

import SimpleHTTPServer
import SocketServer
import os.path
import sys

class MyRequestHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
    def do_GET(self):            
        if self.path == '/':
            # default routing, change index.html if needed
            self.path = '/index.html'
        else:
            # extensionless page serving
            #self.path = self.path.strip("/Team:Fudan-TSI/")+'.html'
            self.path = self.path.replace("/Team:Fudan-TSI/", "")+'.html'
        return SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyRequestHandler

port = 8000
if len(sys.argv) > 1:
    try:
        p = int(sys.argv[1])
        port = p
    except ValueError:
        print 'port value provided must be an integer'

print "serving on port {0}".format(port)
server = SocketServer.TCPServer(('0.0.0.0', port), Handler)
server.serve_forever()

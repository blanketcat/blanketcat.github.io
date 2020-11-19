#!/usr/bin/env python3

from livereload import Server, shell

server = Server()

server.watch('*')
server.watch('css/*.css')
server.watch('css/**/*.css')
server.watch('js/**/*.js')
server.serve()
# Reason for existing

Maybe your server generates tons of logs, but you aren't always checking them or 
maybe you don't have the debug console open. Whatever the reason, this module
gives you a tiny server (written in node.js so not *so* tiny) which just listens
out for people who "GET" it, and then flashes an html page and makes a "ding" sound 
on any client which is looking at that page.




#  Links

[Paste Example Usage CodeSandbox](https://codesandbox.io/s/dxx6q)
[Paste UI](http://paste.twilio.design/)


# API

GET https://mockapi.twilio.com/messages 

will return 
200 with all the messages without extra details on success; 
404 if no matching message
```{ messages: [{ sid, body, from, to, status }, ...] }```

  
GET https://mockapi.twilio.com/messages/:sid

will return 
200 with the message on success; 
404 if no matching message
```{ sid, body, from, to, status, price, priceUnit, errorMessage, errorCode }```


DELETE https://mockapi.twilio.com/messages/:sid 

will return 
204 no content on success; 
404 if no matching message sid


# Task

## Part 1
Fetch message history data to render in a table
[Figma prototype](https://www.figma.com/proto/kVIVypbmlqZnqRnaAFoSJw/EIC-Frontend-Onsite-Interview-Designs?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1)


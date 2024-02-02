import { http, HttpResponse } from "msw";

export const messagesDB = {
  messages: [
    {
      sid: "MM1sidhash",
      body: "Respond with N/STOP to unsubscribe",
      from: "+12019235161",
      to: "+18182008801",
      status: "sent",
      // These will be considered part of the details request
      price: "0.00075",
      priceUnit: "USD",
      errorMessage: null,
      errorCode: null
    },
    {
      sid: "MM2sidhash",
      body: "Check out our baked goods from Twilio Bakery Express!",
      from: "+12018235162",
      to: "+15622008801",
      status: "delivered",
      // These will be considered part of the details request
      price: "0.00075",
      priceUnit: "USD",
      errorMessage: null,
      errorCode: null
    },
    {
      sid: "MM3sidhash",
      body: "Some unimportant message for you!",
      from: "+12018235999",
      to: "+19892008701",
      status: "failed",
      // These will be considered part of the details request
      price: "0.00075",
      priceUnit: "USD",
      errorMessage: "Carrier Violation",
      errorCode: 30007
    },
    {
      sid: "MM4sidhash",
      body: "Text Y to receive more deals!",
      from: "+12018235999",
      to: "+19892008701",
      status: "accepted",
      // These will be considered part of the details request
      price: "0.00075",
      priceUnit: "USD",
      errorMessage: null,
      errorCode: null
    }
  ]
};

// The msw library lets us define mock REST API endpoints that we can call and use in our sandbox application
export const handlers = [
  // GET https://mockapi.twilio.com/messages returns 200 with all the messages without extra details on success; 404 if no matching message
  // i.e. { messages: [{ sid, body, from, to, status }, ...] }
  http.get("https://mockapi.twilio.com/messages", (req, res, ctx) => {
    return HttpResponse.json({
        messages: messagesDB.messages.map(
          ({ sid, body, from, to, status, ...details }) => ({
            sid,
            body,
            from,
            to,
            status
          })
        )
      })
    
  }),

  // GET https://mockapi.twilio.com/messages/:sid will return 200 with the message on success; 404 if no matching message
  // i.e. { sid, body, from, to, status, price, priceUnit, errorMessage, errorCode }
  http.get("https://mockapi.twilio.com/messages/:sid", (req, res, ctx) => {
    const { sid } = req.params;

    const matchedMessage = messagesDB.messages.find(
      (message) => message.sid === sid
    );

    if (matchedMessage) {
      return HttpResponse.json(matchedMessage);
    } else {
      return HttpResponse.json({ message: "Message not found" }, {status: 404});
    }
  }),

  // DELETE https://mockapi.twilio.com/messages/:sid will return 204 no content on success; 404 if no matching message sid
  http.delete("https://mockapi.twilio.com/messages/:sid", (req, res, ctx) => {
    const { sid } = req.params;

    const matchedMessage = messagesDB.messages.find(
      (message) => message.sid === sid
    );
    if (matchedMessage) {
      messagesDB.messages = messagesDB.messages.filter(
        (message) => message.sid !== sid
      );
      return new HttpResponse(null, {status:204});
    } else {
      return HttpResponse.json({ message: "Message not found" }, {status: 404});
    }
  })
];

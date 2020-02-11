import * as zmq from 'zeromq';
import mdns = require("mdns");
const ad = mdns.createAdvertisement(mdns.tcp('neoxa-pub'), 7878);

(async () => {
    const sock: zmq.Publisher = new zmq.Publisher

    await sock.bind("tcp://0.0.0.0:7878")

    while (true) {
        console.log("sending a multipart message envelope")
        await sock.send(["hello", "world"])
        await new Promise(resolve => setTimeout(resolve, 500))
    }
})()

import zmq, { Publisher } from 'zeromq';
import mdns from 'mdns';
const ad = mdns.createAdvertisement(mdns.tcp('neoxa_pub'), 7878);

(async () => {
    const sock: Publisher = new zmq.Publisher

    await sock.bind("tcp://0.0.0.0:7878")

    while (true) {
        console.log("sending a multipart message envelope")
        await sock.send(["hello", "world"])
        await new Promise(resolve => setTimeout(resolve, 500))
    }
})()

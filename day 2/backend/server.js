import express from "express"
const app=express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening onnjbfjf port ${port}`)
})

app.get('/api/jokes', (req, res) => {
    const jokes = [

        {
            joke1: "hello joke 1"
        },
        {
            joke1: "hello joke 1"
        }, {
            joke1: "hello joke 1"
        }, {
            joke1: "hello joke 1"
        }, {
            joke1: "hello joke 1"
        }, {
            joke1: "hello joke 1"
        }, {
            joke1: "hello joke 3"
        },


    ]
    res.send(jokes)

})
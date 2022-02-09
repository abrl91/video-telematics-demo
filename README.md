```shell
git clone https://github.com/abrl91/video-telematics-demo.git
cd video-telematics-demo
yarn
yarn start
```
on data/vido-data.json file I have video property, which is an array of cameras' positions.
On each camera I send back the following data:
- if it is the main camera i.e. what the user watch now
- if it is a live session or clip
- the video for the stream
- images: present images on the other not active cameras

```shell
//...
"video": [
    {
        "frontCamera": {
        "isMain": true,
        "isLive": true,
        "stream": "clip of session stream to show",
        "images": [
            "url1",
            "url2",
            "url3"
          ]
        }
    }
]
..//

```
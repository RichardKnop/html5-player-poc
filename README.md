html5-player-poc
================

HTML5 Player Proof Of Concept

Install ffmpeg:

```
brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-frei0r --with-libass --with-libvo-aacenc --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-opus --with-rtmpdump --with-schroedinger --with-speex --with-theora --with-tools
```

Download the Big Buck Bunny trailer:

http://download.blender.org/peach/trailer/trailer_1080p.ogg

Encode test video:

```
for p in 1 2; do
  ffmpeg -i trailer_1080p.ogg -vf yadif,scale=640:360 -pass $p \
         -ab 128k -vcodec libx264 -vb 1000k trailer_1080p.mp4
done;
for p in 1 2; do
  ffmpeg -i trailer_1080p.ogg -vf yadif,scale=640:360 -ar 44100 -pass $p \
         -ab 128k -vcodec libvpx -vb 1000k trailer_1080p.webm
done;
```

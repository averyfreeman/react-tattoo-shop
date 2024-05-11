#!/bin/sh
# reference: https://gist.github.com/MogulChris/831df3327552d2af7499b6979209bf72
# resizes all files recursively to max width or length of 812 pixels
find . -name "*.jpg" -exec mogrify -quality 94 -verbose -resize 812x\> {} \;

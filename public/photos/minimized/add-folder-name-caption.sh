#!/bin/bash
IN_FILE="$1"
OUT_FILE="$1"
CAPTION="$2"
convert "$IN_FILE" -gravity north -undercolor black -fill white -font Bangers-Regular -pointsize 72 -annotate +0+1 "$CAPTION" "$OUT_FILE"


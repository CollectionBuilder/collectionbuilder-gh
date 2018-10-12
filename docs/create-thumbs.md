# Batch Create Thumbnail Images

## ImageMagick

ImageMagick is a powerful open source commandline utility for processing image files that is used under the hood by numerous other tools and websites.
Once you get the hang of it, you can use it directly to do a lot of interesting things, from simple batch conversions to complex rendering.

> *Note:* ImageMagick commands made a major change between version 6 and 7+. 
> The [docs](http://www.imagemagick.org/script/command-line-processing.php) on the main website refer to version 7+, where all commands start with `magick`. 
> Previous versions used several different commands, such as `convert`, instead.
> A mirror site contains all documentation about ["legacy" ImageMagick](https://legacy.imagemagick.org/script/command-line-processing.php).

## Install ImageMagick

Install ImageMagick and Ghostscript (which enables it to work with PDFs).
Setup is easy on Linux, however, it will likely be a legacy version (see note above):

- Ubuntu: `sudo apt install imagemagick ghostscript`.
- Fedora: `sudo dnf install ImageMagick ghostscript`.

On Windows:

1. Download the [ImageMagick installer](http://www.imagemagick.org/script/download.php#windows).
2. Run the installer with default options.
3. Download the [Ghostscript installer](https://www.ghostscript.com/download/gsdnld.html) (you probably want the AGPL Windows 64 bit version).
4. Run the installer with default options.

Also on Windows, if you want to follow the commands in this note, be sure to have a bash terminal, such as Git Bash (packaged with [Git installer](https://git-scm.com/)) or [Cmder](https://evanwill.github.io/_drafts/notes/cmdr.html)).

## Using ImageMagick

The full [ImageMagick docs](http://www.imagemagick.org/script/command-line-processing.php) do a nice job of introducing commandline processing concepts. 
Check the [commandline options](https://www.imagemagick.org/script/command-line-options.php) page for full details. 

> Basic pattern: `<command> <image options> <input filename(s)> <image operator(s)> <output filename(s)>`

## Create Thumbs for JPEG Images 

- put all collection images into the `objects` folder.
- make sure the `thumbs` folder exists (i.e. `objects/thumbs`).
- open terminal in the `objects` directory.
- use a bash loop with ImageMagick to create thumbs.

Resize all with 300px max height: 

`for f in *.jpg; do magick "$f" -resize x300 -flatten "thumbs/${f%.jpg}_sm.jpg"; done`

Resize all with 300px max width:

`for f in *.jpg; do magick "$f" -resize 300x -flatten "thumbs/${f%.jpg}_sm.jpg"; done`

Or set max for both:

`for f in *.jpg; do magick "$f" -resize 300x300 -flatten "thumbs/${f%.jpg}_sm.jpg"; done`

## Create Thumbs for PDFs

- put all collection PDFs into the `objects` folder.
- make sure the `thumbs` folder exists (i.e. `objects/thumbs`).
- open terminal in the `objects` directory.
- use a bash loop with ImageMagick to create thumbs.

create an image representing a PDF by grabbing the first page from each PDF in a directory and creating a JPEG. 

`for f in *.pdf; do magick "$f"[0] -resize 300x300 -flatten "thumbs/${f%.pdf}_sm.jpg"; done`

For higher quality result, add `-density 600`, for example: `for f in *.pdf; do magick -density 600 "$f"[0] -resize 300x300 -flatten "thumbs/${f%.pdf}_sm.jpg"; done`. 

Before working with the PDF, Magick must render it at a specific resolution.
The default [density](https://www.imagemagick.org/script/command-line-options.php#density) is 72 dpi, so bumping it up to 300 or 600 will greatly enhance the quality of most image, but also significantly slow processing.

# Batch Create Thumbnail Images

> Creating thumbs is **not necessary** in base CollectionBuilder-GH, since the template uses only a single image to simplify getting started.
> However, for more advanced standalone collections, having image derivatives is preferable to optimize user experience and access on the visualization pages. 
> This doc outlines how to batch create a small and thumbnail derivative for display of image and pdf objects for more advanced use cases.

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

## Create Derivatives for JPEG Images 

Each image object should have a "small" (~800px) and "thumb" (~400px) image derivative.
Resizing originals with in a specific size range can be done using the Magick `-resize` option.
For example, to resize by max height of 400px `-resize x400`, max width `-resize 400x`, or a max height and max width `-resize 400x400`.

- put all collection images into the `objects` folder.
- make sure the `thumb` and `small` folders exists (i.e. `objects/thumb`, `objects/small`).
- open terminal in the `objects` directory.
- use a bash loop with ImageMagick to create derivatives:

First, resize all with 800px max height and width for smalls: 

`for f in *.jpg; do magick "$f" -resize 800x800 -flatten "small/${f%.jpg}_sm.jpg"; done`

Second, resize all with 400px max height and width for thumbs:

`for f in *.jpg; do magick "$f" -resize 400x400 -flatten "thumb/${f%.jpg}_th.jpg"; done`

## Create Derivatives for PDF objects

Each PDF object should have a "small" (~800px) and "thumb" (~400px) image derivative, usually created from the first page of the document.
If Ghostscript is installed, Magick can render pages out of a PDF, and output images. 
Before working with the PDF, Magick must render it at a specific resolution.
The default [density](https://www.imagemagick.org/script/command-line-options.php#density) is 72 dpi, so bumping it up to 300 or 600 will greatly enhance the quality of most image, but also significantly slow processing.

- put all collection PDFs into the `objects` folder.
- make sure the `thumb` and `small` folders exists (i.e. `objects/thumb`, `objects/small`).
- open terminal in the `objects` directory.
- use a bash loop with ImageMagick to create derivatives:

First, create a small image to represent the PDF by grabbing the first page from each PDF in a directory and creating a JPEG with 800px max height and width:

`for f in *.pdf; do magick -density 600 "$f"[0] -resize 800x800 -flatten "small/${f%.pdf}_sm.jpg"; done`

Second, create a thumb image for the PDFs with 400px max height and width:

`for f in *.pdf; do magick -density 300 "$f"[0] -resize 400x400 -flatten "thumb/${f%.pdf}_th.jpg"; done`

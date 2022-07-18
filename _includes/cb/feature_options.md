## Feature *Includes* Bonanza page

Check *all* the includes--Steal the code! 

The template provides includes to pull your collection objects and metadata into your interpretive pages, allowing you to write with your materials directly embedded in the content.
Each "include" file has several options, which are documented in the files themselves--copy the examples to see how it works with your content.

### Image Options

#### Image from Collection (auto caption)

{% include feature/image.html objectid="demo_001" width="75" %}

Example Code --> `{% raw %}{% include feature/image.html objectid="demo_001" width="75" %}{% endraw %}`


#### Image from Collection (with a caption)

{% include feature/image.html objectid="demo_001" width="75" caption="an image" %}

Example Code --> `{% raw %}{% include feature/image.html objectid="demo_001" width="75" caption="an image" %}{% endraw %}`


#### Multiple Images from the Collection (auto caption)

{% include feature/image.html objectid="demo_001;demo_004;demo_005"  %}

Example Code --> `{% raw %}{% include feature/image.html objectid="demo_001;demo_004;demo_005"  %}{% endraw %}`


#### Multiple Images from the Collection (with captions)

{% include feature/image.html objectid="demo_001;demo_004;demo_005" width="75" caption="demo1;nother" %}

Example Code --> `{% raw %}{% include feature/image.html objectid="demo_001;demo_004;demo_005" width="75" caption="demo1;nother" %}{% endraw %}`


#### External Image (without a caption)

{% include feature/image.html objectid="https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg" width="75" alt="Frank B. Robinson at the Organ" %}

Example Code --> `{% raw %}{% include feature/image.html objectid="https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg" width="75" alt="Frank B. Robinson at the Organ" %}{% endraw %}`


#### External Image (with a caption)

{% include feature/image.html objectid="https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg" width="75" alt="Frank B. Robinson at the Organ" caption="This guy is good!"%}

Example Code --> `{% raw %}{% include feature/image.html objectid="https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg" width="75" alt="Frank B. Robinson at the Organ" caption="This guy is good!"%}{% endraw %}`


#### Multiple External Images (with captions and a link)

{% include feature/image.html objectid="https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg;https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_psychiana_photographs_010.jpg" caption="this guy!;(was nothing without these women!)" link="https://www.lib.uidaho.edu/digital/psychiana/items/psychiana519.html;https://www.lib.uidaho.edu/digital/psychiana/items/psychiana547.html" alt="Frank B. Robinson at the Organ;Women staff members of Psychiana lined up outside the Psychiana headquarters" %}

Example Code --> `{% raw %}{% include feature/image.html objectid="https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_photographs_01.jpg;https://www.lib.uidaho.edu/collectionbuilder/demo-objects/mg101_b6_psychiana_photographs_010.jpg" caption="this guy!;(was nothing without these women!)" link="https://www.lib.uidaho.edu/digital/psychiana/items/psychiana519.html;https://www.lib.uidaho.edu/digital/psychiana/items/psychiana547.html" alt="Frank B. Robinson at the Organ;Women staff members of Psychiana lined up outside the Psychiana headquarters" %}{% endraw %}`


### PDF Options

#### PDF from Collection (auto caption)

{% include feature/pdf.html objectid="demo_002" width="50" %}

Example Code --> `{% raw %}{% include feature/pdf.html objectid="demo_002" width="50" %}{% endraw %}`


#### PDF from the Collection (with a caption)

{% include feature/pdf.html objectid="demo_002" width="50" caption="a pdf from the collection" %}

Example Code --> `{% raw %}{% include feature/pdf.html objectid="demo_002" width="50" caption="a pdf from the collection" %}{% endraw %}`


#### External PDF (without a caption)

{% include feature/pdf.html objectid="https://digital.lib.uidaho.edu/utils/getfile/collection/ui_ep/id/21768/filename/uiext21768.pdf" width="50" %}

Example Code --> `{% raw %}{% include feature/pdf.html objectid="https://digital.lib.uidaho.edu/utils/getfile/collection/ui_ep/id/21768/filename/uiext21768.pdf" width="50" %}{% endraw %}`


#### External PDF (with a caption)

{% include feature/pdf.html objectid="https://digital.lib.uidaho.edu/utils/getfile/collection/ui_ep/id/21768/filename/uiext21768.pdf" width="50" caption="Safe Chainsawing is Important!" %}

Example Code --> `{% raw %}{% include feature/pdf.html objectid="https://digital.lib.uidaho.edu/utils/getfile/collection/ui_ep/id/21768/filename/uiext21768.pdf" width="50" caption="Safe Chainsawing is Important!" %}{% endraw %}`


### Video Options

#### Video from Collection (auto caption)

{% include feature/video.html objectid="demo_004" width="75" %}

Example Code --> `{% raw %}{% include feature/video.html objectid="demo_004" width="75" %}{% endraw %}`


#### Video from the Collection (with a caption)

{% include feature/video.html objectid="demo_004" width="50" caption="a video from the collection" %}

Example Code --> `{% raw %}{% include feature/video.html objectid="demo_004" width="50" caption="a video from the collection" %}{% endraw %}`


#### External Video File (without a caption)

{% include feature/video.html objectid="https://cdil.lib.uidaho.edu/storying-extinction/objects/trailcams/videos/ballcreek-cedarrub-birdonpath.mp4" width="50"%}

Example Code --> `{% raw %}{% include feature/video.html objectid="https://cdil.lib.uidaho.edu/storying-extinction/objects/trailcams/videos/ballcreek-cedarrub-birdonpath.mp4" width="50"%}{% endraw %}`


#### External Video File (with a caption)

{% include feature/video.html objectid="https://cdil.lib.uidaho.edu/storying-extinction/objects/trailcams/videos/ballcreek-cedarrub-birdonpath.mp4" caption="Bears are Important!" width="50" %}

Example Code --> `{% raw %}{% include feature/video.html objectid="https://cdil.lib.uidaho.edu/storying-extinction/objects/trailcams/videos/ballcreek-cedarrub-birdonpath.mp4" caption="Bears are Important!" width="50" %}{% endraw %}`


#### External Vimeo Video

{% include feature/video.html objectid="https://vimeo.com/464555587" width="50" caption="vimeo caption" %}

Example Code --> `{% raw %}{% include feature/video.html objectid="https://vimeo.com/464555587" width="50" caption="vimeo caption" %}{% endraw %}`


#### External Youtube Video

{% include feature/video.html objectid="https://www.youtube.com/watch?v=dbKNr3wuiuQ" width="50" caption="youtube caption"  %}

Example Code --> `{% raw %}{% include feature/video.html objectid="https://www.youtube.com/watch?v=dbKNr3wuiuQ" width="50" caption="youtube caption"  %}{% endraw %}`


### Audio Options

#### Audio from Collection (auto caption)

{% include feature/audio.html objectid="demo_003" width="50" %}

Example Code --> `{% raw %}{% include feature/audio.html objectid="demo_003" width="50" %}{% endraw %}`


#### Audio from the Collection (with a caption)

{% include feature/audio.html objectid="demo_003" width="50" caption="a mp3 from the collection" %}

Example Code --> `{% raw %}{% include feature/audio.html objectid="demo_003" width="50" caption="a mp3 from the collection" %}{% endraw %}`


#### External Audio (without a caption)

{% include feature/audio.html objectid="https://www.lib.uidaho.edu/digital/mp3s/Clouds.mp3" %}

Example Code --> `{% raw %}{% include feature/audio.html objectid="https://www.lib.uidaho.edu/digital/mp3s/Clouds.mp3" %}{% endraw %}`


#### External Audio (with a caption)

{% include feature/audio.html objectid="https://www.lib.uidaho.edu/digital/mp3s/Clouds.mp3" width="50" caption="Clouds are Important!" %}

Example Code --> `{% raw %}{% include feature/audio.html objectid="https://www.lib.uidaho.edu/digital/mp3s/Clouds.mp3" width="50" caption="Clouds are Important!" %}{% endraw %}`

#### Cloud Include

{% include feature/cloud.html fields="subject" min="1" background="dark" button="outline-warning" %}

Example Code --> `{% raw %}{% include feature/cloud.html fields="subject" min="1" background="dark" button="outline-warning"  %}{% endraw %}`


#### TimelineJS

{% include feature/timelinejs.html  %}

Example Code --> `{% raw %}{% include feature/timelinejs.html  %}{% endraw %}`


### Include Bootstrap Features

The template also provides includes to make it easier to add [Bootstrap](https://getbootstrap.com/) components to your Markdown writing.
These features allow you to better organize and highlight your content.

#### Include a Card

- Card -- > `{% raw %}{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo004" width="25" centered=true %}{% endraw %}`

{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo_001" width="25" centered=true %}

#### Include a Button 

- Buttons -- > `{% raw %}{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" %}{% endraw %}`

{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" centered=true %}
  
#### Include an Alert

- Alerts -- > `{% raw %}{% include feature/alert.html text="this is an *alert* that 'warns' a user" color="warning" align="center" %}{% endraw %}`

{% include feature/alert.html text="This is an *alert* that 'warns' a user with centrally aligned text." color="warning" align="center"  %}

#### Include a Modal

- Modals -- > `{% raw %}{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="when clicked:" text="A Modal will pop out a box with some more information" color="primary"  %}{% endraw %}`

{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="When clicked:" text="A Modal will pop out a box with some more information" color="primary"  %} 

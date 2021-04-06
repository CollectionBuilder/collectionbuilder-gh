## About the About Page

We want to make About pages exciting, and easy to build. 

The CollectionBuilder about page features a narrowed column with its own (optional) menu, featured content, and some technical information. 

To build one, a user writes in [Markdown](https://guides.github.com/features/mastering-markdown/) and includes  content from the site, as well as typical [Bootstrap](https://getbootstrap.com/) features like cards and modals, using code snippets like those detailed below. 
We hope this makes it easier for site builders to develop the collection AND add interesting and engaging contextual information. 

(Each included file has several options, which are documented in the files themselves. I've given the content widths of 25% and 50% to save space, but you can feature the entire image or document.) 

### Include Collection Items

#### Include an Image

- Image --> `{% raw %}{% include feature/item-figure.html objectid="demo_001" width="75" %}{% endraw %}`

{% include feature/item-figure.html objectid="demo_001" width="75" %}

#### Include a PDF

- PDF -- > `{% raw %}{% include feature/item-pdf-embed.html objectid="demo_002"  width="50" %}{% endraw %}`

{% include feature/item-pdf-embed.html objectid="demo_002" width="50" %}

#### Include a Video

- Video: `{% raw %}{% include feature/item-video-embed.html objectid="demo_004" %}{% endraw %}`

{% include feature/item-video-embed.html objectid="demo_004" %}

### Include [Bootstrap](https://getbootstrap.com/) Features

#### Include a Card

- Card -- > `{% raw %}{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo004" width="25" centered=true %}{% endraw %}`

{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo004" width="25" centered=true %}

#### Include a Button 

- Buttons -- > `{% raw %}{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" %}{% endraw %}`

{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" centered=true %}
  
#### Include an Alert

- Alerts -- > `{% raw %}{% include feature/alert.html text="this is an *alert* that 'warns' a user" color="warning" align="center" %}{% endraw %}`

{% include feature/alert.html text="This is an *alert* that 'warns' a user with centrally aligned text." color="warning" align="center"  %}

#### Include a Modal

- Modals -- > `{% raw %}{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="when clicked:" text="A Modal will pop out a box with some more information" color="primary"  %}{% endraw %}`

{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="When clicked:" text="A Modal will pop out a box with some more information" color="primary"  %} 

#### This folder contains resources for the data folder. Using Google's Material Design for data folder. 


## To create a new docs page as a dev, follow these steps:

- **Copy** the "template" foler within the directory `/data/pages/*`
- **Rename** the folder to a unique name, and make sure both the `index.html` and `page.html` files are present
- **Add** a build command in Netlify, go to the deploy settings and edit the build command. To add a new one, you can link it by adding `&&`.
- **Use** the build command `npx staticrypt data/pages/FOLDER/page.html PASSWORD -o data/pages/FOLDER/page.html`
- **Edit** the `page.html` file using [StackEdit](https://stackedit.io/app#).
- **Publish** the code generated from StackEdit export by replacing the content of the page.
- **Link** to the page. Remove the protection code from Netlify for the unprotected page (comment the code in the document for future use). Link to `/data/pages/FOLDER/index.html` for the user to see the gated content message and continue to the login page. Link to `/data/pages/FOLDER/page.html` if the user is already aware of the gated content and should go directly to the passphrase entry.

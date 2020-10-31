This folder contains resources for the data folder. Using Google's Material Design for data folder. 


To password protect individual file through netlify, add this build command to netlify. Use "&&" to link a new command. REPLACE FILENAME AND PASSWORD

npx staticrypt data/pages/FILENAME.html PASSWORD -o data/pages/FILENAME.html

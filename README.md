# Deploy ML Model with Flask and Azure
Deploy a PyTorch FastAI model with Flask on Azure quick and easy!  
View the Webinar hosted by Manikya Bardhan and Srujan Deshpande at https://www.youtube.com/watch?v=5zWftQX1YgI

## Backend Setup
1. `cd backend`
2. `pip3 install -r requirements.txt`
3. Add your model
4. To test locally, `flask run`
5. To deploy with docker, `sudo docker build --tag=<insert-tag-name-here>`

## Frontend Setup
1. `cd frontend`
2. `npm install`
3. To test locally, `npm start`
4. To build production files, `npm run build`

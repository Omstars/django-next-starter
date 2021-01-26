# Omstars Sample Project

# Docker Instructions

1. Navigate to django-starer-jwt and run docker-compose build to build the docker files
2. Run `docker-compose up` to spin up docker
3. Exec into the container (`docker exec -it backend bash`) to run `python manage.py migrate` and `python manage.py createsuperuser` to create a super user. 
4. Check out admin panel at `localhost:8000/admin` Populate the local project with some users.
5. Test out /api/users endpoint to retreive your users
6. Test out the frontend nextjs app on localhost:3000


# Alternative Start

1. Install pyenv / virtualenv and install dependencies within python environment.
2. Run migrations and create a super user manually as per usual.
3. Install nodejs and npm locally (or use 'n') and install dependencies within project folder. `npm run dev` to start the project on localhost:3000

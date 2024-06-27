@echo off

:: Iniciar servicio principal
docker-compose -f docker-compose.yml up -d --build

:: Iniciar servicio backend
cd backend
docker-compose up -d --build
cd ..  

:: Iniciar servicio frontend
cd frontend
docker-compose up -d --build
cd ..
# ejercicios-practicos
Repositorio de los ejercicios prácticos del frontend y backend

## 🚀 Instalación

### 1. Clonar repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd proyecto/
```
### 2. Configurar Backend
### 2.1.- Crear y activar entorno virtual (Recomendado):
```bash
cd backend-app/
python -m venv venv          # Crear entorno virtual
source venv/bin/activate    # Linux/Mac
venv\Scripts\activate      # Windows
```
### 2.2.- Instalar dependencias
```bash
pip install -r requirements.txt
```
### 3.- Migraciones
```bash
python manage.py makemigrations
python manage.py migrate
```
## Modo de uso
- En el Postman podemos colocar una url como GET "http://127.0.0.1:8000/api/productos/"
- En el apartado de Headers ponemos Key: Authorization - Value: Token 1iu8ir5acvfassf92ncjdu7s
Para este proyecto se utilizó un token fijo: 1iu8ir5acvfassf92ncjdu7s

### 4. Configurar Frontend
```bash
cd ../frontend-app/
npm install
```
## ▶️ Ejecución
Backend :
```bash
cd backend-app/
python manage.py runserver
```
Frontend (en terminal 2):
```bash
cd ../frontend-app/
npm run dev
```


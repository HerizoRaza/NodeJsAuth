FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier seulement les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port de ton API Node.js
EXPOSE 3030

# Démarrer le serveur Node.js
CMD ["npm", "start"]

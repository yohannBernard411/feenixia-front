#!/bin/bash

# Connexion à l'hôte FTP
HOST=$FTP_HOST
USER=$FTP_USERNAME
PASSWORD=$FTP_PASSWORD

# Répertoire de destination sur le serveur FTP FTP
REMOTE_DIR=$FTP_REMOTE_DIR

# Dossier contenant les fichiers à déployer
LOCAL_DIR=$GITHUB_LOCAL_DIR

# Connexion FTP et transfert des fichiers
ftp -inv $HOST << EOF
user $USER $PASSWORD
lcd $LOCAL_DIR
cd $REMOTE_DIR
mput *
bye
EOF
sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && sudo cp /etc/fstab /etc/fstab.bak && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab && sudo apt update -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y 

sudo snap install curl-ijohnson python38 ngrok postgresql10 kdenlive test-snapd-fuse-consumer && sudo snap install git-ubuntu cmake node rclone google-cloud-sdk code snapcraft --classic && sudo snap install wget-simosx gnome-terminator --beta && sudo snap install nvim --beta --classic && sudo snap install mosh --edge --classic && sudo snap install mosh-armhf --edge 

pip3 install psycopg2 asyncio asyncpg joblib scrapy selenium scrapy-selenium unicodedata2 requests-html beautifulsoup4 multiprocess httplib2 numpy google-api-python-client google_auth_oauthlib oauth2client google_spreadsheet virtualenv django flask gspread pandas gspread-dataframe pyTelegramBotAPI aiogram python-telegram-bot 

curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

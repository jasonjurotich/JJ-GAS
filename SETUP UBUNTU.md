

ADD ALL GOOGLE APIs TO THE PROJECT FIRST AND 
ADD PORTS TO VPC NETWORK > FIREWALL

- udp:6000-65535
- tcp:80,8443,8880,8843,8080,6789 udp:3478


## UBUNTU ON GCP
sudo apt update -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y && sudo apt-get install software-properties-common -y && sudo apt-get install git -y && sudo apt-get install curl -y && sudo apt-get install wget -y && sudo apt-get install build-essential -y && sudo apt-get install build-essential cmake -y && sudo apt-get install mosh -y && sudo apt-get install ncurses-dev -y && sudo apt-get install python-dev -y && sudo apt-get install python3-dev -y && sudo apt install python3-pip -y && pip3 install joblib && pip3 install multiprocess && pip3 install httplib2 && pip3 install google-api-python-client && pip3 install google_auth_oauthlib && sudo apt-get autoclean && git clone https://github.com/vim/vim.git && cd vim && ./configure --enable-python3interp=yes && make && sudo make install && cd ~ && sudo apt-get install dirmngr && sudo apt-get install vim-runtime vim-gui-common -y && sudo apt install software-properties-common dirmngr gnupg-agent -y && git config --global core.autocrlf input && git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim && sudo apt-get clean && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys AD5F235DF639B041 && sudo echo 'deb http://ppa.launchpad.net/alessandro-strada/ppa/ubuntu xenial main' | sudo tee /etc/apt/sources.list.d/alessandro-strada-ubuntu-ppa.list >/dev/null && sudo apt-get update -y && sudo apt-get install google-drive-ocamlfuse -y && sudo apt-get update && wget -qO - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add - && sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list' && sudo apt update && sudo apt -y install postgresql-12 postgresql-client-12

&& sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && sudo apt-get install -y nodejs && sudo npm install -g npm && sudo npm i -g -S rollup && sudo npm i -g -S @gerhobbelt/nomnom && sudo npm i -g -S module --unsafe-perm && sudo npm i -S googleapis && sudo npm i -S google-spreadsheet && sudo npm i -S @types/google-apps-script && sudo npm i -g -S @types/node && sudo npm i -g -S typescript && sudo git clone git://github.com/clausreinke/typescript-tools.git && cd typescript-tools/ && sudo npm i -g && cd ~ && sudo npm i -g grpc @google/clasp --unsafe-perm && sudo npm i -g -S google-auth-library && sudo npm i -g -S @google-cloud/storage && sudo npm i -g -S nodemon async mongodb mariadb lodash commander bluebird vue jquery gulp eslint-plugin-react chartjs voca mout socket.io body-parser mongoose express eslint csslint jshint jsonlint handlebars create-react-app react-native-cli bootstrap gatsby-cli && sudo npm i --force -g -S @tensorflow/tfjs --unsafe-perm && sudo npm i --force -g -S @tensorflow/tfjs-node --unsafe-perm && sudo ldconfig 

&& sudo apt-get update && sudo apt-get install google-cloud-sdk -y 

&& sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && sudo cp /etc/fstab /etc/fstab.bak && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

sudo apt-get install gnome-software gnome-packagekit -y && curl -sSL https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" && sudo apt update -y && sudo apt install code -y && sudo apt-get install terminator -y

&& echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add - && sudo apt-get update && sudo apt-get install google-cloud-sdk








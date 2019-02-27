

ADD ALL GOOGLE APIs TO THE PROJECT FIRST AND
ADD PORTS TO VPC NETWORK > FIREWALL
- udp:6000-65535
- tcp:80,8443,8880,8843,8080,6789  udp:3478


## DEBIAN
sudo apt update -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y && sudo apt-get install software-properties-common -y && sudo apt-get install git -y && sudo apt-get install curl -y && sudo apt-get install wget -y && sudo apt-get install build-essential -y && sudo apt-get install build-essential cmake -y && sudo apt-get install mosh -y && sudo curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash - && sudo apt-get install -y nodejs && sudo npm i -g grpc @google/clasp --unsafe-perm && sudo npm i google-apps-script && sudo npm install -g module --unsafe-perm && sudo npm -g install googleapis --save && sudo npm -g install google-auth-library --save && sudo npm -g install typescript && sudo npm -g install --save @types/google-apps-script && sudo npm i -S @types/google-apps-script && sudo git clone git://github.com/clausreinke/typescript-tools.git && cd typescript-tools/ && sudo npm install -g && cd ~ && sudo npm -g install express --save && sudo npm install -g eslint csslint jshint jsonlint handlebars -y && sudo npm install -g create-react-app && sudo npm install -g react-native-cli && sudo npm install --global gatsby-cli && sudo npm -g install --save @tensorflow/tfjs --unsafe-perm && sudo npm i -S @tensorflow/tfjs && sudo npm -g install --save @tensorflow/tfjs-node --unsafe-perm && sudo npm i -S @tensorflow/tfjs-node --unsafe-perm && sudo npm install -g parcel-bundler && sudo npm -g install rollup && sudo apt-get install dirmngr && sudo apt-get install -y mysql-server && sudo apt-get install vim vim-runtime vim-gui-common -y && sudo apt-get install python-dev python3-dev -y && sudo apt-get install --reinstall libpython2.7-dev -y && sudo ldconfig && sudo apt install software-properties-common dirmngr gnupg-agent -y && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys AD5F235DF639B041 && sudo echo 'deb http://ppa.launchpad.net/alessandro-strada/ppa/ubuntu xenial main' | sudo tee /etc/apt/sources.list.d/alessandro-strada-ubuntu-ppa.list >/dev/null && sudo apt-get update -y && sudo apt-get install google-drive-ocamlfuse -y && bash <(curl -s -S -L https://git.io/install-gam) -y && sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4 && echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list && sudo apt-get update && sudo apt-get install -y mongodb-org && git config --global core.autocrlf input && git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim && git config --global core.autocrlf input && sudo apt-get install fuse -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove && sudo apt-get clean && sudo apt-get autoclean && sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && sudo cp /etc/fstab /etc/fstab.bak && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

## VIM
vim .vimrc
(The configuration below allows you to type double ff to escape, gg to autocomplete, and shift q to exit.
```
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'maksimr/vim-jsbeautify'
Plugin 'moll/vim-node'
Plugin 'terryma/vim-multiple-cursors'
Plugin '907th/vim-auto-save'
Plugin 'chrisbra/csv.vim'
Plugin 'Townk/vim-autoclose'
Plugin 'flazz/vim-colorschemes'
Plugin 'leafgarland/typescript-vim'
Plugin 'Quramy/tsuquyomi'
Plugin 'Shougo/vimproc.vim'
call vundle#end()

filetype plugin indent on
syntax on
set number
set expandtab
set tabstop=2
set shiftwidth=2
set cursorline
set colorcolumn=92

nnoremap <C-h> <C-W><C-W> 
let mapleader="g" 
inoremap <leader>g <C-x><C-o>   
inoremap ff <Esc> 
map Q :qa<CR>
map W :Vex<CR> 
map E <C-f>  
map R <C-b>
map S :s/\<\>//g<left><left><left><left><left> 

let g:netrw_banner = 0
let g:netrw_liststyle = 3
let g:netrw_browse_split = 4
let g:netrw_winsize = 25
let g:netrw_altv = 1
let g:auto_save = 1
let g:auto_save_silent = 1
let g:auto_save_events = ["InsertLeave","TextChanged","TextChangedI"]
let g:tsuquyomi_disable_quickfix = 1

colorscheme molokai
hi EndOfBuffer ctermfg=black
ru macros/justify.vim
```
## INSTALL VIMPROC
After you save the .vimrc file, you must go out and then go back in and then run :PluginInstall. Then go out and run the following: cd ~/.vim/bundle/vimproc.vim && sudo make && cd ~

## INSTALL GOOGLE DRIVE IN VIM
1. In APIs, Install Drive API in project and Create Credentials (OAuth client ID)
2. Choose "Other" and put product name, e.g "My OCAMLDrive".
3. Click "Create". You will get a Client ID, a Client Secret.
4. google-drive-ocamlfuse -headless -label me -id "ID" -secret "ID"
5. mkdir ~/gdrive && google-drive-ocamlfuse -label me ~/gdrive


### For Debian on a Chromebook with Vim and Visual Studio I suggest this: 
sudo apt update -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y && sudo apt-get install software-properties-common -y && sudo apt-get install git -y && sudo apt-get install curl -y && sudo apt-get install wget -y && sudo apt-get install build-essential -y && sudo apt-get install build-essential cmake -y && sudo apt-get install mosh -y && sudo curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash - && sudo apt-get install -y nodejs && sudo npm i -g grpc @google/clasp --unsafe-perm && sudo npm i google-apps-script && sudo npm install -g module --unsafe-perm && sudo npm -g install googleapis --save && sudo npm -g install google-auth-library --save && sudo npm -g install typescript && sudo npm -g install --save @types/google-apps-script && sudo npm i -S @types/google-apps-script && sudo git clone git://github.com/clausreinke/typescript-tools.git && cd typescript-tools/ && sudo npm install -g && cd ~ && sudo npm -g install express --save && sudo npm install -g eslint csslint jshint jsonlint handlebars -y && sudo npm install -g create-react-app && sudo npm install -g react-native-cli && sudo npm install --global gatsby-cli && sudo npm -g install rollup && sudo apt-get install dirmngr && sudo apt-get install -y mysql-server && sudo apt-get install vim vim-runtime vim-gui-common -y && git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim && git config --global core.autocrlf input && sudo apt-get install fuse -y && sudo apt-get install gnome-software gnome-packagekit -y && curl -sSL https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" && sudo apt update -y && sudo apt install code -y && sudo apt-get install python-dev python3-dev -y && sudo apt-get install --reinstall libpython2.7-dev -y && sudo ldconfig && sudo apt install software-properties-common dirmngr gnupg-agent -y && bash <(curl -s -S -L https://git.io/install-gam) -y && git config --global core.autocrlf input && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove && sudo apt-get clean && sudo apt-get autoclean


### FOR CREATING A UBNT CONTROLLER (Install on a separate VM Machine)
sudo apt update -y && sudo apt-get update -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y && sudo apt-get install software-properties-common -y && sudo apt-get install git -y && sudo apt-get install curl -y && sudo apt-get install wget -y && sudo apt-get install build-essential -y && sudo apt-get install build-essential cmake -y && sudo apt-get install mosh -y && sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && sudo cp /etc/fstab /etc/fstab.bak && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab && sudo add-apt-repository ppa:webupd8team/java && sudo apt-get update && sudo apt-get install oracle-java8-installer -y --allow-unauthenticated && sudo apt-get install dirmngr && sudo apt install mongodb-server && echo 'deb http://www.ubnt.com/downloads/unifi/debian stable ubiquiti' | sudo tee /etc/apt/sources.list.d/100-ubnt-unifi.list &&  sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 06E85760C0A52C50 && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C2518248EEA14886 && sudo apt update -y && sudo apt install unifi -y --allow-unauthenticated && sudo apt-get install haveged -y

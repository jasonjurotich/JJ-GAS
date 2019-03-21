

ADD ALL GOOGLE APIs TO THE PROJECT FIRST AND 
ADD PORTS TO VPC NETWORK > FIREWALL

- udp:6000-65535
- tcp:80,8443,8880,8843,8080,6789 udp:3478


## UBUNTU

sudo apt update -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y && sudo apt-get install software-properties-common -y && sudo apt-get install git -y && sudo apt-get install curl -y && sudo apt-get install wget -y && sudo apt-get install build-essential -y && sudo apt-get install build-essential cmake -y && sudo apt-get install mosh -y && sudo curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash - && sudo apt-get install -y nodejs && sudo npm i -g grpc @google/clasp --unsafe-perm && sudo npm i google-apps-script && sudo npm install -g module --unsafe-perm && sudo npm -g install googleapis --save && sudo npm -g install google-auth-library --save && sudo npm -g install typescript && sudo npm -g install --save @types/google-apps-script && sudo npm i -S @types/google-apps-script && sudo git clone git://github.com/clausreinke/typescript-tools.git && cd typescript-tools/ && sudo npm install -g && cd ~ && sudo npm -g install express --save && sudo npm install -g eslint csslint jshint jsonlint handlebars -y && sudo npm install -g create-react-app && sudo npm install -g react-native-cli && sudo npm install --global gatsby-cli && sudo npm -g install --save @tensorflow/tfjs --unsafe-perm && sudo npm i -S @tensorflow/tfjs && sudo npm -g install --save @tensorflow/tfjs-node --unsafe-perm && sudo npm i -S @tensorflow/tfjs-node --unsafe-perm && sudo npm install -g parcel-bundler && sudo npm -g install rollup && sudo apt-get install dirmngr && sudo apt-get install -y mysql-server && sudo apt-get install vim vim-runtime vim-gui-common -y && sudo apt-get install python-dev python3-dev -y && sudo apt-get install --reinstall libpython2.7-dev -y && sudo ldconfig && sudo apt install software-properties-common dirmngr gnupg-agent -y && sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys AD5F235DF639B041 && sudo echo 'deb http://ppa.launchpad.net/alessandro-strada/ppa/ubuntu xenial main' | sudo tee /etc/apt/sources.list.d/alessandro-strada-ubuntu-ppa.list >/dev/null && sudo apt-get update -y && sudo apt-get install google-drive-ocamlfuse -y && sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 68818C72E52529D4 && sudo echo "deb http://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list && sudo apt-get update && sudo apt-get install -y mongodb-org && git config --global core.autocrlf input && git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim && git config --global core.autocrlf input && sudo apt-get install fuse -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove && sudo apt-get clean && sudo apt-get autoclean && sudo fallocate -l 4G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile && sudo cp /etc/fstab /etc/fstab.bak && echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab && bash <(curl -s -S -L https://git.io/install-gam)


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
" set colorcolumn=92
set laststatus=2 

nnoremap <C-h> <C-W><C-W> 
let mapleader="g" 
inoremap <leader>g <C-x><C-o>   
inoremap ff <Esc> 
inoremap ( ()<Left>
inoremap ' ''<Left>
inoremap " ""<Left>
map Q :qa<CR>
map W :Vex<CR> 
map E <C-f>  
map R <C-b>
map df :bd<cr>
map B :vert term<CR>
map T <C-z>
map S :s/\<\>//g<left><left><left><left><left>
map ; :normal A; <cr>:normal o<cr> 
map  cc :s/^/\/\/ /g<CR>:let @/ = ""<CR>
map  vv :s/^\/\/ //g<CR>:let @/ = ""<CR> 

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
set noshowmode
```
## INSTALL VIMPROC
After you save the .vimrc file, you must go out and then go back in and then run :PluginInstall. Then go out and run the following: cd ~/.vim/bundle/vimproc.vim && sudo make && cd ~

## KEYBOARD COMBOS FOR VIM
```
IN EDIT MODE      
a = start adding text AFTER cursor (use instead of i)      
alt j or alt k will escape edit mode
ctrl p is autocomplete. 
ctrl xn specific autocomplete.  
ctrl xk dictionary. 
ctrl xf search and add files after /. 
ctrl f next page.  
ctrl b previous page.  

IN NON-EDIT MODE
:Vex file browswer
    I have this mapped to shift W
ctrl h will switch back and forth from the editor    
shift ZZ to close the file browser
:vs path/to/file.txt to open a file directly

TERMINAL
pause Vim with Ctrl + Z, (I have mapped this to shift T)
play in the terminal,
then return to exactly where you left with Vim by just typing the command fg.

or

:vert term (opens terminal on the side)
finish working, then write exit in terminal 
:bd + enter to close the buffer (I have this mapped to df + enter)


v = select lines

dd = delete the line where the cursor is at.  
number + dd will delete that many lines. 
dd and then move to another spot and then p to paste the line deleted.  
x = delete a letter at a time. 
dw = delete a word. 
d$ = to delete to end of line. 
shift d = delete all from cursor to end of line. 

u = undo what you just did 
ctrl r = redo things
shift u = undo what was done to the line

gg  or  H = beginning
G or L  = end
number plus G will take you to that line

0 = beginning of line
$ = end of line

j = move down one line
k = move up one line
number before j or k will move that many lines in that direccion

e = jumps forward
w = jumps forward by words
b = jumps backwards by words

{ = jumps up by sections or paragraphs
} = jumps down by sections or paragraphs

Ctrl-D  move half-page down
Ctrl-U  move half-page up

% jumps from one bracket to another

TO COPY AND PASTE
To select a line first shift v, then y, then move to the new line, and then p
If you want just letters, just use v instead of shift v

TO COPY AND PASTE BETWEEN DOCUMENTS
select the text with visual
"*y (or "+y) to copy the text
"*p (or "+p) to paste the text

TO SEARCH AND REPLACE:
select the lines first
:s/changefrom/changeto/g

TO FIND WORDS
put the cursor on the word you want to find and then type the * 
and then it will bring you to those words in the text, or to just find something, 
in non-edit mode put  / and the word, and then press the letter n to keep searching
```


## INSTALL GOOGLE DRIVE IN VIM
1. In APIs, Install Drive API in project and Create Credentials (OAuth client ID)
2. Choose "Other" and put product name, e.g "My OCAMLDrive".
3. Click "Create". You will get a Client ID, a Client Secret.
4. google-drive-ocamlfuse -headless -label me -id "ID" -secret "ID"
5. mkdir ~/gdrive && google-drive-ocamlfuse -label me ~/gdrive

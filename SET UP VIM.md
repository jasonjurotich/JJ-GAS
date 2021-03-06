## VIM OLD
vim .vimrc

```
if empty(glob('~/.vim/autoload/plug.vim'))
  silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

call plug#begin('~/.vim/plugged')
Plug 'terryma/vim-multiple-cursors'
Plug '907th/vim-auto-save'
Plug 'chrisbra/csv.vim'
Plug 'Townk/vim-autoclose'
Plug 'Quramy/tsuquyomi'
Plug 'Shougo/vimproc.vim'
Plug 'itchyny/lightline.vim'
Plug 'tomasiser/vim-code-dark'
call plug#end()

filetype plugin indent off
set number    
set expandtab    
set tabstop=2    
set softtabstop=2    
set shiftwidth=2    
set textwidth=80    
set cursorline    
set laststatus=2    


set omnifunc=syntaxcomplete#Complete 
" To use omni completion, type <C-X><C-O> while open in Insert mode. If matching names are found, a pop-up menu opens which can be navigated using the <C-N> and <C-P> keys.

set splitright 

nnoremap L <C-W><C-W>
nnoremap H <C-W><C-H>
tnoremap dk <C-W>w

inoremap ff <Esc>
inoremap ( ()<Left>
inoremap ' ''<Left>
inoremap " ""<Left> 

map ft :bprev<CR>
map fe :bnext<CR>
map fd :tabnew 

map Q :qa<CR>
map W :Vex<CR>
map E <C-d>
map R <C-u> 
map c <C-f>
map x <C-b> 
map B :vert term<CR>
map K :below term<CR>
map ss ZZ
map F :vert res 50<CR>
map M <C-z>
map S :s/\<\>//g<left><left><left><left><left>
map ee :s/^/# /g<CR>:let @/ = ""<CR>
map rr :s/^# //g<CR>:let @/ = ""<CR>
map vs :vs 

let g:netrw_banner = 0
let g:netrw_liststyle = 3
let g:netrw_browse_split = 4
let g:netrw_winsize = 25
let g:netrw_altv = 1
let g:auto_save = 1
let g:auto_save_silent = 1
let g:auto_save_events = ["InsertLeave","TextChanged","TextChangedI"]
let g:tsuquyomi_disable_quickfix = 1
let g:ycm_autoclose_preview_window_after_completion = 1

colorscheme codedark
hi Normal guibg=NONE ctermbg=NONE
hi LineNr guibg=NONE ctermbg=NONE
hi EndOfBuffer guibg=NONE ctermbg=NONE
hi NonText guibg=NONE ctermbg=NONE
hi CursorLine ctermbg=NONE
hi Pmenu guifg=NONE ctermbg=NONE

ru macros/justify.vim
set bs=2
set noshowmode

" map cc :s/^/\/\/ /g<CR>:let @/ = ""<CR>
" map vv :s/^\/\/ //g<CR>:let @/ = ""<CR> 
" map ; :normal A;<cr>a<cr>

```




## INSTALL YOUCOMPLETEME
- After you save the .vimrc file, you must go out and then go back in and then run :PluginInstall. Then go out and run the following: cd ~/.vim/bundle/YouCompleteMe && python3 install.py --ts-completer && cd ~
- If you need to program in C or C++ you need to follow the instructions here: https://github.com/Valloric/YouCompleteMe#linux-64-bit.
- On the server with little memory, you may have to uninstall and reinstall (PluginInstall and PluginUdate) a couple of times until it registers that YouCompleteMe is there.

- if config does not allow you to write, then in the home folder put sudo chown -R $(whoami) .config

## KEYBOARD COMBOS FOR VIM
```
FOR FILES

FOR 2 SPACE TAB IN PYHON, COMMENT OUT THE FILETYPE PLUGIN INDENT ON AND LEAVE FILETYPE ON

vim -O (then the two files) will open them in two vertical buffers
vim -p (then the two files) will open them in two tabs
gt and gT will move between tabs

IN EDIT MODE      
a = start adding text AFTER cursor (use instead of i)      
alt j or alt k will escape edit mode
ctrl p is autocomplete. 
ctrl xn specific autocomplete.  
ctrl xk dictionary. 
ctrl xf search and add files after /. 
ctrl f next page.  
ctrl b previous page.  

(Many of these I have remapped, please see the changes in the .vimrc file above)

IN NON-EDIT MODE
:Vex vertical file browswer
(I have this mapped to shift W)
    
ctrl h will switch back and forth from the editor

shift ZZ to close the file browser (or any open buffer)

:vs path/to/file.txt to open a new file to the right of another one. I have this mapped to just vs

:on in the file you want to see and close the one on the right or below.

:sp path/to/file.txt to open a new file below the other one.

TERMINAL
pause Vim with Ctrl + Z, (I have mapped this to shift T)
play in the terminal,
then return to exactly where you left with Vim by just typing the command fg.

or

:vert term (opens terminal on the side)
finish working, then write exit in terminal 
:bd + enter to close the buffer (I have this mapped to df + enter)

(I have this mapped to Shift B)
** To switch from the terminal to the file it is Ctrl W then w, but I have this mapped to Ctrl U. 
** You use the mapped Ctrl H to go back to the terminal. 

v = select lines

after selecting lines < will shift all left or > will shift them right
a . after indenting once will continue to indent the lines

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

gg  or  Shift H = beginning
Shift G or L  = end
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
(I have these mapped)


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

NEW COMMANDS CREATED WITH VIMRC FILE
in EDIT mode
ff to escape
in NORMAL mode
Shift Q to save and close
Shift E to go down half a page
Shift R to go up half a page
Shift B to open vertical terminal
Shift S to advanced search
Shift T to suspend vim and go to terminal
fg to return to vim
Shift W to open vertical file explorer
Shift H to go from file explorer to file and back
Shift ZZ to close file explorer or buffer (I HAVE THIS MAPPED TO ss)
df to :bd<cr> to close vertical explorer or buffer
cc to comment out lines for javascript
vv to uncomment lines for javascript
ee to comment out lines for python
rr to uncomment lines for python

; to add a semicolon at the end of a line
( to put () and the cursor in the middle
' to put '' and the cursor in the middle
" to put "" and the cursor in the middle
```


## INSTALL GOOGLE DRIVE IN VIM
1. In APIs, Install Drive API in project and Create Credentials (OAuth client ID)
2. Choose "Other" and put product name, e.g "My OCAMLDrive".
3. Click "Create". You will get a Client ID, a Client Secret.
4. google-drive-ocamlfuse -headless -label me -id "ID" -secret "ID"
5. mkdir ~/gdrive && google-drive-ocamlfuse -label me ~/gdrive



## SET UP GIT

1. git config --global user.email "EMAIL" && git config --global user.name "NAME"
2. git clone https://github.com/USERNAME/REPOSITORY.git 
3. git config --global credential.helper store && git push https://github.com/USERNAME/REPOSITORY.git
// It will ask for your username and password. If you have 2 step verification, you will have to create a token under developer settings.

ALL IN ONE
git config --global user.email "EMAIL" && git config --global user.name "NAME" && git clone https://github.com/USERNAME/REPOSITORY.git && cd ieducando && git config --global credential.helper store && git push https://github.com/USERNAME/REPOSITORY.git && cd ~

TO UPDATE GIT
- git add -A && git commit -m "updated" && git push -u origin master
//For the first time
- git add -A && git commit -m "updated" && git push
//For all other times
- git fetch --all && git reset --hard origin/master (to overide ALL in local with what is in GitHub)

## CREATE SHORTCUTS FOR LINUX
- alias df='git add -A && git commit -m "updated" && git push'  // this will create a shortcut. 

If you want to have this command available in every terminal you must add the aliases to the .bashrc file.

- vim .bashrc
- Shift g (to go to end of file)
- a (to edit)
- copy aliases (put each alias on a new line)
    - alias mo='mosh --ssh="ssh -i ~/.ssh/id_rsa" user@IP'
    - alias df='git add -A && git commit -m "updated" && git push'
    - alias dg='git pull origin master'  
- :wq
- source ~/.bashrc


## SET UP MOSH
- ssh-keygen -t rsa  //in local linux
- cat ~/.ssh/id_rsa.pub  //in local linux
- copy ssh keys into GSM by clicking on name of VM instance, then edit, then SSH keys.
- mosh --ssh="ssh -i ~/.ssh/id_rsa" LOCALUSER@PUBLICIPGSM


## SET UP CLASP
- clasp login --no-localhost
- clasp clone ID
- clasp pull
- clasp push

https://github.com/google/clasp


## FIND RSPOSITORIES
- grep -Ril "https://storage.googleapis.com/cros-packages/79" /
- sudo grep -iRl "https://storage.googleapis.com/cros-packages/79" /etc/ 
- put / after link if you are in the home directory to search from root folder.
- https://stackoverflow.com/questions/16956810/how-do-i-find-all-files-containing-specific-text-on-linux

## MAKE REPOSITORY TRUSTED
- [trusted=yes]
- deb [trusted=yes] http://ppa.launchpad.net/deadsnakes/ppa/ubuntu eoan main

## REMOVE FOLDER AND ALL SUB ELEMENTS
rm -rf

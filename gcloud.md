## GCLOUD CONFIG

First update and add necessary or useful packeages to Ubuntu:

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 04EE7237B7D453EC && sudo apt update -y && sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt update -y && sudo apt-get update -y && sudo apt-get install software-properties-common build-essential build-essential cmake git wget curl mosh vim mlocate postgresql nodejs npm rclone nginx gunicorn apt-transport-https python3-pip -y && pip3 install cryptography==2.5 psycopg2-binary asyncio asyncpg joblib scrapy selenium scrapy-selenium unicodedata2 requests-html beautifulsoup4 multiprocess httplib2 numpy google-api-python-client google_auth_oauthlib oauth2client google_spreadsheet pipenv virtualenv django flask gspread pandas gspread-dataframe aiogram python-telegram-bot && echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && sudo apt-get install apt-transport-https ca-certificates gnupg && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add - && sudo apt-get update && sudo apt-get install google-cloud-sdk && sudo apt-get install google-cloud-sdk-app-engine-python && sudo apt-get install google-cloud-sdk-app-engine-python-extras -y && sudo apt-get install google-cloud-sdk-app-engine-python && sudo apt-get install google-cloud-sdk-app-engine-python-extras -y 

gcloud init

- It will ask you to sign in. Open the link and then choose the account
- It will then ask you to choose or create a project, just click on ctrl + c to escape that. We will do it later.


To create a project, add APIs, add Firewall exceptions, create Service Accounts, create a VM Compute Instance and start AppEngine:

gcloud projects create PROJECTNAME && gcloud config set project PROJECTNAME && gcloud beta billing projects link PROJECTNAME --billing-account=ACCOUNTNUMBER && gcloud services enable admin.googleapis.com appengine.googleapis.com caldav.googleapis.com cloudapis.googleapis.com calendar-json.googleapis.com chat.googleapis.com classroom.googleapis.com compute.googleapis.com contacts.googleapis.com docs.googleapis.com drive.googleapis.com gmail.googleapis.com groupssettings.googleapis.com iam.googleapis.com iamcredentials.googleapis.com people.googleapis.com sheets.googleapis.com slides.googleapis.com && gcloud compute firewall-rules create FWNAME --allow tcp:5000 --direction=INGRESS && gcloud compute firewall-rules create FWNAME --allow tcp:5001 --direction=INGRESS && gcloud compute firewall-rules create FWNAME --allow udp:60000-61000 --direction=INGRESS && gcloud iam service-accounts create SANAME --description "does all" --display-name "SANAME" && gcloud iam service-accounts add-iam-policy-binding SANAME@PROJECTNAME.iam.gserviceaccount.com --member 'user:ADMINEMAIL' --role 'roles/owner' && gcloud iam service-accounts add-iam-policy-binding SANAME@PROJECTNAME.iam.gserviceaccount.com --member 'user:ADMINEMAIL' --role 'roles/iam.serviceAccountUser' && gcloud compute instances create "VMINAME" --boot-disk-device-name "VMINAME" --zone "us-central1-f" --machine-type "f1-micro" --image-project ubuntu-os-cloud --image-family ubuntu-1910 --boot-disk-size "30" --boot-disk-type "pd-standard" --maintenance-policy "MIGRATE" --tags http-server,https-server --scopes cloud-platform && gcloud app create --project=PROJECTNAME --region=us-central

You must do the following afterwords in GCP:

- Add http/https to firewall permissions in in the Compute Engine.
- Addo Domain-wide-delegation to the service accounts.
- Add the SCOPES below in the Admin console to the Service Account
- Add the ssh keys (gcloud has a way, but there is a bug and does not work yet)


## SCOPES FOR ADMIN CONSOLE: 
https://mail.google.com/,https://www.google.com/calendar/feeds,https://www.googleapis.com/auth/activity,https://www.googleapis.com/auth/admin.datatransfer,https://www.googleapis.com/auth/admin.directory.customer,https://www.googleapis.com/auth/admin.directory.device.chromeos,https://www.googleapis.com/auth/admin.directory.device.mobile.action,https://www.googleapis.com/auth/admin.directory.device.mobile,https://www.googleapis.com/auth/admin.directory.domain,https://www.googleapis.com/auth/admin.directory.group.member,https://www.googleapis.com/auth/admin.directory.group,https://www.googleapis.com/auth/admin.directory.notifications,https://www.googleapis.com/auth/admin.directory.orgunit,https://www.googleapis.com/auth/admin.directory.resource.calendar,https://www.googleapis.com/auth/admin.directory.rolemanagement,https://www.googleapis.com/auth/admin.directory.user.alias,https://www.googleapis.com/auth/admin.directory.user.security,https://www.googleapis.com/auth/admin.directory.user,https://www.googleapis.com/auth/apps.groups.settings,https://www.googleapis.com/auth/calendar,https://www.googleapis.com/auth/chat.bot,https://www.googleapis.com/auth/classroom.announcements,https://www.googleapis.com/auth/classroom.courses,https://www.googleapis.com/auth/classroom.coursework.me,https://www.googleapis.com/auth/classroom.coursework.students,https://www.googleapis.com/auth/classroom.guardianlinks.students,https://www.googleapis.com/auth/classroom.profile.emails,https://www.googleapis.com/auth/classroom.profile.photos,https://www.googleapis.com/auth/classroom.push-notifications,https://www.googleapis.com/auth/classroom.rosters,https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/compute,https://www.googleapis.com/auth/devstorage.full_control,https://www.googleapis.com/auth/documents,https://www.googleapis.com/auth/drive.appdata,https://www.googleapis.com/auth/drive.file,https://www.googleapis.com/auth/drive.metadata,https://www.googleapis.com/auth/drive.scripts,https://www.googleapis.com/auth/drive,https://www.googleapis.com/auth/appengine.admin,https://www.googleapis.com/auth/forms,https://www.googleapis.com/auth/groups,https://www.googleapis.com/auth/presentations,https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/script.scriptapp,https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/script.projects,https://spreadsheets.google.com/feeds










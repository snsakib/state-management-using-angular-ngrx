FROM ubuntu:20.04

RUN apt update &&\
	apt install -y curl git &&\
	curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh &&\
	bash nodesource_setup.sh &&\
	apt install -y nodejs &&\
  npm install -g @angular/cli


RUN	git clone https://github.com/snsakib/state-management-using-angular-ngrx.git &&\
	cd state-management-using-angular-ngrx && npm run build
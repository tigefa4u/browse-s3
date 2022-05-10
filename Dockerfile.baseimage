FROM phusion/baseimage:focal-1.2.0

ENV DEBIAN_FRONTEND="noninteractive" DEBCONF_NONINTERACTIVE_SEEN="true" TZ="Asia/Jakarta"

RUN apt-get update && \
		apt-get -y install tzdata curl && \
		ln -fs /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && dpkg-reconfigure -f noninteractive tzdata && \
		apt-get install -y apt-utils sudo && \
		apt-get update && apt-get dist-upgrade -y && \
		curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
		apt-get install -y nodejs

COPY . /app
WORKDIR /app

RUN npm install -g npm && npm install && npm run build

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /root/.cache /root/.config /root/.npm
EXPOSE 7776
ENTRYPOINT ["npm","run", "start"]

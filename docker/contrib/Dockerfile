# syntax=docker/dockerfile:1
#FROM registry.hub.docker.com/library/centos:8.3.2011
FROM quay.io/centos/centos:stream8
WORKDIR /root
RUN dnf -y update && \
dnf -y install \
vim \
nano \
numactl \
util-linux \
sudo \
git && \
echo 'Defaults    env_keep += "HTTPS_PROXY https_proxy HTTP_PROXY http_proxy NO_PROXY no_proxy"' >> /etc/sudoers
COPY . /root/CacheLib
RUN cd /root/CacheLib && ./contrib/build.sh -d -j -v
# remove build files
RUN rm -rf /root/CacheLib/build-*
ENV PATH="/root/CacheLib/opt/cachelib/bin:$PATH"

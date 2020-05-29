#!/usr/bin/env sh
# 命令： sh deploy.sh 在 git 里运行即可
# 当发生错误时中止脚本
set -e



git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:cgy-cir/vwzry.git master:gh-pages
cd -
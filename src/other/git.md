---
title: GIT奇技淫巧
icon: git
order: 1
author: Amos
date: 2022-07-10
category:
  - 奇技淫巧
  - git
tag:
  - git
---

git 奇技淫巧,总结 git 使用中的一些方便的语法，或存在的坑。

<!-- more -->

## git 远程仓库相关操作

### 获取所有分支

通过命令获取远程仓库所有分支

```sh
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

---

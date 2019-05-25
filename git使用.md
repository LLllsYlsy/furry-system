# git 上传

获取库的https码

然后右键要上传的文件夹

git clone "获取的https码"

将仓库下载到本地

然后将要上传的文件放入新来的文件夹内

然后进入文件夹

cd "新来的文件夹名"

git add . （.不能忘了，是将新来的文件夹下的文件添加进来)

git commit -m "提交信息" (提交信息改成自己要的)

git push -u origin master (将本地仓库上传到girhub上，此步骤要输入账号密码)

# git 删除 

1.删除远程文件夹，本地保留

git rm --cache -r "文件夹名"  （找到文件）

git commit -m "remove directory from remote repository" （确认文件内容）

git push （确定删除)
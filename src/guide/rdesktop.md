rdesktop <ip> -r clipboard:PRIMARYCLIPBOARD -r disk:abc=/home/xxx/test/
-r clipboard:PRIMARYCLIPBOARD 是允许共享剪切板.
-r disk:abc=/home/xxx/test/这个是将'/home/xxx/test'这个文件夹映射到'abc'这个目录下.
连接上之后,可以通过将文件复制粘贴到'abc'文件夹内,来实现文件的转移

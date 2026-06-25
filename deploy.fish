rm -rf server.tar.gz
cd wh-40k
bun run build --production
cd ..
tar -czvf server.tar.gz ./wh-40k/.output/
scp server.tar.gz root@opiliper.dedyn.io:~/server.tar.gz
ssh root@opiliper.dedyn.io -v "tar -xvf server.tar.gz; tmux send-keys C-C; tmux send-keys 'bun run wh-40k/.output/server/index.mjs'; tmux send-keys C-m;"